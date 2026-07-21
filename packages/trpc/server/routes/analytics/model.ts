import { z } from "zod";

//For dashboard stats
export const getDashboardStatsInputModel = z.undefined();

export const getDashboardStatsOutputModel = z.object({
  totalForms: z.number(),
  publishedForms: z.number(),
  draftForms: z.number(),
  totalResponses: z.number(),
  totalViews: z.number(),
  responseRate: z.number(),
});


//For response over time feature
export const getResponsesOverTimeInputModel = z.undefined();

export const getResponsesOverTimeOutputModel = z.array(
  z.object({
    date: z.string(),
    responses: z.number(),
  })
);


// Views Over Time
export const getViewsOverTimeInputModel = z.undefined();

export const getViewsOverTimeOutputModel = z.array(
  z.object({
    date: z.string(),
    views: z.number(),
  })
);