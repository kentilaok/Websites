"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { Shield, Gauge, Maximize, Anchor } from "lucide-react";

const SUBMERSIBLES = [
  {
    name: "Leviathan Mk-IV",
    class: "Heavy Explorer",
    depth: "11,000m",
    crew: "3",
    endurance: "96 Hours",
    description: "Our flagship full-ocean-depth capable vehicle. Features a 10cm thick titanium pressure sphere and a state-of-the-art synthetic syntactic foam hull. Designed specifically for the Marianas Trench and beyond.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000",
  },
  {
    name: "Nautilus X-1",
    class: "Scientific Platform",
    depth: "6,500m",
    crew: "2",
    endurance: "72 Hours",
    description: "Optimized for extended observation. Features an acrylic dome viewport for unparalleled visibility and dual 7-function manipulator arms for delicate sample retrieval.",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1000",
  },
  {
    name: "Abyssal Ghost",
    class: "Autonomous AUV",
    depth: "8,000m",
    crew: "0 (AI Piloted)",
    endurance: "14 Days",
    description: "A completely autonomous underwater vehicle used for high-resolution sonar mapping and environmental DNA (eDNA) sampling over vast areas of the ocean floor.",
    image: "https://images.unsplash.com/photo-1621509930799-a1b632fa1d59?q=80&w=1000",
  },
  {
    name: "Trench Crawler",
    class: "Benthic Rover",
    depth: "11,000m",
    crew: "0 (ROV)",
    endurance: "Unlimited (Tethered)",
    description: "A heavy-duty tethered rover designed to literally drive along the bottom of the deepest trenches, collecting sediment cores and geological samples.",
    image: "https://images.unsplash.com/photo-1581452654316-2da9e31d322b?q=80&w=1000",
  },
  {
    name: "Kraken Scout",
    class: "Fast Interceptor",
    depth: "4,000m",
    crew: "1",
    endurance: "24 Hours",
    description: "A highly maneuverable, fast-attack style submersible used for tracking rapid pelagic species like giant squid and deep-sea sharks.",
    image: "https://images.unsplash.com/photo-1518349248232-a1b7e618ceeb?q=80&w=1000",
  },
  {
    name: "Hadal Habitat",
    class: "Stationary Lab",
    depth: "3,000m",
    crew: "6",
    endurance: "30 Days",
    description: "An experimental pressurized habitat allowing researchers to live and work at the crushing depths of the bathyal zone for weeks at a time.",
    image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1000",
  },
];

export default function Submersibles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".sub-card");
    
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-sm font-bold text-bio-cyan tracking-[0.3em] uppercase mb-4 text-glow-cyan">The Fleet</h1>
          <TextReveal
            text="Engineering for the Extreme"
            className="text-5xl md:text-7xl font-black text-white justify-center uppercase tracking-tighter"
          />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Our pressure-tested fleet of manned and autonomous submersibles represents the pinnacle of marine engineering.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SUBMERSIBLES.map((sub, index) => (
            <div key={index} className="sub-card glass-panel rounded-xl overflow-hidden group flex flex-col">
              <div className="relative h-64 overflow-hidden border-b border-bio-cyan/20">
                <div className="absolute inset-0 bg-abyss-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={sub.image} 
                  alt={sub.name}
                  className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-sm border border-bio-cyan/30 text-bio-cyan text-xs font-bold tracking-widest uppercase rounded">
                  {sub.class}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-glow-cyan transition-all">{sub.name}</h3>
                <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
                  {sub.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 bg-abyss-900/50 p-4 rounded border border-white/5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-bio-cyan/70 text-xs uppercase tracking-wider">
                      <Gauge size={14} /> Max Depth
                    </div>
                    <div className="text-white font-bold">{sub.depth}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-bio-cyan/70 text-xs uppercase tracking-wider">
                      <Shield size={14} /> Endurance
                    </div>
                    <div className="text-white font-bold">{sub.endurance}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-bio-cyan/70 text-xs uppercase tracking-wider">
                      <Maximize size={14} /> Crew
                    </div>
                    <div className="text-white font-bold">{sub.crew}</div>
                  </div>
                </div>

                <button className="w-full py-3 border border-bio-cyan/30 text-bio-cyan font-bold tracking-widest uppercase hover:bg-bio-cyan hover:text-abyss-900 transition-colors duration-300 rounded flex items-center justify-center gap-2">
                  <Anchor size={16} /> View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
