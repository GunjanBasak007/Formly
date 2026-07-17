import { authenticatedProcedure, router } from "../../trpc";
import { generatePath } from "../../utils/path-generator";
import { analyticsService } from "../../services";

import {
  getDashboardStatsInputModel,
  getDashboardStatsOutputModel,
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
});