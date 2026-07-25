import { Container } from "~/components/shared/container";

import { HowItWorksHeading } from "./how-it-works-heading";
import { StepsGrid } from "./steps-grid";

export function HowItWorks() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-16">
          <HowItWorksHeading />

          <StepsGrid />
        </div>
      </Container>
    </section>
  );
}