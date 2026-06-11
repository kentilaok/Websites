import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

const team = [
  {
    role: "Executive Chef",
    name: "Aurelius Thorne",
    bio: "With three Michelin stars accumulated over a two-decade career in Paris and Tokyo, Chef Thorne brings an unparalleled obsession with precision and seasonal ingredients. His philosophy centers on 'The essence of the raw, elevated by the mastery of fire.'",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1984&auto=format&fit=crop"
  },
  {
    role: "Chef de Cuisine",
    name: "Elena Rostova",
    bio: "A prodigy of modern fermentation techniques, Elena transforms the unseen microbial world into explosive, complex flavors. Her previous tenure at Noma deeply influenced her approach to preservation and umami extraction.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop"
  },
  {
    role: "Head Sommelier",
    name: "Julien Vane",
    bio: "Julien's cellar is a curated library of the world's most esoteric and profound vintages. He believes a pairing should not merely complement a dish, but 'engage in a visceral dialogue with it.'",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1935&auto=format&fit=crop"
  },
  {
    role: "Executive Pastry Chef",
    name: "Mei Lin",
    bio: "Architectural, minimal, and intensely flavorful. Mei Lin approaches dessert not as an indulgence, but as a cleansing, philosophical conclusion to the culinary narrative.",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ChefsPage() {
  return (
    <div className="w-full flex flex-col pb-32">
      {/* Header */}
      <section className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
        <TextReveal text="The Visionaries" className="text-gold-400 tracking-[0.4em] uppercase text-sm mb-6" />
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Masters of the Craft</h1>
        <p className="text-white/60 text-lg font-light leading-relaxed">
          Behind every transcendent dish is a mind obsessed with perfection. Meet the artisans who orchestrate the Crescent Culinary experience.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-charcoal-800 border-y border-white/5 mb-32">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-serif text-3xl text-gold-400">Our Manifesto</h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-loose">
            "We do not merely feed. We provoke, we challenge, and we transcend. Every ingredient is treated with reverence, every technique executed with ruthless precision. Here, dining is not an act of consumption; it is an act of communion."
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {team.map((member, index) => (
          <div key={member.name} className={`flex flex-col space-y-6 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
            <div className="relative aspect-[3/4] w-full overflow-hidden group">
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gold-400 text-xs tracking-[0.3em] uppercase">{member.role}</p>
              <h3 className="font-serif text-3xl text-white">{member.name}</h3>
              <p className="text-white/70 leading-relaxed font-light">{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
