import TextReveal from "@/components/ui/TextReveal";

const villas = [
  {
    tagline: "RAW BRUTALISM",
    name: "The Monolith",
    size: "120 SQM",
    beds: "1 BEDROOM",
    desc: "A singular block of exposed concrete set deep within the pine forest. Features a private geothermal hot tub and floor-to-ceiling forest views.",
    price: "$850 / NIGHT",
    cta: "Book The Monolith",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop"
  },
  {
    tagline: "ELEVATED LIVING",
    name: "The Canopy",
    size: "180 SQM",
    beds: "2 BEDROOMS",
    desc: "Elevated structure resting on steel pillars among the treetops. Floor-to-ceiling glass on three sides provides an immersive canopy experience.",
    price: "$1200 / NIGHT",
    cta: "Book The Canopy",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop"
  },
  {
    tagline: "SUBTERRANEAN LUXURY",
    name: "The Cavern",
    size: "240 SQM",
    beds: "3 BEDROOMS",
    desc: "Built directly into the hillside rock face. Rammed earth walls naturally regulate temperature year-round while offering absolute acoustic isolation.",
    price: "$1800 / NIGHT",
    cta: "Book The Cavern",
    img: "https://images.unsplash.com/photo-1623910815456-5441d8e1e75a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    tagline: "WATERFRONT SANCTUARY",
    name: "The Estuary",
    size: "150 SQM",
    beds: "2 BEDROOMS",
    desc: "Cantilevered over the gentle river edge. Built with reclaimed timber and featuring a wrap-around deck with direct water access and private dock.",
    price: "$1050 / NIGHT",
    cta: "Book The Estuary",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    tagline: "THE ULTIMATE RETREAT",
    name: "The Apex Estate",
    size: "400 SQM",
    beds: "4 BEDROOMS",
    desc: "Occupying the highest point of the sanctuary. A sprawling compound of interconnected brutalist pavilions featuring a private infinity pool blending into the horizon.",
    price: "$3500 / NIGHT",
    cta: "Book The Apex",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function VillasPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container">
        <TextReveal>
           <h1 className="text-6xl md:text-8xl mb-8 text-ts-moss">
             The <i className="text-ts-clay">Villas</i>.
           </h1>
           <p className="text-xl text-ts-stone max-w-2xl mb-24">
             Five distinct architectural typologies. Each offering absolute privacy and an unfiltered connection to the environment.
           </p>
        </TextReveal>

        <div className="space-y-32">
          {villas.map((villa, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <TextReveal delay={0.1}>
                  <div className="aspect-[4/3] w-full overflow-hidden relative border-8 border-ts-moss">
                    <div 
                      className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                      style={{ backgroundImage: `url('${villa.img}')` }}
                    />
                  </div>
                </TextReveal>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <TextReveal delay={0.2}>
                  <div className="text-xs font-bold tracking-widest uppercase text-ts-clay mb-2">{villa.tagline}</div>
                  <h2 className="text-4xl md:text-5xl font-playfair text-ts-moss">{villa.name}</h2>
                </TextReveal>
                
                <TextReveal delay={0.3}>
                  <div className="flex gap-8 font-bold tracking-widest uppercase text-xs text-ts-stone border-b border-ts-stone/20 pb-4">
                    <span>{villa.size}</span>
                    <span>{villa.beds}</span>
                  </div>
                </TextReveal>

                <TextReveal delay={0.4}>
                  <p className="text-lg leading-relaxed text-ts-moss/80">
                    {villa.desc}
                  </p>
                </TextReveal>

                <TextReveal delay={0.5}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-8 gap-4">
                    <span className="font-playfair italic text-2xl text-ts-clay">{villa.price}</span>
                    <button className="bg-ts-moss text-ts-sand font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-ts-clay transition-colors">
                      {villa.cta}
                    </button>
                  </div>
                </TextReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
