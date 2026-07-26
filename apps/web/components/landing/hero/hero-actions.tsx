import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "~/components/ui/button";

import { HERO_CONTENT } from "./constant";

export function HeroActions() {
  return (
    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
      {/* Primary CTA */}
      <Button
        asChild
        size="lg"
        className="
          group
          h-12
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          via-indigo-600
          to-cyan-500
          px-8
          text-base
          font-semibold
          text-white
          shadow-lg
          shadow-violet-500/25
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
          hover:shadow-violet-500/35
          active:translate-y-0
        "
      >
        <Link href={HERO_CONTENT.primaryCTA.href}>
          {HERO_CONTENT.primaryCTA.label}

          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </Button>

      {/* Secondary CTA */}
      <Button
        asChild
        variant="outline"
        size="lg"
        className="
          group
          h-12
          rounded-xl
          border-slate-200
          bg-white/80
          px-8
          text-base
          font-semibold
          text-slate-700
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-violet-200
          hover:bg-white
          hover:shadow-md
        "
      >
        <Link href={HERO_CONTENT.secondaryCTA.href}>
          <Play
            className="
              mr-2
              h-4
              w-4
              fill-current
              text-violet-600
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          {HERO_CONTENT.secondaryCTA.label}
        </Link>
      </Button>
    </div>
  );
}