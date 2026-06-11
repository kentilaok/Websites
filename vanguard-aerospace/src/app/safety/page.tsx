"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { ShieldCheck, HeartPulse, HardHat, CheckCircle2, Lock, Radio } from "lucide-react";

export default function Safety() {
  const safetyProtocols = [
    {
      title: "Triple Redundancy",
      desc: "Every critical system on our launch vehicles and habitats operates with three independent fallback mechanisms. If one fails, another seamlessly takes over without crew intervention.",
      icon: ShieldCheck
    },
    {
      title: "Launch Abort System (LAS)",
      desc: "Our passenger capsules are equipped with solid-rocket abort motors capable of pulling the capsule away from the booster at any point during ascent, experiencing max 6G acceleration.",
      icon: HeartPulse
    },
    {
      title: "Pre-Flight Medical Screening",
      desc: "All passengers undergo a rigorous 3-day health evaluation at our terrestrial facility. We test for G-force tolerance, cardiovascular health, and psychological readiness.",
      icon: HeartPulse
    },
    {
      title: "Continuous Telemetry",
      desc: "Mission Control monitors over 10,000 data points per second during flight. Anomaly detection AI flags irregularities milliseconds before they manifest physically.",
      icon: Radio
    },
    {
      title: "Atmospheric Re-entry Shielding",
      desc: "The Vanguard capsule utilizes a proprietary ablative heat shield that withstands temperatures up to 2,500°C, ensuring a comfortable cabin temperature of 22°C.",
      icon: HardHat
    },
    {
      title: "Encrypted Comms",
      desc: "All ground-to-orbit communications use quantum-encrypted channels to prevent signal hijacking, ensuring privacy and operational security.",
      icon: Lock
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#05050a] relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#9b51e0]/10 to-transparent pointer-events-none" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center relative z-10">
        <TextReveal>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#9b51e0]/10 mb-8 border border-[#9b51e0]/30">
            <ShieldCheck className="w-10 h-10 text-[#d194ff]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d194ff] to-[#9b51e0]">Safety</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-white/60 font-light">
            In the vacuum of space, compromise is not an option. Discover the engineering, protocols, and uncompromising standards that make Vanguard the safest operator in commercial aerospace.
          </p>
        </TextReveal>
      </section>

      {/* Intro Stats */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-[#0a0a14] border border-white/5 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b51e0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <TextReveal delay={0.1}>
              <div className="text-[#9b51e0] font-tech text-6xl font-bold mb-2">0</div>
              <div className="text-white text-xl font-bold mb-1">Fatalities</div>
              <div className="text-white/50 text-sm">Across all manned missions</div>
            </TextReveal>
            <TextReveal delay={0.2}>
              <div className="text-[#d194ff] font-tech text-6xl font-bold mb-2">10k+</div>
              <div className="text-white text-xl font-bold mb-1">Simulations</div>
              <div className="text-white/50 text-sm">Run before every unique trajectory</div>
            </TextReveal>
            <TextReveal delay={0.3}>
              <div className="text-white font-tech text-6xl font-bold mb-2">24/7</div>
              <div className="text-white text-xl font-bold mb-1">Monitoring</div>
              <div className="text-white/50 text-sm">Global ground station network</div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <TextReveal>
          <h2 className="text-3xl font-bold text-white mb-12 border-b border-white/10 pb-4">Core Safety Protocols</h2>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {safetyProtocols.map((protocol, index) => (
            <TextReveal key={index} delay={index * 0.1}>
              <div className="flex gap-6 group">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a14] border border-[#9b51e0]/20 flex items-center justify-center group-hover:border-[#d194ff] transition-colors">
                    <protocol.icon className="w-6 h-6 text-[#9b51e0] group-hover:text-[#d194ff] transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    {protocol.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {protocol.desc}
                  </p>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6">
        <TextReveal>
          <div className="border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Globally Certified</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {['FAA Office of Commercial Space Transportation', 'European Space Agency (ESA) Partner', 'International Space Station (ISS) Docking Certified', 'ISO 9001: Aerospace'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#0a0a14] px-6 py-3 rounded-full border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-tech text-white/80">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </TextReveal>
      </section>
    </div>
  );
}
