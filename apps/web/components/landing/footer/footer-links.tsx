import Link from "next/link";

import { FOOTER_CONTENT } from "./constant";

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-12">
      {FOOTER_CONTENT.sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-6 text-lg font-semibold">
            {section.title}
          </h3>

          <ul className="space-y-4">
            {section.links.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-violet-600"
                  >
                    <Icon className="size-4 transition-transform group-hover:translate-x-1" />

                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}