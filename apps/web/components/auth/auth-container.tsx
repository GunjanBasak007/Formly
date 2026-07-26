import type { ReactNode } from "react";

export function AuthContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex items-center justify-center px-6 py-10 lg:px-12">
      <div className="w-full max-w-md">
        {children}
      </div>
    </section>
  );
}