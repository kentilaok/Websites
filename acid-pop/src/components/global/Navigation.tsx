"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      
      <div className="absolute top-6 left-6 bg-acid-yellow border-4 border-deep-purple p-4 transform -rotate-3 pointer-events-auto hover:rotate-0 transition-transform z-50">
        <Link href="/" className="cursor-none font-black text-2xl uppercase tracking-tighter" onClick={() => setIsOpen(false)}>
          ACID_POP
        </Link>
      </div>

      {/* Hamburger Toggle (Mobile/Tablet) */}
      <div className="absolute top-6 right-6 md:hidden pointer-events-auto z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-deep-purple text-off-white border-4 border-electric-pink p-3 cursor-none hover:bg-electric-pink hover:text-deep-purple transition-colors transform rotate-2 shadow-[4px_4px_0px_0px_rgba(226,255,0,1)]"
        >
          {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="absolute top-12 right-12 hidden md:flex flex-col items-end gap-2 pointer-events-auto">
        <Link href="/work" className="cursor-none bg-deep-purple text-off-white font-bold text-xl px-4 py-2 hover:bg-electric-pink hover:text-deep-purple transition-colors transform rotate-2">
          THE WORK
        </Link>
        <Link href="/culture" className="cursor-none bg-deep-purple text-off-white font-bold text-xl px-4 py-2 hover:bg-electric-pink hover:text-deep-purple transition-colors transform -rotate-1">
          OUR CULTURE
        </Link>
        <Link href="/hire" className="cursor-none bg-electric-pink text-deep-purple font-black text-2xl px-6 py-3 mt-4 hover:scale-110 transition-transform shadow-[8px_8px_0px_0px_rgba(36,0,70,1)] border-4 border-deep-purple">
          HIRE US
        </Link>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-deep-purple pointer-events-auto flex flex-col justify-center items-center gap-8 md:hidden p-8 z-40">
           <Link href="/work" onClick={() => setIsOpen(false)} className="cursor-none text-acid-yellow font-black text-5xl hover:text-electric-pink transition-colors transform -rotate-2">
            THE WORK
          </Link>
          <Link href="/culture" onClick={() => setIsOpen(false)} className="cursor-none text-acid-yellow font-black text-5xl hover:text-electric-pink transition-colors transform rotate-3">
            OUR CULTURE
          </Link>
          <Link href="/hire" onClick={() => setIsOpen(false)} className="cursor-none bg-electric-pink text-deep-purple font-black text-4xl px-8 py-4 mt-8 hover:scale-110 transition-transform shadow-[12px_12px_0px_0px_rgba(226,255,0,1)] border-4 border-acid-yellow">
            HIRE US
          </Link>
        </div>
      )}
    </header>
  );
}
