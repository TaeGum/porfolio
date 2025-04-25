/* eslint-disable @next/next/no-img-element */
// components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center gap-32 justify-end max-w-6xl mx-auto py-8 px-6 relative z-10">
      <div className="flex items-center gap-2">
        <img src="/vector0.svg" className="w-8 h-8" alt="logo" />
        <span
          className="font-handlee text-[20px] text-primary"
          style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
        >
          LeeTaeGum
        </span>
      </div>
      <nav className="flex gap-8">
        <Link
          href="#portfolio"
          className="font-inter text-[24px] text-primary hover:text-accent transition"
        >
          Portfolio
        </Link>
        <Link
          href="#"
          className="font-inter text-[24px] text-primary hover:text-accent transition"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
