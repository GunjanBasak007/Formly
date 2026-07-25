import { HOW_IT_WORKS_CONTENT } from "./constant";

export function HowItWorksHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {HOW_IT_WORKS_CONTENT.heading.title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        {HOW_IT_WORKS_CONTENT.heading.description}
      </p>
    </div>
  );
}
