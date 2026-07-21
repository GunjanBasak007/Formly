"use client";

import { StatsGrid } from "~/components/analytics/stats-grid";
import { Charts } from "~/components/analytics/charts";
import { useGetDashboardStats,
         useGetResponsesOverTime,
        useGetViewsOverTime,
    } from "~/hooks/api/analytics";

export default function AnalyticsPage() {
  const { analytics, isLoading } = useGetDashboardStats();

  const {
  responsesOverTime,
  isLoading: isLoadingResponses,
} = useGetResponsesOverTime();

  const {
  viewsOverTime,
  isLoading: isLoadingViews,
} = useGetViewsOverTime();

console.log(responsesOverTime);

  if (isLoading ||
     isLoadingResponses ||
     isLoadingViews ||
     !analytics) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          View your form performance
        </p>
      </div>

      <StatsGrid
        totalForms={analytics.totalForms}
        publishedForms={analytics.publishedForms}
        draftForms={analytics.draftForms}
        totalResponses={analytics.totalResponses}
        totalViews={analytics.totalViews}
        responseRate={analytics.responseRate}
      />

      <Charts
        responsesOverTime={responsesOverTime ?? []}
        viewsOverTime={viewsOverTime ?? []}
      />
    </div>
  );
}