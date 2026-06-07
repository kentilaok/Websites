import TextReveal from "@/components/ui/TextReveal";

export default function WellnessPage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-sage selection:text-linen">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <span className="block text-xs uppercase tracking-[0.3em] text-sage mb-8">The Thermal Baths</span>
        <TextReveal as="h1" text="Purification by Altitude." className="text-5xl md:text-7xl font-serif italic mb-12" />
        <p className="text-sm uppercase tracking-widest opacity-60 leading-[2]">
          Submerge yourself in mineral-rich waters drawn directly from a subterranean alpine hot spring.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col text-center items-center group">
          <div className="w-full aspect-[3/4] bg-mahogany/10 mb-8 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Spa" />
          </div>
          <h3 className="font-serif text-2xl mb-4 italic">The Stone Hammam</h3>
          <p className="text-xs opacity-60 leading-loose">Carved directly into the mountainside bedrock.</p>
        </div>

        <div className="flex flex-col text-center items-center group md:-translate-y-16">
          <div className="w-full aspect-[3/4] bg-mahogany/10 mb-8 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Massage" />
          </div>
          <h3 className="font-serif text-2xl mb-4 italic">Holistic Therapy</h3>
          <p className="text-xs opacity-60 leading-loose">Treatments utilizing wild-foraged alpine botanicals.</p>
        </div>

        <div className="flex flex-col text-center items-center group">
          <div className="w-full aspect-[3/4] bg-mahogany/10 mb-8 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507652313656-b14faed2eb22?w=600&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Pool" />
          </div>
          <h3 className="font-serif text-2xl mb-4 italic">The Infinity Pool</h3>
          <p className="text-xs opacity-60 leading-loose">Heated to 38°C, seamlessly blending into the snowscape.</p>
        </div>

      </div>
    </main>
  );
}
