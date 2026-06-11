"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Fleet", href: "/fleet" },
  { name: "Solutions", href: "/solutions" },
  { name: "Tracking", href: "/tracking" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-hyperion-border bg-hyperion-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <Activity className="w-6 h-6 text-hyperion-neon-orange group-hover:text-hyperion-neon-blue transition-colors duration-300" />
          <span className="text-xl font-bold font-mono tracking-wider uppercase text-hyperion-text">
            HYPERION<span className="text-hyperion-neon-blue">_LOGISTICS</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-mono text-sm tracking-widest uppercase transition-colors duration-300 hover:text-hyperion-neon-blue ${
                pathname === link.href ? "text-hyperion-neon-blue" : "text-hyperion-muted"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-8 left-0 right-0 h-0.5 bg-hyperion-neon-blue shadow-[0_0_10px_var(--color-hyperion-neon-blue)]"
                />
              )}
            </Link>
          ))}
          <button className="px-6 py-2 border border-hyperion-neon-orange text-hyperion-neon-orange hover:bg-hyperion-neon-orange/10 font-mono text-sm tracking-wider transition-colors duration-300 uppercase shadow-[0_0_10px_rgba(255,87,34,0.2)]">
            Client Portal
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-hyperion-text hover:text-hyperion-neon-blue transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-hyperion-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-mono text-2xl tracking-widest uppercase transition-colors duration-300 hover:text-hyperion-neon-blue ${
                    pathname === link.href ? "text-hyperion-neon-blue" : "text-hyperion-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 w-full max-w-xs px-6 py-4 border border-hyperion-neon-orange text-hyperion-neon-orange hover:bg-hyperion-neon-orange/10 font-mono text-lg tracking-wider transition-colors duration-300 uppercase shadow-[0_0_10px_rgba(255,87,34,0.2)]"
              >
                Client Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
