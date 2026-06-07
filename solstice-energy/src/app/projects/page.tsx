"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight, Zap, Globe, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    name: "Helios Prime Array",
    location: "Low Earth Orbit / Mojave Ground Station",
    output: "4.5 Terawatts",
    type: "Orbital Solar",
    status: "Operational",
    desc: "Our flagship orbital array consisting of 12,000 mirrored satellites. Beaming uninterrupted solar energy directly to the Mojave rectenna complex, powering the entire US West Coast.",
    color: "from-solar-300 to-solar-500"
  },
  {
    name: "Prometheus-1 Tokamak",
    location: "Geneva, Switzerland",
    output: "2.1 Terawatts",
    type: "Magnetic Fusion",
    status: "Operational",
    desc: "The world's first commercially viable fusion reactor. Prometheus-1 recently set a record by sustaining ignition for 400 continuous days, providing baseline power for Central Europe.",
    color: "from-fusion-400 to-fusion-600"
  },
  {
    name: "Sahara Nexus Hub",
    location: "Sahara Desert, Africa",
    output: "8.0 Terawatts",
    type: "Solar/Storage Hub",
    status: "Expansion Phase",
    desc: "A massive terrestrial solar farm integrated with our latest quantum storage crystals. This hub is the primary energy exporter for the African continent and southern Mediterranean.",
    color: "from-orange-400 to-solar-600"
  },
  {
    name: "Leviathan Deep-Sea Grid",
    location: "Pacific Ocean (Mariana Trench)",
    output: "Superconducting Router",
    type: "Hypergrid Node",
    status: "Operational",
    desc: "Utilizing the extreme cold of the deep ocean to naturally cool our primary planetary superconductor node, linking Asian and American energy markets with zero transmission loss.",
    color: "from-blue-600 to-fusion-800"
  },
  {
    name: "Aurora Reactor Complex",
    location: "Reykjavik, Iceland",
    output: "1.5 Terawatts",
    type: "Hybrid Geothermal/Fusion",
    status: "Testing",
    desc: "Combining Iceland's geothermal resources with a secondary fusion loop to create an incredibly stable, high-efficiency power plant dedicated to powering global AI data centers.",
    color: "from-teal-300 to-fusion-500"
  },
  {
    name: "Project Icarus",
    location: "Lunar Orbit (L1 Lagrange)",
    output: "15 Terawatts (Projected)",
    type: "Orbital Solar V2",
    status: "Under Construction",
    desc: "The next evolution of solar harvesting. A continuous ring structure capturing raw solar output before it scatters, promising to multiply Earth's total energy budget by a factor of three.",
    color: "from-gray-300 to-gray-500"
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-24 pb-32">
      {/* 1. Hero */}
      <section className="pt-32 container mx-auto px-6">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fusion-100 text-fusion-700 font-bold mb-6">
            <Globe size={18} /> Global Deployment
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            POWERING <br/>THE <span className="text-gradient">PLANET</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl">
            Explore the infrastructure that is actively replacing the fossil fuel era.
          </p>
        </AnimateIn>
      </section>

      {/* 2. Text Reveal Quote */}
      <section className="container mx-auto px-6">
        <TextReveal 
          text="These aren't concept renders. This is hardware currently generating the power you are using to read this."
          className="text-3xl md:text-5xl font-medium text-gray-800 border-l-4 border-solar-500 pl-8 py-4"
        />
      </section>

      {/* 3. The 6 Projects */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="glass-panel rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-200">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white font-semibold text-sm">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-black">{project.output}</div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                      <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <MapPin size={16} /> {project.location}
                      </div>
                    </div>
                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-solar-100 group-hover:text-solar-600 transition-colors">
                      <Zap size={20} />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {project.desc}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-gray-900 group-hover:text-solar-600 transition-colors mt-auto">
                    View Live Telemetry <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. Global Stats Map (Abstract) */}
      <section className="container mx-auto px-6">
        <AnimateIn direction="up">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black mb-12 relative z-10">Network Integrity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Uptime", val: "99.999%" },
                { label: "Active Nodes", val: "14,028" },
                { label: "Daily Output", val: "84 TWh" },
                { label: "Load Balance", val: "Optimal" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solar-300 to-fusion-300 mb-2">
                    {stat.val}
                  </div>
                  <div className="text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 5. CTA */}
      <section className="container mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="text-4xl font-bold mb-6">Need dedicated capacity?</h2>
          <button className="px-10 py-4 bg-solar-500 text-white font-bold rounded-full shadow-xl shadow-solar-500/20 hover:scale-105 transition-transform">
            Contact Grid Allocations
          </button>
        </AnimateIn>
      </section>
    </div>
  );
}
