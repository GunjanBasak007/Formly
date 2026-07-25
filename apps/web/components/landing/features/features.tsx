import { Container } from "~/components/shared/container";

import { FeaturesGrid } from "./features-grid";
import { FeaturesHeading } from "./features-heading";

export function Features() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-16">
          <FeaturesHeading />

          <FeaturesGrid />
        </div>
      </Container>
    </section>
  );
}