import TextReveal from "@/components/ui/TextReveal";

export default function ArchivePage() {
  return (
    <main className="bg-warm-white text-charcoal min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-charcoal selection:text-warm-white">
      <div className="max-w-6xl mx-auto">
        <TextReveal as="h1" text="The Archive." className="text-6xl md:text-9xl font-serif tracking-tight mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-charcoal/20 pt-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group cursor-none">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-charcoal/10">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000000}?w=800&q=80`} 
                  alt={`Archive ${item}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between font-sans text-xs uppercase tracking-widest border-b border-charcoal/10 pb-4">
                <span>Collection {String(item).padStart(2, '0')}</span>
                <span className="opacity-50">202{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
