import { Container } from "~/components/shared/container";

import { CTAActions } from "./cta-actions";
import { CTAContent } from "./cta-content";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="rounded-[2rem] border border-border/60 bg-background/70 px-8 py-16 shadow-xl backdrop-blur lg:px-16 lg:py-20">
          <div className="space-y-10">
            <CTAContent />

            <CTAActions />
          </div>
        </div>
      </Container>
    </section>
  );
}