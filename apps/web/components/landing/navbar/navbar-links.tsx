import Link from "next/link";

import { NAVBAR_CONTENT } from "./constant";

export function NavbarLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAVBAR_CONTENT.links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          {item.label}

          {/* Animated underline */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
}