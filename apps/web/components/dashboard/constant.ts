import {
  Activity,
  BarChart3,
  ClipboardList,
  FilePlus2,
  FileText,
  Sparkles,
} from "lucide-react";

export const DASHBOARD_CONTENT = {
  header: {
    badge: "Workspace",
    title: "Welcome back 👋",
    description:
      "Here's a quick overview of your forms, responses, and recent activity.",
    primaryAction: {
      label: "Create Form",
      icon: FilePlus2,
    },
    secondaryAction: {
      label: "View Analytics",
      icon: BarChart3,
    },
  },

  stats: [
    {
      key: "totalForms",
      title: "Total Forms",
      description: "Forms created",
      icon: ClipboardList,
    },
    {
      key: "responses",
      title: "Responses",
      description: "Submissions received",
      icon: FileText,
    },
    {
      key: "published",
      title: "Published",
      description: "Live forms",
      icon: Activity,
    },
    {
      key: "drafts",
      title: "Drafts",
      description: "Still in progress",
      icon: Sparkles,
    },
  ],

  quickActions: [
    {
      title: "Create Form",
      description: "Build a new form from scratch.",
      icon: FilePlus2,
      cta: "Start Building",
    },
    {
      title: "Browse Analytics",
      description: "See response trends and insights.",
      icon: BarChart3,
      cta: "Open Analytics",
    },
    {
      title: "Manage Forms",
      description: "Edit, publish, or duplicate forms.",
      icon: ClipboardList,
      cta: "View Forms",
    },
  ],

  sections: {
    recentForms: {
      title: "Recent Forms",
      description: "Your latest created and updated forms.",
      empty: "You haven't created any forms yet.",
    },

    recentResponses: {
      title: "Latest Responses",
      description: "Newest submissions across all forms.",
      empty: "No responses yet.",
    },

    activity: {
      title: "Recent Activity",
      description: "Latest events inside your workspace.",
      empty: "Nothing to show yet.",
    },
  },
} as const;