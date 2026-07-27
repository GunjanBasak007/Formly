import { ArrowRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

import { DASHBOARD_CONTENT } from "./constant";

export function DashboardQuickActions() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Quick Actions</h2>

        <p className="text-muted-foreground">
          Jump into the tasks you use most often.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {DASHBOARD_CONTENT.quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Card
              key={action.title}
              className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl dark:hover:border-violet-500/30"
            >
              <CardContent className="space-y-5 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {action.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className="px-0 text-violet-600 hover:text-violet-700"
                >
                  {action.cta}

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}