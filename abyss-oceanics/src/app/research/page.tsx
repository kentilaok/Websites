"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { Dna, FlaskConical, Fish, Globe, Activity, Microscope } from "lucide-react";

const RESEARCH_TOPICS = [
  {
    title: "Hadal Zone Microbiology",
    icon: Microscope,
    description: "Studying extreme barophiles—bacteria that require pressures of over 400 atmospheres to survive and multiply, potentially unlocking new biochemical pathways.",
  },
  {
    title: "Deep-Sea Gigantism",
    icon: Fish,
    description: "Investigating the genetic triggers and evolutionary advantages that cause species like the giant isopod and colossal squid to grow to immense sizes in the deep.",
  },
  {
    title: "Chemosynthetic Ecosystems",
    icon: FlaskConical,
    description: "Analyzing the chemical composition of hydrothermal vents and cold seeps, and the unique food webs that rely entirely on chemical energy instead of sunlight.",
  },
  {
    title: "eDNA Sequencing",
    icon: Dna,
    description: "Filtering environmental DNA from deep ocean water columns to catalog biodiversity without the need for physical specimen collection.",
  },
  {
    title: "Benthic Geomorphology",
    icon: Globe,
    description: "High-resolution acoustic mapping of tectonic plate boundaries, subduction zones, and abyssal hills to understand oceanic crust formation.",
  },
  {
    title: "Acoustic Ecology",
    icon: Activity,
    description: "Deploying deep-water hydrophones to monitor the natural soundscapes of the ocean floor, tracking whale migrations and geological events.",
  }
];

export default function Research() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (gridRef.current) {
      const cards = gridRef.current.children;
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-abyss-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-sm font-bold text-bio-cyan tracking-[0.3em] uppercase mb-4 text-glow-cyan">Data & Discovery</h1>
          <TextReveal
            text="Scientific Research"
            className="text-5xl md:text-7xl font-black text-white justify-center uppercase tracking-tighter"
          />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Our findings are pushing the boundaries of biology, geology, and chemistry. We partner with leading universities worldwide.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_TOPICS.map((topic, index) => (
            <div key={index} className="glass-panel p-8 rounded-xl border border-bio-cyan/10 hover:border-bio-cyan/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-bio-cyan/5 rounded-full blur-3xl group-hover:bg-bio-cyan/20 transition-colors duration-700"></div>
              
              <topic.icon className="w-12 h-12 text-bio-cyan mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:text-glow-cyan" />
              
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{topic.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {topic.description}
              </p>
              
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-slate-500">Active Program</span>
                <div className="w-2 h-2 rounded-full bg-bio-green shadow-[0_0_8px_#39ff14] animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
