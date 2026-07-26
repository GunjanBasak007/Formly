import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "~/lib/utils";

type ScreenshotFrameProps = {
  title: string;
  image?: string;
  alt?: string;
  className?: string;
};

export function ScreenshotFrame({
  title,
  image,
  alt,
  className,
}: ScreenshotFrameProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/60 bg-background shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="rounded-full border border-border/60 bg-background/70 px-4 py-1 text-xs font-medium text-muted-foreground">
          {title}
        </div>

        <div className="w-14" />
      </div>

      {/* Content */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
        {image ? (
          <Image
            src={image}
            alt={alt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="rounded-2xl border border-dashed border-border bg-background/80 p-6 shadow-sm">
              <ImageIcon className="mx-auto size-10 text-muted-foreground" />

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Screenshot Coming Soon
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Once your dashboard is polished, simply add the screenshot and
                it&apos;ll automatically appear here.
              </p>
            </div>

            <span className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Built with Formly
            </span>
          </div>
        )}
      </div>
    </div>
  );
}