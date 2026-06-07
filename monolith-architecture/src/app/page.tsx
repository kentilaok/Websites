import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="bg-obsidian text-stark-white min-h-screen pt-48 selection:bg-hyper-lime selection:text-obsidian pb-32 font-sans">
      
      {/* 1. Brutalist Hero */}
      <section className="relative w-full px-6 md:px-12 pt-24 pb-48 border-b border-stark-white/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          
          <div className="md:col-span-8 z-20">
            <h1 className="text-fluid-h1 font-bold tracking-tighter leading-[0.85] uppercase">
              <div className="overflow-hidden"><span className="block hover:text-hyper-lime transition-colors duration-500">Structural</span></div>
              <div className="overflow-hidden"><span className="block hover:text-hyper-lime transition-colors duration-500">Honesty.</span></div>
            </h1>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end">
            <div className="border-l border-hyper-lime pl-6">
              <span className="text-xs uppercase tracking-widest text-hyper-lime mb-4 block">[MISSION.DEF]</span>
              <p className="text-sm opacity-70 leading-loose">
                We reject ornamentation. Architecture must be the pure manifestation of structural forces and raw material. Concrete, steel, and glass, arranged with mathematical precision.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Project Grid Overview */}
      <section className="py-32 px-6 md:px-12 border-b border-stark-white/20">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Selected Works</h2>
          <span className="text-xs opacity-50">[01.0X]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          
          {/* Project 01 */}
          <div className="group border border-stark-white/20 p-4 hover:border-hyper-lime transition-colors duration-300">
            <div className="aspect-square w-full overflow-hidden mb-6 relative bg-charcoal">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80" alt="Tension House" className="object-cover w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 border border-hyper-lime/0 group-hover:border-hyper-lime/50 transition-colors m-4" />
            </div>
            <div className="flex justify-between items-start text-xs uppercase tracking-widest">
              <div>
                <span className="text-hyper-lime block mb-1">01.01</span>
                <span className="font-bold">The Tension House</span>
              </div>
              <span className="opacity-50">Berlin</span>
            </div>
          </div>

          {/* Project 02 */}
          <div className="group border border-stark-white/20 p-4 hover:border-hyper-lime transition-colors duration-300 mt-0 md:mt-16">
            <div className="aspect-square w-full overflow-hidden mb-6 relative bg-charcoal">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Apex Tower" className="object-cover w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 border border-hyper-lime/0 group-hover:border-hyper-lime/50 transition-colors m-4" />
            </div>
            <div className="flex justify-between items-start text-xs uppercase tracking-widest">
              <div>
                <span className="text-hyper-lime block mb-1">01.02</span>
                <span className="font-bold">Apex Corporate Tower</span>
              </div>
              <span className="opacity-50">Tokyo</span>
            </div>
          </div>

          {/* Project 03 */}
          <div className="group border border-stark-white/20 p-4 hover:border-hyper-lime transition-colors duration-300 mt-0 md:mt-32">
            <div className="aspect-square w-full overflow-hidden mb-6 relative bg-charcoal">
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80" alt="Void Museum" className="object-cover w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 border border-hyper-lime/0 group-hover:border-hyper-lime/50 transition-colors m-4" />
            </div>
            <div className="flex justify-between items-start text-xs uppercase tracking-widest">
              <div>
                <span className="text-hyper-lime block mb-1">01.03</span>
                <span className="font-bold">The Void Museum</span>
              </div>
              <span className="opacity-50">Oslo</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Manifesto / Data Table */}
      <section className="py-32 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <TextReveal as="h2" text="Material Specs." className="text-4xl font-bold tracking-tighter uppercase mb-12" />
            <ul className="border-t border-stark-white/20 text-sm uppercase tracking-widest">
              <li className="flex justify-between py-6 border-b border-stark-white/20 hover:text-hyper-lime transition-colors cursor-none">
                <span>01. Concrete</span>
                <span className="opacity-50 text-right">Thermal Mass / Brutalist Base</span>
              </li>
              <li className="flex justify-between py-6 border-b border-stark-white/20 hover:text-hyper-lime transition-colors cursor-none">
                <span>02. Corten Steel</span>
                <span className="opacity-50 text-right">Oxidized Shielding / Tension</span>
              </li>
              <li className="flex justify-between py-6 border-b border-stark-white/20 hover:text-hyper-lime transition-colors cursor-none">
                <span>03. Triple Glazing</span>
                <span className="opacity-50 text-right">Transparency / Climate Control</span>
              </li>
            </ul>
          </div>
          <div className="bg-stark-white text-obsidian p-12 flex flex-col justify-center">
            <span className="text-xs font-bold mb-6 block">[INTERNAL_MEMO]</span>
            <p className="text-lg font-bold leading-relaxed">
              We design for the century, not the season. Our buildings are monolithic markers of human engineering. They do not blend in; they declare their presence.
            </p>
            <a href="/studio" className="mt-12 text-xs font-bold underline hover:no-underline cursor-none">Read Full Manifesto ↗</a>
          </div>
        </div>
      </section>

    </main>
  );
}
