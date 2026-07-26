import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

type AuthContainerProps = {
  children: ReactNode;
  align?: "top" | "center";
};

export function AuthContainer({
  children,
  align = "top",
}: AuthContainerProps) {
  return (
    <section
      className={cn(
        "relative flex justify-center px-8 pb-10 lg:px-10",
        align === "top"
          ? "items-start pt-6"
          : "items-center py-10"
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-violet-50/30 dark:to-violet-950/10" />

      <div className="w-full max-w-lg rounded-3xl border border-border/60 bg-background/80 p-8 shadow-xl backdrop-blur-sm">
        {children}
      </div>
    </section>
  );
}