import { ProductHeading } from "./product-heading";
import { ProductPreview } from "./product-preview";

export function Product() {
  return (
    <section id="product" className="container py-24">
      <ProductHeading />
      <ProductPreview />
    </section>
  );
}