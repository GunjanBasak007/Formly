import { Sparkles } from "lucide-react";

import { BUILT_FOR_EVERYONE_CONTENT } from "./constant";

export function BuiltForEveryoneHeading() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
        <div className="rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-1">
          <Sparkles className="size-3 text-white" />
        </div>

        <span>{BUILT_FOR_EVERYONE_CONTENT.heading.badge}</span>
      </div>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        One Platform,
        <br />
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Multiple Workflows
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:text-xl">
        {BUILT_FOR_EVERYONE_CONTENT.heading.description}
      </p>
    </div>
  );
}