import {
  BarChart3,
  LayoutDashboard,
  MousePointerClick,
  FileText,
} from "lucide-react";

const PREVIEW_ITEMS = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop Builder",
  },
  {
    icon: FileText,
    title: "Smart Responses",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
  },
  {
    icon: LayoutDashboard,
    title: "Modern Dashboard",
  },
];

export function ProductPreview() {
  return (
    <div className="mt-16 rounded-[32px] border border-border/50 bg-gradient-to-b from-background to-muted/20 p-8 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PREVIEW_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
                <Icon className="size-6" />
              </div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Coming soon
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-violet-300/40 bg-muted/30 p-8 text-center">
        <p className="text-xl font-semibold">
          Full interactive product walkthrough coming soon
        </p>

        <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
          Explore the complete form builder, analytics dashboard, responses,
          templates, and publishing workflow in the Product Showcase below.
        </p>
      </div>
    </div>
  );
}