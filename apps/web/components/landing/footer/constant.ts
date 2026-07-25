import { Github, FileText, LayoutTemplate, Sparkles } from "lucide-react";

export const FOOTER_CONTENT = {
  brand: {
    name: "Formly",
    description:
      "Build beautiful forms, collect responses, and gain insights—all in one modern platform.",
  },

  product: {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "#features",
        icon: Sparkles,
      },
      {
        label: "Templates",
        href: "#",
        icon: LayoutTemplate,
      },
    ],
  },

  resources: {
    title: "Resources",
    links: [
      {
        label: "Documentation",
        href: "/docs",
        icon: FileText,
      },
      {
        label: "GitHub",
        href: "https://github.com/GunjanBasak007/Formly",
        icon: Github,
      },
    ],
  },

  bottom: {
  copyright: `© ${new Date().getFullYear()} Formly. All rights reserved.`,
  builtWith: "Next.js • tRPC • Drizzle ORM • PostgreSQL",
  author: "Gunjan Basak",
    },
} as const;