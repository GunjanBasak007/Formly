"use client";

import type { ReactNode } from "react";

import { ThemeToggle } from "~/components/theme-toggle";

type SiteHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SiteHeader({
  title,
  description,
  action,
}: SiteHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <ThemeToggle />
        {action}
      </div>
    </div>
  );
}