"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { Orbit, Wifi, Droplets, Activity, Coffee, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Habitats() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const amenities = [
    { icon: Wifi, title: "High-Speed Laser Comm", desc: "Gigabit internet connection via our constellation relay." },
    { icon: Droplets, title: "Closed-Loop Hydro", desc: "100% water recycling using advanced nano-filtration." },
    { icon: Activity, title: "Biometric Monitoring", desc: "24/7 health tracking adjusting habitat environments." },
    { icon: Coffee, title: "Zero-G Culinary", desc: "Gourmet meals prepared by orbital chefs." },
    { icon: ShieldAlert, title: "Safe-Haven Pods", desc: "Redundant emergency isolation and return vehicles." },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#05050a] overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <TextReveal>
          <Orbit className="w-16 h-16 text-[#d194ff] mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Vanguard <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d194ff] to-[#9b51e0]">Habitats</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            More than just a destination. Our orbital stations represent the first permanent commercial settlements in low earth orbit, combining luxury with cutting-edge aerospace engineering.
          </p>
        </TextReveal>
      </section>

      {/* Featured Image Parallax */}
      <section className="w-full h-[60vh] md:h-[80vh] relative mb-32 overflow-hidden">
        <img 
          ref={imgRef}
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop" 
          alt="Orbital Habitat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-[#05050a]" />
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
        <div>
          <TextReveal>
            <h2 className="text-4xl font-bold mb-6 text-white">Vanguard Prime Station</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Operating at an altitude of 450km, Vanguard Prime is the crown jewel of our infrastructure. Featuring a rotating torus design, it provides 0.3g of artificial gravity in the outer ring, allowing for comfortable long-term stays.
            </p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The central hub remains in microgravity for recreation, manufacturing, and docking procedures. It is the ultimate hybrid environment.
            </p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="font-tech text-[#d194ff] block mb-1">Volume</span>
                <span className="text-2xl font-bold text-white">1,200 m³</span>
              </div>
              <div>
                <span className="font-tech text-[#d194ff] block mb-1">Capacity</span>
                <span className="text-2xl font-bold text-white">24 Guests</span>
              </div>
              <div>
                <span className="font-tech text-[#d194ff] block mb-1">Power</span>
                <span className="text-2xl font-bold text-white">Solar Array</span>
              </div>
            </div>
          </TextReveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextReveal delay={0.2} className="h-64 rounded-2xl overflow-hidden border border-white/10 mt-8">
            <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop" alt="Interior" className="w-full h-full object-cover" />
          </TextReveal>
          <TextReveal delay={0.4} className="h-64 rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1918&auto=format&fit=crop" alt="View" className="w-full h-full object-cover" />
          </TextReveal>
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <TextReveal>
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Onboard Systems & Amenities</h2>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <TextReveal key={index} delay={index * 0.1}>
              <div className="bg-[#0a0a14] p-8 rounded-2xl border border-white/5 hover:border-[#9b51e0]/30 transition-colors h-full">
                <div className="w-12 h-12 bg-[#9b51e0]/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#d194ff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <TextReveal>
          <div className="bg-[#9b51e0] rounded-3xl p-12 text-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Take a Virtual Tour</h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">Explore Vanguard Prime in our fully immersive 3D digital twin environment.</p>
              <button className="px-8 py-3 bg-white text-black font-bold rounded-full">
                Launch Experience
              </button>
            </div>
          </div>
        </TextReveal>
      </section>
    </div>
  );
}
