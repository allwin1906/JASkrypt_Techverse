"use client";

import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Internship", href: "#internship" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--border-light)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[4.5rem] md:px-8">
        <Link href="#" className="relative flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="JASkrypt"
            width={120}
            height={40}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-[0.2em] text-[var(--text-secondary)] uppercase transition-colors hover:text-[var(--gold-1)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="btn-primary !py-3 !px-5 !text-xs md:!px-7"
        >
          Start Project
        </Link>
      </div>
    </header>
  );
}
