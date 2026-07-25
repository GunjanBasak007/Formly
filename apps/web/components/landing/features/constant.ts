import {
  BarChart3,
  Move,
  LayoutTemplate,
  Link2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const FEATURES_CONTENT = {
  heading: {
    title: "Everything you need to build powerful forms",
    description:
      "Design, publish, and analyze forms effortlessly with a modern toolkit built for speed, flexibility, and collaboration.",
  },

  features: [
    {
      icon: Move,
      title: "Drag & Drop Builder",
      description:
        "Create forms visually with an intuitive drag-and-drop editor. Rearrange fields instantly without writing code.",
    },
    {
      icon: LayoutTemplate,
      title: "Beautiful Components",
      description:
        "Choose from modern input fields, layouts, and customizable form elements that look great out of the box.",
    },
    {
      icon: Link2,
      title: "Instant Sharing",
      description:
        "Publish your form in one click and share it anywhere using a unique, ready-to-use link.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Monitor views, responses, and performance with insightful analytics to understand your audience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Experience",
      description:
        "Every form automatically adapts to desktop, tablet, and mobile devices for a seamless user experience.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Submissions",
      description:
        "Protect your data with reliable infrastructure and secure submission handling you can trust.",
    },
  ],
} as const;