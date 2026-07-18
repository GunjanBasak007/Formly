import { db, eq, asc, sql } from '@repo/database'
import { formsTable } from '@repo/database/models/form'
import { formFieldsTable } from '@repo/database/models/form-field'
import { type CreateFormInputType,
        createFormInput,
        type ListFormsByUserIdInputType,
        listFormsByUserIdInput,
        type GetFormByIdInputType,
        getFormByIdInput,
        type UpdatePublishStatusInputType,
        updatePublishStatusInput,
        UpdateFieldOrderInputType,
        updateFieldOrderInput
     } from './model'

class FormService {

    public async createForm(payload: CreateFormInputType) {
        const { title, description, createdBy } = await createFormInput.parseAsync(payload)

        const result = await db.insert(formsTable).values({ title, description, createdBy }).returning({
            id: formsTable.id,
        })

        if (!result || result.length === 0 || !result[0]?.id) throw new Error(`Something went wrong while creating the form`)

        return { id: result[0].id }
    }

    public async listFormsByUserId(payload: ListFormsByUserIdInputType) {
        const { userId } = await listFormsByUserIdInput.parseAsync(payload)

        const forms = await db.select({
            id: formsTable.id,
            title: formsTable.title,
            description: formsTable.description,
            isPublished: formsTable.isPublished,
            createdAt: formsTable.createdAt,
            updatedAt: formsTable.updatedAt,
        }).from(formsTable).where(eq(formsTable.createdBy, userId))

        return forms
    }

    public async getFormById(payload: GetFormByIdInputType) {
        const { formId } = await getFormByIdInput.parseAsync(payload)
        await db
        .update(formsTable)
        .set({
            views: sql`${formsTable.views} + 1`,
        })
        .where(eq(formsTable.id, formId));

        const rows = await db
            .select({
                    id: formsTable.id,
                    title: formsTable.title,
                    description: formsTable.description,
                    views: formsTable.views,
                    isPublished: formsTable.isPublished,
                    createdAt: formsTable.createdAt,
                    updatedAt: formsTable.updatedAt,
                field: {
                    id: formFieldsTable.id,
                    label: formFieldsTable.label,
                    labelKey: formFieldsTable.labelKey,
                    type: formFieldsTable.type,
                    description: formFieldsTable.description,
                    placeholder: formFieldsTable.placeholder,
                    isRequired: formFieldsTable.isRequired,
                    index: formFieldsTable.index,
                },
            })
            .from(formsTable)
            .leftJoin(formFieldsTable, eq(formFieldsTable.formId, formsTable.id))
            .where(eq(formsTable.id, formId))
            .orderBy(asc(formFieldsTable.index))

        if (rows.length === 0) return null

        const {
            id,
            title,
            description,
            views,
            isPublished,
            createdAt,
            updatedAt,
        } = rows[0]!

        const fields = rows
            .filter(r => r.field?.id !== null)
            .map(r => r.field as NonNullable<typeof r.field>)

        return { id, title, description, views, isPublished, createdAt, updatedAt, fields }
    }

    public async updatePublishStatus(
        payload: UpdatePublishStatusInputType
    ) {
        const { formId, isPublished } =
        await updatePublishStatusInput.parseAsync(payload);

        const result = await db
        .update(formsTable)
        .set({
        isPublished,
    })
        .where(eq(formsTable.id, formId))
        .returning({
        id: formsTable.id,
    });

        if (result.length === 0) {
        throw new Error("Form not found");
    }

        return {
            success: true,
            message: isPublished
            ? "Form published successfully"
            : "Form unpublished successfully",
  };
}
        public async getPublishedFormById(
            payload: GetFormByIdInputType
        ) {
            const form = await this.getFormById(payload);

            if (!form) {
                return null;
            }

            if (!form.isPublished) {
                return null;
            }

            return form;
        }

        public async updateFieldOrder(
        payload: UpdateFieldOrderInputType
        ) {
        const { fields } = await updateFieldOrderInput.parseAsync(payload);
        await db.transaction(async (tx) => {
            for (const field of fields) {
                await tx
                .update(formFieldsTable)
                .set({ index: field.index })
                .where(eq(formFieldsTable.id, field.id));
            }   
        });
    }
}

export default FormService
