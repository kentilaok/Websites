import TextReveal from "@/components/ui/TextReveal";

export default function CulturePage() {
  return (
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-acid-yellow selection:text-deep-purple bg-deep-purple text-off-white">
      <div className="max-w-5xl mx-auto">
        <TextReveal as="h1" text="Chaos & Coffee." className="text-fluid-h1 text-electric-pink mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
              We don't do "agile". We don't do "synergy". We put 5 weirdos in a room with highly caffeinated beverages and let them build wild things.
            </p>
            <p className="text-xl opacity-80 leading-relaxed">
              Based in Brooklyn, functioning globally. Our team is composed of former hackers, rogue 3D artists, and dropouts who figured out how to write WebGL shaders.
            </p>
          </div>
          <div className="aspect-square bg-electric-pink border-8 border-acid-yellow overflow-hidden transform rotate-3 hover:rotate-0 transition-transform">
            <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d837e?w=800&q=80" alt="Office" className="w-full h-full object-cover mix-blend-hard-light grayscale" />
          </div>
        </div>
      </div>
    </main>
  );
}
