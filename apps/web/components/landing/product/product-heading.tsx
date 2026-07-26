import { Sparkles } from "lucide-react";

import { PRODUCT_CONTENT } from "./constant";

export function ProductHeading() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
        <Sparkles className="size-4" />
        {PRODUCT_CONTENT.badge}
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {PRODUCT_CONTENT.title}
      </h2>

      <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
        {PRODUCT_CONTENT.description}
      </p>
    </div>
  );
}