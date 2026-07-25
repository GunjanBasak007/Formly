import { Container } from "~/components/shared/container";

import { AudienceGrid } from "./audience-grid";
import { BuiltForEveryoneHeading } from "./built-for-everyone-heading";

export function BuiltForEveryone() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-16">
          <BuiltForEveryoneHeading />

          <AudienceGrid />
        </div>
      </Container>
    </section>
  );
}