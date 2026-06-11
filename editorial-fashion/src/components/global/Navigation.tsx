"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Archive", href: "/archive" },
  { name: "Editorial", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md pointer-events-auto border-b border-foreground/20">
        <div className="flex flex-col items-center pt-8 pb-4 relative">
          
          {/* Mobile Menu Button - positioned absolutely to the right */}
          <button 
            className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 cursor-none hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* Massive Centered Masthead Logo */}
          <Link href="/" className="mb-6 md:mb-6 cursor-none hover:opacity-80 transition-opacity duration-300">
            <span className="text-4xl md:text-6xl lg:text-9xl font-serif tracking-tight leading-none uppercase">
              Vanguard
            </span>
          </Link>

          {/* Desktop Sticky Thin Bottom Menu */}
          <nav className="hidden md:flex gap-16 lg:gap-32 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.3em] font-sans hover:text-primary transition-colors duration-500 cursor-none py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-background flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button 
          className="absolute right-6 top-8 cursor-none hover:text-primary transition-colors"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X className="w-10 h-10" />
        </button>

        <nav className="flex flex-col gap-12 items-center text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-4xl font-serif uppercase tracking-widest hover:text-primary transition-colors duration-500 cursor-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
