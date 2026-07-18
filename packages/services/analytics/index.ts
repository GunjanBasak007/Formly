import db, { count, eq, sql } from "@repo/database";

import { formsTable } from "@repo/database/models/form";
import { formSubmissionTable } from "@repo/database/models/form-submission";

export const analyticsService = {
  async getDashboardStats({
    userId,
  }: {
    userId: string;
  }) {
    
    // Total forms created by this user
    const formsCount = await db
      .select({
        totalForms: count(),
      })
      .from(formsTable)
      .where(eq(formsTable.createdBy, userId));

    const totalForms = formsCount[0]?.totalForms ?? 0;

    const viewsResult = await db
  .select({
    totalViews: sql<number>`COALESCE(SUM(${formsTable.views}), 0)`,
  })
  .from(formsTable)
  .where(eq(formsTable.createdBy, userId));

  const totalViews = Number(viewsResult[0]?.totalViews ?? 0);

  // Published forms
const publishedCount = await db
  .select({
    total: count(),
  })
  .from(formsTable)
  .where(
    sql`${formsTable.createdBy} = ${userId} AND ${formsTable.isPublished} = true`
  );

const publishedForms = publishedCount[0]?.total ?? 0;

// Draft forms
const draftCount = await db
  .select({
    total: count(),
  })
  .from(formsTable)
  .where(
    sql`${formsTable.createdBy} = ${userId} AND ${formsTable.isPublished} = false`
  );

const draftForms = draftCount[0]?.total ?? 0;

    // Total submissions received on this user's forms
    const responsesCount = await db
      .select({
        totalResponses: count(),
      })
      .from(formSubmissionTable)
      .innerJoin(
        formsTable,
        eq(formSubmissionTable.formId, formsTable.id)
      )
      .where(eq(formsTable.createdBy, userId));

    const totalResponses = responsesCount[0]?.totalResponses ?? 0;
    const responseRate =
    totalViews === 0
    ? 0
    : Number(((totalResponses / totalViews) * 100).toFixed(1));


      return {
      totalForms,
      publishedForms,
      draftForms,
      totalResponses,
      totalViews,
      responseRate,
    };
  },
};