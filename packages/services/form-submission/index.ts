import { db, eq, desc } from '@repo/database'
import { formSubmissionTable } from '@repo/database/models/form-submission'
import { type SubmitFormInputType, submitFormInput, type GetFormSubmissionsInputType, getFormSubmissionsInput } from './model'
import { formsTable } from "@repo/database/models/form";

class FormSubmissionService {

    public async submitForm(payload: SubmitFormInputType) {
    const { formId, values } = await submitFormInput.parseAsync(payload);

    const forms = await db
    .select({
        id: formsTable.id,
        isPublished: formsTable.isPublished,
    })
    .from(formsTable)
    .where(eq(formsTable.id, formId));

    if (forms.length === 0) {
    throw new Error("Form not found");
}

    const form = forms[0]!;


    if (!form.isPublished) {
        throw new Error("This form is not published.");
    }

    const result = await db
        .insert(formSubmissionTable)
        .values({ formId, values })
        .returning({
            id: formSubmissionTable.id,
        });

    if (!result || result.length === 0 || !result[0]?.id) {
        throw new Error("Something went wrong while saving your submission");
    }

    return {
        id: result[0].id,
    };
}

    public async getFormSubmissions(payload: GetFormSubmissionsInputType) {
        const { formId } = await getFormSubmissionsInput.parseAsync(payload)

        return await db
            .select({
                id: formSubmissionTable.id,
                values: formSubmissionTable.values,
                createdAt: formSubmissionTable.createdAt,
            })
            .from(formSubmissionTable)
            .where(eq(formSubmissionTable.formId, formId))
            .orderBy(desc(formSubmissionTable.createdAt))
    }

}

export default FormSubmissionService
