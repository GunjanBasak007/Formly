import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <Link
      href="/signup"
      className="
        group
        inline-flex
        items-center
        gap-2.5
        rounded-full
        border
        border-white/60
        bg-white/80
        px-5
        py-2
        text-sm
        font-medium
        text-slate-700
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        supports-[backdrop-filter]:bg-white/60
        hover:-translate-y-0.5
        hover:border-violet-200
        hover:shadow-lg
      "
    >
      {/* Icon */}
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-violet-500
          via-indigo-500
          to-cyan-500
          text-white
          shadow-md
        "
      >
        <Sparkles
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />
      </span>

      {/* Text */}
      <span className="flex items-center gap-1">
        <span className="text-slate-600">Introducing</span>

        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text font-semibold text-transparent">
          Formly v1.0
        </span>
      </span>

      {/* Arrow */}
      <ArrowRight
        className="
          h-4
          w-4
          text-slate-500
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-violet-600
        "
      />
    </Link>
  );
}