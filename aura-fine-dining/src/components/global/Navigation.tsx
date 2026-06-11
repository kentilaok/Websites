"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Concept", href: "/" },
  { name: "Tasting Menu", href: "/menu" },
  { name: "Provenance", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 pointer-events-none p-6 md:p-12 transition-colors duration-500 ${isOpen ? '' : 'mix-blend-difference'}`}>
        <div className={`flex justify-between items-start w-full pointer-events-auto transition-colors duration-500 ${isOpen ? 'text-warm-bone opacity-0' : 'text-warm-bone'}`}>
          
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col group cursor-none">
            <span className="text-4xl md:text-5xl font-serif tracking-tighter leading-none group-hover:italic transition-all duration-500">
              Aura.
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.3em] font-sans mt-2 opacity-60">
              Est. 2026
            </span>
          </Link>

          {/* Links */}
          <nav className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-sans hover:text-terracotta transition-colors duration-500 cursor-none relative overflow-hidden group"
              >
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute left-0 top-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-terracotta italic font-serif text-sm">
                  {link.name}
                </span>
              </Link>
            ))}
            <Link 
              href="/contact"
              className="text-xs uppercase tracking-[0.2em] font-sans border-b border-warm-bone/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors duration-500 cursor-none"
            >
              Reservations
            </Link>
          </nav>
          
          {/* Mobile menu trigger */}
          <button 
            className="md:hidden text-warm-bone cursor-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-forest-night z-[60] flex flex-col p-6 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-start w-full text-warm-bone">
          <Link href="/" className="flex flex-col group cursor-none" onClick={() => setIsOpen(false)}>
            <span className="text-4xl font-serif tracking-tighter leading-none italic">
              Aura.
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.3em] font-sans mt-2 opacity-60">
              Est. 2026
            </span>
          </Link>
          <button 
            className="text-warm-bone cursor-none p-2 -mr-2"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 mt-24 text-warm-bone items-center h-full justify-center pb-32">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif tracking-tight hover:text-terracotta transition-colors duration-500 cursor-none"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 text-sm uppercase tracking-[0.2em] font-sans border-b border-warm-bone/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors duration-500 cursor-none"
          >
            Reservations
          </Link>
        </nav>
      </div>
    </>
  );
}
