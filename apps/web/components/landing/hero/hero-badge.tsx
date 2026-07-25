import { Sparkles } from "lucide-react";

import { HERO_CONTENT } from "./constant";

export function HeroBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-primary/10">
      <Sparkles className="h-4 w-4" />

      <span>{HERO_CONTENT.badge.text}</span>
    </div>
  );
}