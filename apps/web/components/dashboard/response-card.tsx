import { Clock3, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent } from "~/components/ui/card";

type ResponseCardProps = {
  response: {
    id: string;
    formTitle: string;
    submittedAt: string | null;
  };
};

export function ResponseCard({
  response,
}: ResponseCardProps) {
  const { formTitle, submittedAt } = response;

  return (
    <Card className="group rounded-2xl border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl dark:hover:border-violet-500/30">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-500 text-white">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h3 className="font-semibold">
              New Response
            </h3>

            <p className="text-sm text-muted-foreground">
              {formTitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock3 className="h-4 w-4" />
          Submitted{" "}
          {submittedAt
            ? formatDistanceToNow(new Date(submittedAt), {
                addSuffix: true,
              })
            : "Unknown"}
        </div>
      </CardContent>
    </Card>
  );
}