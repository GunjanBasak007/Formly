import { ArrowRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import { DASHBOARD_CONTENT } from "./constant";
import { ResponseCard } from "./response-card";

const RECENT_RESPONSES = [
  {
    respondent: "John Doe",
    formTitle: "Customer Feedback Survey",
    submittedAt: "2 minutes ago",
  },
  {
    respondent: "Sarah Williams",
    formTitle: "Job Application Form",
    submittedAt: "18 minutes ago",
  },
  {
    respondent: "Michael Brown",
    formTitle: "Event Registration",
    submittedAt: "1 hour ago",
  },
];

export function DashboardRecentResponses() {
  const { recentResponses } = DASHBOARD_CONTENT.sections;

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {recentResponses.title}
          </h2>

          <p className="text-muted-foreground">
            {recentResponses.description}
          </p>
        </div>

        <Button variant="ghost" className="rounded-xl">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {RECENT_RESPONSES.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {RECENT_RESPONSES.map((response) => (
            <ResponseCard
              key={`${response.respondent}-${response.formTitle}`}
              {...response}
            />
          ))}
        </div>
      ) : (
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center justify-center gap-3 py-16">
            <h3 className="text-xl font-semibold">
              {recentResponses.empty}
            </h3>

            <p className="text-center text-muted-foreground">
              Responses from your forms will appear here.
            </p>
          </CardContent>
        </Card>
      )}
    </section>
  );
}