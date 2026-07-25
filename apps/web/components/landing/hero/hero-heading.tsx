import { HERO_CONTENT } from "./constant";

export function HeroHeading() {
  return (
    <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
      <span>{HERO_CONTENT.title.first}</span>

      <br />

      <span>{HERO_CONTENT.title.second} </span>

      <span className="bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
        {HERO_CONTENT.title.highlight}
      </span>

      <br />

      <span>{HERO_CONTENT.title.last}</span>
    </h1>
  );
}