"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/guides", label: "Our Guides" },
    { href: "/booking", label: "Booking" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex items-center justify-between pointer-events-none">
      <Link href="/" className="pointer-events-auto flex items-center gap-2 text-snow hover:text-moss-400 transition-colors">
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

      <div className="pointer-events-auto">
        <Link href="/booking" className="bg-moss-600 hover:bg-moss-500 text-snow px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-colors font-semibold hidden md:block">
          Plan Your Ascent
        </Link>
      </div>
    </nav>
  );
}
