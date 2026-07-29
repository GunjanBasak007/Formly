"use client";

import { useGetDashboardStats } from "~/hooks/api/analytics";

import { DashboardHeader } from "./dashboard-header";
import { DashboardRecentForms } from "./dashboard-recent-forms";
import { DashboardRecentResponses } from "./dashboard-recent-responses";
import { DashboardStats } from "./dashboard-stats";

export function Dashboard() {
  const { analytics, isLoading } = useGetDashboardStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-12">
      <DashboardHeader />

      <DashboardStats
        stats={{
          totalForms: analytics?.totalForms ?? 0,
          responses: analytics?.totalResponses ?? 0,
          published: analytics?.publishedForms ?? 0,
          drafts: analytics?.draftForms ?? 0,
        }}
      />

      <DashboardRecentForms />

      <DashboardRecentResponses />
    </div>
  );
}