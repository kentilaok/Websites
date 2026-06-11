import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowRight, Box, Zap, Anchor, Plane, Train, Activity } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Quantum Ocean Freight",
      mode: "Maritime",
      transit: "7-14 Days Global",
      desc: "High-volume container transport utilizing autonomous, fusion-powered vessels. AI-optimized routing avoids storm systems and port congestion instantly.",
      icon: Anchor,
      features: ["Temperature Control", "Heavy Lift Capable", "Real-time Telemetry"]
    },
    {
      title: "Atmospheric Express",
      mode: "Air",
      transit: "12-24 Hours Global",
      desc: "Sub-orbital transport network for critical, high-value, or perishable cargo. Utilizing low-resistance altitudes to minimize transit times.",
      icon: Plane,
      features: ["Next-flight Guarantee", "Biological Safeties", "Armed Escort Options"]
    },
    {
      title: "Continental Maglev",
      mode: "Rail",
      transit: "2-4 Days Continental",
      desc: "High-speed magnetic levitation trains connecting major land-locked hubs. Zero-emission transport for massive bulk commodities.",
      icon: Train,
      features: ["Vibration Damping", "Bulk Ore Handling", "Automated Loading"]
    },
    {
      title: "Last-Mile Swarm",
      mode: "Drone / Road",
      transit: "Under 2 Hours Local",
      desc: "Coordinated drone swarms and autonomous EV trucks ensuring hyper-local delivery from centralized atmospheric hubs directly to endpoints.",
      icon: Box,
      features: ["Precision Drop", "Urban Navigation", "Zero Emissions"]
    },
    {
      title: "Cryogenic Cold Chain",
      mode: "Multi-modal",
      transit: "Variable",
      desc: "Absolute temperature maintenance from origin to destination. Essential for unstable pharmaceuticals and volatile chemicals.",
      icon: Zap,
      features: ["-196°C Capability", "Redundant Cooling", "Audit Trails"]
    },
    {
      title: "Predictive Warehousing",
      mode: "Storage",
      transit: "N/A",
      desc: "AI physically repositions your inventory globally before demand spikes occur. Your product is already local when the customer orders it.",
      icon: Activity,
      features: ["Robotic Retrieval", "Demand Forecasting", "Tax Optimized Storage"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <section className="mt-12 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-mono font-bold uppercase mb-6 flex justify-center"><TextReveal text="Logistics Vectors" /></h1>
        <p className="text-xl text-hyperion-muted font-mono">
          Engineered solutions for complex supply chain problems. We do not just move cargo; we bend distance to our will.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {solutions.map((sol, i) => (
          <div key={i} className="border border-hyperion-border bg-hyperion-card p-8 group hover:border-hyperion-neon-blue transition-all hover:shadow-[0_0_30px_rgba(0,210,255,0.1)] relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 group-hover:text-hyperion-neon-blue transition-all duration-500 scale-150 -translate-y-1/4 translate-x-1/4">
              <sol.icon className="w-48 h-48" />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="flex justify-between items-start mb-6">
                <sol.icon className="w-10 h-10 text-hyperion-neon-orange group-hover:text-hyperion-neon-blue transition-colors mb-4" />
                <span className="font-mono text-xs bg-hyperion-border px-3 py-1 uppercase tracking-widest text-hyperion-text">
                  {sol.mode}
                </span>
              </div>
              
              <h2 className="text-2xl font-mono font-bold uppercase text-hyperion-text mb-2 group-hover:text-hyperion-neon-blue transition-colors">
                {sol.title}
              </h2>
              
              <div className="font-mono text-hyperion-neon-orange text-sm mb-4 border-b border-hyperion-border pb-4 group-hover:border-hyperion-neon-blue/30 transition-colors">
                Transit: {sol.transit}
              </div>
              
              <p className="text-hyperion-muted font-mono leading-relaxed mb-8">
                {sol.desc}
              </p>
            </div>
            
            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-8">
                {sol.features.map((feat, j) => (
                  <span key={j} className="text-xs font-mono text-hyperion-text border border-hyperion-border px-2 py-1 bg-hyperion-bg/80 group-hover:border-hyperion-neon-blue/30 transition-colors">
                    {feat}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-4 border border-hyperion-neon-blue text-hyperion-neon-blue font-mono uppercase tracking-widest hover:bg-hyperion-neon-blue hover:text-black transition-colors flex items-center justify-center gap-2">
                Initialize Vector <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
