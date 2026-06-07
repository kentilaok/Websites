import TextReveal from "@/components/ui/TextReveal";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container max-w-4xl mx-auto">
        <TextReveal>
           <h1 className="text-5xl md:text-7xl mb-16 text-center text-ts-moss">
             Zero <i className="text-ts-clay">Footprint</i>.
           </h1>
        </TextReveal>

const ecoFeatures = [
  {
    tagline: "ENERGY",
    title: "100% Off-Grid Power",
    desc: "Terra operates entirely independently of the municipal grid. A combination of discreetly integrated solar arrays, a micro-hydro turbine on the adjacent river, and state-of-the-art battery banks provide all necessary power.",
    cta: "Discover Energy Systems"
  },
  {
    tagline: "HYDROLOGY",
    title: "Closed-Loop Water System",
    desc: "Rainwater is harvested via the massive concrete roof structures and filtered through a natural reed bed system. Greywater is treated on-site and returned to the ecosystem cleaner than when it was collected.",
    cta: "Learn About Filtration"
  },
  {
    tagline: "MATERIALS",
    title: "Hyper-Local Sourcing",
    desc: "90% of the materials used in construction were sourced within a 50-mile radius. The rammed earth walls were created using the soil excavated for the foundations, ensuring the buildings literally emerge from the site itself.",
    cta: "View Sourcing Map"
  },
  {
    tagline: "FLORA",
    title: "Rewilding Initiative",
    desc: "Our landscaping philosophy requires zero irrigation or maintenance. We have planted over 5,000 native saplings and introduced endemic ground cover to restore the natural forest floor ecosystem.",
    cta: "Read Ecological Report"
  },
  {
    tagline: "GASTRONOMY",
    title: "Permaculture Farm",
    desc: "A 2-acre permaculture garden located on the periphery of the estate provides 80% of the produce used in our dining experiences, utilizing compost generated directly from the villas.",
    cta: "Explore Our Farm"
  }
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container max-w-4xl mx-auto">
        <TextReveal>
           <h1 className="text-5xl md:text-7xl mb-16 text-center text-ts-moss">
             Zero <i className="text-ts-clay">Footprint</i>.
           </h1>
        </TextReveal>

        <div className="space-y-16">
          {ecoFeatures.map((feature, i) => (
            <TextReveal key={i} delay={i * 0.1}>
              <div className="eco-card group relative overflow-hidden">
                <div className="text-xs font-bold tracking-widest uppercase text-ts-clay mb-4">{feature.tagline}</div>
                <h3 className="text-3xl font-playfair mb-6 text-ts-moss">{feature.title}</h3>
                <p className="text-lg leading-relaxed text-ts-moss/80 mb-8">
                  {feature.desc}
                </p>
                <div className="flex justify-start">
                  <button className="text-sm font-bold tracking-widest uppercase text-ts-moss border-b-2 border-ts-moss/30 hover:border-ts-moss transition-colors pb-1">
                    {feature.cta}
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
