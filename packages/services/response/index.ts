import {
    db,
    eq,
    count,
    max,
    and,
} from "@repo/database";

import { formsTable } from "@repo/database/models/form";
import { formSubmissionTable } from "@repo/database/models/form-submission";
import {
    type ListFormsWithResponseStatsInputType,
    listFormsWithResponseStatsInput,

    type ListResponsesInputType,
    listResponsesInput,

    type GetResponseInputType,
    getResponseInput,
} from "./model";

class ResponseService {
    public async listFormsWithResponseStats(
    payload: ListFormsWithResponseStatsInputType
    ) {
        const { userId } =
            await listFormsWithResponseStatsInput.parseAsync(payload);

        const forms = await db
            .select({
                id: formsTable.id,
                title: formsTable.title,
                responseCount: count(formSubmissionTable.id),
                lastSubmissionAt: max(formSubmissionTable.createdAt),
            })
            .from(formsTable)
            .leftJoin(
                formSubmissionTable,
                eq(formSubmissionTable.formId, formsTable.id)
        )
        .where(eq(formsTable.createdBy, userId))
        .groupBy(
            formsTable.id,
            formsTable.title
    );
    return forms;
}

    public async listResponses(
    payload: ListResponsesInputType
) {
    const { formId,userId } = await listResponsesInput.parseAsync(payload);
    const form = await db
    .select({
        id: formsTable.id,
    })
    .from(formsTable)
    .where(
        and(
            eq(formsTable.id, formId),
            eq(formsTable.createdBy, userId)
        )
    );

    if (form.length === 0) {
    throw new Error("Form not found or access denied");
    }

    const responses = await db
        .select({
            id: formSubmissionTable.id,
            submittedAt: formSubmissionTable.createdAt,
        })
        .from(formSubmissionTable)
        .where(
            eq(formSubmissionTable.formId, formId)
        );
    

    return responses;
}

    public async getResponse(
    payload: GetResponseInputType
) {
    const { userId, responseId } =
        await getResponseInput.parseAsync(payload);

    const result = await db
        .select({
            id: formSubmissionTable.id,
            submittedAt: formSubmissionTable.createdAt,
            values: formSubmissionTable.values,
            formId: formSubmissionTable.formId,
        })
        .from(formSubmissionTable)
        .where(
            eq(formSubmissionTable.id, responseId)
        );

    const response = result[0];

    if (!response) {
        throw new Error("Response not found");
    }

    const formId = response.formId;

    if (!formId) {
        throw new Error("Response is not associated with a form");
    }

    const form = await db
        .select({
            id: formsTable.id,
        })
        .from(formsTable)
        .where(
            and(
                eq(formsTable.id, formId),
                eq(formsTable.createdBy, userId)
            )
        );

    if (form.length === 0) {
        throw new Error("Access denied");
    }

    return {
        id: response.id,
        submittedAt: response.submittedAt,
        values: response.values,
    };
}
}

export default ResponseService;