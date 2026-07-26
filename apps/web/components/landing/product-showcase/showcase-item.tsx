import { CheckCircle2, LucideIcon } from "lucide-react";

import { ScreenshotFrame } from "./screenshot-frame";

type ShowcaseItemProps = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  highlights: readonly string[];
  image?: string;
  alt: string;
  reverse?: boolean;
};

export function ShowcaseItem({
  icon: Icon,
  badge,
  title,
  description,
  highlights,
  image,
  alt,
  reverse = false,
}: ShowcaseItemProps) {
  return (
    <div
      className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-20 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Content */}
      <div className="max-w-xl">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
          {badge}
        </div>

        {/* Icon */}
        <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 p-4 text-white shadow-lg">
          <Icon className="size-7" />
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>

        {/* Highlights */}
        <div className="mt-8 space-y-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-base text-foreground"
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                <CheckCircle2 className="size-4" />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot */}
      <ScreenshotFrame
        title={title}
        image={image}
        alt={alt}
      />
    </div>
  );
}