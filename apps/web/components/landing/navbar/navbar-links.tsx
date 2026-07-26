import Link from "next/link";

import { NAVBAR_CONTENT } from "./constant";

export function NavbarLinks() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAVBAR_CONTENT.links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}