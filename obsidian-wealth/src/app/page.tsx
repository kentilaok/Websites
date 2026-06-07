import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center px-8 md:px-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50 pointer-events-none" />
        
        <p className="text-silver-500 uppercase tracking-[0.3em] text-xs mb-8">
          The Apex of Private Banking
        </p>
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-tight max-w-5xl mb-12">
          Wealth management for the <span className="text-gradient-silver italic">extraordinary.</span>
        </h1>
        
        <Link 
          href="/private-application" 
          className="group flex items-center space-x-4 border-b border-silver-700 pb-2 hover:border-white transition-colors duration-500"
        >
          <span className="text-sm uppercase tracking-widest text-silver-300 group-hover:text-white transition-colors">
            Request an Invitation
          </span>
          <ArrowRight className="w-4 h-4 text-silver-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </Link>
      </section>

      {/* Ethos / TextReveal */}
      <section className="w-full max-w-6xl mx-auto px-8 md:px-16 py-32 md:py-48 flex flex-col">
        <p className="text-silver-500 uppercase tracking-[0.2em] text-xs mb-16">Our Ethos</p>
        <div className="text-3xl md:text-5xl font-serif leading-snug md:leading-tight text-silver-300">
          <TextReveal text="We operate in the shadows of conventional finance, forging proprietary pathways to generational wealth. Silence, precision, and absolute exclusivity are our hallmarks." />
        </div>
      </section>

      {/* Pillars */}
      <section className="w-full bg-obsidian-light py-32 md:py-48 px-8 md:px-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            {
              title: "Strategic Advisory",
              desc: "Bespoke counsel tailored to family offices, sovereign entities, and ultra-high-net-worth individuals navigating complex global architectures.",
              number: "01"
            },
            {
              title: "Private Markets",
              desc: "Direct access to unlisted equities, elite venture capital, and off-market tangible assets heavily shielded from public scrutiny.",
              number: "02"
            },
            {
              title: "Wealth Preservation",
              desc: "Architectural structuring of assets utilizing sovereign jurisdictions, ensuring absolute continuity across multiple generations.",
              number: "03"
            }
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col group cursor-none">
              <span className="text-silver-700 font-serif text-2xl mb-8 group-hover:text-white transition-colors duration-500">{pillar.number}</span>
              <h3 className="text-xl font-serif mb-4 text-silver-100">{pillar.title}</h3>
              <p className="text-silver-500 text-sm leading-relaxed max-w-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Standard */}
      <section className="w-full max-w-7xl mx-auto px-8 md:px-16 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">The Obsidian Standard.</h2>
          <p className="text-silver-400 leading-relaxed mb-8">
            Our entry threshold is unyielding. We accept less than 1% of prospective applicants, ensuring our partners receive undivided, unparalleled attention. We are not a mass-market institution.
          </p>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <span className="text-silver-500 text-xs uppercase tracking-widest">Minimum AUM</span>
              <span className="font-serif text-2xl text-white">$50M+</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <span className="text-silver-500 text-xs uppercase tracking-widest">Client to Partner Ratio</span>
              <span className="font-serif text-2xl text-white">5:1</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <span className="text-silver-500 text-xs uppercase tracking-widest">Global Reach</span>
              <span className="font-serif text-2xl text-white">42 Jurisdictions</span>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center p-12">
          {/* Abstract graphic */}
          <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center">
             <div className="w-2/3 h-2/3 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-1/3 h-1/3 bg-white blur-3xl opacity-20 rounded-full" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-obsidian-dark py-32 border-t border-white/5 flex flex-col items-center justify-center text-center px-8">
        <h2 className="font-serif text-3xl md:text-5xl mb-8">Ready to transcend?</h2>
        <p className="text-silver-500 max-w-xl mx-auto mb-12 leading-relaxed">
          Membership is strictly by invitation or rigorous application. Only those who align with our vision of absolute excellence are considered.
        </p>
        <Link 
          href="/private-application" 
          className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-silver-300 transition-colors duration-300"
        >
          Begin Application
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-silver-600 uppercase tracking-widest">
        <p>© 2026 Obsidian Wealth. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Regulatory</Link>
        </div>
      </footer>
    </div>
  );
}
