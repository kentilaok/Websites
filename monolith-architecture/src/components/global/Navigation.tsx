"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Projects", href: "/projects", index: "01.1" },
  { name: "Studio", href: "/studio", index: "01.2" },
  { name: "Inquiries", href: "/contact", index: "01.3" },
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
      <header className="fixed top-0 left-0 w-full z-50 bg-obsidian text-stark-white pointer-events-auto border-b border-stark-white/20 uppercase font-sans">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stark-white/20 border-b border-stark-white/20">
          
          {/* Brand Block */}
          <div className="p-4 md:p-6 flex items-center col-span-1 border-b md:border-b-0 border-stark-white/20">
            <Link href="/" onClick={() => setIsOpen(false)} className="cursor-none group w-full flex justify-between items-center">
              <span className="text-xl font-bold tracking-tighter">Monolith</span>
              <span className="text-xs text-hyper-lime opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">[SYS.ACTIVE]</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="p-4 flex md:hidden items-center justify-end col-span-1 border-b border-stark-white/20">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-none hover:text-hyper-lime transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Blocks */}
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hidden md:flex p-4 md:p-6 text-xs tracking-widest hover:bg-stark-white hover:text-obsidian transition-colors duration-300 cursor-none justify-between items-center group"
            >
              <span className="opacity-50 group-hover:opacity-100">[{link.index}]</span>
              <span>{link.name}</span>
            </Link>
          ))}

        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col pointer-events-auto uppercase font-sans md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-24 px-6 flex-1 flex flex-col">
          <div className="flex flex-col divide-y divide-stark-white/20 border-t border-b border-stark-white/20">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-8 text-2xl tracking-widest hover:text-hyper-lime transition-colors duration-300 cursor-none flex justify-between items-center group"
              >
                <span className="opacity-50 text-sm">[{link.index}]</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
