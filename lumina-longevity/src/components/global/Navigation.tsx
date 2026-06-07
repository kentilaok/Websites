"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { name: "Treatments", path: "/treatments" },
  { name: "Clinical Research", path: "/research" },
  { name: "Consultation", path: "/consultation" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4"
    >
      <nav className="flex items-center gap-8 px-8 py-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <Link href="/" className="text-ll-blue-glow font-bold text-xl mr-8 flex items-center gap-2">
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
      </nav>
    </motion.header>
  );
}
