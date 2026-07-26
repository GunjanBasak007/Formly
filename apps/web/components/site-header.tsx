"use client";

import { usePathname } from "next/navigation";

import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";

function getPageTitle(pathname: string) {
  if (pathname === "/dashboard") {
    return "Dashboard";
  }

  if (pathname === "/dashboard/forms") {
    return "Forms";
  }

  if (pathname.includes("/dashboard/forms") && pathname.includes("/submissions")) {
    return "Responses";
  }

  if (pathname.includes("/dashboard/forms")) {
    return "Form Details";
  }

  if (pathname === "/dashboard/analytics") {
    return "Analytics";
  }

  if (pathname === "/dashboard/settings") {
    return "Settings";
  }

  return "Dashboard";
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-base font-medium">
          {getPageTitle(pathname)}
        </h1>
      </div>
    </header>
  );
}