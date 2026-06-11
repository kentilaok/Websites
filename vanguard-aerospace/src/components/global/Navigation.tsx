"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Rocket, ShieldCheck, Home, Orbit } from "lucide-react";
import clsx from "clsx";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-[#9b51e0]/20" : "bg-transparent py-6"
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
      </div>
    </header>
  );
}
