import { Container } from "~/components/shared/container";

import { HeroActions } from "./hero-actions";
import { HeroBadge } from "./hero-badge";
import { HeroDescription } from "./hero-description";
import { HeroHeading } from "./hero-heading";
import { HeroPreview } from "./hero-preview";
import { HeroTrust } from "./hero-trust";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8">
            <HeroBadge />

            <HeroHeading />

            <HeroDescription />

            <HeroActions />

            <HeroTrust />
          </div>

          {/* Right Preview */}
          <div className="relative mx-auto w-full max-w-2xl">
            <HeroPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}