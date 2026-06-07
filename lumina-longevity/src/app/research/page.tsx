import TextReveal from "@/components/ui/TextReveal";

const papers = [
  {
    title: "Systemic Senolysis via Targeted Liposomal Delivery",
    journal: "NATURE AGING // 2025",
    abstract: "We demonstrate a novel delivery mechanism for Dasatinib and Quercetin compounds utilizing engineered lipid nanoparticles. This approach increased senescent cell clearance in human tissue models by 42% while reducing off-target toxicity to near zero.",
    cta: "Read Full Paper"
  },
  {
    title: "Epigenetic Clock Reversal in Human Fibroblasts",
    journal: "CELL METABOLISM // 2026",
    abstract: "Transient expression of OSK (Oct4, Sox2, Klf4) factors safely rewinds the epigenetic age of adult human dermal fibroblasts by an average of 12 years without erasing cellular identity or inducing neoplastic transformation.",
    cta: "Read Full Paper"
  },
  {
    title: "Mitochondrial Uncoupling and Lifespan Extension",
    journal: "SCIENCE REVIEWS // 2026",
    abstract: "Mild mitochondrial uncoupling via BAM15 administration lowers reactive oxygen species (ROS) production and extends median healthspan in mammalian models. Phase 1 human trials show exceptional safety profiles.",
    cta: "Read Full Paper"
  },
  {
    title: "Proteostasis Network Rejuvenation via Chaperone Upregulation",
    journal: "JOURNAL OF GERONTOLOGY // 2026",
    abstract: "Targeted small-molecule activation of heat shock factor 1 (HSF1) successfully clears toxic protein aggregates in neural tissue, restoring youthful proteostasis network function and significantly delaying neurodegeneration.",
    cta: "Read Full Paper"
  },
  {
    title: "Thymic Involution Reversal and T-Cell Restoration",
    journal: "IMMUNITY // 2025",
    abstract: "Administration of recombinant human growth hormone combined with DHEA and metformin effectively regenerates functional thymic mass in adults over 60, resulting in a broadened T-cell receptor repertoire and enhanced immune surveillance.",
    cta: "Read Full Paper"
  },
  {
    title: "Telomerase Activation in Rapidly Dividing Tissues",
    journal: "NATURE MEDICINE // 2027 (PREPRINT)",
    abstract: "A gene therapy approach utilizing a modified AAV vector to temporarily upregulate TERT expression in intestinal crypts and hematopoietic stem cells, preventing stem cell exhaustion without increasing oncogenic risk.",
    cta: "Request Preprint Access"
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container max-w-4xl">
        <TextReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-600 mb-8">
             <span className="w-2 h-2 rounded-full bg-emerald-500" />
             ACTIVE TRIALS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-8">
            Clinical Research
          </h1>
          <p className="text-xl text-slate-600 mb-16 leading-relaxed">
            Lumina operates at the bleeding edge of biogerontology. Our in-house research division works in tandem with top universities to translate theoretical models into practical therapies.
          </p>
        </TextReveal>

        <div className="space-y-12">
          {papers.map((paper, i) => (
            <TextReveal key={i} delay={i * 0.1}>
              <div className="group border-b border-slate-200 pb-12">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-ll-blue-glow transition-colors">
                    {paper.title}
                  </h3>
                  <span className="text-slate-400 text-sm font-mono shrink-0">{paper.journal}</span>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Abstract: {paper.abstract}
                </p>
                <button className="text-sm font-bold text-ll-blue-glow uppercase tracking-wider hover:underline">
                  {paper.cta}
                </button>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
