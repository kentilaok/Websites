"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Platform", href: "/platform" },
  { name: "Vision", href: "/vision" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-[90%] md:w-auto">
        {/* Glassmorphic Floating Pill */}
        <header className="flex items-center justify-between md:justify-center gap-4 md:gap-8 px-6 py-4 bg-void-black/60 backdrop-blur-xl border border-stark-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          <Link href="/" className="cursor-none mr-auto md:mr-4">
            <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-indigo">
              PRISM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-stark-white/70 hover:text-stark-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button className="hidden md:block ml-4 px-6 py-2 bg-stark-white text-void-black text-xs font-mono uppercase tracking-widest rounded-full hover:bg-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition-all duration-300 cursor-none">
            Launch App
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stark-white/70 hover:text-stark-white transition-colors cursor-none p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto md:hidden">
          <nav className="flex flex-col gap-8 items-center text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-mono uppercase tracking-widest text-stark-white/70 hover:text-stark-white hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-8 px-8 py-4 bg-stark-white text-void-black text-lg font-mono uppercase tracking-widest rounded-full hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300 cursor-none">
              Launch App
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
