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
import { NAV_ITEMS } from "./constant";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="flex flex-col">
          <SheetHeader>
            <NavbarLogo />
          </SheetHeader>

          <nav className="flex flex-col gap-2 px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t p-4">
            <Button asChild variant="ghost" className="w-full">
              <Link href="/sign-in">Log In</Link>
            </Button>

            <Button asChild className="w-full">
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}