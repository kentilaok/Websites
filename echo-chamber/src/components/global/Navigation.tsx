"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "[ HOME ]", path: "/" },
  { name: "[ ROSTER ]", path: "/roster" },
  { name: "[ DISCOGRAPHY ]", path: "/discography" },
  { name: "[ SUBMISSIONS ]", path: "/submissions" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-8 right-8 z-[100] mix-blend-difference">
        <button
          onClick={() => setIsOpen(true)}
          className="text-ec-lime font-bold text-2xl tracking-widest hover:bg-ec-lime hover:text-ec-black px-4 py-2 border-2 border-ec-lime transition-colors uppercase"
        >
          MENU
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="fixed inset-0 bg-ec-lime z-[200] flex flex-col justify-center px-8 md:px-32 border-b-8 border-ec-black"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-ec-black font-bold text-2xl tracking-widest hover:bg-ec-black hover:text-ec-lime px-4 py-2 border-2 border-ec-black transition-colors uppercase"
            >
              CLOSE
            </button>

            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-8xl font-black text-ec-black uppercase tracking-tighter hover:tracking-widest transition-all duration-300 block border-b-4 border-ec-black pb-4"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-ec-black font-bold text-xl uppercase max-w-xl border-l-4 border-ec-black pl-4"
            >
              <p>NO COMPROMISE. NO COMMERCIALISM. PURE SONIC DESTRUCTION.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
