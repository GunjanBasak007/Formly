"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "~/components/ui/button";
import { DASHBOARD_CONTENT } from "./constant";

export function DashboardHeader() {
  const {
    badge,
    title,
    description,
    primaryAction,
    secondaryAction,
  } = DASHBOARD_CONTENT.header;

  const PrimaryIcon = primaryAction.icon;
  const SecondaryIcon = secondaryAction.icon;

  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
          {badge}
        </div>

        <div className="space-y-2">
          <h1 className="text-[2.5rem] font-extrabold tracking-tight">
            {title}
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-xl"
        >
          <Link href="/dashboard/analytics">
            <SecondaryIcon className="mr-2 h-4 w-4" />
            {secondaryAction.label}
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          className="rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white hover:opacity-95"
        >
          <Link href="/dashboard/forms">
            <PrimaryIcon className="mr-2 h-4 w-4" />
            {primaryAction.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}