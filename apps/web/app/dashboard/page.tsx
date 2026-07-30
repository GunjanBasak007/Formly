import { SiteHeader } from "~/components/site-header";
import { Dashboard } from "~/components/dashboard/dashboard";

export default function DashboardPage() {
  return (
    <>
      <SiteHeader
        title="Dashboard"
        description="Manage your forms and workspace."
      />

      <Dashboard />
    </>
  );
}