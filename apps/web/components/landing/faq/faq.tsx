import { Container } from "~/components/shared/container";

import { FAQHeading } from "./faq-heading";
import { FAQList } from "./faq-list";

export function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl space-y-16">
          <FAQHeading />

          <FAQList />
        </div>
      </Container>
    </section>
  );
}