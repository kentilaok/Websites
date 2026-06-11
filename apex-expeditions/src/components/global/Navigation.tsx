"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/guides", label: "Our Guides" },
    { href: "/booking", label: "Booking" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex items-center justify-between pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 text-snow hover:text-moss-400 transition-colors z-50">
          <Mountain size={28} strokeWidth={1.5} />
          <span className="font-display uppercase tracking-widest text-lg font-bold">Apex Expeditions</span>
        </Link>
        
        <div className="pointer-events-auto bg-terrain/80 backdrop-blur-md border border-snow/10 rounded-full px-6 py-3 hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-wider transition-colors hover:text-snow",
                pathname === link.href ? "text-moss-400 font-semibold" : "text-slate-400"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pointer-events-auto flex items-center gap-4 z-50">
          <Link href="/booking" className="bg-moss-600 hover:bg-moss-500 text-snow px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-colors font-semibold hidden md:block">
            Plan Your Ascent
          </Link>
          
          <button 
            className="md:hidden text-snow hover:text-moss-400 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-terrain/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-4xl uppercase tracking-widest transition-colors hover:text-moss-400",
                pathname === link.href ? "text-moss-400 font-bold" : "text-snow"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/booking" 
            className="mt-8 bg-moss-600 hover:bg-moss-500 text-snow px-8 py-4 rounded-full text-lg uppercase tracking-wider transition-colors font-semibold"
          >
            Plan Your Ascent
          </Link>
        </div>
      </div>
    </>
  );
}
