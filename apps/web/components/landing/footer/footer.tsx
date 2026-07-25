import { Container } from "~/components/shared/container";

import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <FooterBrand />

            <FooterLinks />
          </div>

          <div className="mt-16">
            <FooterBottom />
          </div>
        </div>
      </Container>
    </footer>
  );
}