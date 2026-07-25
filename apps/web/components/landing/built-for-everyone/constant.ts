import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Rocket,
  Store,
  Ticket,
} from "lucide-react";

export const BUILT_FOR_EVERYONE_CONTENT = {
  heading: {
    title: "Built for every workflow",
    description:
      "Whether you're collecting feedback, managing registrations, or running surveys, Formly adapts to the way you work.",
  },

  audiences: [
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Create assignment forms, project submissions, quizzes, and classroom surveys with ease.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Teams",
      description:
        "Manage internal requests, employee feedback, approvals, and HR workflows in one place.",
    },
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Launch waitlists, gather customer feedback, and validate ideas faster with online forms.",
    },
    {
      icon: Ticket,
      title: "Event Organizers",
      description:
        "Handle registrations, RSVPs, attendee details, and event check-ins effortlessly.",
    },
    {
      icon: Store,
      title: "Businesses",
      description:
        "Capture leads, onboard clients, and collect inquiries through professional forms.",
    },
    {
      icon: HeartHandshake,
      title: "Communities",
      description:
        "Run member surveys, volunteer sign-ups, and feedback forms for your organization.",
    },
  ],
} as const;