import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="bg-warm-white text-charcoal min-h-screen pt-48 selection:bg-charcoal selection:text-warm-white pb-32">
      
      {/* 1. Hero Editorial Collage */}
      <section className="relative w-full px-6 md:px-12 pt-24 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          
          <div className="md:col-span-4 z-20 pt-12 md:pt-32">
            <TextReveal
              as="h1"
              text="Autumn / Winter '26"
              className="text-fluid-h2 font-serif leading-none tracking-tight mb-8"
            />
            <p className="font-sans text-sm uppercase tracking-widest max-w-xs opacity-70 leading-loose">
              An exploration of brutalist silhouettes and fragile textiles. The tension between structure and surrender.
            </p>
          </div>

          <div className="md:col-span-5 relative h-[70vh] group">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0c5000642f55?w=1200&q=80" 
              alt="Main editorial" 
              className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
            />
          </div>

          <div className="md:col-span-3 absolute md:relative right-0 bottom-[-10%] md:bottom-auto md:top-48 w-2/3 md:w-full z-30 group">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" 
              alt="Detail shot" 
              className="object-cover w-full aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>

        </div>
      </section>

      {/* 2. The Narrative Statement */}
      <section className="py-40 px-6 md:px-12 bg-charcoal text-warm-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">
              "We dress the spaces between the architecture of the city and the architecture of the bone."
            </h2>
          </div>
          <div className="w-full md:w-1/2 font-sans text-sm tracking-widest uppercase opacity-70 leading-loose">
            <p className="mb-6">
              Collection 04 was born in the brutalist concrete structures of Eastern Europe. We sought to drape warmth over cold geometry.
            </p>
            <p>
              Heavy boiled wools juxtaposed with sheer silks. The garments act as armor and apology simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Lookbook Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="mb-24 flex justify-between items-end border-b border-charcoal/20 pb-8">
          <h2 className="text-fluid-h2 font-serif">Selected Looks.</h2>
          <a href="/archive" className="font-sans text-xs uppercase tracking-[0.2em] hover:text-muted-coral transition-colors cursor-none">
            View Complete Archive
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16">
          
          <div className="flex flex-col gap-6 group">
            <div className="overflow-hidden aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" alt="Look 01" />
            </div>
            <div className="flex justify-between items-start font-sans text-xs uppercase tracking-widest">
              <span>Look 01 / Oversized Wool Trench</span>
              <span>Inquire</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 group md:mt-32">
            <div className="overflow-hidden aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" alt="Look 02" />
            </div>
            <div className="flex justify-between items-start font-sans text-xs uppercase tracking-widest">
              <span>Look 02 / Draped Silk Blouse</span>
              <span>Inquire</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 group">
            <div className="overflow-hidden aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1485230895905-cefaa5faecbd?w=1200&q=80" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" alt="Look 03" />
            </div>
            <div className="flex justify-between items-start font-sans text-xs uppercase tracking-widest">
              <span>Look 03 / Structured Cashmere Coat</span>
              <span>Inquire</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 group md:mt-32">
            <div className="overflow-hidden aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=1200&q=80" className="object-cover w-full h-full grayscale group-hover:scale-105 transition-transform duration-1000" alt="Look 04" />
            </div>
            <div className="flex justify-between items-start font-sans text-xs uppercase tracking-widest">
              <span>Look 04 / Tailored Geometric Suit</span>
              <span>Inquire</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Footer Campaign Teaser */}
      <section className="h-screen w-full relative overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=2000&q=80" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="Campaign Video Placeholder" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-warm-white mix-blend-difference pointer-events-none z-10">
          <h2 className="text-5xl md:text-9xl font-serif tracking-tight uppercase">Watch</h2>
          <h2 className="text-5xl md:text-9xl font-serif tracking-tight uppercase italic">The Film</h2>
        </div>
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-1000" />
      </section>

    </main>
  );
}
