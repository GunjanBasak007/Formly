"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import {
  IconChartBar,
  IconDashboard,
  IconSettings,
  IconClipboardText,
} from "@tabler/icons-react";

import { NavMain } from "~/components/nav-main";
import { NavSecondary } from "~/components/nav-secondary";
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
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
 
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                className="h-auto py-4 data-[slot=sidebar-menu-button]:p-3!"
            >
              <Link href="/" className="flex items-center gap-3 w-full">
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
        <NavMain items={data.navMain} />
        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}