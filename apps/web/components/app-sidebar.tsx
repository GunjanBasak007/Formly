"use client";

import Image from "next/image";
import * as React from "react";
import Link from "next/link";

import {
  IconChartBar,
  IconDashboard,
  IconClipboardText,
} from "@tabler/icons-react";

import { useUser } from "~/hooks/api/auth";

import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Forms",
    url: "/dashboard/forms",
    icon: IconClipboardText,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: IconChartBar,
  },
];

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-auto py-4 data-[slot=sidebar-menu-button]:p-3!"
            >
              <Link href="/" className="flex w-full items-center gap-3">
                <Image
                  src="/formly.png"
                  alt="Formly Logo"
                  width={38}
                  height={38}
                />

                <div className="flex flex-col justify-center">
                  <span className="text-xl font-bold tracking-tight">
                    Formly
                  </span>

                  <span className="text-xs text-muted-foreground">
                    Build forms effortlessly
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>

      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.fullName,
              email: user.email,
              avatar:
                user.profileImageUrl ??
                `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                  user.fullName
                )}`,
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}