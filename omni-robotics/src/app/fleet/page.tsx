import TextReveal from "@/components/ui/TextReveal";
import { ArrowRight } from "lucide-react";

const FLEET = [
  {
    id: "OR-X1",
    name: "Apex Welder Pro",
    role: "Precision Arc Welding",
    specs: { payload: "50kg", reach: "2.1m", repeatability: "±0.02mm" },
    desc: "Engineered for high-volume automotive lines. Features advanced spark-deflection shielding and real-time seam tracking algorithms.",
    image: "https://images.unsplash.com/photo-1565439387814-1e5927503fa6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "OR-T4",
    name: "Titan Lifter",
    role: "Heavy Payload Transit",
    specs: { payload: "1200kg", reach: "3.5m", repeatability: "±0.1mm" },
    desc: "The powerhouse of the fleet. Utilizes dual-hydraulic assist to effortlessly maneuver engine blocks and aerospace fuselages.",
    image: "https://images.unsplash.com/photo-1580983546592-b4c6e9491763?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "OR-S9",
    name: "Swift Sorter",
    role: "High-Speed Logistics",
    specs: { payload: "10kg", reach: "1.2m", repeatability: "±0.01mm" },
    desc: "Lightning-fast pick and place operations. Vision-guided neural processing allows for dynamic object recognition at 120 items per minute.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "OR-M2",
    name: "Micro Assembler",
    role: "Electronics Fabrication",
    specs: { payload: "3kg", reach: "0.8m", repeatability: "±0.005mm" },
    desc: "Designed for cleanroom environments. Perfect for PCB assembly, chip placement, and delicate sensor calibration.",
    image: "https://images.unsplash.com/photo-1620022353380-0071da50937a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "OR-C7",
    name: "Collab-Core",
    role: "Human-Robot Collaboration",
    specs: { payload: "25kg", reach: "1.5m", repeatability: "±0.05mm" },
    desc: "Equipped with advanced capacitive skin sensors to work safely alongside human operators without requiring safety cages.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: "OR-P5",
    name: "Plasma Cutter V2",
    role: "Material Separation",
    specs: { payload: "30kg", reach: "2.5m", repeatability: "±0.03mm" },
    desc: "Integrates directly with high-voltage plasma cutting torches. Features thermal-resistant ceramic coating for extreme temperatures.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2001&auto=format&fit=crop"
  }
];

export default function FleetPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-industrial-orange"></div>
            <span className="text-industrial-orange font-mono uppercase tracking-widest text-sm">Product Lineup</span>
          </div>
          <TextReveal text="THE FLEET" className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter" />
          <p className="text-steel-400 font-mono mt-6 max-w-2xl text-lg">
            Our autonomous systems are categorized by payload, precision, and application. Select a chassis below to view detailed telemetrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FLEET.map((robot, i) => (
            <div key={i} className="group relative border border-steel-700 bg-steel-800 overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-steel-900 border border-steel-600 px-3 py-1 font-mono text-xs text-safety-yellow uppercase">
                {robot.id}
              </div>
              
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-steel-900/40 mix-blend-multiply z-0 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={robot.image} alt={robot.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-steel-800 to-transparent"></div>
              </div>

              <div className="p-8 relative z-10">
                <h3 className="text-3xl font-black uppercase text-white mb-1 group-hover:text-industrial-orange transition-colors">{robot.name}</h3>
                <p className="text-safety-yellow font-mono text-sm uppercase tracking-widest mb-6">{robot.role}</p>
                
                <p className="text-steel-400 font-mono text-sm mb-8 line-clamp-2">{robot.desc}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-steel-700">
                  <div>
                    <span className="block text-steel-500 text-xs uppercase mb-1 font-mono">Payload</span>
                    <span className="text-white font-bold">{robot.specs.payload}</span>
                  </div>
                  <div>
                    <span className="block text-steel-500 text-xs uppercase mb-1 font-mono">Reach</span>
                    <span className="text-white font-bold">{robot.specs.reach}</span>
                  </div>
                  <div>
                    <span className="block text-steel-500 text-xs uppercase mb-1 font-mono">Precision</span>
                    <span className="text-white font-bold">{robot.specs.repeatability}</span>
                  </div>
                </div>

                <button className="w-full bg-steel-700 hover:bg-industrial-orange text-white uppercase font-bold tracking-widest py-4 transition-colors flex justify-center items-center gap-2 group/btn">
                  View Specs
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
