import { AppSidebar } from "~/components/app-sidebar"
import { SiteHeader } from "~/components/site-header"
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

          <main className="flex flex-1 flex-col bg-muted/20 px-8 py-8">
            <div className="@container/main mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12">
              {children}
            </div>
          </main>
        </SidebarInset>
    </SidebarProvider>
  )
}
