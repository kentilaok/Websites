import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="bg-warm-bone text-forest-night selection:bg-terracotta selection:text-warm-bone">
      
      {/* 1. Hero Section (Asymmetrical Grid) */}
      <section className="relative w-full min-h-[120vh] pt-32 md:pt-48 pb-24">
        <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 h-fit md:sticky md:top-48 z-10">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold border-b border-forest-night/20 pb-2">
                Chapter 01
              </span>
            </div>
            
            <h1 className="text-fluid-h1 font-serif leading-[0.8] tracking-tighter mb-8 ml-[-1vw]">
              <div className="overflow-hidden pb-4"><span className="block">Culinary</span></div>
              <div className="overflow-hidden pb-4"><span className="block italic text-terracotta">Instinct.</span></div>
            </h1>
            
            <TextReveal
              as="p"
              text="We strip away the pretense of fine dining to focus on raw materiality, fire, and the essential nature of local ingredients. A dining experience rooted in time and place."
              delay={0.2}
              className="text-lg md:text-xl font-sans font-medium leading-relaxed max-w-sm opacity-80"
            />
          </div>

          <div className="md:col-span-7 flex flex-col gap-24 md:gap-40 mt-16 md:mt-32">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=1200&q=80"
                alt="Plating detail"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
            </div>

            <div className="max-w-md ml-auto text-right">
              <TextReveal
                as="h2"
                text="The Art of Plating."
                className="text-fluid-h2 font-serif leading-none mb-6"
              />
              <p className="font-sans text-sm uppercase tracking-widest opacity-60 leading-loose">
                Every dish is a landscape. We source directly from the earth, foraging daily to ensure the narrative on your plate reflects the season with absolute fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story / Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-soft-clay/20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-terracotta mb-8">
            The Philosophy
          </span>
          <TextReveal
            as="h2"
            text="Cooking is an act of translation. We listen to the soil, the sea, and the seasons, and translate their whispers into something you can taste."
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12"
          />
          <p className="font-sans text-lg max-w-2xl opacity-70 leading-relaxed mb-12">
            Founded in 2026 by Chef Elena Rostova, Aura was born from a desire to return to the primal origins of food. We employ ancient preservation techniques—fermentation, curing, and hearth roasting—elevated through modern precision. Our kitchen operates without boundaries, allowing the daily harvest to dictate the evening's narrative.
          </p>
          <a href="/about" className="inline-block border-b border-forest-night pb-2 text-sm uppercase tracking-widest hover:text-terracotta hover:border-terracotta transition-colors">
            Discover Our Provenance
          </a>
        </div>
      </section>

      {/* 3. Visual Gallery / Staggered Layout */}
      <section className="py-32 px-6 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden group md:mt-24">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&q=80" 
              alt="Culinary prep" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80" 
              alt="Steak detail" 
              className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute bottom-8 left-8 text-warm-bone z-10 mix-blend-difference">
              <span className="text-sm font-sans uppercase tracking-widest opacity-80">Course 03</span>
              <h3 className="text-3xl font-serif mt-2">Hearth Roasted Venison</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Press & Testimonials */}
      <section className="py-40 px-6 md:px-12 bg-forest-night text-warm-bone text-center">
        <TextReveal as="h2" text="Words from the Critics" className="text-4xl md:text-6xl font-serif mb-24 opacity-50" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
              "A masterclass in restraint. Aura proves that true luxury lies in allowing ingredients to speak for themselves."
            </p>
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta">— The Michelin Guide</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
              "Easily the most provocative dining experience of the decade. A visceral journey from the first bite to the last."
            </p>
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta">— The New York Times</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
              "Chef Rostova has crafted a temple of gastronomy. The hearth-cooked dishes are nothing short of revelatory."
            </p>
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta">— James Beard Foundation</span>
          </div>
        </div>
      </section>

      {/* 5. Location & Final CTA */}
      <section className="py-32 px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-16">
        <div className="w-full md:w-1/2">
          <TextReveal as="h2" text="Join Us" className="text-fluid-h2 font-serif leading-none mb-12" />
          <div className="grid grid-cols-2 gap-8 font-sans text-sm uppercase tracking-widest leading-loose">
            <div>
              <span className="text-terracotta block mb-2">Location</span>
              <p>128 High Street<br/>Culinary District<br/>New York, NY 10011</p>
            </div>
            <div>
              <span className="text-terracotta block mb-2">Hours</span>
              <p>Wed — Sun<br/>5:30 PM — 11:00 PM<br/>Reservations Required</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <a href="/contact" className="group relative inline-flex items-center justify-center w-full md:w-64 h-64 rounded-full border border-forest-night hover:bg-forest-night hover:text-warm-bone transition-colors duration-500 overflow-hidden cursor-none">
            <span className="font-serif text-2xl italic z-10 group-hover:scale-110 transition-transform duration-500">Reserve a Table</span>
          </a>
        </div>
      </section>

    </main>
  );
}
