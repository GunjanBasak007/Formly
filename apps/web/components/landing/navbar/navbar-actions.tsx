
import Link from "next/link";

import { Button } from "~/components/ui/button";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <Button asChild variant="ghost">
        <Link href="/sign-in">Log In</Link>
      </Button>

      <Button asChild>
        <Link href="/sign-up">Get Started Free</Link>
      </Button>
    </div>
  );
}