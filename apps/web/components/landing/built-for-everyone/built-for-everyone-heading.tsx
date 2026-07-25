import { BUILT_FOR_EVERYONE_CONTENT } from "./constant";

export function BuiltForEveryoneHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {BUILT_FOR_EVERYONE_CONTENT.heading.title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        {BUILT_FOR_EVERYONE_CONTENT.heading.description}
      </p>
    </div>
  );
}