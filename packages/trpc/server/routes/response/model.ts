import { z } from "zod";

export const listFormsWithResponseStatsInputModel = z.object({});

export const listFormsWithResponseStatsOutputModel = z.array(
    z.object({
        id: z.string().uuid(),
        title: z.string(),
        responseCount: z.number(),
        lastSubmissionAt: z.date().nullable(),
    })
);

export const listResponsesInputModel = z.object({
    formId: z.string().uuid(),
});

export const listResponsesOutputModel = z.array(
    z.object({
        id: z.string().uuid(),
        submittedAt: z.date().nullable(),
    })
);

export const getResponseInputModel = z.object({
    responseId: z.string().uuid(),
});

const formSubmissionValueModel = z.object({
    formFieldId: z.string().uuid(),
    value: z.string(),
});

export const getResponseOutputModel = z.object({
    id: z.string().uuid(),
    submittedAt: z.date().nullable(),
    values: z.array(formSubmissionValueModel).nullable(),
});

