import { AUTH_CONTENT } from "./constant";
import { AuthFeatures } from "./auth-features";
import { AuthLogo } from "./auth-logo";

export function AuthSidePanel() {
  return (
    <aside className="hidden flex-col justify-between border-r bg-muted/30 p-12 lg:flex">
      <div className="space-y-12">
        <AuthLogo />

        <div className="space-y-4">
          <h1 className="max-w-lg text-5xl font-bold tracking-tight">
            {AUTH_CONTENT.heading.title}
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {AUTH_CONTENT.heading.description}
          </p>
        </div>

        <AuthFeatures />
      </div>

      <p className="text-sm text-muted-foreground">
        © 2026 Formly
      </p>
    </aside>
  );
}