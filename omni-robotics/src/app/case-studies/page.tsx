import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    client: "Global Auto Werke",
    title: "Chassis Welding Automation",
    metrics: "+45% Throughput",
    year: "2025",
  },
  {
    client: "Aerospace Dynamics",
    title: "Fuselage Riveting System",
    metrics: "0.01mm Defect Rate",
    year: "2024",
  },
  {
    client: "MicroTech Foundry",
    title: "Wafer Handling Integration",
    metrics: "Class 1 Cleanroom Certified",
    year: "2025",
  },
  {
    client: "Nordic Logistics",
    title: "Cold-Storage Palletizing",
    metrics: "24/7 Ops at -30°C",
    year: "2023",
  },
  {
    client: "heavy-lift solutions",
    title: "Mining Equipment Assembly",
    metrics: "1200kg Payload Handled",
    year: "2024",
  },
  {
    client: "Medi-Pack Inc",
    title: "Pharmaceutical Sorting",
    metrics: "300 units/minute",
    year: "2025",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-4xl">
          <TextReveal text="PROVEN IN THE FIELD" className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter mb-6" />
          <p className="text-steel-400 font-mono text-lg md:text-xl">
            We don&apos;t just sell hardware. We architect entire manufacturing ecosystems. Review our deployment logs across various industrial sectors.
          </p>
        </div>

        <div className="border-t border-steel-700">
          {CASES.map((study, i) => (
            <div key={i} className="group border-b border-steel-700 py-10 hover:bg-steel-800 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 -mx-4 cursor-none">
              <div className="flex-1">
                <p className="text-industrial-orange font-mono text-sm uppercase tracking-widest mb-2">{study.client}</p>
                <h3 className="text-3xl font-bold uppercase text-white group-hover:text-safety-yellow transition-colors">{study.title}</h3>
              </div>
              
              <div className="flex-1 flex md:justify-center">
                <div className="border border-steel-600 bg-steel-900 px-6 py-2">
                  <span className="text-white font-mono uppercase text-sm font-bold tracking-wider">{study.metrics}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 justify-between md:justify-end">
                <span className="text-steel-500 font-mono text-lg">{study.year}</span>
                <div className="w-12 h-12 rounded-full border border-steel-600 flex items-center justify-center group-hover:bg-industrial-orange group-hover:border-industrial-orange group-hover:text-white text-steel-400 transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-industrial-orange flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-steel-900 mb-4">Have a unique challenge?</h2>
          <p className="text-steel-800 font-mono mb-8 max-w-xl">Our R&D division frequently undertakes custom engineering projects for highly specialized use cases.</p>
          <button className="bg-steel-900 hover:bg-white text-white hover:text-steel-900 px-8 py-4 uppercase font-bold tracking-widest transition-colors skew-x-[-15deg]">
            <span className="block transform skew-x-[15deg]">Brief Our Engineers</span>
          </button>
        </div>
      </div>
    </div>
  );
}
