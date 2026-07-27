import { ArrowUpRight, Clock3, User } from "lucide-react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

type ResponseCardProps = {
  respondent: string;
  formTitle: string;
  submittedAt: string;
};

export function ResponseCard({
  respondent,
  formTitle,
  submittedAt,
}: ResponseCardProps) {
  const initials = respondent
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl dark:hover:border-violet-500/30">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-500 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div>
              <h3 className="font-semibold">{respondent}</h3>

              <p className="text-sm text-muted-foreground">
                {formTitle}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-violet-500/10 p-2 text-violet-600 dark:text-violet-300">
            <User className="h-5 w-5" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            {submittedAt}
          </div>

          <Button
            variant="ghost"
            className="gap-2 rounded-xl text-violet-600 hover:text-violet-700"
          >
            View
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}