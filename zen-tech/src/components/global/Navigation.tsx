"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/products", label: "Products" },
    { path: "/engineering", label: "Engineering" },
    { path: "/support", label: "Support" },
  ];

  return (
    <>
      {/* Absolute Minimal Top Logo */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none mix-blend-difference">
        <Link href="/" className="pointer-events-auto cursor-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-8 right-8 z-[60] md:hidden pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-pure-white/80 backdrop-blur-xl border border-carbon/5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-carbon hover:bg-carbon/5 transition-colors cursor-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-pure-white/95 backdrop-blur-2xl z-50 transition-all duration-500 flex flex-col items-center justify-center md:hidden pointer-events-auto ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-[0.2em] text-carbon hover:text-titanium transition-colors uppercase cursor-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Taskbar (Desktop) */}
      <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none hidden md:block">
        <nav className="flex gap-2 p-2 bg-pure-white/80 backdrop-blur-xl border border-carbon/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] pointer-events-auto">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="cursor-none px-6 py-3 text-xs uppercase tracking-widest text-titanium hover:text-carbon hover:bg-carbon/5 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
