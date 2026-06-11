"use client";

import TextReveal from "@/components/ui/TextReveal";

export default function Philosophy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-40 pb-32 px-6 md:px-20 selection:bg-[var(--color-accent)] selection:text-white">
      <div className="max-w-5xl mx-auto">
        <TextReveal as="h1" text="OUR PHILOSOPHY" className="text-sm tracking-widest uppercase mb-16 text-[var(--color-accent)]" />
        
        <TextReveal 
          as="h2" 
          text="We believe that architecture is the silent choreography of space, light, and material." 
          className="text-4xl md:text-7xl font-serif font-light leading-snug mb-32" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="border-t border-gray-800 pt-8">
            <span className="text-xs tracking-widest text-[var(--color-accent)] mb-4 block">01 / MINIMALISM</span>
            <h3 className="text-3xl font-serif mb-6">The Power of Void</h3>
            <p className="font-light leading-relaxed text-gray-400 text-lg">
              We strip away the non-essential to reveal the profound. By embracing the void, we create spaces that offer clarity, focus, and a deep sense of calm. The absence of noise allows the true essence of a space to resonate.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <span className="text-xs tracking-widest text-[var(--color-accent)] mb-4 block">02 / LIGHT</span>
            <h3 className="text-3xl font-serif mb-6">Sculpting with Photons</h3>
            <p className="font-light leading-relaxed text-gray-400 text-lg">
              Light is our primary building material. We design not just walls and roofs, but the apertures that let light shape the interior environment. Natural light transforms our spaces throughout the day, creating dynamic, living structures.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <span className="text-xs tracking-widest text-[var(--color-accent)] mb-4 block">03 / MATERIAL</span>
            <h3 className="text-3xl font-serif mb-6">Honesty of Substance</h3>
            <p className="font-light leading-relaxed text-gray-400 text-lg">
              We respect the inherent qualities of our materials—the weight of concrete, the warmth of timber, the transparency of glass. We let materials express their true nature without artificial ornamentation or superficial treatments.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <span className="text-xs tracking-widest text-[var(--color-accent)] mb-4 block">04 / CONTEXT</span>
            <h3 className="text-3xl font-serif mb-6">Rooted in Place</h3>
            <p className="font-light leading-relaxed text-gray-400 text-lg">
              Every project is a response to its environment. We study the topography, climate, and cultural history of a site to create architecture that feels inevitable—as if it has always belonged there, emerging naturally from its context.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 md:col-span-2">
            <span className="text-xs tracking-widest text-[var(--color-accent)] mb-4 block">05 / TIMELESSNESS</span>
            <h3 className="text-3xl font-serif mb-6">Beyond Trends</h3>
            <p className="font-light leading-relaxed text-gray-400 text-lg max-w-3xl">
              We design for the ages, not the moment. Our architecture seeks to transcend fleeting trends, aiming instead for an enduring quality that will resonate with generations to come. A well-designed space should evoke the same sense of wonder decades after its completion.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
