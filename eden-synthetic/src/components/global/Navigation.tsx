"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Dna } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Core", href: "/" },
    { name: "Innovations", href: "/innovations" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Lab Access", href: "/lab-access" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-gray-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-bg-secondary rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-brand-green transition-colors">
            <Dna className="w-6 h-6 text-brand-green group-hover:text-brand-pink transition-colors" />
          </div>
          <span className="font-bold text-xl tracking-tight">EDEN<span className="text-gray-400 font-light">SYNTH</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-green relative ${
                pathname === link.href ? "text-brand-green" : "text-gray-500"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-green rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/lab-access"
            className="ml-4 px-6 py-2.5 bg-text-main text-white text-sm font-medium rounded-full hover:bg-brand-green hover:text-black transition-colors"
          >
            Request Samples
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium ${
                pathname === link.href ? "text-brand-green" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
