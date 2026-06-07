import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-electric-pink selection:text-off-white pb-32">
      
      {/* 1. Brutalist Marquee Hero */}
      <section className="h-screen flex flex-col justify-center overflow-hidden border-b-[10px] border-deep-purple bg-acid-yellow">
        <div className="flex whitespace-nowrap marquee-content opacity-20 pointer-events-none">
          <h1 className="text-[20rem] font-black text-deep-purple leading-none uppercase">
            WE MAKE INTERNET WE MAKE INTERNET WE MAKE INTERNET
          </h1>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-difference text-off-white pointer-events-none">
          <TextReveal as="h2" text="Boring is a sin." className="text-fluid-h1" />
        </div>
      </section>

      {/* 2. Manifesto */}
      <section className="py-40 px-6 md:px-12 bg-electric-pink text-deep-purple border-b-[10px] border-deep-purple">
        <div className="max-w-5xl mx-auto">
          <TextReveal as="h3" text="We build brands that people actually want to look at." className="text-fluid-h2 mb-12" />
          <p className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl">
            No templates. No corporate jargon. No safe choices. We are a disruptive creative unit operating at the bleeding edge of web culture and design.
          </p>
        </div>
      </section>

      {/* 3. The Work Teaser */}
      <section className="py-32 px-6 md:px-12 bg-off-white relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 relative">
          <div className="aspect-square bg-deep-purple border-8 border-deep-purple shadow-[16px_16px_0px_0px_rgba(36,0,70,1)] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Work 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
          </div>
          <div>
            <h3 className="text-5xl md:text-7xl font-black uppercase mb-6">Liquid Death</h3>
            <p className="text-xl font-bold mb-8">E-Commerce Architecture & 3D Interactive WebGL Experience.</p>
            <button className="bg-acid-yellow border-4 border-deep-purple px-8 py-4 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(36,0,70,1)] hover:translate-y-2 hover:shadow-none transition-all cursor-none">
              View Case Study
            </button>
          </div>
        </div>
      </section>

      {/* 4. Giant Scrolling Ticker Footer */}
      <section className="py-32 bg-deep-purple text-acid-yellow overflow-hidden">
        <div className="flex whitespace-nowrap marquee-content">
          <h2 className="text-[15rem] font-black leading-none uppercase">
            HIRE US • HIRE US • HIRE US • HIRE US • HIRE US •
          </h2>
        </div>
      </section>

    </main>
  );
}
