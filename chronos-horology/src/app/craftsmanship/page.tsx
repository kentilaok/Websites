import TextReveal from "@/components/ui/TextReveal";

const chapters = [
  {
    title: "1. The Atelier",
    subtitle: "Where time is born",
    text: "Nestled in the Vallée de Joux, our atelier is a sanctuary of silence and focus. Here, natural light floods through massive windows, illuminating the benches where master watchmakers bring microscopic components to life. It is an environment designed solely for the pursuit of horological perfection.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "2. Material Excellence",
    subtitle: "Sourcing the extraordinary",
    text: "We accept nothing less than the finest materials. From our proprietary 18k EverGold alloy to sapphire crystals synthesized over weeks to achieve flawless clarity. Even our movement plates are crafted from German silver, chosen for its structural stability and beautiful warm patina.",
    image: "https://images.unsplash.com/photo-1594535182308-8ffef266ba59?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "3. Hand-Finishing",
    subtitle: "The unseen beauty",
    text: "More than half of the time spent on a Chronos timepiece is dedicated to hand-finishing. Anglage, perlage, and Côtes de Genève are painstakingly applied to components that only the watchmaker will ever see. It is a commitment to beauty for its own sake.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "4. The Caliber",
    subtitle: "The beating heart",
    text: "Every movement is developed entirely in-house. Our calibers are designed not just for extreme precision, but for aesthetic harmony. The architecture of our bridges and the layout of the gear train are calculated to create a visually stunning kinetic sculpture.",
    image: "https://images.unsplash.com/photo-1587836374828-cb4387df3c7c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "5. Grand Feu Enamel",
    subtitle: "Mastery of fire",
    text: "Our dials are often crafted using the ancient technique of Grand Feu enameling. Multiple layers of silica powder are applied and fired in a kiln at 800°C. The process is fraught with risk—a dial can crack at any moment—but the result is a color of infinite depth that will never fade.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "6. Assembly & Testing",
    subtitle: "The final trial",
    text: "A single watchmaker is responsible for assembling an entire timepiece from start to finish. Once cased, every watch undergoes a grueling 500-hour testing protocol, simulating years of wear in extreme conditions. Only those that maintain perfect chronometry are allowed to leave the manufacture.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "7. Legacy of Masters",
    subtitle: "Passing the torch",
    text: "Knowledge is our most precious asset. Our master watchmakers spend years apprenticing the next generation, ensuring that techniques developed centuries ago are preserved. When you acquire a Chronos, you become the custodian of this unbroken lineage.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Craftsmanship() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light font-sans">
      
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584680237517-5e608034db2b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 to-brand-dark"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">The Chronos Way</span>
          <TextReveal 
            text="Forged in Tradition. Crafted for Eternity."
            className="text-5xl md:text-7xl font-serif leading-tight justify-center"
          />
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {chapters.map((chapter, idx) => (
            <div key={idx} className="mb-32 last:mb-0 relative group">
              <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                
                {/* Text Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h4 className="text-brand-gold uppercase tracking-widest text-xs mb-4">{chapter.subtitle}</h4>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">{chapter.title}</h2>
                  <p className="text-brand-text/70 text-lg leading-relaxed font-light">
                    {chapter.text}
                  </p>
                </div>

                {/* Image Content */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-darker">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0"
                      style={{ backgroundImage: `url(${chapter.image})` }}
                    ></div>
                  </div>
                </div>

              </div>
              
              {/* Divider */}
              {idx !== chapters.length - 1 && (
                <div className="w-full h-[1px] bg-brand-gray mt-32"></div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
