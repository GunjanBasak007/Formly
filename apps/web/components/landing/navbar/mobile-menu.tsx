"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";

import { NavbarLogo } from "./navbar-logo";
import { NAVBAR_CONTENT } from "./constant";

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="rounded-xl"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex w-[320px] flex-col border-l bg-background/95 backdrop-blur-xl"
        >
          <SheetHeader className="border-b pb-5">
            <NavbarLogo />
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-2">
            {NAVBAR_CONTENT.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t pt-6">
            <Button
              asChild
              variant="ghost"
              className="h-11 w-full rounded-xl"
            >
              <Link href={NAVBAR_CONTENT.actions.login.href}>
                {NAVBAR_CONTENT.actions.login.label}
              </Link>
            </Button>

            <Button
              asChild
              className="h-11 w-full rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Link href={NAVBAR_CONTENT.actions.signup.href}>
                {NAVBAR_CONTENT.actions.signup.label}
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}