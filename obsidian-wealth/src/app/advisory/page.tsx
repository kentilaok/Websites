import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

const advisoryPillars = [
  {
    title: "Sovereign Structuring",
    subtitle: "Jurisdictional Arbitrage & Protection",
    desc: "We engineer resilient legal frameworks across multiple sovereign jurisdictions. By decentralizing asset ownership and utilizing trusts, foundations, and corporate wrappers in highly secure domiciles, we inoculate your wealth against localized geopolitical instability and expropriation.",
  },
  {
    title: "Generational Architecture",
    subtitle: "Dynastic Continuity",
    desc: "Wealth rarely survives the third generation. We implement rigorous governance structures, private family councils, and ironclad succession planning to ensure your legacy endures for centuries, not decades.",
  },
  {
    title: "Kinetic Philanthropy",
    subtitle: "Strategic Global Impact",
    desc: "Traditional charity is inefficient. We structure high-impact, kinetic philanthropic vehicles that operate with the ruthlessness of a venture capital firm, ensuring measurable global influence while optimizing tax architectures.",
  },
  {
    title: "Private Intelligence",
    subtitle: "Information Asymmetry",
    desc: "In elite finance, early information is the ultimate currency. Our advisory includes access to a private intelligence network providing geopolitical forecasting, corporate espionage defense, and macroeconomic early-warning systems.",
  },
  {
    title: "Tactical Liquidity",
    subtitle: "Bespoke Credit Solutions",
    desc: "Never liquidate an appreciating asset. We facilitate nine-figure lombard credit lines and custom liquidity solutions collateralized against fine art, private equity holdings, and real estate, allowing you to deploy capital instantly without tax triggering events.",
  }
];

export default function Advisory() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <section className="w-full pt-32 pb-24 px-8 md:px-16 text-center border-b border-white/5">
        <p className="text-silver-500 uppercase tracking-[0.3em] text-xs mb-8">
          Strategic Counsel
        </p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-tight mb-8 text-white max-w-4xl mx-auto">
          The Architecture of Permanence
        </h1>
        <div className="text-xl md:text-2xl text-silver-400 font-serif max-w-3xl mx-auto">
          <TextReveal text="We do not offer standard financial advice. We architect comprehensive, multi-generational systems designed to protect, expand, and obscure elite wealth." />
        </div>
      </section>

      {/* Advisory Pillars */}
      <section className="w-full py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto space-y-24">
          {advisoryPillars.map((pillar, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 group">
              <div className="md:w-1/3">
                <span className="text-silver-700 font-serif text-6xl mb-4 block group-hover:text-silver-500 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl text-white mb-2">{pillar.title}</h3>
                <p className="text-silver-500 text-xs uppercase tracking-widest">{pillar.subtitle}</p>
              </div>
              <div className="md:w-2/3 md:pt-4 border-t border-white/10 md:border-t-0 md:border-l pl-0 md:pl-12">
                <p className="text-silver-400 text-sm md:text-base leading-loose">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Obsidian Council */}
      <section className="w-full bg-obsidian-light py-24 px-8 md:px-16 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-8 text-white">The Obsidian Council</h2>
          <p className="text-silver-400 text-sm leading-relaxed mb-12">
            Every Obsidian Partner is assigned a dedicated council consisting of a master structurer, a geopolitical analyst, a private markets specialist, and a dedicated fiduciary. This brain trust operates continuously on your behalf.
          </p>
          <Link 
            href="/private-application" 
            className="inline-block border-b border-silver-500 pb-1 text-sm uppercase tracking-widest text-white hover:border-white transition-colors"
          >
            Request Counsel
          </Link>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="w-full py-12 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-silver-600 uppercase tracking-widest">
        <p>© 2026 Obsidian Wealth.</p>
        <Link href="/" className="hover:text-white transition-colors mt-4 md:mt-0">Return Home</Link>
      </footer>
    </div>
  );
}
