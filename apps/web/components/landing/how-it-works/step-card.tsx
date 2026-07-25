import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type StepCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
}: StepCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <CardContent className="relative flex h-full flex-col items-center p-8 text-center">
        <span className="absolute right-6 top-4 text-6xl font-extrabold text-muted-foreground/10 transition-colors duration-300 group-hover:text-primary/10">
          {number}
        </span>

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-8 w-8" />
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