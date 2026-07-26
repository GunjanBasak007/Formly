import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  SquareMousePointer,
} from "lucide-react";

export const PRODUCT_SHOWCASE_CONTENT = {
  heading: {
    title: "See Formly in Action",
    description:
      "From building beautiful forms to analyzing every response, discover how Formly simplifies your entire workflow.",
  },

  showcases: [
    {
      icon: SquareMousePointer,

      badge: "Builder",

      title: "Create Forms Visually",

      description:
        "Build forms effortlessly with an intuitive drag-and-drop editor. Customize every field, organize layouts, and publish in minutes without writing code.",

      highlights: [
        "Drag & Drop Builder",
        "Custom Components",
        "Live Editing",
      ],

      image: "/landing/builder-preview.png",

      alt: "Form Builder Preview",
    },

    {
      icon: LayoutDashboard,

      badge: "Preview",

      title: "Preview Before You Publish",

      description:
        "Preview your forms exactly as respondents will experience them and publish confidently with a single click.",

      highlights: [
        "Responsive Preview",
        "Instant Publishing",
        "Share Anywhere",
      ],

      image: "/landing/live-preview.png",

      alt: "Live Form Preview",
    },

    {
      icon: ClipboardList,

      badge: "Responses",

      title: "Manage Every Submission",

      description:
        "Review, search, and organize responses from one centralized dashboard designed for speed and clarity.",

      highlights: [
        "Search Responses",
        "Export Data",
        "Powerful Filters",
      ],

      image: "/landing/responses-preview.png",

      alt: "Responses Dashboard",
    },

    {
      icon: BarChart3,

      badge: "Analytics",

      title: "Turn Data Into Insights",

      description:
        "Monitor views, responses, and engagement with a clean analytics dashboard that helps you make informed decisions.",

      highlights: [
        "Views & Responses",
        "Performance Metrics",
        "Visual Reports",
      ],

      image: "/landing/analytics-preview.png",

      alt: "Analytics Dashboard",
    },
  ],
} as const;