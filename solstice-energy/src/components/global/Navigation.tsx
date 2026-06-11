"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/technology" },
    { name: "Projects", href: "/projects" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container relative z-50 mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Sun className="text-solar-500 group-hover:rotate-90 transition-transform duration-700" size={32} />
          <span className="text-2xl font-bold tracking-tighter text-gradient">SOLSTICE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-solar-600 ${
                pathname === link.href ? "text-solar-600" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-solar-500 hover:bg-solar-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-solar-500/30">
            Get in Touch
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-solar-50/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-bold uppercase tracking-wider ${
              pathname === link.href ? "text-solar-600" : "text-gray-800"
            } hover:text-solar-500 transition-colors`}
          >
            {link.name}
          </Link>
        ))}
        <button className="bg-solar-500 hover:bg-solar-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-solar-500/30 transition-all">
          Get in Touch
        </button>
      </div>
    </header>
  );
}
