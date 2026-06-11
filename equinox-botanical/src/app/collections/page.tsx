import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "The Obsidian Biosphere",
    dimensions: '24" x 24"',
    careLevel: "Low",
    description: "A stark, minimalist enclosure featuring dark basalt rocks, deep green mosses, and a striking black anthurium.",
    image: "https://images.unsplash.com/photo-1497250681554-fc1ab55227ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "obsidian-biosphere"
  },
  {
    title: "The Alabaster Wardian",
    dimensions: '36" x 18"',
    careLevel: "Medium",
    description: "A modern take on the classic Victorian case, crafted in matte white steel. Features rare climbing aroids and cascading ferns.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "alabaster-wardian"
  },
  {
    title: "The Viridian Cylinder",
    dimensions: '12" x 30"',
    careLevel: "High",
    description: "A towering glass column that houses a micro-rainforest environment. Includes delicate jewel orchids and miniature bromeliads.",
    image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "viridian-cylinder"
  },
  {
    title: "The Earthen Vessel",
    dimensions: '20" x 20"',
    careLevel: "Low",
    description: "Hand-thrown ceramic base with a blown glass dome. Desert-inspired arrangement with architectural caudiciforms.",
    image: "https://images.unsplash.com/photo-1545241047-6083a36ee15f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "earthen-vessel"
  },
  {
    title: "The Canopy Sphere",
    dimensions: '16" Diameter',
    careLevel: "Medium",
    description: "A floating orb suspended by brass fittings. Houses a self-sustaining ecosystem of epiphytic ferns and mosses.",
    image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "canopy-sphere"
  },
  {
    title: "The Monolith Planter",
    dimensions: '18" x 48"',
    careLevel: "Low",
    description: "A monolithic cast stone planter designed for corners, featuring a towering, mature Ficus Audrey.",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "monolith-planter"
  }
];

export default function Collections() {
  return (
    <div className="min-h-screen px-6 py-12 container mx-auto">
      <header className="mb-24 text-center max-w-3xl mx-auto">
        <TextReveal
          as="h1"
          text="Curated Collections"
          className="text-4xl md:text-6xl font-serif text-sage-900 mb-6"
        />
        <TextReveal
          as="p"
          text="Each piece is a living work of art, designed to bring calm and sophistication to your environment."
          className="text-sage-700 text-lg md:text-xl"
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {collections.map((item, index) => (
          <article key={item.slug} className="group cursor-none">
            <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-sage-100 rounded-t-full rounded-br-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-sage-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-serif text-sage-900 group-hover:text-sage-600 transition-colors">
                {item.title}
              </h2>
              
              <div className="flex gap-4 text-xs uppercase tracking-widest text-sage-500 font-medium">
                <span>{item.dimensions}</span>
                <span>&bull;</span>
                <span>Care: {item.careLevel}</span>
              </div>
              
              <p className="text-sage-700 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="pt-4">
                <Link 
                  href={`#inquire-${item.slug}`}
                  className="inline-block border-b border-sage-900 pb-1 text-sm uppercase tracking-widest hover:text-sage-500 hover:border-sage-500 transition-colors duration-300"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
