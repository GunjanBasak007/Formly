export const NAVBAR_CONTENT = {
  links: [
    {
      label: "Features",
      href: "#features",
      external: false,
    },
    {
      label: "Product",
      href: "#product",
      external: false,
    },
    {
      label: "Templates",
      href: "#templates",
      external: false,
    },
    {
      label: "Documentation",
      href: "/docs",
      external: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/GunjanBasak007/Formly",
      external: true,
    },
  ],

  actions: {
    login: {
      label: "Log In",
      href: "/login",
    },
    signup: {
      label: "Get Started Free",
      href: "/signup",
    },
  },
} as const;