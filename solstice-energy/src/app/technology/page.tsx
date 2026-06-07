"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import TextReveal from "@/components/ui/TextReveal";
import { Zap, Sun, Shield, Layers, Battery, Radio } from "lucide-react";
import { useEffect, useState } from "react";

export default function Technology() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* 1. Hero */}
      <section className="relative pt-32 pb-16 container mx-auto px-6">
        <AnimateIn>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            THE <span className="text-gradient">PHYSICS</span> OF TOMORROW
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl">
            We don't just harvest energy; we synthesize it. Discover the three core technologies powering the Solstice grid.
          </p>
        </AnimateIn>
      </section>

      {/* 2. Solar Arrays */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
            <AnimateIn direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-solar-100 text-solar-600 rounded-2xl"><Sun size={24} /></div>
                <h2 className="text-4xl font-bold">Orbital Photovoltaics</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our satellites orbit above the atmosphere, capturing 100% of solar radiation without atmospheric interference or night cycles. The energy is converted to high-frequency microwaves and beamed precisely to terrestrial rectenna stations.
              </p>
              <ul className="space-y-3">
                {["24/7 Energy Collection", "Zero Weather Dependency", "98% Transmission Efficiency"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium"><Zap className="text-solar-500" size={18}/> {item}</li>
                ))}
              </ul>
            </AnimateIn>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <AnimateIn direction="right">
              <div className="aspect-video glass-panel rounded-3xl bg-gradient-to-tr from-solar-200 to-white flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,_#ffcc10_0%,_transparent_60%)] opacity-30 animate-pulse" />
                <Sun size={100} className="text-solar-600 relative z-10" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 3. Fusion Reactors */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <AnimateIn direction="left">
              <div className="aspect-video glass-panel rounded-3xl bg-gradient-to-br from-fusion-200 to-white flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="w-32 h-32 rounded-full border-8 border-fusion-400 border-t-transparent animate-spin relative z-10" />
              </div>
            </AnimateIn>
          </div>
          <div className="flex-1">
            <AnimateIn direction="right">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-fusion-100 text-fusion-600 rounded-2xl"><Layers size={24} /></div>
                <h2 className="text-4xl font-bold">Stellarator Tokamaks</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Bringing the power of stars down to Earth. Our magnetic confinement systems sustain hydrogen plasma at 150 million degrees Celsius, achieving stable, net-positive energy generation.
              </p>
              <ul className="space-y-3">
                {["Q-Factor > 20", "Helium Byproduct (Zero Waste)", "Infinite Fuel Supply"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium"><Zap className="text-fusion-500" size={18}/> {item}</li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 4. Superconducting Grid */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Planetary Supergrid</h2>
            <p className="text-xl text-gray-600">Connecting generation nodes with zero-resistance transmission lines.</p>
          </AnimateIn>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Battery, title: "Quantum Storage", desc: "High-density crystal matrices capable of storing petawatts for months with negligible decay." },
            { icon: Radio, title: "Nexus Routing", desc: "AI algorithms anticipating demand spikes globally and routing power at lightspeed." },
            { icon: Shield, title: "EMP Shielding", desc: "Military-grade isolation ensuring the grid remains operational through solar flares." }
          ].map((item, i) => (
            <AnimateIn key={i} delay={i * 0.2}>
              <div className="glass-panel p-8 rounded-3xl h-full border-t-2 border-solar-300">
                <item.icon size={40} className="text-solar-600 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 5. Interstitial Text Reveal */}
      <section className="container mx-auto px-6 py-12">
        <TextReveal 
          text="Engineering a reality where energy scarcity is a concept found only in history books."
          className="text-3xl md:text-5xl font-bold text-center max-w-5xl mx-auto"
        />
      </section>

      {/* 6. R&D Roadmap */}
      <section className="container mx-auto px-6">
        <AnimateIn>
          <h2 className="text-4xl font-black mb-12 border-b pb-4">The Horizon (R&D)</h2>
        </AnimateIn>
        <div className="space-y-8">
          {[
            { year: "2027", title: "Lunar Relay Station", desc: "Establishing the first off-world mirror to bounce solar energy to the dark side of Earth." },
            { year: "2030", title: "Antimatter Catalysis", desc: "Theoretical models for utilizing antimatter droplets to increase fusion yields by 10,000x." },
            { year: "2035", title: "Dyson Swarm Phase 1", desc: "Deploying self-replicating collector nodes into direct solar orbit." }
          ].map((item, i) => (
            <AnimateIn key={i} delay={i * 0.2} direction="up">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center glass-panel p-8 rounded-2xl">
                <div className="text-4xl font-black text-solar-400 w-32">{item.year}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
      
      {/* 7. CTA */}
      <section className="container mx-auto px-6 text-center py-12">
        <AnimateIn>
          <div className="bg-gray-900 text-white p-16 rounded-[3rem]">
            <h2 className="text-4xl font-bold mb-6">See It In Action</h2>
            <p className="text-xl mb-8 text-gray-400">View how this technology is currently powering major cities worldwide.</p>
            <a href="/projects" className="inline-block px-10 py-4 bg-solar-500 text-gray-900 font-bold rounded-full hover:bg-solar-400 transition-colors">
              Explore Projects
            </a>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
