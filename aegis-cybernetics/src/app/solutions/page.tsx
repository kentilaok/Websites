"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".solution-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      title: "TITAN_NODE",
      subtitle: "Unbreakable Edge Infrastructure",
      desc: "Deploys an automated, self-healing network periphery that structurally reorganizes upon detecting penetration attempts. Effectively renders brute-force attacks obsolete.",
      specs: ["Self-Healing Mesh", "10Tbps Mitigation", "Zero-Trust Architecture"],
      price: "$150,000 / YR"
    },
    {
      title: "CEREBUS_AI",
      subtitle: "Predictive Heuristic Engine",
      desc: "Our proprietary neural net constantly hallucinates potential zero-day vulnerabilities in a sandboxed environment, patching them before they are discovered by hostiles.",
      specs: ["Quantum Processing", "Deep Learning Models", "Proactive Patching"],
      price: "$280,000 / YR"
    },
    {
      title: "GHOST_PROTOCOL",
      subtitle: "Total Network Obfuscation",
      desc: "Wipes your entire digital footprint from public internet routing tables. Authorized personnel connect via multi-layered encrypted dark-nodes.",
      specs: ["BGP Route Masking", "Tor-Equivalent Routing", "Military Grade Encryption"],
      price: "$400,000 / YR"
    },
    {
      title: "HELLHOUND",
      subtitle: "Offensive Counter-Measures",
      desc: "Why just block an attack? HELLHOUND traces the origin of the threat and deploys aggressive counter-malware to neutralize the attacker's hardware.",
      specs: ["Active Retaliation", "Traceback Algorithms", "Automated Strike"],
      price: "CUSTOM QUOTE"
    },
    {
      title: "AEGIS_VAULT",
      subtitle: "Cold Storage Bastion",
      desc: "Physical servers buried 100ft underground in our brutalist data centers. EMP hardened, biometric access only, disconnected from the global grid.",
      specs: ["EMP Shielded", "Air-Gapped", "DNA Verification"],
      price: "$75,000 / TB / YR"
    },
    {
      title: "PHANTOM_SWARM",
      subtitle: "Decoy Network Generation",
      desc: "Instantly spins up thousands of honeypot servers mirroring your actual infrastructure, trapping attackers in an endless loop of fake data.",
      specs: ["Instant Provisioning", "AI Traffic Simulation", "Attacker Profiling"],
      price: "$120,000 / YR"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen px-6 py-12 max-w-7xl mx-auto perspective-1000">
      <header className="mb-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 brutal-clip bg-[var(--color-aegis-neon-red)] px-8 py-4 inline-block">
          Solutions
        </h1>
        <div className="text-xl text-[var(--color-aegis-light-grey)] max-w-3xl font-mono uppercase tracking-widest">
          <TextReveal text="Acquire absolute superiority over your digital domain. Choose your weapon." />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-32">
        {solutions.map((sol, i) => (
          <div key={i} className="solution-card bg-[var(--color-aegis-dark-grey)] p-8 border-brutal-purple flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-[var(--color-aegis-neon-purple)] transition-colors">{sol.title}</h2>
                <span className="text-[var(--color-aegis-glitch)] font-mono text-sm bg-[var(--color-aegis-black)] px-3 py-1 border border-[var(--color-aegis-glitch)]">{sol.price}</span>
              </div>
              <h3 className="text-[var(--color-aegis-neon-red)] font-bold mb-6 font-mono border-b border-[var(--color-aegis-black)] pb-4">{sol.subtitle}</h3>
              <p className="text-[var(--color-aegis-light-grey)] mb-8 font-mono leading-relaxed">{sol.desc}</p>
              
              <ul className="mb-12 font-mono text-sm">
                {sol.specs.map((spec, j) => (
                  <li key={j} className="flex items-center gap-2 mb-2 text-white">
                    <ChevronRight className="w-4 h-4 text-[var(--color-aegis-neon-red)]" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-[var(--color-aegis-black)] text-white font-bold font-mono py-4 px-6 border border-[var(--color-aegis-neon-purple)] hover:bg-[var(--color-aegis-neon-purple)] hover:text-white transition-all duration-300 flex items-center justify-between group/btn">
              <span>DEPLOY_{sol.title}</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
