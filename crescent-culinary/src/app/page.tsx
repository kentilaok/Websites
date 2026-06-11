import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant Interior"
            fill
            className="object-cover opacity-40 scale-105 animate-[slide-up_10s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900 z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <span className="text-gold-400 tracking-[0.5em] text-sm md:text-base uppercase mb-6 block animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            A Culinary Journey
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8 animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <span className="block">Where Tradition</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
              Meets Innovation
            </span>
          </h1>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            <Link 
              href="/reservations" 
              className="inline-block px-10 py-4 bg-burgundy-600 hover:bg-burgundy-500 text-white tracking-[0.2em] uppercase text-sm transition-all duration-300 border border-burgundy-500 hover:shadow-[0_0_20px_rgba(140,29,52,0.4)]"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 border border-gold-500/30 translate-x-4 translate-y-4" />
            <Image
              src="https://images.unsplash.com/photo-1590846406792-0adc7f138fbc?q=80&w=1974&auto=format&fit=crop"
              alt="Plated Food"
              fill
              className="object-cover relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <TextReveal 
              text="The Philosophy" 
              className="text-gold-400 tracking-[0.3em] uppercase text-sm font-semibold"
              as="h2"
            />
            <TextReveal 
              text="Crescent Culinary is a sanctuary of gastronomy, born from an unyielding passion for perfection." 
              className="font-serif text-3xl md:text-5xl text-white leading-snug"
              as="h3"
            />
            <TextReveal 
              text="We source only the most exceptional ingredients from local purveyors and global artisans. Each dish is a canvas, a fleeting moment of beauty meticulously crafted to awaken the senses and evoke deep emotional resonance." 
              className="text-white/70 text-lg leading-relaxed font-light"
            />
            <div className="pt-4">
              <Link href="/chefs" className="group inline-flex items-center text-white hover:text-gold-400 transition-colors">
                <span className="uppercase tracking-[0.2em] text-sm border-b border-gold-500/30 group-hover:border-gold-400 pb-1">
                  Meet the Masters
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-32 w-full bg-charcoal-800 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
            <TextReveal text="Tasting Menu" className="text-gold-400 tracking-[0.3em] uppercase text-sm" />
            <TextReveal text="A Symphony of Flavors" className="font-serif text-4xl text-white" as="h2" />
            <TextReveal text="Embark on a multi-course expedition that traverses culinary landscapes. Our seasonal tasting menu is a reflection of time and place." className="text-white/70" />
            <Link href="/tasting-menu" className="inline-block mt-4 text-white hover:text-gold-400 tracking-[0.2em] uppercase text-sm">
              Explore the Menu →
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4]">
              <Image src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" alt="Dish 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] translate-y-12">
              <Image src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop" alt="Dish 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
