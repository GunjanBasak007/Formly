import { authenticatedProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";
import { analyticsService } from "../../services";

import {
  getDashboardStatsInputModel,
  getDashboardStatsOutputModel,
  getResponsesOverTimeInputModel,
  getResponsesOverTimeOutputModel,
  getViewsOverTimeInputModel,
  getViewsOverTimeOutputModel,
} from "./model";

const TAGS = ["Analytics"];
const getPath = generatePath("/analytics");

export const analyticsRouter = router({
  getDashboardStats: authenticatedProcedure
    .meta({
      openapi: {
        method: "GET",
        path: getPath("/getDashboardStats"),
        tags: TAGS,
        protect: true,
      },
    })
    .input(getDashboardStatsInputModel)
    .output(getDashboardStatsOutputModel)
    .query(async ({ ctx }) => {
      return analyticsService.getDashboardStats({
        userId: ctx.user.id,
      });
    }),

  getResponsesOverTime: authenticatedProcedure
  .meta({
    openapi: {
      method: "GET",
      path: getPath("/getResponsesOverTime"),
      tags: TAGS,
      protect: true,
    },
  })
  .input(getResponsesOverTimeInputModel)
  .output(getResponsesOverTimeOutputModel)
  .query(async ({ ctx }) => {
    return analyticsService.getResponsesOverTime({
      userId: ctx.user.id,
    });
  }),

  getViewsOverTime: authenticatedProcedure
  .meta({
    openapi: {
      method: "GET",
      path: getPath("/getViewsOverTime"),
      tags: TAGS,
      protect: true,
    },
  })
  .input(getViewsOverTimeInputModel)
  .output(getViewsOverTimeOutputModel)
  .query(async ({ ctx }) => {
    return analyticsService.getViewsOverTime({
      userId: ctx.user.id,
    });
  }),
});