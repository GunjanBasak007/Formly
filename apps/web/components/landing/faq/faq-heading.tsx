import { FAQ_CONTENT } from "./constant";

export function FAQHeading() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {FAQ_CONTENT.heading.title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        {FAQ_CONTENT.heading.description}
      </p>
    </div>
  );
}