import {
  CheckCircle2,
  Clock3,
  FileEdit,
  FilePlus2,
  SendHorizonal,
} from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

const ACTIVITIES = [
  {
    id: 1,
    icon: FilePlus2,
    title: "Customer Feedback Survey created",
    description: "You created a new form.",
    time: "5 minutes ago",
  },
  {
    id: 2,
    icon: SendHorizonal,
    title: "John Doe submitted a response",
    description: "Customer Feedback Survey",
    time: "18 minutes ago",
  },
  {
    id: 3,
    icon: FileEdit,
    title: "Job Application updated",
    description: "Draft saved successfully.",
    time: "Yesterday",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Event Registration published",
    description: "Your form is now accepting responses.",
    time: "2 days ago",
  },
];

export function DashboardActivity() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Recent Activity</h2>

        <p className="text-muted-foreground">
          Track everything happening in your workspace.
        </p>
      </div>

      <Card className="rounded-2xl border-border/60">
        <CardContent className="p-8">
          <div className="space-y-8">
            {ACTIVITIES.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.id}
                  className="relative flex gap-5"
                >
                  {index !== ACTIVITIES.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-px bg-border" />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 space-y-2 pb-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold">
                        {activity.title}
                      </h3>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock3 className="h-3.5 w-3.5" />
                        {activity.time}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}