import { Container } from "~/components/shared/container";

import { CTAActions } from "./cta-actions";
import { CTAContent } from "./cta-content";

export function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-muted/30 px-8 py-20 sm:px-16">
          <CTAContent />

          <div className="mt-12">
            <CTAActions />
          </div>
        </div>
      </Container>
    </section>
  );
}