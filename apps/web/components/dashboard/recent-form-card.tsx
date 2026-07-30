import { Clock3, FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { Badge } from "~/components/ui/badge";
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

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3 className="h-4 w-4" />
          Updated{" "}
          {form.updatedAt
            ? formatDistanceToNow(new Date(form.updatedAt), {
                addSuffix: true,
              })
            : "Unknown"}
        </div>
      </CardContent>
    </Card>
  );
}