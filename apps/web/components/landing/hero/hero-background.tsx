export function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Purple Glow */}
      <div
        className="
          absolute
          -left-32
          top-20
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-violet-500/15
          blur-[140px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          -right-24
          top-16
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-blue-500/10
          blur-[170px]
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute
          bottom-[-10rem]
          left-1/2
          h-[24rem]
          w-[24rem]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[130px]
        "
      />

      {/* Soft Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />
    </>
  );
}