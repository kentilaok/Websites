import TextReveal from "@/components/ui/TextReveal";

const protocols = [
  {
    tagline: "CELLULAR RENEWAL",
    title: "Senolytic Clearing",
    desc: "Targeted removal of senescent 'zombie' cells that excrete inflammatory cytokines and accelerate aging in surrounding healthy tissues.",
    metric: "Reduces inflammation by 40%",
    cta: "Book Senolytic Eval"
  },
  {
    tagline: "METABOLIC OPTIMIZATION",
    title: "NAD+ Replenishment",
    desc: "Intravenous coenzyme therapy designed to restore mitochondrial function, repair DNA damage, and increase metabolic efficiency.",
    metric: "Elevates cellular energy by 65%",
    cta: "Schedule Infusion"
  },
  {
    tagline: "GENETIC RESET",
    title: "Epigenetic Reprogramming",
    desc: "A proprietary blend of Yamanaka factor modulators delivered via liposomal transport to reset cellular age without inducing pluripotency.",
    metric: "Reverses biological age by 5-7 years",
    cta: "Request Consultation"
  },
  {
    tagline: "SYSTEMIC REPAIR",
    title: "Stem Cell Exosome Therapy",
    desc: "Infusion of trillions of regenerative signaling molecules derived from mesenchymal stem cells to accelerate systemic tissue repair.",
    metric: "Accelerates healing by 300%",
    cta: "Learn About Exosomes"
  },
  {
    tagline: "COGNITIVE PRESERVATION",
    title: "Neuro-Regenerative Protocol",
    desc: "Targeted neurotrophic factors and brain-derived peptides combined with hyperbaric oxygen therapy to stimulate neurogenesis.",
    metric: "Improves cognitive scores by 25%",
    cta: "Explore Neuro-Protocol"
  },
  {
    tagline: "MUSCULOSKELETAL VITALITY",
    title: "Myostatin Inhibition Therapy",
    desc: "Advanced monoclonal antibody treatments that block myostatin pathways, promoting lean muscle hypertrophy and combatting sarcopenia.",
    metric: "Increases lean mass by 15%",
    cta: "Consult for Muscle Vitality"
  }
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container">
        <TextReveal>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-8">
            Clinical Protocols
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-24">
            Our interventions are grounded in peer-reviewed science and delivered in a state-of-the-art clinical environment.
          </p>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {protocols.map((protocol, i) => (
            <TextReveal key={i} delay={i * 0.1}>
              <div className="p-10 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] transition-all duration-500 group h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-ll-blue-soft text-ll-blue-glow flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{protocol.tagline}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{protocol.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{protocol.desc}</p>
                <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto">
                  <div className="text-sm font-semibold text-ll-blue-glow">
                    {protocol.metric}
                  </div>
                  <button className="text-sm font-bold text-slate-800 uppercase tracking-wider hover:text-ll-blue-glow transition-colors">
                    {protocol.cta} &rarr;
                  </button>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
