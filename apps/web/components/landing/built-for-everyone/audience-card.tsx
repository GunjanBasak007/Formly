import { ArrowUpRight, LucideIcon } from "lucide-react";

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
    <Card className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-background/70 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/40 hover:shadow-2xl">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardContent className="relative flex h-full flex-col p-8">
        {/* Icon */}
        <div className="mb-6 inline-flex w-fit rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 p-4 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="size-7" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center text-sm font-medium text-violet-600 transition-all duration-300 group-hover:translate-x-1">
          <span>Learn more</span>

          <ArrowUpRight className="ml-2 size-4" />
        </div>
      </CardContent>
    </Card>
  );
}