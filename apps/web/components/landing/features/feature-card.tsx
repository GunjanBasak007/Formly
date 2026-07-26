import { ArrowRight, LucideIcon } from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-background/80
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-200
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <CardContent className="relative flex h-full flex-col p-8">
        {/* Icon */}
        <div
          className="
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-violet-500/10
            via-indigo-500/10
            to-cyan-500/10
            text-violet-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:from-violet-500
            group-hover:via-indigo-500
            group-hover:to-cyan-500
            group-hover:text-white
          "
        >
          <Icon className="h-8 w-8" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {description}
        </p>

        {/* Hover CTA */}
        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-violet-600
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:opacity-100
          "
        >
          Learn more

          <ArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}