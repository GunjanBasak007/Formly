import { Container } from "~/components/shared/container";
import { HeroActions } from "./hero-actions";
import { HeroBackground } from "./hero-background";
import { HeroBadge } from "./hero-badge";
import { HeroDescription } from "./hero-description";
import { HeroHeading } from "./hero-heading";
import { HeroPreview } from "./hero-preview";
import { HeroTrust } from "./hero-trust";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
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