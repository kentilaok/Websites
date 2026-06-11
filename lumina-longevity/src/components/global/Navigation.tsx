"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Treatments", path: "/treatments" },
  { name: "Clinical Research", path: "/research" },
  { name: "Consultation", path: "/consultation" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4"
      >
        <nav className="flex items-center justify-between w-full max-w-3xl px-8 py-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <Link href="/" className="text-ll-blue-glow font-bold text-xl flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-ll-blue-glow shadow-[0_0_10px_rgba(56,189,248,0.6)] animate-pulse" />
            LUMINA
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-ll-slate text-sm font-medium hover:text-ll-blue-glow transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button
            className="md:hidden text-ll-slate hover:text-ll-blue-glow transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-ll-slate hover:text-ll-blue-glow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-2xl font-medium text-ll-slate hover:text-ll-blue-glow transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
