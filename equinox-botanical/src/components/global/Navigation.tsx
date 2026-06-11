"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/installations", label: "Installations" },
    { href: "/care-guide", label: "Care Guide" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-earth-50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45 text-sage-300" />
          <span className="font-serif text-xl tracking-wider">EQUINOX</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group overflow-hidden ${
                pathname === link.href ? "text-sage-200" : "text-earth-50 hover:text-sage-200"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage-200 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
