import { HOW_IT_WORKS_CONTENT } from "./constant";
import { StepCard } from "./step-card";

export function StepsGrid() {
  return (
    <div className="relative mt-20">
      {/* Timeline */}
      <div className="absolute left-0 right-0 top-5 hidden h-[2px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 lg:block" />

      <div className="grid gap-12 pt-10 lg:grid-cols-4">
        {HOW_IT_WORKS_CONTENT.steps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}