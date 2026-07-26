import { Container } from "~/components/shared/container";

import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="space-y-16">
          <div className="flex flex-col justify-between gap-16 lg:flex-row">
            <FooterBrand />

            <FooterLinks />
          </div>

          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}