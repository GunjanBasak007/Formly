import { ArrowRight, Github } from "lucide-react";

export const CTA_CONTENT = {
  heading: {
    badge: "Start Building Today",
    title: "Create Beautiful Forms in Minutes",
    description:
      "Build, publish, collect responses, and analyze results — all from one modern platform designed for speed and simplicity.",
  },

  primaryAction: {
    label: "Get Started Free",
    href: "/sign-up",
    icon: ArrowRight,
  },

  secondaryAction: {
    label: "View on GitHub",
    href: "https://github.com/GunjanBasak007/Formly",
    icon: Github,
  },
} as const;