"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white p-6 md:p-10 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl tracking-widest uppercase">
          Lumina
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] text-white z-40 flex flex-col justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center text-5xl md:text-7xl font-serif font-light">
          <li>
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-[var(--color-accent)] transition-colors duration-300">Projects</Link>
          </li>
          <li>
            <Link href="/philosophy" className="hover:text-[var(--color-accent)] transition-colors duration-300">Philosophy</Link>
          </li>
          <li>
            <Link href="/studio" className="hover:text-[var(--color-accent)] transition-colors duration-300">Studio</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
