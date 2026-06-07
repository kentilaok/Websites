import TextReveal from "@/components/ui/TextReveal";

export default function CollectionPage() {
  return (
    <main className="bg-warm-white text-charcoal min-h-screen pt-48 pb-32 px-6 md:px-32 font-sans pr-24">
      <div className="max-w-5xl mx-auto">
        <TextReveal as="h1" text="The Collection" className="text-6xl md:text-8xl font-serif italic mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="aspect-square bg-charcoal/5 group cursor-none overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" alt="Furniture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-serif mb-4">Lounge Chair 01</h2>
            <p className="text-sm tracking-widest uppercase opacity-60 leading-loose mb-8">Walnut / Boucle</p>
            <p className="text-sm opacity-80 leading-relaxed">
              A study in proportions. The Lounge Chair 01 utilizes hand-turned American Walnut joined seamlessly without hardware.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
