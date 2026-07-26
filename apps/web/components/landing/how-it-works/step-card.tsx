import { LucideIcon } from "lucide-react";
type StepCardProps = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="group relative rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Timeline Node */}
      <div className="absolute -top-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 shadow-lg">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
        </div>
      </div>

      {/* Step */}
      <div className="mt-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
        Step {step}
      </div>

      {/* Icon */}
      <div className="mt-8 inline-flex rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
        <Icon className="size-7" />
      </div>

      <h3 className="mt-6 text-2xl font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}