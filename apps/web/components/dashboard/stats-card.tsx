import { ArrowUpRight, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type StatsCardProps = {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
};

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
}: StatsCardProps) {
  return (
    <Card
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-card
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-300
        hover:shadow-xl
        dark:hover:border-violet-500/40
      "
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <h2 className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              {value}
            </h2>
          </div>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-violet-600
              via-indigo-600
              to-cyan-500
              text-white
              shadow-lg
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-3
            "
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          <ArrowUpRight
            className="
              h-4
              w-4
              text-violet-600
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </CardContent>
    </Card>
  );
}