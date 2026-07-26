import { Container } from "~/components/shared/container";

import { SocialProofHeading } from "./social-proof-heading";
import { SocialProofStats } from "./social-proof-stats";

export function SocialProof() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="space-y-24">
          <SocialProofHeading />

          <SocialProofStats />
        </div>
      </Container>
    </section>
  );
}