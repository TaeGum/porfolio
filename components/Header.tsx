/* eslint-disable @next/next/no-img-element */
// components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    // <header className="flex items-center gap-32 justify-end max-w-6xl mx-auto py-8 px-6 relative z-10">
    <header className="max-w-6xl mx-auto py-8 px-6 flex items-center gap-[4.813rem] md:gap-10 justify-end relative z-10">
      <div className="flex items-center gap-2">
        <img
          src="/vector0.svg"
          className="w-8 h-8 sm:w-10 sm:h-10"
          alt="logo"
        />
        <span
          className="font-handlee text-lg lg:text-3xl sm:text-2xl md:text-3xl tracking-tight text-primary"
          style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
        >
          LeeTaeGum
        </span>
      </div>
      <nav className="flex gap-4 sm:gap-8">
        <Link
          href="#portfolio"
          className="font-inter text-base lg:text-2xl sm:text-lg text-primary hover:text-accent transition"
        >
          Projects
        </Link>
        <Link
          href="mailto:suk0510@naver.com"
          className="font-inter text-base lg:text-2xl sm:text-lg text-primary hover:text-accent transition"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
