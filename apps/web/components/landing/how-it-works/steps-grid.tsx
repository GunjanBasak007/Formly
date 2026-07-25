import { HOW_IT_WORKS_CONTENT } from "./constant";
import { StepCard } from "./step-card";

export function StepsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {HOW_IT_WORKS_CONTENT.steps.map((step) => (
        <StepCard
          key={step.number}
          number={step.number}
          icon={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}