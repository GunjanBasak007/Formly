import { Sparkles } from "lucide-react";

import { FEATURES_CONTENT } from "./constant";

export function FeaturesHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
        <Sparkles className="h-4 w-4" />
        Powerful Features
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
        Everything You Need to Build{" "}
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Powerful Forms
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
        {FEATURES_CONTENT.heading.description}
      </p>
    </div>
  );
}