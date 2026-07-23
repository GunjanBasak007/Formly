import { authenticatedProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";
import { responseService } from "../../services";

import {
    listFormsWithResponseStatsInputModel,
    listFormsWithResponseStatsOutputModel,
    listResponsesInputModel,
    listResponsesOutputModel,
    getResponseInputModel,
    getResponseOutputModel,
} from "./model";

const TAGS = ["Response"];
const getPath = generatePath("/response");

export const responseRouter = router({
    listFormsWithResponseStats: authenticatedProcedure
        .meta({
            openapi: {
                method: "GET",
                path: getPath("/listFormsWithResponseStats"),
                tags: TAGS,
                protect: true,
            },
        })
        .input(listFormsWithResponseStatsInputModel)
        .output(listFormsWithResponseStatsOutputModel)
        .query(async ({ ctx }) => {
            return responseService.listFormsWithResponseStats({
                userId: ctx.user.id,
            });
        }),

    listResponses: authenticatedProcedure
        .meta({
            openapi: {
                method: "GET",
                path: getPath("/listResponses"),
                tags: TAGS,
                protect: true,
            },
        })
        .input(listResponsesInputModel)
        .output(listResponsesOutputModel)
        .query(async ({ ctx,input }) => {
            return responseService.listResponses({
                userId: ctx.user.id,
                formId: input.formId,
            });
        }),

    getResponse: authenticatedProcedure
        .meta({
            openapi: {
                method: "GET",
                path: getPath("/getResponse"),
                tags: TAGS,
                protect: true,
            },
        })
        .input(getResponseInputModel)
        .output(getResponseOutputModel)
        .query(async ({ ctx, input }) => {
            return responseService.getResponse({
                userId: ctx.user.id,
                responseId: input.responseId,
            });
        }),
});