"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Timepieces", href: "/timepieces" },
    { name: "Craftsmanship", href: "/craftsmanship" },
    { name: "Concierge", href: "/concierge" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? "bg-brand-darker/90 backdrop-blur-md py-4 border-b border-brand-gray" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl tracking-[0.2em] text-brand-light uppercase relative group">
            Chronos
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:text-brand-gold relative group ${pathname === link.href ? "text-brand-gold" : "text-brand-text/70"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-light z-[110]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-brand-gold" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-brand-darker z-[90] flex flex-col justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-10 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-serif text-4xl tracking-widest transition-colors duration-300 hover:text-brand-gold ${pathname === link.href ? "text-brand-gold" : "text-brand-light"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
