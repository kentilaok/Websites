import TextReveal from "@/components/ui/TextReveal";

export default function SuitesPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 selection:bg-sage selection:text-linen">
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12 mb-32">
        <span className="block text-xs uppercase tracking-[0.3em] text-sage mb-8">Fourteen Keys</span>
        <TextReveal as="h1" text="Sanctuaries of Stone & Wood." className="text-5xl md:text-7xl font-serif italic mb-12" />
        <p className="text-sm uppercase tracking-widest opacity-60 leading-[2]">
          Every suite features a private terrace, a wood-burning fireplace, and a free-standing soaking tub overlooking the valley.
        </p>
      </div>

      <div className="px-6 md:px-12 flex flex-col gap-32 max-w-7xl mx-auto">
        
        {/* Suite 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl mb-4">The Alpine Loft</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-sage mb-8">90 SQM / 968 SQFT</p>
            <p className="text-sm opacity-70 leading-loose mb-8">
              A bi-level residence featuring soaring double-height ceilings and a massive window wall. The upper level houses a king bedroom wrapped in cashmere wall coverings.
            </p>
            <button className="text-xs uppercase tracking-[0.2em] border-b border-ink/30 pb-2 hover:border-ink transition-colors cursor-none">
              View Gallery
            </button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/3] bg-mahogany/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1598928506311-c55dd5802427?w=800&q=80" alt="Alpine Loft" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Suite 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-mahogany/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" alt="Grand Chalet Suite" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-4">The Grand Chalet Suite</h2>
            <p className="text-xs uppercase tracking-[0.2em] text-sage mb-8">150 SQM / 1614 SQFT</p>
            <p className="text-sm opacity-70 leading-loose mb-8">
              Our most expansive offering. Includes a private dining room, a dedicated library with a curated selection of first editions, and a wraparound panoramic terrace.
            </p>
            <button className="text-xs uppercase tracking-[0.2em] border-b border-ink/30 pb-2 hover:border-ink transition-colors cursor-none">
              View Gallery
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
