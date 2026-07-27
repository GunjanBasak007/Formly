import { DashboardHeader } from "./dashboard-header";
import { DashboardRecentForms } from "./dashboard-recent-forms";
import { DashboardRecentResponses } from "./dashboard-recent-responses";
import { DashboardStats } from "./dashboard-stats";
import {DashboardQuickActions} from "./dashboard-quick-actions";
import {DashboardActivity} from "./dashboard-activity"

export function Dashboard() {
  return (
    <div className="space-y-12">
      <DashboardHeader />

      <DashboardStats />

      <DashboardRecentForms />

      <DashboardRecentResponses />

      <DashboardQuickActions />

      <DashboardActivity />
    </div>
  );
}