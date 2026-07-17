import { StatsCard } from "./stats-card";

interface StatsGridProps {
  totalForms: number;
  totalResponses: number;
  responseRate: number;
  publishedForms: number;
  draftForms: number;
  totalViews: number;
}

export function StatsGrid({
  totalForms,
  totalResponses,
  responseRate,
  publishedForms,
  draftForms,
  totalViews,
}: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatsCard title="Total Forms" value={totalForms} />
        <StatsCard title="Published Forms" value={publishedForms} />
        <StatsCard title="Draft Forms" value={draftForms} />
        <StatsCard title="Responses" value={totalResponses} />
        <StatsCard title="Response Rate" value={`${Number(responseRate).toFixed(1)}%`} />
        <StatsCard title="Total Views" value={totalViews} />
    </div>
  );
}