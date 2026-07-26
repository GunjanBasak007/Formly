import { CheckCircle2 } from "lucide-react";

import { HERO_CONTENT } from "./constant";

export function HeroTrust() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {HERO_CONTENT.trust.map((item) => (
        <div
          key={item}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200/80
            bg-white/70
            px-4
            py-2
            text-sm
            font-medium
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
          <div
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-emerald-500
              to-green-600
              text-white
            "
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
          </div>

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}