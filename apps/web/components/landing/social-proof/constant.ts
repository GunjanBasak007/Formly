import {
  ShieldCheck,
  Rocket,
  Smartphone,
  Github,
} from "lucide-react";

export const SOCIAL_PROOF_CONTENT = {
  heading: {
  badge: "Why Formly",
  description:
    "Powered by a modern tech stack, designed with security in mind, and crafted to deliver a seamless form-building experience.",
  },

  stats: [
    {
  icon: Rocket,
  title: "Modern Stack",
  description:
    "Built using Next.js, tRPC, Drizzle ORM and PostgreSQL.",
  },
    {
      icon: ShieldCheck,
      title: "Secure by Design",
      description:
        "Authentication, protected routes, and secure form submissions.",
    },

    {
      icon: Smartphone,
      title: "Responsive Everywhere",
      description:
        "Optimized for desktops, tablets, and mobile devices.",
    },

    {
      icon: Github,
      title: "Developer Friendly",
      description:
        "Clean architecture that's easy to extend and maintain.",
    },
  ],
} as const;