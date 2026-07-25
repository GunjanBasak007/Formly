import Image from "next/image";
import { LucideIcon } from "lucide-react";

type ShowcaseItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse?: boolean;
};

export function ShowcaseItem({
  icon: Icon,
  title,
  description,
  image,
  alt,
  reverse = false,
}: ShowcaseItemProps) {
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Content */}
      <div>
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Preview */}
      <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
        <Image
          src={image}
          alt={alt}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}