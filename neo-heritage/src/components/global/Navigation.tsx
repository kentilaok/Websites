"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 mix-blend-difference text-linen pointer-events-none">
        <div className="flex justify-between items-start pointer-events-auto">
          
          {/* Left Links - Desktop Only */}
          <nav className="hidden md:flex flex-col gap-4 text-xs tracking-[0.2em] uppercase">
            <Link href="/suites" className="cursor-none hover:opacity-50 transition-opacity">The Suites</Link>
            <Link href="/wellness" className="cursor-none hover:opacity-50 transition-opacity">Wellness</Link>
          </nav>

          {/* Center Massive Crest */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
            <Link href="/" className="cursor-none">
              <h1 className="font-serif text-3xl italic tracking-widest">Le<br/>Montagne</h1>
            </Link>
          </div>

          {/* Right Links - Desktop Only */}
          <nav className="hidden md:flex flex-col gap-4 text-xs tracking-[0.2em] uppercase text-right">
            <Link href="/reservations" className="cursor-none hover:opacity-50 transition-opacity">Reservations</Link>
            <button onClick={() => setIsOpen(true)} className="cursor-none hover:opacity-50 transition-opacity flex justify-end"><Menu className="w-5 h-5" /></button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end w-full">
            <button onClick={() => setIsOpen(true)} className="cursor-none hover:opacity-50 transition-opacity">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-charcoal z-[60] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-6 right-6 md:top-12 md:right-12 text-linen hover:opacity-50 transition-opacity cursor-none"
        >
          <X className="w-8 h-8" />
        </button>
        
        <nav className="flex flex-col gap-8 text-center text-linen font-serif text-4xl md:text-6xl italic tracking-wide">
          <Link href="/" onClick={() => setIsOpen(false)} className="cursor-none hover:opacity-50 transition-opacity">Home</Link>
          <Link href="/suites" onClick={() => setIsOpen(false)} className="cursor-none hover:opacity-50 transition-opacity">The Suites</Link>
          <Link href="/wellness" onClick={() => setIsOpen(false)} className="cursor-none hover:opacity-50 transition-opacity">Wellness</Link>
          <Link href="/reservations" onClick={() => setIsOpen(false)} className="cursor-none hover:opacity-50 transition-opacity">Reservations</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="cursor-none hover:opacity-50 transition-opacity">Contact</Link>
        </nav>
      </div>
    </>
  );
}
