"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "// HOME" },
    { href: "/threat-matrix", label: "// THREAT_MATRIX" },
    { href: "/solutions", label: "// SOLUTIONS" },
    { href: "/war-room", label: "// WAR_ROOM" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9000] p-6 mix-blend-difference bg-[var(--color-aegis-black)]/80 backdrop-blur-sm border-b border-[var(--color-aegis-dark-grey)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-glitch text-white brutal-clip px-4 py-2 bg-[var(--color-aegis-dark-grey)] border-l-4 border-[var(--color-aegis-neon-red)]">
          AEGIS_CYBER
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 glitch-hover ${
                pathname === link.href ? "text-[var(--color-aegis-neon-red)] font-bold" : "text-[var(--color-aegis-light-grey)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
