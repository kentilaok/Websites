"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/apparel", label: "Apparel" },
  { href: "/technology", label: "Technology" },
  { href: "/athletes", label: "Athletes" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-verve-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-verve-light">
          Verve<span className="text-verve-orange">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-bold tracking-widest uppercase transition-colors hover:text-verve-orange",
                pathname === link.href ? "text-verve-orange" : "text-verve-light"
              )}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-verve-orange text-verve-light px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-verve-red transition-colors">
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-verve-light hover:text-verve-orange transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] w-full h-[calc(100vh-88px)] bg-verve-dark/98 backdrop-blur-xl border-t border-verve-gray flex flex-col md:hidden z-40 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "p-6 border-b border-verve-gray text-center font-bold tracking-widest uppercase",
                pathname === link.href ? "text-verve-orange" : "text-verve-light"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-6">
            <button className="w-full bg-verve-orange text-verve-light px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-verve-red transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
