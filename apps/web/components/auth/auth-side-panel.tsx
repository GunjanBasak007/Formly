import { Sparkles } from "lucide-react";

import { AUTH_CONTENT } from "./constant";
import { AuthFeatures } from "./auth-features";
import { AuthLogo } from "./auth-logo";

export function AuthSidePanel() {
  return (
    <aside className="relative hidden overflow-hidden border-r bg-gradient-to-br from-background via-violet-50/40 to-background p-10 lg:flex dark:from-background dark:via-violet-950/10 dark:to-background">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-1 flex-col">
        <AuthLogo />

        <div className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600 dark:text-violet-300">
          <Sparkles className="size-4" />
          Modern Form Platform
        </div>

        <div className="mt-8">
          <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight">
            {AUTH_CONTENT.heading.title}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
            {AUTH_CONTENT.heading.description}
          </p>
        </div>

        <div className="mt-10">
          <AuthFeatures />
        </div>

        <div className="mt-auto pt-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Formly
          </p>
        </div>
      </div>
    </aside>
  );
}