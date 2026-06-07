import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="bg-warm-white text-charcoal min-h-screen pt-48 pb-32 font-sans selection:bg-muted-coral selection:text-warm-white pr-12 md:pr-32">
      
      {/* 1. Serene Minimalist Hero */}
      <section className="relative w-full px-6 md:px-12 pt-24 pb-48">
        <div className="max-w-5xl mx-auto flex flex-col items-start">
          
          <span className="text-xs uppercase tracking-[0.2em] text-muted-coral mb-8 block">
            Bespoke Living Environments
          </span>

          <TextReveal
            as="h1"
            text="Space as a Canvas for Light."
            className="text-fluid-h1 font-serif italic leading-none tracking-tight mb-16"
          />

          <div className="w-full flex justify-end">
            <p className="font-sans text-sm tracking-widest uppercase opacity-70 leading-loose max-w-md text-right">
              We design interiors that breathe. A curation of natural materials, negative space, and absolute stillness.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Horizontal Scrolling Gallery Teaser */}
      <section className="py-24 px-6 md:px-12 overflow-hidden border-t border-charcoal/10 border-b">
        <div className="flex gap-16 overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory">
          
          <div className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0 snap-center group">
            <div className="aspect-[4/3] overflow-hidden mb-6 bg-charcoal/5">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt="Living Room" />
            </div>
            <div className="flex justify-between items-center text-xs uppercase tracking-widest">
              <span>01 / The Kyoto Residence</span>
              <span className="text-muted-coral">View Space</span>
            </div>
          </div>

          <div className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0 snap-center group">
            <div className="aspect-[4/3] overflow-hidden mb-6 bg-charcoal/5">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09be1587?w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt="Kitchen" />
            </div>
            <div className="flex justify-between items-center text-xs uppercase tracking-widest">
              <span>02 / The Alpine Pavilion</span>
              <span className="text-muted-coral">View Space</span>
            </div>
          </div>

          <div className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0 snap-center group">
            <div className="aspect-[4/3] overflow-hidden mb-6 bg-charcoal/5">
              <img src="https://images.unsplash.com/photo-1598928506311-c55dd5802427?w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt="Bedroom" />
            </div>
            <div className="flex justify-between items-center text-xs uppercase tracking-widest">
              <span>03 / The Manhattan Loft</span>
              <span className="text-muted-coral">View Space</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Philosophy */}
      <section className="py-40 px-6 md:px-12 bg-charcoal text-warm-white ml-[-10vw] pr-[10vw]">
        <div className="max-w-4xl mx-auto text-center pl-[10vw]">
          <TextReveal as="h2" text="The Tactile Philosophy" className="text-4xl md:text-5xl font-serif italic mb-12" />
          <p className="font-sans text-sm tracking-widest uppercase leading-loose opacity-70 mb-12">
            A room should not shout. It should whisper. We source uncut travertine, raw linens, and unlacquered brass to ensure that the spaces we build age gracefully alongside the families who inhabit them. True luxury is permanence.
          </p>
          <a href="/craft" className="inline-block border-b border-warm-white/30 hover:border-warm-white pb-2 text-xs uppercase tracking-[0.2em] transition-colors cursor-none">
            Explore Our Materials
          </a>
        </div>
      </section>

      {/* 4. Appointment Booking Funnel */}
      <section className="py-32 px-6 md:px-12 bg-muted-coral/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif italic mb-6 text-charcoal">Commission a Space</h2>
            <p className="font-sans text-sm tracking-widest uppercase opacity-60 leading-loose">
              We accept only six residential commissions per year to ensure absolute devotion to the craft. Submit an inquiry for our 2027 calendar.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <button className="px-12 py-6 bg-charcoal text-warm-white text-xs uppercase tracking-widest hover:bg-muted-coral transition-colors duration-500 cursor-none">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
