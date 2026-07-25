import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  SquareMousePointer,
} from "lucide-react";

export const PRODUCT_SHOWCASE_CONTENT = {
  heading: {
    title: "See Formly in action",
    description:
      "Explore the core experiences that make Formly a modern platform for building, publishing, and managing forms.",
  },

  showcases: [
    {
      icon: SquareMousePointer,
      title: "Visual Form Builder",
      description:
        "Build forms effortlessly with an intuitive drag-and-drop interface. Add, edit, and organize fields in seconds.",
      image: "/landing/builder-preview.png",
      alt: "Form Builder Preview",
    },
    {
      icon: LayoutDashboard,
      title: "Live Form Preview",
      description:
        "Preview your form exactly as respondents will see it before publishing with confidence.",
      image: "/landing/live-preview.png",
      alt: "Live Form Preview",
    },
    {
      icon: ClipboardList,
      title: "Response Management",
      description:
        "View, organize, and manage every submission from a clean and centralized dashboard.",
      image: "/landing/responses-preview.png",
      alt: "Responses Dashboard Preview",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description:
        "Track views, submissions, and engagement with clear insights that help you understand your forms.",
      image: "/landing/analytics-preview.png",
      alt: "Analytics Dashboard Preview",
    },
  ],
} as const;