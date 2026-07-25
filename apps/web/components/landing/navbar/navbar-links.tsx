import Link from "next/link";

import { NAV_ITEMS } from "./constant";

export function NavbarLinks() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          {...(item.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}