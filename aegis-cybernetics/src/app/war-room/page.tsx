"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TextReveal from "@/components/ui/TextReveal";

export default function WarRoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-element",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }, containerRef);

    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4500);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen px-6 py-12 max-w-5xl mx-auto flex flex-col items-center justify-center pb-32">
      <div className={`mb-12 text-center transition-transform ${glitch ? 'scale-105 skew-x-6' : ''}`}>
        <h1 className="text-6xl md:text-9xl font-black text-glitch mb-4 uppercase tracking-tighter">
          WAR_ROOM
        </h1>
        <div className="text-xl text-[var(--color-aegis-neon-red)] font-mono uppercase tracking-widest bg-[var(--color-aegis-black)] p-4 border border-[var(--color-aegis-neon-red)] inline-block">
          <TextReveal text="RESTRICTED ACCESS. IDENTIFY YOURSELF." />
        </div>
      </div>

      <div className="w-full bg-[var(--color-aegis-dark-grey)] p-8 md:p-12 border-brutal relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--color-aegis-neon-red)]" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[var(--color-aegis-neon-purple)]" />
        
        <form className="space-y-8 font-mono">
          <div className="form-element flex flex-col">
            <label className="text-[var(--color-aegis-light-grey)] mb-2 uppercase text-sm">TARGET_ORGANIZATION</label>
            <input type="text" className="bg-[var(--color-aegis-black)] border border-[var(--color-aegis-dark-grey)] p-4 text-white focus:border-[var(--color-aegis-neon-red)] focus:outline-none transition-colors" placeholder="Enter Company Name..." />
          </div>
          
          <div className="form-element flex flex-col">
            <label className="text-[var(--color-aegis-light-grey)] mb-2 uppercase text-sm">AUTHORIZATION_CODE (EMAIL)</label>
            <input type="email" className="bg-[var(--color-aegis-black)] border border-[var(--color-aegis-dark-grey)] p-4 text-white focus:border-[var(--color-aegis-neon-red)] focus:outline-none transition-colors" placeholder="user@domain.com" />
          </div>
          
          <div className="form-element flex flex-col">
            <label className="text-[var(--color-aegis-light-grey)] mb-2 uppercase text-sm">THREAT_VECTOR_DETAILS</label>
            <textarea rows={5} className="bg-[var(--color-aegis-black)] border border-[var(--color-aegis-dark-grey)] p-4 text-white focus:border-[var(--color-aegis-neon-red)] focus:outline-none transition-colors resize-none" placeholder="Describe the breach or required defensive perimeter..."></textarea>
          </div>
          
          <button type="button" className="form-element w-full py-6 bg-[var(--color-aegis-neon-red)] text-white font-black text-2xl uppercase tracking-widest hover:bg-white hover:text-[var(--color-aegis-neon-red)] transition-colors border-2 border-[var(--color-aegis-neon-red)] flex justify-center items-center gap-4 group">
            INITIATE_CONTACT
            <span className="w-3 h-3 bg-white rounded-full animate-ping group-hover:bg-[var(--color-aegis-neon-red)]" />
          </button>
        </form>
      </div>
      
      <div className="mt-16 font-mono text-[var(--color-aegis-dark-grey)] text-sm text-center">
        <p>ENCRYPTED CONNECTION ESTABLISHED. ALL LOGS ARE IMMUTABLE.</p>
        <p>AEGIS CYBERNETICS © 2026</p>
      </div>
    </div>
  );
}
