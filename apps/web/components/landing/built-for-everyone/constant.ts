import {
  Briefcase,
  GraduationCap,
  School,
  SearchCheck,
  Users,
  UserRound,
} from "lucide-react";

export const BUILT_FOR_EVERYONE_CONTENT = {
  heading: {
    badge: "Built for Everyone",
    description:
      "Whether you're collecting feedback, managing applications, or creating surveys, Formly adapts to your workflow.",
  },

  audiences: [
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Collect assignments, quizzes, project submissions, and event registrations with ease.",
    },
    {
      icon: UserRound,
      title: "Freelancers",
      description:
        "Simplify client onboarding, collect requirements, and gather project feedback effortlessly.",
    },
    {
      icon: Briefcase,
      title: "Startups",
      description:
        "Capture leads, run surveys, manage waitlists, and streamline internal workflows.",
    },
    {
      icon: School,
      title: "Educators",
      description:
        "Create exams, classroom surveys, registrations, and course feedback forms in minutes.",
    },
    {
      icon: SearchCheck,
      title: "Recruiters",
      description:
        "Manage job applications, candidate screening, and hiring workflows from one place.",
    },
    {
      icon: Users,
      title: "Product Teams",
      description:
        "Collect feature requests, beta feedback, bug reports, and user research efficiently.",
    },
  ],
} as const;