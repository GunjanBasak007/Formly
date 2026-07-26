import { CheckCircle2 } from "lucide-react";

import { AUTH_CONTENT } from "./constant";

export function AuthFeatures() {
  return (
    <div className="space-y-5">
      {AUTH_CONTENT.features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3"
        >
          <CheckCircle2 className="h-5 w-5 text-primary" />

          <span className="text-base text-muted-foreground">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}