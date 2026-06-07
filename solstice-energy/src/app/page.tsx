"use client";

import TextReveal from "@/components/ui/TextReveal";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Sun, Zap, Shield, Activity, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center container mx-auto px-6">
        <div className="absolute inset-0 sunburst-bg -z-10" />
        <div className="text-center max-w-5xl z-10">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm font-semibold text-solar-800 uppercase tracking-widest border border-solar-300">
              <Sun size={16} className="text-solar-600" />
              The Dawn of Infinite Energy
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight mb-6">
              IGNITE <span className="text-gradient-sun">TOMORROW</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.6}>
            <p className="text-xl md:text-3xl text-gray-700 max-w-3xl mx-auto mb-12 font-light">
              We are engineering the ultimate power source. Fusing the brilliance of the sun with next-generation containment technology to power humanity forever.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/technology" className="px-8 py-4 rounded-full bg-gradient-to-r from-solar-500 to-fusion-500 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(255,204,16,0.6)] transition-all flex items-center gap-2">
                Explore Technology <ArrowRight size={20} />
              </Link>
              <Link href="/projects" className="px-8 py-4 rounded-full glass-panel text-gray-800 font-bold text-lg hover:bg-white/50 transition-all">
                View Global Projects
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal 
            text="The era of fossil fuels is over. We are unlocking the fundamental energy of the universe to create a clean, limitless, and equitable power grid for every continent."
            className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
          />
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-black mb-4">The Solstice Triad</h2>
            <p className="text-xl text-gray-600">Three pillars of our energy revolution.</p>
          </AnimateIn>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Sun, title: "Orbital Solar", desc: "Capturing unfiltered solar radiation from Low Earth Orbit and beaming it down via microwave arrays." },
            { icon: Zap, title: "Magnetic Fusion", desc: "Commercial-scale Tokamak reactors achieving Q>20 net energy positive sustained plasma ignition." },
            { icon: Activity, title: "Smart Hypergrid", desc: "AI-driven planetary routing network distributing power with zero transmission loss through superconductors." }
          ].map((item, i) => (
            <AnimateIn key={i} delay={i * 0.2}>
              <div className="glass-panel p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 h-full border border-solar-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-solar-100 to-fusion-100 flex items-center justify-center mb-6 text-solar-600 shadow-inner">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. Global Stats */}
      <section className="relative py-32 bg-gray-900 text-white rounded-[3rem] mx-4 md:mx-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-solar-900/40 via-gray-900 to-fusion-900/40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { num: "500+", label: "Terawatts Generated" },
              { num: "0%", label: "Carbon Emissions" },
              { num: "142", label: "Countries Connected" },
              { num: "$80B", label: "Capital Deployed" }
            ].map((stat, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="up">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                  {stat.num}
                </div>
                <div className="text-solar-400 font-semibold uppercase tracking-widest">{stat.label}</div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Highlighted Feature */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <AnimateIn direction="left">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-solar-100 to-fusion-50 overflow-hidden relative border border-white/50 shadow-2xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-solar-400 to-fusion-400 rounded-full blur-[80px] mix-blend-screen animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-4 border-white/30 flex items-center justify-center relative">
                    <div className="absolute w-64 h-64 border border-solar-400/50 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-80 h-80 border border-fusion-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <Cpu size={64} className="text-solar-600" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
          <div className="flex-1">
            <AnimateIn direction="right">
              <div className="inline-block px-4 py-1 rounded-full bg-fusion-100 text-fusion-700 font-semibold mb-6">Nexus Core</div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">The Brain of the Grid</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our proprietary quantum AI, Nexus, predicts energy demand across the globe with 99.9% accuracy, routing plasma and solar energy in real-time to where it's needed most.
              </p>
              <ul className="space-y-4 mb-10">
                {["Predictive routing", "Self-healing network architecture", "Quantum encrypted transmission"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-800">
                    <Shield className="text-solar-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/technology" className="inline-flex items-center gap-2 font-bold text-solar-600 hover:text-solar-700 text-lg group">
                Deep dive into Nexus <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 6. Press/Testimonial */}
      <section className="container mx-auto px-6 py-12">
        <AnimateIn>
          <div className="glass-panel p-12 md:p-24 rounded-[3rem] text-center border-t-4 border-solar-500">
            <Globe className="mx-auto text-solar-400 mb-8" size={48} />
            <h3 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
              "Solstice Energy hasn't just solved the climate crisis; they have elevated humanity to a Type 1 Civilization."
            </h3>
            <p className="text-xl font-bold text-gray-800">— Global Scientific Coalition</p>
          </div>
        </AnimateIn>
      </section>

      {/* 7. CTA */}
      <section className="container mx-auto px-6 text-center pt-20">
        <AnimateIn>
          <h2 className="text-5xl md:text-7xl font-black mb-8">Ready for the Future?</h2>
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">Join the energy revolution and power your operations with limitless clean energy.</p>
          <button className="px-12 py-5 rounded-full bg-gray-900 text-white font-bold text-xl hover:bg-solar-500 transition-colors shadow-2xl">
            Partner With Us
          </button>
        </AnimateIn>
      </section>
    </div>
  );
}
