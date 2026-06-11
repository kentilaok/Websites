"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/installations", label: "Installations" },
    { href: "/care-guide", label: "Care Guide" },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-earth-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group relative z-[60]">
            <Leaf className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45 text-sage-300" />
            <span className="font-serif text-xl tracking-wider">EQUINOX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group overflow-hidden ${
                  pathname === link.href ? "text-sage-200" : "text-earth-50 hover:text-sage-200"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage-200 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative z-[60] text-earth-50 hover:text-sage-200 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-950 z-[55] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-serif text-4xl sm:text-5xl tracking-wider transition-all duration-500 transform ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${
                pathname === link.href ? "text-sage-300" : "text-earth-50 hover:text-sage-200"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
