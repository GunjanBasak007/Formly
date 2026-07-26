import Image from "next/image";

import { FOOTER_CONTENT } from "./constant";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <div className="flex items-center gap-3">
        <Image
          src="/formly.png"
          alt="Formly"
          width={42}
          height={42}
          className="rounded-xl"
        />

        <span className="text-2xl font-bold tracking-tight">
          {FOOTER_CONTENT.brand.title}
        </span>
      </div>

      <p className="mt-6 leading-8 text-muted-foreground">
        {FOOTER_CONTENT.brand.description}
      </p>
    </div>
  );
}