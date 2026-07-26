import { PRODUCT_CONTENT } from "./constant";

export function ProductHeading() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 text-center">
      <span className="inline-flex rounded-full border px-3 py-1 text-sm font-medium">
        {PRODUCT_CONTENT.badge}
      </span>

      <h2 className="text-4xl font-bold tracking-tight">
        {PRODUCT_CONTENT.title}
      </h2>

      <p className="text-lg text-muted-foreground">
        {PRODUCT_CONTENT.description}
      </p>
    </div>
  );
}