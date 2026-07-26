import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src="/formly.png"
          alt="Formly Logo"
          width={48}
          height={48}
          priority
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <span className="text-2xl font-extrabold tracking-tight text-foreground">
        Formly
      </span>
    </Link>
  );
}