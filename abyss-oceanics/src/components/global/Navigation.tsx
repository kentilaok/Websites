"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/submersibles", label: "Submersibles" },
    { href: "/expeditions", label: "Expeditions" },
    { href: "/research", label: "Research" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-bio-cyan/20">
      <Link href="/" className="flex items-center gap-2 group z-50">
        <Anchor className="text-bio-cyan group-hover:text-bio-green transition-colors duration-300" />
        <span className="text-xl font-bold tracking-widest text-glow-cyan uppercase text-white">
          Abyss Oceanics
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
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
      
      <div className="hidden md:block">
        <button className="px-5 py-2 text-sm font-semibold tracking-wider uppercase border border-bio-cyan/50 text-bio-cyan rounded hover:bg-bio-cyan/10 hover:text-white transition-all duration-300 bg-glow-cyan">
          Dive In
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 text-bio-cyan hover:text-white transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden z-40",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-8 mb-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  "uppercase tracking-widest text-xl transition-all duration-300 relative py-2",
                  pathname === link.href
                    ? "text-bio-cyan font-bold text-glow-cyan"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-8 py-3 text-lg font-semibold tracking-wider uppercase border border-bio-cyan text-bio-cyan rounded hover:bg-bio-cyan/10 hover:text-white transition-all duration-300 bg-glow-cyan">
          Dive In
        </button>
      </div>
    </nav>
  );
}
