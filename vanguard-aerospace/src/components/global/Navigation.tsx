"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Rocket, ShieldCheck, Home, Orbit, Menu, X } from "lucide-react";
import clsx from "clsx";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/orbital-flights", label: "Orbital Flights", icon: Rocket },
    { href: "/habitats", label: "Habitats", icon: Orbit },
    { href: "/safety", label: "Safety", icon: ShieldCheck },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled || isOpen ? "bg-black/90 backdrop-blur-md py-4 border-b border-[#9b51e0]/20" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Orbit className="w-8 h-8 text-[#d194ff] group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-tech text-xl tracking-widest uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9b51e0]">
            Vanguard
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm font-sans tracking-wide uppercase transition-colors relative group",
                pathname === href ? "text-[#d194ff]" : "text-white/70 hover:text-white"
              )}
            >
              {label}
              <span className={clsx(
                "absolute -bottom-2 left-0 w-full h-[2px] bg-[#9b51e0] transition-transform origin-left duration-300",
                pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white hover:text-[#d194ff] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-[#9b51e0]/20 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[400px] py-4" : "max-h-0 py-0 border-transparent opacity-0"
        )}
      >
        <div className="flex flex-col px-6 gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 text-sm font-sans tracking-wide uppercase p-3 rounded-lg transition-colors",
                pathname === href ? "text-[#d194ff] bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
