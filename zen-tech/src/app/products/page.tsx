import TextReveal from "@/components/ui/TextReveal";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-48 pb-48 px-6 md:px-12 selection:bg-carbon selection:text-pure-white">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <TextReveal as="h1" text="Hardware Ecosystem" className="text-fluid-h1 mb-8" />
        <p className="text-xs uppercase tracking-[0.2em] text-titanium">No planned obsolescence. Built for life.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product 1 */}
        <div className="bg-aluminum/10 rounded-[2rem] p-12 flex flex-col group cursor-none hover:bg-aluminum/20 transition-colors">
          <div className="aspect-square flex items-center justify-center mb-8">
            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80" alt="Headphones" className="w-2/3 object-contain grayscale mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-titanium mb-2 block">AURA_ONE</span>
              <h2 className="text-3xl font-light">Reference Monitor</h2>
            </div>
            <span className="font-mono text-sm">$1,299</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-aluminum/10 rounded-[2rem] p-12 flex flex-col group cursor-none hover:bg-aluminum/20 transition-colors">
          <div className="aspect-square flex items-center justify-center mb-8">
            <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80" alt="Amp" className="w-2/3 object-contain grayscale mix-blend-darken group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-titanium mb-2 block">AURA_AMP</span>
              <h2 className="text-3xl font-light">Class-A Amplifier</h2>
            </div>
            <span className="font-mono text-sm">$2,499</span>
          </div>
        </div>

      </div>
    </main>
  );
}
