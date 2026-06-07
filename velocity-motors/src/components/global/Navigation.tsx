"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "00 / HOME", path: "/" },
  { name: "01 / THE FLEET", path: "/fleet" },
  { name: "02 / AERODYNAMICS", path: "/aerodynamics" },
  { name: "03 / OWNERSHIP", path: "/ownership" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Trigger (Desktop) / Topbar Trigger (Mobile) */}
      <div className="fixed top-0 right-0 p-6 z-[100] md:top-1/2 md:right-8 md:-translate-y-1/2 mix-blend-difference">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex flex-col items-center justify-center gap-[6px] w-12 h-12 rounded-full border border-white/20 hover:border-vm-red transition-colors bg-vm-dark/50 backdrop-blur-md"
        >
          <span className="w-5 h-[2px] bg-white group-hover:bg-vm-red transition-colors" />
          <span className="w-5 h-[2px] bg-white group-hover:bg-vm-red transition-colors w-[12px] self-end mr-[14px]" />
        </button>
      </div>

      {/* Persistent Left Sidebar Brand */}
      <div className="fixed top-0 left-0 h-screen w-24 hidden md:flex flex-col items-center justify-between py-12 border-r border-white/5 z-40 bg-vm-dark/80 backdrop-blur-xl">
        <div className="text-vm-red font-syncopate font-bold text-2xl rotate-90 tracking-widest mt-8">
          VM
        </div>
        <div className="writing-vertical text-vm-steel text-xs uppercase tracking-[0.3em] rotate-180">
          Velocity Motors
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="fixed inset-y-0 right-0 w-full md:w-[40vw] bg-vm-black border-l border-white/10 z-[200] flex flex-col justify-center px-12 md:px-24"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="w-6 h-6 text-vm-steel hover:text-vm-red transition-colors" />
            </button>

            <nav className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center text-3xl md:text-5xl font-syncopate font-bold text-vm-steel hover:text-white transition-colors"
                  >
                    <span className="text-sm font-manrope text-vm-red opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-4">
                      →
                    </span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-12 md:left-24 text-sm text-vm-steel"
            >
              <p>CONFIDENTIAL // 2026</p>
              <p className="text-vm-red mt-2">ACCESS RESTRICTED</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
