import {
  BarChart3,
  Globe,
  MousePointerClick,
} from "lucide-react";

export const AUTH_CONTENT = {
  brand: {
    name: "Formly",
    tagline: "Create beautiful forms. Collect smarter responses.",
  },

  heading: {
    title: "Everything you need to build modern forms.",
    description:
      "Design, publish, and analyze forms with a modern platform built for individuals, teams, and businesses.",
  },

  features: [
    {
      icon: MousePointerClick,
      title: "Drag & Drop Builder",
      description: "Build powerful forms visually without writing code.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track views, submissions, and performance instantly.",
    },
    {
      icon: Globe,
      title: "Instant Publishing",
      description: "Share forms anywhere with a single click.",
    },
  ],
} as const;