import Link from "next/link";

import { FOOTER_CONTENT } from "./constant";

const sections = [
  FOOTER_CONTENT.product,
  FOOTER_CONTENT.resources,
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-10 sm:gap-16">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            {section.title}
          </h3>

          <ul className="mt-5 space-y-4">
            {section.links.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />

                    <span>{link.label}</span>
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