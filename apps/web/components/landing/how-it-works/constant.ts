import {
  FilePlus2,
  Move,
  Send,
} from "lucide-react";

export const HOW_IT_WORKS_CONTENT = {
  heading: {
    title: "Build forms in three simple steps",
    description:
      "From creating your first form to collecting responses, Formly makes every step fast, intuitive, and effortless.",
  },

  steps: [
    {
      number: "01",
      icon: FilePlus2,
      title: "Create Your Form",
      description:
        "Start with a blank form and add the fields you need using the visual form builder.",
    },
    {
      number: "02",
      icon: Move,
      title: "Customize & Arrange",
      description:
        "Drag, reorder, and configure every field to create the perfect form experience.",
    },
    {
      number: "03",
      icon: Send,
      title: "Publish & Collect",
      description:
        "Publish instantly with a shareable link and start collecting responses in real time.",
    },
  ],
} as const;