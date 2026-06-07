import TextReveal from "@/components/ui/TextReveal";

export default function MenuPage() {
  return (
    <main className="bg-warm-bone text-forest-night min-h-screen pt-48 pb-32 px-6 md:px-12 selection:bg-terracotta selection:text-warm-bone">
      
      {/* 1. Menu Header */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-terracotta mb-8 block">
          Current Offering
        </span>
        <TextReveal
          as="h1"
          text="The Summer Solstice Tasting."
          className="text-5xl md:text-8xl font-serif leading-tight mb-8"
        />
        <p className="font-sans text-lg max-w-2xl mx-auto opacity-70 leading-relaxed">
          Our twelve-course tasting menu is a reflection of the immediate micro-season. We ask that guests set aside at least three hours for the experience.
        </p>
      </div>

      {/* 2. The Menu Sequence */}
      <div className="max-w-3xl mx-auto">
        
        {/* Act I */}
        <div className="mb-24 relative">
          <div className="absolute -left-12 md:-left-32 top-0 text-sm font-sans uppercase tracking-[0.2em] text-terracotta rotate-[-90deg] origin-left whitespace-nowrap hidden md:block">
            Act I: The Shore
          </div>
          
          <h2 className="text-2xl font-serif italic mb-12 border-b border-forest-night/20 pb-4">Arrival</h2>
          
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Oyster & Seawater</h3>
                <p className="text-sm font-sans opacity-60">Foraged sea succulents, green strawberry mignonette</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">01</span>
            </div>

            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Urchin Custard</h3>
                <p className="text-sm font-sans opacity-60">Kombu, roasted bone marrow, burnt brioche</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">02</span>
            </div>
          </div>
        </div>

        {/* Act II */}
        <div className="mb-24 relative">
          <div className="absolute -left-12 md:-left-32 top-0 text-sm font-sans uppercase tracking-[0.2em] text-terracotta rotate-[-90deg] origin-left whitespace-nowrap hidden md:block">
            Act II: The Hearth
          </div>
          
          <h2 className="text-2xl font-serif italic mb-12 border-b border-forest-night/20 pb-4">Fire & Earth</h2>
          
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Smoked Maitake</h3>
                <p className="text-sm font-sans opacity-60">Pine needle ash, fermented garlic honey, egg yolk</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">03</span>
            </div>

            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Aged Duck Breast</h3>
                <p className="text-sm font-sans opacity-60">Dry-aged 21 days, lacto-fermented plum, chicory</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">04</span>
            </div>
            
            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Wagyu & Coals</h3>
                <p className="text-sm font-sans opacity-60">A5 Ribcap, roasted directly on embers, bone broth reduction</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">05</span>
            </div>
          </div>
        </div>

        {/* Act III */}
        <div className="mb-24 relative">
          <div className="absolute -left-12 md:-left-32 top-0 text-sm font-sans uppercase tracking-[0.2em] text-terracotta rotate-[-90deg] origin-left whitespace-nowrap hidden md:block">
            Act III: The Meadow
          </div>
          
          <h2 className="text-2xl font-serif italic mb-12 border-b border-forest-night/20 pb-4">Sweet Transitions</h2>
          
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Goat's Milk Ice</h3>
                <p className="text-sm font-sans opacity-60">Toasted hay, wild chamomile, green apple</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">06</span>
            </div>

            <div className="flex justify-between items-end group">
              <div className="max-w-sm">
                <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">Smoked Chocolate</h3>
                <p className="text-sm font-sans opacity-60">70% Cacao, birch syrup, porcini mushroom dust</p>
              </div>
              <span className="font-sans text-xs uppercase tracking-widest opacity-40">07</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* 3. Pricing & Pairings */}
      <div className="max-w-3xl mx-auto mt-32 p-12 bg-forest-night text-warm-bone text-center">
        <h3 className="text-3xl font-serif italic mb-8">Pairings & Pricing</h3>
        <div className="flex flex-col md:flex-row justify-center gap-16 font-sans text-sm uppercase tracking-widest">
          <div>
            <span className="opacity-60 block mb-2">Tasting Menu</span>
            <span className="text-xl font-serif normal-case">$285</span>
          </div>
          <div>
            <span className="opacity-60 block mb-2">Reserve Wine Pairing</span>
            <span className="text-xl font-serif normal-case">$175</span>
          </div>
          <div>
            <span className="opacity-60 block mb-2">Non-Alcoholic Pairing</span>
            <span className="text-xl font-serif normal-case">$95</span>
          </div>
        </div>
      </div>

    </main>
  );
}
