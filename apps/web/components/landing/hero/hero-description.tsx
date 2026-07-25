import { HERO_CONTENT } from "./constant";

export function HeroDescription() {
  return (
    <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
      {HERO_CONTENT.description}
    </p>
  );
}