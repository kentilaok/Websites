import TextReveal from "@/components/ui/TextReveal";
import { ArrowRight, Cpu, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-steel-900 bg-grid-pattern border-b border-steel-700 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-steel-900 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block border border-steel-600 bg-steel-800/50 backdrop-blur-sm px-4 py-1 mb-8 uppercase tracking-[0.2em] text-xs font-mono text-safety-yellow flex items-center gap-2">
            <span className="w-2 h-2 bg-safety-yellow rounded-full animate-pulse"></span>
            System Online: Next-Gen Fleet Active
          </div>
          
          <TextReveal 
            text="ENGINEERED FOR THE EXTREME." 
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 max-w-5xl leading-none" 
          />
          
          <p className="text-steel-400 max-w-2xl text-lg md:text-xl font-mono mb-10">
            Industrial automation redefined. Uncompromising power meets sub-millimeter precision in the world&apos;s most hostile manufacturing environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/fleet" className="bg-industrial-orange hover:bg-safety-yellow text-white hover:text-steel-900 px-8 py-4 font-bold uppercase tracking-widest skew-x-[-15deg] transition-all flex items-center gap-2 group">
              <span className="transform skew-x-[15deg]">Explore Fleet</span>
              <ArrowRight className="w-5 h-5 transform skew-x-[15deg] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="border border-steel-600 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-widest skew-x-[-15deg] transition-all group">
              <span className="block transform skew-x-[15deg]">Request Demo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Ticker Section */}
      <section className="border-b border-steel-700 bg-industrial-orange py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex gap-12 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 font-black uppercase text-steel-900 text-2xl tracking-tighter">
              <span>Zero Downtime</span>
              <span className="w-2 h-2 bg-steel-900 rounded-full"></span>
              <span>Sub-millimeter Precision</span>
              <span className="w-2 h-2 bg-steel-900 rounded-full"></span>
              <span>AI-Driven Logistics</span>
              <span className="w-2 h-2 bg-steel-900 rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-32 container mx-auto px-6">
        <div className="mb-20">
          <TextReveal text="CORE CAPABILITIES" className="text-4xl md:text-6xl font-black uppercase text-white mb-4" />
          <div className="w-24 h-2 bg-industrial-orange"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-12 h-12 text-safety-yellow mb-6" />,
              title: "Hyper-Dynamic Actuation",
              desc: "Proprietary joint articulation allowing for 360-degree rotational physics without cable strain.",
            },
            {
              icon: <Cpu className="w-12 h-12 text-industrial-orange mb-6" />,
              title: "Neural Pathfinding",
              desc: "On-board AI processing computes 10,000 spatial variations per second to ensure zero-collision routing.",
            },
            {
              icon: <ShieldAlert className="w-12 h-12 text-white mb-6" />,
              title: "Titanium Chasis",
              desc: "Mil-spec reinforced structural integrity capable of withstanding 50G impacts and extreme thermal loads.",
            }
          ].map((feat, i) => (
            <div key={i} className="bg-steel-800 border border-steel-700 p-8 hover:border-industrial-orange transition-colors group">
              {feat.icon}
              <h3 className="text-xl font-bold uppercase text-white mb-4">{feat.title}</h3>
              <p className="text-steel-400 font-mono text-sm leading-relaxed">{feat.desc}</p>
              <div className="mt-8 w-8 h-[2px] bg-steel-600 group-hover:bg-safety-yellow transition-colors group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Video / Visual placeholder section */}
      <section className="border-y border-steel-700 bg-steel-800 relative h-[600px] overflow-hidden group flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"></div>
        <div className="relative z-10 text-center">
          <TextReveal text="SEE THEM IN ACTION" className="text-4xl md:text-7xl font-black uppercase text-white mb-8 tracking-tighter" />
          <button className="w-24 h-24 rounded-full border-2 border-industrial-orange flex items-center justify-center mx-auto hover:bg-industrial-orange hover:scale-110 transition-all text-white">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
          </button>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-32 container mx-auto px-6 text-center">
         <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">Ready to upgrade your floor?</h2>
         <p className="text-steel-400 font-mono mb-10 max-w-2xl mx-auto">Contact our deployment specialists for a custom structural analysis and integration roadmap.</p>
         <Link href="/support" className="inline-block bg-white text-steel-900 px-10 py-5 font-black uppercase tracking-widest skew-x-[-15deg] hover:bg-industrial-orange hover:text-white transition-colors">
            <span className="block transform skew-x-[15deg]">Contact Sales</span>
         </Link>
      </section>
    </div>
  );
}
