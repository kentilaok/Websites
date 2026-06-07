import TextReveal from "@/components/ui/TextReveal";

export default function FragrancesPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-24 selection:bg-rose selection:text-skin">
      <div className="max-w-4xl mb-32 text-center mx-auto">
        <TextReveal as="h1" text="The Collection" className="text-6xl md:text-8xl font-serif italic mb-8" />
        <p className="text-sm font-sans uppercase tracking-[0.2em] opacity-60">Extrait de Parfum. 50ml.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 max-w-6xl mx-auto">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center group cursor-none">
          <div className="aspect-[3/4] w-full bg-vetiver/50 mb-8 overflow-hidden rounded-t-[400px]">
            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80" alt="Bottle" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <h2 className="font-serif text-3xl italic mb-4">Neroli Canvas</h2>
          <p className="text-xs uppercase tracking-widest opacity-60 mb-6 font-sans">Citrus / Floral</p>
          <span className="text-sm border-b border-oud/20 pb-1">$280 USD</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center group cursor-none md:translate-y-24">
          <div className="aspect-[3/4] w-full bg-vetiver/50 mb-8 overflow-hidden rounded-t-[400px]">
            <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80" alt="Bottle" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <h2 className="font-serif text-3xl italic mb-4">Smoked Vanilla</h2>
          <p className="text-xs uppercase tracking-widest opacity-60 mb-6 font-sans">Gourmand / Woody</p>
          <span className="text-sm border-b border-oud/20 pb-1">$310 USD</span>
        </div>

      </div>
    </main>
  );
}
