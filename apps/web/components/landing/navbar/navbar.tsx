import { Container } from "~/components/shared/container";

import { MobileMenu } from "./mobile-menu";
import { NavbarActions } from "./navbar-actions";
import { NavbarLinks } from "./navbar-links";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <NavbarLogo />

        <NavbarLinks />

        <div className="flex items-center">
          <NavbarActions />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}