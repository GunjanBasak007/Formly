import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type SocialProofCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export function SocialProofCard({
  icon: Icon,
  title,
  value,
}: SocialProofCardProps) {
  return (
    <Card className="group border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>

        <div className="space-y-1">
          <h3 className="text-base font-semibold text-foreground">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}