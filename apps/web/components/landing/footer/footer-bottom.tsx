import Link from "next/link";

import { FOOTER_CONTENT } from "./constant";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row">
      <span>{FOOTER_CONTENT.bottom.copyright}</span>

      <Link
        href={FOOTER_CONTENT.bottom.authorUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-violet-500"
      >
        <span className="font-medium text-foreground">
          {FOOTER_CONTENT.bottom.madeWith}
        </span>
      </Link>
    </div>
  );
}