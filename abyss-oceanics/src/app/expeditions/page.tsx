"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "@/components/ui/TextReveal";
import { Map, Calendar, ArrowRight } from "lucide-react";

const EXPEDITIONS = [
  {
    title: "Challenger Deep Dive",
    date: "August 2025",
    location: "Marianas Trench, Pacific Ocean",
    status: "Completed",
    description: "A record-breaking descent to 10,928 meters to map the benthic topography and sample extremophile microbial life at the absolute bottom of the ocean.",
  },
  {
    title: "Hydrothermal Vent Survey",
    date: "February 2026",
    location: "Mid-Atlantic Ridge",
    status: "Completed",
    description: "Detailed mapping and temperature logging of previously undiscovered black smokers, cataloging 12 new species of blind shrimp and tube worms.",
  },
  {
    title: "Abyssal Plain Traverse",
    date: "June 2026",
    location: "Clarion-Clipperton Zone",
    status: "Active",
    description: "Deploying autonomous crawlers to assess the environmental impact of polymetallic nodule formations and local biodiversity.",
  },
  {
    title: "Project Bioluminescence",
    date: "November 2026",
    location: "Monterey Canyon",
    status: "Scheduled",
    description: "Using specialized ultra-low-light 8K cameras to capture and study the bioluminescent communication of bathypelagic cephalopods.",
  },
  {
    title: "Antarctic Ice Shelf Probe",
    date: "January 2027",
    location: "Ross Sea, Antarctica",
    status: "Planning",
    description: "Navigating ROVs beneath miles of solid ice to study isolated marine ecosystems untouched by sunlight for millions of years.",
  }
];

export default function Expeditions() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(".timeline-item");
    
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-bio-cyan/30 to-transparent -translate-x-1/2 hidden md:block"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h1 className="text-sm font-bold text-bio-green tracking-[0.3em] uppercase mb-4 text-glow-green">Mission Logs</h1>
          <TextReveal
            text="Global Expeditions"
            className="text-5xl md:text-7xl font-black text-white justify-center uppercase tracking-tighter"
          />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Follow our journey as we deploy assets across the globe to uncover the ocean's most guarded secrets.
          </p>
        </div>

        <div className="space-y-12">
          {EXPEDITIONS.map((exp, index) => (
            <div key={index} className={`timeline-item flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              <div className="md:w-1/2 flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end text-right'}">
                <div className="glass-panel p-8 rounded-lg border-l-4 border-l-bio-cyan w-full hover:border-l-bio-green transition-colors duration-500">
                  <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-bio-cyan">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                    <span className="text-white/30">|</span>
                    <span className={exp.status === 'Active' ? 'text-bio-green animate-pulse' : 'text-slate-400'}>
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                    <Map size={14} /> {exp.location}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-bio-cyan hover:text-white transition-colors">
                    Read Log <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="hidden md:flex justify-center w-12 relative">
                <div className="w-4 h-4 rounded-full bg-bio-cyan absolute top-1/2 -translate-y-1/2 shadow-[0_0_15px_#00ffff]"></div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
