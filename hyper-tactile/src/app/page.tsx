import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-rose selection:text-skin">
      
      {/* 1. Immersive Tactile Hero */}
      <section className="h-screen w-full relative flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1595535373192-fc8938bcbbbb?w=1600&q=80" 
            alt="Fluid liquid" 
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <TextReveal as="h1" text="Scent as Memory." className="text-fluid-h1 font-serif italic mb-6 text-oud" />
          <p className="text-xs uppercase tracking-[0.3em] font-sans opacity-70">Extrait de Parfum • Grasse, France</p>
        </div>
      </section>

      {/* 2. Sensorial Intro */}
      <section className="py-40 px-6 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <TextReveal as="h2" text="We distill the ephemeral." className="text-4xl md:text-5xl font-serif italic mb-12" />
          <p className="text-sm font-sans leading-loose opacity-80 uppercase tracking-widest">
            A perfume is not merely a combination of molecules. It is a ghost in a bottle. An invisible architecture built to trigger the deepest, most involuntary emotional responses.
          </p>
        </div>
      </section>

      {/* 3. The Signature Fragrance */}
      <section className="py-24 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-xs font-sans uppercase tracking-[0.3em] mb-4 opacity-50">01. Signature</span>
            <h3 className="text-5xl font-serif italic mb-6">Velvet Oud</h3>
            <p className="font-sans text-sm leading-loose opacity-70 mb-8 max-w-md">
              Top: Bergamot, Pink Pepper<br/>
              Heart: Damask Rose, Iris<br/>
              Base: Agarwood, Ambergris, Vetiver
            </p>
            <Link href="/fragrances" className="border-b border-oud/30 pb-1 text-xs uppercase tracking-widest hover:border-oud transition-colors cursor-none">
              Discover the Notes
            </Link>
          </div>
          <div className="order-1 md:order-2 aspect-[3/4] bg-vetiver overflow-hidden rounded-t-[500px]">
            <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80" alt="Velvet Oud Bottle" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* 4. Sourcing Manifesto */}
      <section className="py-40 bg-oud text-skin px-6 md:px-24 text-center">
        <TextReveal as="h2" text="Absolute Ingredients." className="text-4xl md:text-5xl font-serif italic mb-12" />
        <p className="max-w-2xl mx-auto font-sans text-sm leading-loose opacity-80 uppercase tracking-widest mb-16">
          We use only natural absolutes and essential oils sourced directly from independent farmers. No synthetic fixatives. No phthalates.
        </p>
        <Link href="/about" className="text-xs uppercase tracking-widest border border-skin/30 px-8 py-4 hover:bg-skin hover:text-oud transition-colors cursor-none">
          Read Our Story
        </Link>
      </section>

    </main>
  );
}
