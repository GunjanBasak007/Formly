import { PRODUCT_SHOWCASE_CONTENT } from "./constant";
import { ShowcaseItem } from "./showcase-item";

export function ShowcaseList() {
  return (
    <div className="space-y-24">
      {PRODUCT_SHOWCASE_CONTENT.showcases.map((showcase, index) => (
        <ShowcaseItem
          key={showcase.title}
          icon={showcase.icon}
          title={showcase.title}
          description={showcase.description}
          image={showcase.image}
          alt={showcase.alt}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}