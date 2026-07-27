import { ArrowRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import { DASHBOARD_CONTENT } from "./constant";
import { RecentFormCard } from "./recent-form-card";

const RECENT_FORMS = [
  {
    title: "Customer Feedback Survey",
    status: "Published" as const,
    responses: 154,
    updatedAt: "2 hours ago",
  },
  {
    title: "Job Application Form",
    status: "Draft" as const,
    responses: 0,
    updatedAt: "Yesterday",
  },
  {
    title: "Event Registration",
    status: "Published" as const,
    responses: 47,
    updatedAt: "3 days ago",
  },
];

export function DashboardRecentForms() {
  const { recentForms } = DASHBOARD_CONTENT.sections;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{recentForms.title}</h2>

          <p className="text-muted-foreground">
            {recentForms.description}
          </p>
        </div>

        <Button variant="ghost" className="rounded-xl">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {RECENT_FORMS.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {RECENT_FORMS.map((form) => (
            <RecentFormCard
              key={form.title}
              {...form}
            />
          ))}
        </div>
      ) : (
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16">
            <h3 className="text-xl font-semibold">
              {recentForms.empty}
            </h3>

            <Button className="rounded-xl">
              Create Form
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}