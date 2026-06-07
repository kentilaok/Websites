"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor } from "lucide-react";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/submersibles", label: "Submersibles" },
    { href: "/expeditions", label: "Expeditions" },
    { href: "/research", label: "Research" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center glass-panel border-b border-bio-cyan/20">
      <Link href="/" className="flex items-center gap-2 group">
        <Anchor className="text-bio-cyan group-hover:text-bio-green transition-colors duration-300" />
        <span className="text-xl font-bold tracking-widest text-glow-cyan uppercase text-white">
          Abyss Oceanics
        </span>
      </Link>

      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "uppercase tracking-wider text-sm transition-all duration-300 relative py-1",
                pathname === link.href
                  ? "text-bio-cyan font-semibold text-glow-cyan"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-bio-cyan shadow-[0_0_8px_#00ffff]" />
              )}
            </Link>
          </li>
        ))}
      </ul>
      
      <button className="px-5 py-2 text-sm font-semibold tracking-wider uppercase border border-bio-cyan/50 text-bio-cyan rounded hover:bg-bio-cyan/10 hover:text-white transition-all duration-300 bg-glow-cyan">
        Dive In
      </button>
    </nav>
  );
}
