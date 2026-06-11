"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/platform", label: "01. PLATFORM" },
  { path: "/algorithms", label: "02. ALGORITHMS" },
  { path: "/contact", label: "03. INIT_CONNECTION" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <div className="border border-matrix-green/30 bg-cyber-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center text-xs font-mono tracking-widest text-matrix-green">
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-alert-red animate-pulse rounded-full" />
            <Link href="/" className="cursor-none hover:text-white transition-colors glitch-text" data-text="CYBER_KINETIC">
              CYBER_KINETIC
            </Link>
            <span className="opacity-50 hidden md:inline">:: SYS.ONLINE</span>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className="cursor-none hover:text-white hover:bg-matrix-green/10 px-2 py-1 transition-all"
              >
                [{item.label}]
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="cursor-none p-1 border border-matrix-green hover:bg-matrix-green hover:text-cyber-black transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-sm flex flex-col items-center justify-center border-x border-matrix-green/20">
          <nav className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-none text-xl font-mono text-matrix-green hover:text-white hover:bg-matrix-green/10 px-6 py-3 transition-all border border-transparent hover:border-matrix-green/50"
              >
                [{item.label}]
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-10 flex gap-4 items-center text-xs font-mono text-matrix-green/50">
            <div className="w-2 h-2 bg-alert-red animate-pulse rounded-full" />
            <span>SYS.ONLINE</span>
          </div>
        </div>
      )}
    </>
  );
}
