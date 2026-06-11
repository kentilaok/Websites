import Image from "next/image";
import TextReveal from "@/components/ui/TextReveal";

const menuItems = [
  {
    id: "01",
    name: "Obsidian Pearl",
    ingredients: "Beluga Caviar, Smoked Macadamia Milk, Yuzu Kosho, Edible Gold",
    description: "A delicate study in contrasts. The briny depth of rare Beluga caviar meets the creamy, ethereal smoke of macadamia, punctuated by a sharp citrus-chili bite.",
    pairing: "2012 Dom Pérignon Vintage, Champagne, France",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Crimson Tide",
    ingredients: "Bluefin Tuna Otoro, Fermented Plum, Shiso, White Truffle Snow",
    description: "Melt-in-your-mouth fatty tuna elevated by the tartness of aged plum and the intoxicating earthy aroma of shaved white Alba truffle.",
    pairing: "Junmai Daiginjo, Dassai 23, Yamaguchi, Japan",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "The Embered Forest",
    ingredients: "Maitake Mushroom, Pine Needle Oil, Black Garlic, Venison Garum",
    description: "A vegetarian masterpiece that mimics the forest floor. Slow-roasted over binchotan charcoal, finished with an umami-rich venison garum reduction.",
    pairing: "2018 Domaine Dujac Morey-Saint-Denis, Burgundy, France",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Abyssal Depths",
    ingredients: "Hokkaido Scallop, Squid Ink Tuile, Sea Urchin Foam, Finger Lime",
    description: "Sweet, translucent scallop hidden beneath a dramatic, architecture-like crisp of squid ink. The sea urchin foam delivers an intense burst of oceanic flavor.",
    pairing: "2020 Kumeu River Mate's Vineyard Chardonnay, New Zealand",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f138fbc?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "The Sovereign",
    ingredients: "A5 Kagoshima Wagyu, Fermented Black Bean, Burnt Onion, Foie Gras Jus",
    description: "The pinnacle of our menu. Unctuous A5 Wagyu paired with the deep savory notes of fermented black bean and a decadent, glossy foie gras reduction.",
    pairing: "2009 Château Margaux, Bordeaux, France",
    image: "https://images.unsplash.com/photo-1544025162-8314bbfa6132?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Crescent Moon",
    ingredients: "White Sesame Mousse, Black Sesame Sponge, Yuzu Gel, Charcoal Ice Cream",
    description: "A visual and textural marvel. The monochrome palette belies the vibrant, toasted nuttiness and sharp citrus notes hidden within.",
    pairing: "2015 Château d'Yquem, Sauternes, France",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function TastingMenu() {
  return (
    <div className="w-full flex flex-col pb-32">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <TextReveal text="L'Éclipse" className="text-gold-400 tracking-[0.4em] uppercase text-sm mb-4" />
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">The Tasting Menu</h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
          A fourteen-course exploration of nature's finest offerings, reimagined through the lens of modern culinary alchemy.
        </p>
      </section>

      {/* Menu Items */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 w-full space-y-32">
        {menuItems.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="w-full md:w-1/2 relative aspect-[4/3] group overflow-hidden">
              <div className="absolute inset-0 bg-burgundy-900/20 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              <Image 
                src={item.image} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20 text-gold-400 font-serif text-2xl tracking-widest bg-charcoal-900/80 px-4 py-2 backdrop-blur-sm">
                {item.id}
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <TextReveal text={item.name} className="font-serif text-4xl text-white" as="h2" />
              
              <div className="space-y-2 border-l border-gold-500/30 pl-4 py-2">
                <p className="text-gold-400 text-xs tracking-[0.2em] uppercase">Core Elements</p>
                <p className="text-white/90 text-sm">{item.ingredients}</p>
              </div>

              <p className="text-white/70 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="pt-4 space-y-2">
                <p className="text-gold-400 text-xs tracking-[0.2em] uppercase">Sommelier's Pairing</p>
                <p className="text-white/80 text-sm font-serif italic">{item.pairing}</p>
              </div>
            </div>

          </div>
        ))}
      </section>
      
      <div className="mt-32 text-center">
        <p className="text-white/50 text-sm tracking-widest uppercase mb-8">Reservations required for the tasting menu</p>
        <a href="/reservations" className="inline-block px-12 py-4 border border-gold-500/50 hover:bg-gold-500/10 text-gold-400 tracking-[0.2em] uppercase text-sm transition-all duration-300">
          Secure Your Experience
        </a>
      </div>
    </div>
  );
}
