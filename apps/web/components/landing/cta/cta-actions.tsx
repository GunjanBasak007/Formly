import Link from "next/link";

import { Button } from "~/components/ui/button";

import { CTA_CONTENT } from "./constant";

export function CTAActions() {
  const PrimaryIcon = CTA_CONTENT.primaryAction.icon;
  const SecondaryIcon = CTA_CONTENT.secondaryAction.icon;

  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="group h-14 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      >
        <Link href={CTA_CONTENT.primaryAction.href}>
          {CTA_CONTENT.primaryAction.label}

          <PrimaryIcon className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
        className="group h-14 rounded-xl border-border/60 bg-background/70 px-8 text-base backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/40"
      >
        <Link href={CTA_CONTENT.secondaryAction.href}>
          <SecondaryIcon className="mr-2 size-5" />

          {CTA_CONTENT.secondaryAction.label}
        </Link>
      </Button>
    </div>
  );
}