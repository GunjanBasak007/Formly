import { NavbarLogo } from "~/components/landing/navbar/navbar-logo";

import { FOOTER_CONTENT } from "./constant";

export function FooterBrand() {
  return (
    <div className="max-w-md">
      <NavbarLogo />

      <p className="mt-5 text-base leading-7 text-muted-foreground">
        {FOOTER_CONTENT.brand.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          ⚡ Fast
        </span>

        <span className="rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          🎨 No-Code
        </span>

        <span className="rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
          📊 Analytics
        </span>
      </div>
    </div>
  );
}