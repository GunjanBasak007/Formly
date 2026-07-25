import { CheckCircle2 } from "lucide-react";

import { HERO_CONTENT } from "./constant";

export function HeroTrust() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
      {HERO_CONTENT.trust.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-primary" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}