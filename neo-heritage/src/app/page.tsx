import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-sage selection:text-linen">
      
      {/* 1. Immersive Hero Image with Crest Overlay */}
      <section className="h-screen w-full relative overflow-hidden flex flex-col justify-end p-12">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d837e?w=1600&q=80" 
            alt="Swiss Alps Hotel" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-linen max-w-2xl">
          <TextReveal as="h2" text="An elevation of the senses." className="text-4xl md:text-6xl font-serif italic mb-6" />
          <p className="text-xs uppercase tracking-[0.2em] opacity-80 leading-loose">
            Perched 2,000 meters above sea level in the Swiss Alps, Le Montagne offers an unparalleled retreat into absolute stillness and refined luxury.
          </p>
        </div>
      </section>

      {/* 2. The Philosophy (Heavy Whitespace) */}
      <section className="py-48 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <span className="block text-xs uppercase tracking-[0.3em] text-sage mb-12">Our Philosophy</span>
        <TextReveal as="h3" text="Time is the ultimate luxury." className="text-3xl md:text-5xl font-serif italic mb-16 leading-snug" />
        <p className="text-sm uppercase tracking-widest opacity-60 leading-[2.5]">
          We have removed all clocks from our suites. We have replaced televisions with panoramic windows framing the Mont Blanc massif. Here, your days are dictated by the arc of the sun and the rhythm of the seasons.
        </p>
      </section>

      {/* 3. The Suites Teaser (Asymmetrical Image Grid) */}
      <section className="py-24 px-6 md:px-12 bg-mahogany/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4 md:col-start-2">
            <h3 className="font-serif italic text-4xl mb-6">The Residences</h3>
            <p className="text-sm opacity-60 leading-loose mb-12">
              Only fourteen suites exist within Le Montagne. Each is clad in locally sourced Valser quartzite and reclaimed Alpine spruce.
            </p>
            <Link href="/suites" className="text-xs uppercase tracking-[0.2em] border-b border-ink/30 pb-2 hover:border-ink transition-colors cursor-none">
              Explore Suites
            </Link>
          </div>
          <div className="md:col-span-6 relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80" 
              alt="Suite Interior" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 4. Culinary Experience */}
      <section className="py-48 px-6 md:px-12 text-center">
        <TextReveal as="h3" text="Foraged & Fired." className="text-4xl md:text-6xl font-serif italic mb-16" />
        <p className="max-w-2xl mx-auto text-sm opacity-60 leading-loose mb-16 uppercase tracking-widest">
          Two-Michelin-starred dining utilizing ingredients exclusively sourced from within a 50-kilometer radius of our alpine valley.
        </p>
        <div className="w-full max-w-5xl mx-auto h-[60vh] bg-mahogany/10 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&q=80" 
            alt="Culinary" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* 5. Booking Footer */}
      <section className="py-32 px-6 md:px-12 bg-ink text-linen text-center flex flex-col items-center justify-center">
        <TextReveal as="h2" text="Reserve Your Escape." className="text-5xl font-serif italic mb-12" />
        <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-12">Availability is currently limited for the Winter season.</p>
        <Link href="/reservations" className="border border-linen px-12 py-6 text-xs uppercase tracking-[0.2em] hover:bg-linen hover:text-ink transition-colors cursor-none">
          Check Availability
        </Link>
      </section>

    </main>
  );
}
