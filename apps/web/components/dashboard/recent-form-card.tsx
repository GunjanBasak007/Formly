import { ArrowUpRight, Clock3, FileText, MoreHorizontal } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

type RecentFormCardProps = {
  form: {
    id: string;
    title: string;
    isPublished: boolean;
    responses: number;
    updatedAt: string | null;
  };
};

export function RecentFormCard({
  form,
}: RecentFormCardProps) {
  const status = form.isPublished ? "Published" : "Draft";

  return (
    <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl dark:hover:border-violet-500/30">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              {form.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant={form.isPublished ? "default" : "secondary"}
                className={
                  form.isPublished
                    ? "bg-emerald-500 hover:bg-emerald-500"
                    : ""
                }
              >
                {status}
              </Badge>

              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                {form.responses} Responses
              </span>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            Updated{" "}
            {form.updatedAt
              ? new Date(form.updatedAt).toLocaleDateString()
              : "Unknown"}
          </div>

          <Button
            variant="ghost"
            className="gap-2 rounded-xl text-violet-600 hover:text-violet-700"
          >
            Open
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}