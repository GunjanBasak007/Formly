import { DASHBOARD_CONTENT } from "./constant";
import { StatsCard } from "./stats-card";

type DashboardStatsProps = {
  stats?: {
    totalForms: number;
    responses: number;
    published: number;
    drafts: number;
  };
};

export function DashboardStats({
  stats = {
    totalForms: 12,
    responses: 348,
    published: 8,
    drafts: 4,
  },
}: DashboardStatsProps) {
  const values = {
    totalForms: stats.totalForms,
    responses: stats.responses,
    published: stats.published,
    drafts: stats.drafts,
  };

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {DASHBOARD_CONTENT.stats.map((stat) => (
        <StatsCard
          key={stat.key}
          title={stat.title}
          description={stat.description}
          icon={stat.icon}
          value={values[stat.key]}
        />
      ))}
    </section>
  );
}