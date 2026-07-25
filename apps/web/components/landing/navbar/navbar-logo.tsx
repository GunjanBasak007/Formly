import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="flex items-center gap-3"
    >
      <Image
        src="/formly.png"
        alt="Formly Logo"
        width={48}
        height={48}
        priority
      />

      <span className="text-xl font-bold tracking-tight">
        Formly
      </span>
    </Link>
  );
}