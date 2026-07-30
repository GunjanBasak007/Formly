import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number | string;
  description?: string;
}

export function StatsCard({
  title,
  value,
  description,
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
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
          {value}
        </div>

        {description && (
          <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
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
        )}
      </CardContent>
    </Card>
  );
}