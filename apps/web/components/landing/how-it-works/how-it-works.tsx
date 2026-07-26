import { Container } from "~/components/shared/container";

import { HowItWorksHeading } from "./how-it-works-heading";
import { StepsGrid } from "./steps-grid";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="space-y-28">
          <HowItWorksHeading />

          <StepsGrid />
        </div>
      </Container>
    </section>
  );
}