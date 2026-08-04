"use client";

import { SiteHeader } from "~/components/site-header";
import { StatsGrid } from "~/components/analytics/stats-grid";
import { Charts } from "~/components/analytics/charts";
import {
  useGetDashboardStats,
  useGetResponsesOverTime,
  useGetViewsOverTime,
} from "~/hooks/api/analytics";

export default function AnalyticsPage() {
  const { analytics, isLoading } = useGetDashboardStats();

  const { responsesOverTime, isLoading: isLoadingResponses } = useGetResponsesOverTime();

  const { viewsOverTime, isLoading: isLoadingViews } = useGetViewsOverTime();

  if (isLoading || isLoadingResponses || isLoadingViews || !analytics) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg font-medium text-muted-foreground animate-pulse">
          Loading analytics...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 px-6 pt-6">
        <SiteHeader title="Analytics" description="View your form performance" />

        <div className="h-1 w-28 rounded-full bg-linear-to-r from-violet-600 via-indigo-600 to-cyan-500" />
      </div>

      <div className="space-y-10 px-6 pb-6">
        <StatsGrid
          totalForms={analytics.totalForms}
          publishedForms={analytics.publishedForms}
          draftForms={analytics.draftForms}
          totalResponses={analytics.totalResponses}
          totalViews={analytics.totalViews}
          responseRate={analytics.responseRate}
        />

        <Charts responsesOverTime={responsesOverTime ?? []} viewsOverTime={viewsOverTime ?? []} />
      </div>
    </>
  );
}
