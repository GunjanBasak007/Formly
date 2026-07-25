import { Container } from "~/components/shared/container";

import { ProductShowcaseHeading } from "./showcase-heading";
import { ShowcaseList } from "./showcase-list";

export function ProductShowcase() {
  return (
    <section className="py-24">
      <Container>
        <div className="space-y-20">
          <ProductShowcaseHeading />

          <ShowcaseList />
        </div>
      </Container>
    </section>
  );
}