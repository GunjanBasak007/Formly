export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Product",
    href: "#product",
  },
  {
    title: "Templates",
    href: "#templates",
  },
  {
    title: "Docs",
    href: "#docs",
  },
  {
    title: "GitHub",
    href: "https://github.com/GunjanBasak007/Formly.git",
    external: true,
  },
];