import Link from "next/link";

import { Heart } from "lucide-react";

import { FOOTER_CONTENT } from "./constant";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
      <p>{FOOTER_CONTENT.bottom.copyright}</p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span>Built with</span>

        <Heart className="size-4 fill-red-500 text-red-500" />

        <span>by {FOOTER_CONTENT.bottom.author}</span>

        <span>•</span>

        <span>{FOOTER_CONTENT.bottom.builtWith}</span>
      </div>

      <Link
        href="https://github.com/GunjanBasak007/Formly"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-foreground"
      >
        Star on GitHub →
      </Link>
    </div>
  );
}