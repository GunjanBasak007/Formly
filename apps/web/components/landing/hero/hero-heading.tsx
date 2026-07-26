export function HeroHeading() {
  return (
    <div className="space-y-4">
      <h1
        className="
          max-w-2xl
          text-5xl
          font-extrabold
          tracking-tight
          text-slate-900
          sm:text-6xl
          lg:text-7xl
          lg:leading-[1.05]
        "
      >
        Build Forms That
        <br />

        <span className="text-slate-900">
          People Actually{" "}
        </span>

        <span
          className="
            bg-gradient-to-r
            from-violet-600
            via-indigo-500
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >
          Enjoy Filling
        </span>
      </h1>
    </div>
  );
}