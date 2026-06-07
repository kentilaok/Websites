"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import TextReveal from "@/components/ui/TextReveal";
import { TrendingUp, FileText, Users, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Investors() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* 1. Hero */}
      <section className="pt-32 container mx-auto px-6 text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 font-bold text-gray-800">
            <TrendingUp size={18} className="text-fusion-500" /> NYSE: SOLS
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            INVEST IN <span className="text-gradient">INFINITY</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We are capitalizing the ultimate transition in human history. Join us in building the post-scarcity economy.
          </p>
        </AnimateIn>
      </section>

      {/* 2. Thesis */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <TextReveal 
            text="By 2040, Solstice Energy projects it will supply 85% of the world's baseload power, driving marginal cost of energy toward zero while generating unprecedented compounding returns."
            className="text-3xl md:text-5xl font-bold leading-tight"
          />
        </div>
      </section>

      {/* 3. Financial Highlights */}
      <section className="container mx-auto px-6">
        <AnimateIn>
          <h2 className="text-4xl font-black mb-12 border-b pb-4">Q3 2026 Financial Highlights</h2>
        </AnimateIn>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Quarterly Revenue", val: "$14.2B", growth: "+42% YoY" },
            { label: "EBITDA Margin", val: "68%", growth: "+400 bps" },
            { label: "Deployed Capital", val: "$82B", growth: "Target: $100B" },
            { label: "Grid Contracts", val: "142", growth: "Countries Active" }
          ].map((stat, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="glass-panel p-8 rounded-3xl h-full">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{stat.label}</div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.val}</div>
                <div className="text-sm font-semibold text-solar-600 bg-solar-100 inline-block px-3 py-1 rounded-full">
                  {stat.growth}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. Reports & Filings */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <AnimateIn>
              <h2 className="text-4xl font-black mb-6">Latest Filings</h2>
              <p className="text-gray-600 mb-8">Access our latest SEC filings, annual reports, and ESG sustainability data.</p>
              <button className="flex items-center gap-2 font-bold text-fusion-600 hover:text-fusion-700">
                View All Archives <ArrowRight size={20} />
              </button>
            </AnimateIn>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
            {[
              "Q3 2026 Earnings Release",
              "2025 Annual Report (10-K)",
              "Global ESG Impact Report 2026",
              "Proxy Statement (DEF 14A)"
            ].map((doc, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="right">
                <div className="flex items-center justify-between p-6 glass-panel rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <FileText className="text-gray-400 group-hover:text-solar-500" />
                    <span className="font-bold text-gray-800">{doc}</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section className="container mx-auto px-6 py-16 bg-gray-50 rounded-[3rem] border border-gray-100">
        <div className="text-center mb-16">
          <AnimateIn>
            <h2 className="text-4xl font-black mb-4">Board of Directors</h2>
            <p className="text-gray-600">Guiding the transition.</p>
          </AnimateIn>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { name: "Dr. Elena Rostova", role: "Chief Executive Officer, Co-Founder", bg: "bg-solar-200" },
            { name: "Marcus Chen", role: "Chief Financial Officer", bg: "bg-fusion-200" },
            { name: "Dr. Sarah Jenkins", role: "Head of Quantum Grid", bg: "bg-teal-200" }
          ].map((person, i) => (
            <AnimateIn key={i} delay={i * 0.2}>
              <div className={`w-32 h-32 mx-auto rounded-full ${person.bg} mb-6 shadow-inner`} />
              <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
              <p className="text-gray-500 font-medium">{person.role}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="container mx-auto px-6 max-w-4xl">
        <AnimateIn>
          <h2 className="text-4xl font-black mb-12 text-center">Investor FAQ</h2>
        </AnimateIn>
        <div className="space-y-6">
          {[
            { q: "Does Solstice pay a dividend?", a: "Currently, we are reinvesting 100% of free cash flow into R&D and global infrastructure deployment to maximize long-term shareholder value." },
            { q: "Who is your transfer agent?", a: "Computershare Trust Company, N.A. serves as our transfer agent and dividend disbursing agent." },
            { q: "What is your ESG rating?", a: "We hold AAA ratings from MSCI and are the only energy company to be certified net-negative carbon across our entire supply chain." }
          ].map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.1} direction="up">
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <ShieldCheck className="text-solar-500 shrink-0 mt-1" size={24} />
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-9">{faq.a}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="container mx-auto px-6 text-center">
        <AnimateIn>
          <div className="p-16 rounded-[3rem] bg-gradient-to-br from-solar-500 to-fusion-500 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Contact Investor Relations</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              For institutional inquiries, please contact our IR team. Retail investors should direct questions to their broker.
            </p>
            <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              <DollarSign size={20} /> ir@solstice.energy
            </button>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
