import { useGetRecentResponses } from "~/hooks/api/response";
import { Card, CardContent } from "~/components/ui/card";

import { DASHBOARD_CONTENT } from "./constant";
import { ResponseCard } from "./response-card";

export function DashboardRecentResponses() {
  const { recentResponses } = DASHBOARD_CONTENT.sections;

  const {
    data: responses,
    isLoading,
  } = useGetRecentResponses();

  if (isLoading) {
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
        </div>

        <p className="text-muted-foreground">
          Loading recent responses...
        </p>
      </section>
    );
  }

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
      </div>

      {responses && responses.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {responses.map((response) => (
            <ResponseCard
              key={response.id}
              response={response}
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