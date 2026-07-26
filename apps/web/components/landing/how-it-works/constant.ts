import {
  BarChart3,
  ClipboardList,
  Send,
  SquareMousePointer,
} from "lucide-react";

export const HOW_IT_WORKS_CONTENT = {
  heading: {
    title: "How It Works",
    description:
      "Create, publish, and analyze forms in just a few simple steps.",
  },

  steps: [
    {
      step: "01",
      icon: SquareMousePointer,
      title: "Build Your Form",
      description:
        "Design beautiful forms using the intuitive drag-and-drop builder.",
    },

    {
      step: "02",
      icon: Send,
      title: "Publish Instantly",
      description:
        "Share your form with a single click and start collecting responses.",
    },

    {
      step: "03",
      icon: ClipboardList,
      title: "Collect Responses",
      description:
        "Review every submission from one clean, organized dashboard.",
    },

    {
      step: "04",
      icon: BarChart3,
      title: "Analyze Results",
      description:
        "Understand performance with powerful analytics and insights.",
    },
  ],
} as const;