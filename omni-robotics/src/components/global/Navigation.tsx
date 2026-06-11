"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Support", path: "/support" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-steel-900/90 backdrop-blur-md py-4 border-b border-steel-700" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-industrial-orange skew-x-[-15deg] flex items-center justify-center">
              <span className="text-white text-xs font-bold transform skew-x-[15deg]">OM</span>
            </div>
            <span className="text-industrial-orange">Omni</span>
            <span className="text-steel-500">Robotics</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-bold tracking-widest uppercase transition-colors relative group ${
                  pathname === link.path ? "text-safety-yellow" : "text-steel-400 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-industrial-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/support"
              className="bg-industrial-orange text-white px-6 py-2 uppercase font-bold text-sm tracking-widest skew-x-[-15deg] hover:bg-safety-yellow hover:text-steel-900 transition-colors inline-block"
            >
              <span className="block transform skew-x-[15deg]">Get Quote</span>
            </Link>
          </div>

          <button
            className="md:hidden text-white hover:text-industrial-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-steel-900/95 backdrop-blur-lg z-[60] flex flex-col justify-center items-center transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white hover:text-industrial-orange transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col gap-8 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black tracking-widest uppercase transition-colors ${
                pathname === link.path ? "text-safety-yellow" : "text-steel-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/support"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-industrial-orange text-white px-8 py-3 uppercase font-bold text-lg tracking-widest skew-x-[-15deg] hover:bg-safety-yellow hover:text-steel-900 transition-colors"
          >
            <span className="block transform skew-x-[15deg]">Get Quote</span>
          </Link>
        </div>
      </div>
    </>
  );
}
