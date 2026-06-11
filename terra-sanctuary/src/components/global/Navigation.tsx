"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "VILLAS", path: "/villas" },
  { name: "SUSTAINABILITY", path: "/sustainability" },
  { name: "BOOKING", path: "/booking" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-ts-moss/10 ${scrolled ? 'bg-ts-sand/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="container flex items-center justify-between">
          <Link href="/" className="font-playfair text-2xl md:text-3xl italic font-bold tracking-tight text-ts-moss hover:text-ts-clay transition-colors z-[110] relative">
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

          <div className="hidden md:block">
            <Link 
              href="/booking"
              className="font-manrope text-xs font-bold tracking-widest uppercase text-ts-sand bg-ts-moss px-6 py-3 hover:bg-ts-clay transition-colors"
            >
              RESERVE
            </Link>
          </div>

          <button 
            className="md:hidden text-ts-moss z-[110] relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[105] bg-ts-sand flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-md">
              {links.map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-playfair text-4xl italic text-ts-moss hover:text-ts-clay transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-px bg-ts-moss/20 my-4" />
              <Link 
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="font-manrope w-full text-center text-sm font-bold tracking-widest uppercase text-ts-sand bg-ts-moss px-8 py-4 hover:bg-ts-clay transition-colors"
              >
                RESERVE NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
