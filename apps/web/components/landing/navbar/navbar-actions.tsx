import Link from "next/link";

import { NAVBAR_CONTENT } from "./constant";
import { Button } from "~/components/ui/button";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Button asChild variant="ghost">
        <Link href={NAVBAR_CONTENT.actions.login.href}>
          {NAVBAR_CONTENT.actions.login.label}
        </Link>
      </Button>

      <Button asChild>
        <Link href={NAVBAR_CONTENT.actions.signup.href}>
          {NAVBAR_CONTENT.actions.signup.label}
        </Link>
      </Button>
    </div>
  );
}