import type { ReactNode } from "react";

import { AuthContainer } from "~/components/auth/auth-container";
import { AuthSidePanel } from "~/components/auth/auth-side-panel";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="grid min-h-screen lg:grid-cols-[44%_56%]">
      <AuthSidePanel />

      <AuthContainer>{children}</AuthContainer>
    </main>
  );
}