"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Obsidian", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Advisory", href: "/advisory" },
  { name: "Application", href: "/private-application" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-8 md:px-16 py-6",
          scrolled ? "bg-obsidian/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-widest text-white relative z-50">
            OBSIDIAN<span className="text-silver-500">.</span>
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            {links.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.2em] uppercase transition-colors duration-500",
                  pathname === link.href ? "text-white" : "text-silver-500 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button 
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105",
                pathname === link.href ? "text-white" : "text-silver-500 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
