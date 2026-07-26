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
    title: "Everything You Need to Build Powerful Forms",
    description:
      "Create beautiful forms, publish them instantly, collect responses effortlessly, and uncover actionable insights—all from one intuitive platform.",
  },

  features: [
    {
      icon: Move,
      title: "Drag & Drop Builder",
      description:
        "Build forms visually with a smooth drag-and-drop experience. Rearrange, customize, and launch in minutes—no coding required.",
    },
    {
      icon: LayoutTemplate,
      title: "Beautiful Components",
      description:
        "Choose from thoughtfully designed fields and layouts that look polished by default and are easy to customize.",
    },
    {
      icon: Link2,
      title: "Instant Sharing",
      description:
        "Publish your form with a single click and share it anywhere using a secure, ready-to-use link.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Track views, responses, and engagement through a clean dashboard that helps you understand performance at a glance.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description:
        "Deliver a seamless experience across desktop, tablet, and mobile without any extra effort.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "Keep every submission protected with dependable infrastructure designed for reliability and peace of mind.",
    },
  ],
} as const;