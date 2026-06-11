"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "// HOME" },
    { href: "/threat-matrix", label: "// THREAT_MATRIX" },
    { href: "/solutions", label: "// SOLUTIONS" },
    { href: "/war-room", label: "// WAR_ROOM" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9000] p-6 mix-blend-difference bg-[var(--color-aegis-black)]/80 backdrop-blur-sm border-b border-[var(--color-aegis-dark-grey)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        <Link href="/" className="text-xl font-bold text-glitch text-white brutal-clip px-4 py-2 bg-[var(--color-aegis-dark-grey)] border-l-4 border-[var(--color-aegis-neon-red)]">
          AEGIS_CYBER
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
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

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden text-white hover:text-[var(--color-aegis-neon-red)] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[var(--color-aegis-black)]/95 backdrop-blur-md z-[8999] flex flex-col items-center pt-16 gap-8 border-t border-[var(--color-aegis-dark-grey)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.href ? "text-[var(--color-aegis-neon-red)] font-bold" : "text-[var(--color-aegis-light-grey)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
