import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "~/components/ui/button";

import { HERO_CONTENT } from "./constant";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        asChild
        size="lg"
        className="group h-12 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
      >
        <Link href={HERO_CONTENT.primaryCTA.href}>
          {HERO_CONTENT.primaryCTA.label}

          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="h-12 rounded-xl px-8 text-base font-semibold transition-all duration-300 hover:bg-muted"
      >
        <Link href={HERO_CONTENT.secondaryCTA.href}>
          <Play className="mr-2 h-4 w-4 fill-current" />

          {HERO_CONTENT.secondaryCTA.label}
        </Link>
      </Button>
    </div>
  );
}