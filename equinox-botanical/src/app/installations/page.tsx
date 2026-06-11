import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

const installations = [
  {
    title: "Living Walls",
    description: "Vertical gardens engineered for interior environments. We utilize custom hydroponic systems and specialized lighting to create lush, architectural focal points.",
    number: "01"
  },
  {
    title: "Corporate Atriums",
    description: "Large-scale botanical designs that transform commercial spaces into welcoming, biophilic environments, proven to enhance wellbeing and creativity.",
    number: "02"
  },
  {
    title: "Residential Conservatories",
    description: "Bespoke indoor gardens for private residences. We curate rare species and design climate-controlled zones for passionate collectors.",
    number: "03"
  },
  {
    title: "Custom Terrarium Integration",
    description: "Built-in, illuminated terrariums seamlessly integrated into cabinetry, walls, or furniture during the architectural phase of a project.",
    number: "04"
  },
  {
    title: "Maintenance Services",
    description: "White-glove botanical care. Our horticulturists provide weekly tending, pruning, and nutrient management to ensure your installation thrives indefinitely.",
    number: "05"
  }
];

export default function Installations() {
  return (
    <div className="min-h-screen">
      <header className="py-24 px-6 bg-sage-100 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <TextReveal
            as="h1"
            text="Bespoke Installations"
            className="text-4xl md:text-6xl font-serif text-sage-900 mb-6"
          />
          <TextReveal
            as="p"
            text="Architectural botany designed for permanence."
            className="text-sage-700 text-xl"
          />
        </div>
      </header>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32 space-y-8 hidden lg:block">
            <div className="relative aspect-square rounded-[3rem] rounded-bl-none overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Installation detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-24">
            {installations.map((item) => (
              <section key={item.number} className="relative group">
                <span className="text-sage-200 text-6xl md:text-8xl font-serif absolute -top-12 -left-6 md:-left-12 opacity-50 select-none pointer-events-none group-hover:text-sage-300 transition-colors duration-500">
                  {item.number}
                </span>
                <div className="relative z-10 pl-4 md:pl-8 border-l border-sage-200 group-hover:border-sage-500 transition-colors duration-500">
                  <h2 className="text-3xl font-serif text-sage-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-sage-700 text-lg leading-relaxed text-balance">
                    {item.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
