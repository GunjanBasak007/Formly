import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AudienceCard({
  icon: Icon,
  title,
  description,
}: AudienceCardProps) {
  return (
    <Card className="group h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <CardContent className="flex h-full flex-col items-center p-8 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}