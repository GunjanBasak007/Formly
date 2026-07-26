import {
  BookOpen,
  FileText,
  Github,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

export const FOOTER_CONTENT = {
  brand: {
    title: "Formly",
    description:
      "Build beautiful forms with an intuitive drag-and-drop experience. Create, publish, collect, and analyze — all in one place.",
  },

  sections: [
    {
      title: "Product",
      links: [
        {
          label: "Features",
          href: "#features",
          icon: Sparkles,
        },
        {
          label: "Templates",
          href: "#templates",
          icon: LayoutTemplate,
        },
        {
          label: "Documentation",
          href: "#docs",
          icon: FileText,
        },
      ],
    },

    {
      title: "Resources",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/GunjanBasak007/Formly",
          icon: Github,
        },
        {
          label: "Docs",
          href: "#docs",
          icon: BookOpen,
        },
      ],
    },
  ],

  bottom: {
    copyright: `© ${new Date().getFullYear()} Formly. All rights reserved.`,
    madeWith: "Built by Gunjan Basak with ❤️ using Next.js, tRPC & Drizzle ORM.",
    authorUrl: "https://github.com/GunjanBasak007",
  },
} as const;