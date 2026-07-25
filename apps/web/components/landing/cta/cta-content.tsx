import { CTA_CONTENT } from "./constant";

export function CTAContent() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {/* <span className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium"> */}
       {/* {CTA_CONTENT.badge} */}
      {/* </span> */}

      <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        {CTA_CONTENT.title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {CTA_CONTENT.description}
      </p>
    </div>
  );
}