import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "~/components/ui/button";

import { CTA_CONTENT } from "./constant";

export function CTAActions() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        asChild
        size="lg"
        className="h-12 rounded-xl px-8 text-base font-semibold"
      >
        <Link href={CTA_CONTENT.primaryButton.href}>
          {CTA_CONTENT.primaryButton.text}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <p className="text-sm text-muted-foreground">
        {CTA_CONTENT.footerText}
      </p>
    </div>
  );
}