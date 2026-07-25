import { Container } from "~/components/shared/container";

import { SocialProofHeading } from "./social-proof-heading";
import { SocialProofStats } from "./social-proof-stats";

export function SocialProof() {
  return (
    <section className="py-20">
      <Container>
        <div className="space-y-16">
          <SocialProofHeading />

          <SocialProofStats />
        </div>
      </Container>
    </section>
  );
}