import { ArrowRight, FileText } from "lucide-react";

import { useGetRecentForms } from "~/hooks/api/form";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import { DASHBOARD_CONTENT } from "./constant";
import { RecentFormCard } from "./recent-form-card";

export function DashboardRecentForms() {
  const { recentForms: section } = DASHBOARD_CONTENT.sections;

  const {
    data: recentForms,
    isLoading,
  } = useGetRecentForms();

  if (isLoading) {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {section.title}
            </h2>

            <p className="text-muted-foreground">
              {section.description}
            </p>
          </div>
        </div>

        <div className="text-muted-foreground">
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {section.title}
          </h2>

          <p className="text-muted-foreground">
            {section.description}
          </p>
        </div>

        <Button
            asChild
            variant="ghost"
            className="rounded-xl"
          >
            <Link href="/dashboard/forms">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </div>

      {recentForms && recentForms.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {recentForms.map((form) => (
            <RecentFormCard
              key={form.id}
              form={form}
            />
          ))}
        </div>
      ) : (
        <Card className="rounded-2xl border-dashed">
          <CardContent className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <FileText className="h-12 w-12 text-muted-foreground" />

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                No forms yet
              </h3>

              <p className="max-w-sm text-muted-foreground">
                Create your first form to start collecting
                responses.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}