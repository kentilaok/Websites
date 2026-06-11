import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 container mx-auto relative overflow-hidden">
        <div className="max-w-4xl z-10">
          <TextReveal
            as="h1"
            text="Nature, Curated for the Modern Sanctuary."
            className="text-5xl md:text-7xl font-serif text-sage-900 leading-tight tracking-tight mb-8"
          />
          <TextReveal
            as="p"
            text="We design and cultivate luxury indoor landscapes, transforming spaces through the quiet elegance of botanical art."
            className="text-lg md:text-2xl text-sage-700 max-w-2xl text-balance"
          />
          
          <div className="mt-12 flex gap-6 items-center">
            <Link 
              href="/collections"
              className="inline-block border border-sage-900 px-8 py-4 uppercase tracking-widest text-sm hover:bg-sage-900 hover:text-earth-50 transition-colors duration-500"
            >
              Explore Collections
            </Link>
            <Link 
              href="/installations"
              className="inline-block group uppercase tracking-widest text-sm text-sage-800"
            >
              <span className="relative overflow-hidden inline-block">
                View Installations
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage-800 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[80vh] opacity-20 pointer-events-none rounded-l-full bg-gradient-to-tr from-sage-200 to-sage-50 blur-3xl" />
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-sage-900 text-earth-50 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] rounded-tr-none">
            <Image
              src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Lush indoor greenery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-xl">
            <TextReveal
              as="h2"
              text="Our Philosophy"
              className="text-sm uppercase tracking-[0.3em] text-sage-300 mb-6"
            />
            <TextReveal
              as="h3"
              text="Bringing the outside in, with intention."
              className="text-4xl md:text-5xl font-serif mb-8 text-balance"
            />
            <div className="space-y-6 text-sage-100 font-light leading-relaxed">
              <p>
                At Equinox, we believe that the presence of living nature in our daily environments is not merely an aesthetic choice, but a fundamental human need. 
              </p>
              <p>
                Our terrariums and indoor installations are designed as living sculptures—self-sustaining ecosystems enclosed in museum-quality glass and meticulously crafted ceramics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-12 text-center text-sage-600 text-sm uppercase tracking-widest mt-20">
        <p>&copy; {new Date().getFullYear()} Equinox Botanical</p>
      </footer>
    </div>
  );
}
