import { Sparkles } from "lucide-react";

import { FAQ_CONTENT } from "./constant";

export function FAQHeading() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
        <div className="rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 p-1">
          <Sparkles className="size-3 text-white" />
        </div>

        <span>{FAQ_CONTENT.heading.badge}</span>
      </div>

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:text-xl">
        {FAQ_CONTENT.heading.description}
      </p>
    </div>
  );
}