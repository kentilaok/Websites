"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextReveal from "@/components/ui/TextReveal";
import { ShieldAlert, Terminal, Lock, Activity, Database, Cpu } from "lucide-react";

export default function Home() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }
    );
    
    gsap.fromTo(
      ".home-card",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const systems = [
    { icon: <ShieldAlert className="text-[var(--color-aegis-neon-red)] w-10 h-10" />, title: "INTRUSION_PREVENTION", desc: "Automated real-time termination of hostile cyber-entities." },
    { icon: <Terminal className="text-[var(--color-aegis-neon-purple)] w-10 h-10" />, title: "ZERO_DAY_ANALYTICS", desc: "Heuristic prediction algorithms targeting unknown vulnerabilities." },
    { icon: <Lock className="text-[var(--color-aegis-glitch)] w-10 h-10" />, title: "QUANTUM_ENCRYPTION", desc: "Unhackable cryptographic arrays locked behind quantum entanglement." },
    { icon: <Activity className="text-[var(--color-aegis-neon-red)] w-10 h-10" />, title: "NETWORK_OVERWATCH", desc: "24/7 hyper-vigilant scanning of all incoming/outgoing data packets." },
    { icon: <Database className="text-[var(--color-aegis-neon-purple)] w-10 h-10" />, title: "DATA_VAULTING", desc: "Brutalist localized cold-storage for mission-critical assets." },
    { icon: <Cpu className="text-[var(--color-aegis-glitch)] w-10 h-10" />, title: "NEURAL_FIREWALL", desc: "AI-driven adaptive barrier that learns from every attempted breach." },
  ];

  return (
    <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto overflow-hidden">
      <header className="mb-32 mt-12 border-l-8 border-[var(--color-aegis-neon-red)] pl-8 relative">
        <h1 ref={headerRef} className="text-6xl md:text-8xl lg:text-9xl font-black text-glitch mb-6 uppercase tracking-tighter leading-none">
          Absolute <br/> <span className="text-white">Security.</span>
        </h1>
        <div className="text-xl text-[var(--color-aegis-light-grey)] max-w-3xl font-mono uppercase tracking-widest border-t border-[var(--color-aegis-dark-grey)] pt-8 mt-8">
          <TextReveal text="We do not just protect your infrastructure. We weaponize your defense. Aegis Cybernetics deploys brutalist, unapologetic security protocols." />
        </div>
      </header>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {systems.map((sys, i) => (
          <div key={i} className="home-card bg-[var(--color-aegis-dark-grey)] p-8 border-brutal relative overflow-hidden group glitch-hover">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
              <span className="text-6xl font-black text-[var(--color-aegis-neon-red)]">{`0${i+1}`}</span>
            </div>
            <div className="mb-8 p-4 bg-[var(--color-aegis-black)] inline-block border border-[var(--color-aegis-neon-purple)]">{sys.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{sys.title}</h3>
            <p className="text-sm text-[var(--color-aegis-light-grey)] mb-8 font-mono leading-relaxed">{sys.desc}</p>
            <div className="h-[2px] w-full bg-[var(--color-aegis-black)] relative">
              <div className="absolute top-0 left-0 h-full bg-[var(--color-aegis-neon-red)] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
