"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "MISSION CONTROL", path: "/" },
  { name: "THE VESSEL", path: "/vessel" },
  { name: "DESTINATIONS", path: "/destinations" },
  { name: "LAUNCH SCHEDULE", path: "/launch" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-8 left-8 z-[100]">
         <Link href="/" className="font-orbitron font-bold text-xl tracking-[0.3em] text-white">
           NOVA<span className="text-na-nebula">/</span>AERO
         </Link>
      </div>

      <div className="fixed top-8 right-8 z-[100]">
        <button
          onClick={() => setIsOpen(true)}
          className="font-orbitron text-xs tracking-widest uppercase border border-white/20 px-6 py-2 hover:border-na-atmosphere hover:text-na-atmosphere transition-colors bg-na-void/50 backdrop-blur-sm"
        >
          [ COMMS_LINK ]
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 bg-na-void/90 backdrop-blur-xl z-[200] flex items-center justify-center border-[1px] border-na-atmosphere/20 m-4"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-na-atmosphere" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-na-atmosphere" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-na-atmosphere" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-na-atmosphere" />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 font-orbitron text-xs tracking-widest text-na-atmosphere hover:text-white transition-colors"
            >
              [ TERMINATE_LINK ]
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group relative font-orbitron text-3xl md:text-5xl font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors block"
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-na-atmosphere group-hover:w-[120%] transition-all duration-500 opacity-0 group-hover:opacity-50" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="absolute bottom-8 left-8 font-mono text-[10px] text-na-nebula opacity-50">
              SYS.SECURE.LINK_ESTABLISHED
              <br />
              PING: 14ms // UPLINK: STABLE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
