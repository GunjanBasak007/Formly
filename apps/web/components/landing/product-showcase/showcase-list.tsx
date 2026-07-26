import { PRODUCT_SHOWCASE_CONTENT } from "./constant";
import { ShowcaseItem } from "./showcase-item";

export function ShowcaseList() {
  return (
    <div className="space-y-32">
      {PRODUCT_SHOWCASE_CONTENT.showcases.map((item, index) => (
        <ShowcaseItem
          key={item.title}
          icon={item.icon}
          badge={item.badge}
          title={item.title}
          description={item.description}
          highlights={item.highlights}
          image={item.image}
          alt={item.alt}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}