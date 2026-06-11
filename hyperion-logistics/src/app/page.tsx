import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowRight, Globe, Shield, Zap, Box, Anchor } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Active Routes", value: "1,420+" },
    { label: "Global Ports", value: "85" },
    { label: "Avg Delivery", value: "99.8%" },
    { label: "Tons Daily", value: "45K" },
    { label: "Fleet Vehicles", value: "12,000" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32 py-12">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-96 bg-hyperion-neon-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <h1 className="text-6xl md:text-8xl font-bold font-mono tracking-tighter uppercase mb-6 relative z-10">
          <TextReveal text="Absolute Command" />
          <span className="text-hyperion-neon-blue block mt-2">Over Supply Chains</span>
        </h1>
        <p className="text-xl text-hyperion-muted max-w-2xl font-mono mb-10 border-l-2 border-hyperion-neon-orange pl-4 relative z-10 bg-hyperion-bg/50 backdrop-blur-sm py-2">
          Hyperion Logistics integrates predictive AI with global freight infrastructure to guarantee sub-millisecond tracking and zero-latency routing across 85 countries.
        </p>
        <div className="flex flex-wrap gap-6 relative z-10">
          <button className="bg-hyperion-neon-blue text-black font-mono font-bold px-8 py-4 uppercase tracking-wider hover:shadow-[0_0_20px_var(--color-hyperion-neon-blue)] transition-all flex items-center gap-2">
            Initialize Shipment <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-hyperion-border bg-hyperion-card/50 text-hyperion-text font-mono px-8 py-4 uppercase tracking-wider hover:border-hyperion-neon-orange hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all">
            System Status
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 border-y border-hyperion-border py-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 relative group cursor-default">
            <div className="absolute inset-0 bg-hyperion-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity -m-4 p-4 rounded-lg" />
            <span className="text-4xl md:text-5xl font-mono font-bold text-hyperion-text group-hover:text-hyperion-neon-blue transition-colors">{stat.value}</span>
            <span className="text-sm font-mono text-hyperion-muted uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Core Systems */}
      <section className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase"><TextReveal text="Core Infrastructure" /></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Global Nexus", desc: "Interconnected port network spanning 6 continents with automated customs clearance protocols." },
            { icon: Zap, title: "Quantum Routing", desc: "Real-time AI pathfinding algorithms adjusting to weather, geopolitics, and port congestion instantly." },
            { icon: Shield, title: "Secure Cargo", desc: "Military-grade encryption for all manifest data and continuous physical monitoring of high-value freight." },
            { icon: Box, title: "Automated Warehousing", desc: "Robotics-driven storage and retrieval systems minimizing handling time and human error." },
            { icon: Anchor, title: "Maritime Fleet", desc: "Next-gen autonomous cargo vessels operating with 40% increased fuel efficiency." },
          ].map((item, i) => (
            <div key={i} className="group p-8 border border-hyperion-border bg-hyperion-card hover:border-hyperion-neon-blue transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-hyperion-neon-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <item.icon className="w-12 h-12 text-hyperion-neon-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-mono font-bold uppercase mb-4 text-hyperion-text">{item.title}</h3>
              <p className="text-hyperion-muted font-mono text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
