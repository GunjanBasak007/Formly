import { z } from "zod";

export const getDashboardStatsInputModel = z.undefined();

export const getDashboardStatsOutputModel = z.object({
  totalForms: z.number(),
  publishedForms: z.number(),
  draftForms: z.number(),
  totalResponses: z.number(),
  totalViews: z.number(),
  responseRate: z.number(),
});