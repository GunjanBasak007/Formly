import { Container } from "~/components/shared/container";

import { FeaturesGrid } from "./features-grid";
import { FeaturesHeading } from "./features-heading";

export function Features() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Subtle Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)]
            bg-[size:64px_64px]
            [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]
          "
        />
      </div>

      <Container>
        <div className="space-y-20">
          <FeaturesHeading />

          <FeaturesGrid />
        </div>
      </Container>
    </section>
  );
}