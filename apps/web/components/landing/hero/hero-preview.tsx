import {
  ChevronDown,
  Eye,
  GripVertical,
  LayoutDashboard,
  Mail,
  Phone,
  Plus,
  Share2,
  Type,
} from "lucide-react";

function Field({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-background p-3 transition-colors hover:bg-muted/40">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>

        <span className="text-sm font-medium">{label}</span>
      </div>

      <GripVertical className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export function HeroPreview() {
  return (
    <div className="relative">
      {/* Floating Analytics Card */}
      <div className="absolute -left-10 top-8 z-20 hidden rounded-2xl border bg-background/90 p-4 shadow-xl backdrop-blur lg:block">
        <div className="text-xs text-muted-foreground">
          Responses
        </div>

        <div className="mt-1 text-2xl font-bold">
          1,248
        </div>

        <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
          +18% this week
        </div>
      </div>

      {/* Browser */}
      <div className="overflow-hidden rounded-3xl border bg-background shadow-2xl ring-1 ring-border/60">

        {/* Browser Top */}
        <div className="flex items-center justify-between border-b bg-muted/40 px-5 py-3">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="text-sm font-semibold">
            Formly
          </span>

          <button className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Publish
          </button>
        </div>

        {/* Toolbar */}

        <div className="flex items-center justify-between border-b px-5 py-3">

          <div className="flex gap-6 text-sm">

            <div className="font-semibold text-primary">
              Builder
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="h-4 w-4" />
              Preview
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <LayoutDashboard className="h-4 w-4" />
              Analytics
            </div>

          </div>

          <Share2 className="h-4 w-4 text-muted-foreground" />

        </div>

        {/* Builder */}

        <div className="space-y-4 p-6">

          <Field
            icon={<Type className="h-4 w-4" />}
            label="Full Name"
          />

          <Field
            icon={<Mail className="h-4 w-4" />}
            label="Email"
          />

          <Field
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
          />

          <Field
            icon={<ChevronDown className="h-4 w-4" />}
            label="Country"
          />

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed py-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted">
            <Plus className="h-4 w-4" />

            Add New Field
          </button>

        </div>
      </div>

      {/* Floating Publish Badge */}

      <div className="absolute -bottom-6 right-8 hidden rounded-2xl border bg-background/90 px-5 py-3 shadow-xl backdrop-blur lg:flex">

        <div>

          <div className="text-xs text-muted-foreground">
            Form Status
          </div>

          <div className="font-semibold">
            Published ✅
          </div>

        </div>

      </div>
    </div>
  );
}