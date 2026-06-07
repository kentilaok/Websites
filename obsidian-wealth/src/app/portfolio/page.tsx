import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

const assets = [
  {
    class: "Aeronautics & Aerospace",
    title: "Project Valkyrie",
    specs: ["Target IRR: 28%", "Term: 7 Years", "Entry: $5M"],
    description: "A syndicate investment in next-generation orbital infrastructure and hypersonic logistics. Closed-loop ecosystem heavily guarded by sovereign patents.",
  },
  {
    class: "Real Estate (Ultra-Prime)",
    title: "The Geneva Vaults",
    specs: ["Target Yield: 6.5%", "Term: Perpetual", "Entry: $10M"],
    description: "Subterranean, climate-controlled autonomous vault systems located in neutral jurisdictions. Physical asset securing for art, bullion, and data.",
  },
  {
    class: "Private Equity",
    title: "Quantum Nexus Group",
    specs: ["Target IRR: 35%", "Term: 5 Years", "Entry: $2.5M"],
    description: "Pre-IPO stage quantum computing hardware firm with established defense contracts. Restricted allocation strictly for Obsidian partners.",
  },
  {
    class: "Alternative Assets",
    title: "Rare Earth Consortium",
    specs: ["Target IRR: 22%", "Term: 10 Years", "Entry: $5M"],
    description: "Direct ownership of unrefined rare-earth element extraction facilities in geopolitically stable regions. A hedge against technological supply chain disruption.",
  },
  {
    class: "Digital Infrastructure",
    title: "Abyss Subsea Cables",
    specs: ["Target Yield: 9%", "Term: 15 Years", "Entry: $15M"],
    description: "Proprietary transatlantic fiber optic networks providing ultra-low latency data transmission for high-frequency trading firms.",
  },
  {
    class: "Fine Art & Heritage",
    title: "The Renaissance Fund",
    specs: ["Target IRR: 12%", "Term: 10 Years", "Entry: $1M"],
    description: "Fractionalized ownership of verified Old Masters and historically significant artifacts, stored in freeports and exempt from standard taxation.",
  }
];

export default function Portfolio() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <section className="w-full pt-32 pb-16 px-8 md:px-16 border-b border-white/5">
        <p className="text-silver-500 uppercase tracking-[0.3em] text-xs mb-8">
          Restricted Access
        </p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-tight max-w-4xl mb-8 text-white">
          The Obsidian Portfolio
        </h1>
        <div className="text-xl md:text-2xl text-silver-400 font-serif max-w-3xl">
          <TextReveal text="A highly curated selection of off-market, esoteric, and hyper-exclusive investment vehicles. Public markets are for the masses; true wealth is built in private." />
        </div>
      </section>

      {/* Asset Grid */}
      <section className="w-full py-24 px-8 md:px-16 bg-obsidian-light/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {assets.map((asset, i) => (
            <div key={i} className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 hover:border-white/30 transition-colors duration-500">
              <div className="flex-1 md:pr-12">
                <p className="text-silver-500 text-xs uppercase tracking-widest mb-4 flex items-center">
                  <Lock className="w-3 h-3 mr-2" /> {asset.class}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 group-hover:text-silver-300 transition-colors">
                  {asset.title}
                </h2>
                <p className="text-silver-400 text-sm leading-relaxed max-w-2xl">
                  {asset.description}
                </p>
              </div>
              
              <div className="mt-8 md:mt-0 flex flex-col space-y-4 md:w-64">
                {asset.specs.map((spec, j) => {
                  const [label, value] = spec.split(": ");
                  return (
                    <div key={j} className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-silver-600 text-xs uppercase tracking-wider">{label}</span>
                      <span className="text-white text-sm font-serif">{value}</span>
                    </div>
                  );
                })}
                <button className="mt-4 flex items-center justify-between px-4 py-3 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-widest group/btn">
                  Request Prospectus
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="w-full py-24 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <p className="text-silver-600 text-xs uppercase tracking-widest mb-6">Confidentiality Notice</p>
        <p className="text-silver-500 text-sm leading-relaxed">
          The investment vehicles listed above are purely illustrative of past or current closed allocations. They do not constitute a public offering. Access to current opportunities is strictly limited to verified Obsidian Partners who meet our rigorous KYC/AML and asset thresholds.
        </p>
      </section>

      {/* Footer (Simplified) */}
      <footer className="w-full py-12 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-silver-600 uppercase tracking-widest">
        <p>© 2026 Obsidian Wealth.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="/private-application" className="hover:text-white transition-colors">Apply</Link>
          <Link href="/" className="hover:text-white transition-colors">Return Home</Link>
        </div>
      </footer>
    </div>
  );
}
