import { Container } from "~/components/shared/container";

import { ProductHeading } from "./product-heading";
import { ProductPreview } from "./product-preview";

export function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container className="space-y-16">
        <ProductHeading />
        <ProductPreview />
      </Container>
    </section>
  );
}