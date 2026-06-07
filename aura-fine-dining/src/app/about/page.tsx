import TextReveal from "@/components/ui/TextReveal";

export default function AboutPage() {
  return (
    <main className="bg-warm-bone text-forest-night min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-terracotta selection:text-warm-bone">
      
      {/* 1. Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <TextReveal
          as="h1"
          text="The Provenance."
          className="text-5xl md:text-8xl font-serif leading-tight mb-8"
        />
        <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
          We believe that a restaurant is merely an extension of its environment. We do not invent flavors; we discover them.
        </p>
      </div>

      {/* 2. Chef Bio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-32 items-center">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80" 
            alt="Chef Elena Rostova" 
            className="object-cover w-full h-full grayscale"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-terracotta mb-4 block">The Kitchen</span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Chef Elena Rostova</h2>
          <div className="space-y-6 font-sans text-lg opacity-80 leading-relaxed">
            <p>
              Born in the remote mountains and classically trained in Paris, Chef Elena Rostova spent a decade working under the world's most demanding culinary directors before walking away. 
            </p>
            <p>
              She sought a return to the visceral. A return to fire, smoke, and soil. Aura is the culmination of this pursuit—a place where the ingredients dictate the technique, not the other way around.
            </p>
            <p>
              Her philosophy is simple: respect the death of the animal, honor the toil of the farmer, and translate the season with absolute purity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Farm Partners Grid */}
      <section className="max-w-6xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Partners</h2>
          <p className="font-sans text-sm uppercase tracking-widest opacity-60">The hands that feed us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-none">
            <div className="relative aspect-square overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Farm" />
            </div>
            <h3 className="font-serif text-2xl mb-2">Hudson Valley Foragers</h3>
            <p className="font-sans text-sm opacity-70">Wild mushrooms, ramps, and indigenous herbs sourced from old-growth forests.</p>
          </div>
          
          <div className="group cursor-none">
            <div className="relative aspect-square overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1544378730-8b5af116634f?w=800&q=80" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Fishery" />
            </div>
            <h3 className="font-serif text-2xl mb-2">Montauk Line Catch</h3>
            <p className="font-sans text-sm opacity-70">Sustainable, line-caught seafood delivered directly to our kitchen within hours of the catch.</p>
          </div>

          <div className="group cursor-none">
            <div className="relative aspect-square overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1595855761352-710eaeb1730d?w=800&q=80" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Soil" />
            </div>
            <h3 className="font-serif text-2xl mb-2">Heritage Soil Project</h3>
            <p className="font-sans text-sm opacity-70">Regenerative agriculture providing our root vegetables and heirloom grains.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
