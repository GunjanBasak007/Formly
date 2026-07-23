import { z } from "zod";

export const listFormsWithResponseStatsInput = z.object({
    userId: z.string().uuid().describe("UUID of the user"),
});

export type ListFormsWithResponseStatsInputType =
    z.infer<typeof listFormsWithResponseStatsInput>;

export const listResponsesInput = z.object({
    userId: z.string().uuid().describe("User Id of the owner"),
    formId: z.string().uuid().describe("UUID of the form"),
});

export type ListResponsesInputType =
    z.infer<typeof listResponsesInput>;

export const getResponseInput = z.object({
     userId: z.string().uuid().describe("UUID of the owner"),
    responseId: z.string().uuid().describe("UUID of the response"),
});

export type GetResponseInputType =
    z.infer<typeof getResponseInput>;