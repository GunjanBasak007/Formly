import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type SocialProofCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function SocialProofCard({
  icon: Icon,
  title,
  description,
}: SocialProofCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/40 hover:shadow-2xl">
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardContent className="relative flex flex-col items-center p-8 text-center">
        {/* Icon */}
        <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 p-4 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="size-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}