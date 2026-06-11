"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Fragrances", path: "/fragrances" },
    { name: "The Nose", path: "/about" },
    { name: "Stockists", path: "/stockists" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-8 mix-blend-difference text-skin flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/" className="cursor-none font-serif text-2xl italic tracking-widest">Sillage.</Link>
        </div>
        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-none hover:opacity-50 transition-opacity"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-oud text-skin z-40 flex flex-col justify-center px-12 md:px-32"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-serif italic text-6xl md:text-9xl cursor-none hover:text-rose transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-12 left-12 text-xs uppercase tracking-[0.3em] opacity-50 flex gap-8">
              <span>Paris</span>
              <span>Grasse</span>
              <span>New York</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
