"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { name: "VILLAS", path: "/villas" },
  { name: "SUSTAINABILITY", path: "/sustainability" },
  { name: "BOOKING", path: "/booking" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-ts-moss/10 ${scrolled ? 'bg-ts-sand/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-playfair text-2xl md:text-3xl italic font-bold tracking-tight text-ts-moss hover:text-ts-clay transition-colors">
          Terra
        </Link>
        
        <div className="hidden md:flex gap-12">
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className="font-manrope text-sm font-bold tracking-widest uppercase text-ts-moss hover:text-ts-clay relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-ts-clay rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-x-1/2" />
            </Link>
          ))}
        </div>

        <Link 
          href="/booking"
          className="font-manrope text-xs font-bold tracking-widest uppercase text-ts-sand bg-ts-moss px-6 py-3 hover:bg-ts-clay transition-colors"
        >
          RESERVE
        </Link>
      </div>
    </nav>
  );
}
