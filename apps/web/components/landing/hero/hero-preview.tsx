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
      <div
        className="
          group
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-border/70
          bg-background
          p-3
          transition-all
          duration-300
          hover:border-violet-200
          hover:bg-violet-50/40
        "
      >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>

        <span className="text-sm font-medium">{label}</span>
      </div>

      <GripVertical
        className="
          h-4
          w-4
          text-muted-foreground
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </div>
  );
}

export function HeroPreview() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Floating Analytics Card */}
        <div className="absolute -left-12 top-8 z-20 hidden lg:block">
          <div className="rounded-3xl border border-white/60 bg-background/80 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground">
                  Responses
                </span>
              </div>

            <div className="mt-2 text-3xl font-bold">
              1,248
            </div>

            <div className="mt-2 text-xs font-medium text-emerald-600">
              ↑ 18% this week
            </div>
          </div>
        </div>

      {/* Browser */}
        <div
          className="
              overflow-hidden
              rounded-3xl
              border
              border-white/50
              bg-background/95
              shadow-[0_30px_80px_rgba(15,23,42,0.18)]
              backdrop-blur
              ring-1
              ring-black/5
              transition-all
              duration-500
              lg:rotate-1
              hover:rotate-0
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:shadow-[0_40px_100px_rgba(15,23,42,0.22)]
              "
          >
        {/* Browser Top */}
        <div className="flex items-center justify-between border-b bg-muted/40 px-5 py-3">

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

            <span className="text-sm font-semibold">
              Form Builder
            </span>
          </div>

          <button
            className="
              rounded-lg
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              px-4
              py-1.5
              text-xs
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:shadow-lg
              hover:scale-105
            "
          >
            Publish
          </button>

        </div>

        {/* Toolbar */}

        <div className="flex items-center justify-between border-b px-5 py-3">

          <div className="flex gap-6 text-sm">

            <div
              className="
                rounded-full
                bg-primary/10
                px-3
                py-1
                font-semibold
                text-primary
              "
            >
              Builder
            </div>

              <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    px-2 py-1
                    text-muted-foreground
                    transition-colors
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
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

          <button
            className="
              flex w-full items-center justify-center gap-2
              rounded-2xl
              border border-dashed border-border/70
              py-4
              text-sm
              font-medium
              text-muted-foreground
              transition-all
              duration-300
              hover:border-violet-300
              hover:bg-violet-50/40
            "
          >
            <Plus className="h-4 w-4" />
            Add New Field
          </button>

        </div>
      </div>

      {/* Floating Publish Badge */}

      <div className="absolute -bottom-6 right-8 hidden rounded-2xl border bg-background/90 px-5 py-3 shadow-xl backdrop-blur lg:flex">

        <div>

          <div className="text-xs text-muted-foreground">
            Status
          </div>

          <div className="mt-1 font-semibold">
            🟢 Published
          </div>

          <div className="text-xs text-muted-foreground">
            Live & accepting responses
          </div>

        </div>

      </div>
    </div>
  );
}