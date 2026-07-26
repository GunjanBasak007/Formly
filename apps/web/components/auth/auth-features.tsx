import { AUTH_CONTENT } from "./constant";

export function AuthFeatures() {
  return (
    <div className="space-y-4">
      {AUTH_CONTENT.features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-violet-300/40 hover:bg-background/70 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-md">
              <Icon className="size-5" />
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}