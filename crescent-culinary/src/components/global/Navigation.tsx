"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Tasting Menu", path: "/tasting-menu" },
    { name: "Chefs", path: "/chefs" },
    { name: "Reservations", path: "/reservations" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
          scrolled ? "bg-charcoal-900/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300">
              CRESCENT
            </span>
            <span className="text-[10px] tracking-[0.3em] text-white/50 group-hover:text-gold-500/80 uppercase">
              Culinary
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  pathname === link.path ? "text-gold-400" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="px-6 py-2 border border-gold-500/30 text-gold-400 text-sm tracking-widest uppercase hover:bg-gold-500/10 transition-colors duration-300"
            >
              Book Table
            </Link>
          </nav>

          <button
            className="md:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-900/95 backdrop-blur-xl flex flex-col justify-center items-center transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-3xl tracking-widest transition-colors duration-300 ${
                pathname === link.path ? "text-gold-400" : "text-white hover:text-gold-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
