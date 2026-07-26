import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { NAVBAR_CONTENT } from "./constant";
import { Button } from "~/components/ui/button";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      {/* Login */}
      <Button
        asChild
        variant="ghost"
        className="rounded-xl px-5 text-sm font-medium transition-all duration-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
      >
        <Link href={NAVBAR_CONTENT.actions.login.href}>
          {NAVBAR_CONTENT.actions.login.label}
        </Link>
      </Button>

      {/* CTA */}
      <Button
        asChild
        className="group h-11 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <Link href={NAVBAR_CONTENT.actions.signup.href}>
          {NAVBAR_CONTENT.actions.signup.label}

          <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}