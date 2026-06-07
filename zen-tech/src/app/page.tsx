import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-carbon selection:text-pure-white pb-32">
      
      {/* 1. Surgical Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-aluminum/30 to-transparent blur-3xl -z-10" />
        <div className="max-w-4xl">
          <TextReveal as="h1" text="Sound, distilled." className="text-fluid-h1 mb-8" />
          <p className="text-xs uppercase tracking-[0.4em] text-titanium mb-12">Precision Engineered in Kyoto</p>
          <div className="w-[1px] h-32 bg-gradient-to-b from-carbon/20 to-transparent mx-auto" />
        </div>
      </section>

      {/* 2. Product Spotlight */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="aspect-square bg-aluminum/20 rounded-[2rem] p-16 flex items-center justify-center overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
              alt="Headphones" 
              className="w-full object-contain mix-blend-darken grayscale group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div>
            <span className="text-xs font-mono text-titanium mb-4 block">MODEL_01 // CIRCUMAURAL</span>
            <h2 className="text-5xl font-light mb-8">The Reference Standard.</h2>
            <p className="text-fluid-p mb-12">
              Machined from a single block of aerospace-grade aluminum. Featuring custom 50mm beryllium drivers suspended in a magnetic field of precise tolerances. Zero distortion. Absolute clarity.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <span className="font-mono border-b border-carbon/20 pb-1">$1,299</span>
              <button className="bg-carbon text-pure-white px-8 py-4 hover:bg-titanium transition-colors cursor-none rounded-full">
                Pre-Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Philosophy */}
      <section className="py-40 px-6 md:px-12 bg-carbon text-pure-white text-center">
        <div className="max-w-4xl mx-auto">
          <TextReveal as="h2" text="We measure in microns." className="text-fluid-h2 mb-12" />
          <p className="text-xl text-titanium leading-relaxed font-light mb-16">
            Acoustic perfection is not achieved through software equalization. It is achieved through obsessive material science, structural rigidity, and the complete elimination of resonance.
          </p>
        </div>
      </section>

    </main>
  );
}
