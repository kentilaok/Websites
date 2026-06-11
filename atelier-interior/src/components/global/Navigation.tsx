"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Collection", href: "/collection" },
  { name: "Craft", href: "/craft" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-50 flex justify-between p-8 md:p-12">
        {/* Top Left: Logo */}
        <header className="pointer-events-auto">
          <Link href="/" className="cursor-none" onClick={() => setIsOpen(false)}>
            <span className="text-2xl font-serif italic tracking-wide text-charcoal">Atelier.</span>
          </Link>
        </header>

        {/* Right Edge: Vertical Navigation for Desktop */}
        <nav className="pointer-events-auto hidden md:flex flex-col items-end gap-8 pt-24 md:pt-32">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-4 cursor-none"
            >
              <span className="w-0 h-[1px] bg-muted-coral group-hover:w-8 transition-all duration-500 ease-out" />
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="pointer-events-auto md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-none text-charcoal hover:text-muted-coral transition-colors z-[60] relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-[#F5F5F0] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex flex-col items-center gap-4 cursor-none"
            >
              <span className="text-2xl uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500">
                {link.name}
              </span>
              <span className="w-0 h-[1px] bg-muted-coral group-hover:w-16 transition-all duration-500 ease-out" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
