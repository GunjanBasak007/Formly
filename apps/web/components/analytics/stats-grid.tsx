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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatsCard
        title="Total Forms"
        value={totalForms}
        description="Forms you've created"
      />

      <StatsCard
        title="Published Forms"
        value={publishedForms}
        description="Currently live"
      />

      <StatsCard
        title="Draft Forms"
        value={draftForms}
        description="Not published yet"
      />

      <StatsCard
        title="Responses"
        value={totalResponses}
        description="Submissions received"
      />

      <StatsCard
        title="Response Rate"
        value={`${Number(responseRate).toFixed(1)}%`}
        description="Views converted"
      />

      <StatsCard
        title="Total Views"
        value={totalViews}
        description="Overall impressions"
      />
    </div>
  );
}