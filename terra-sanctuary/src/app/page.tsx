import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex items-center pt-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
               <h1 className="text-6xl md:text-[5.5rem] leading-[1.1] mb-8 text-ts-moss">
                 Where raw <i className="text-ts-clay">nature</i> meets brutalist <br />design.
               </h1>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="text-xl text-ts-stone max-w-md mb-12 leading-relaxed">
                Off-grid luxury villas carved into the landscape. Experience absolute silence and sustainable living.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <Link href="/villas" className="inline-flex items-center gap-4 text-ts-moss font-bold tracking-widest uppercase text-sm group hover:text-ts-clay transition-colors">
                <span className="w-12 h-[1px] bg-ts-moss group-hover:bg-ts-clay group-hover:w-16 transition-all" />
                Discover the Villas
              </Link>
            </TextReveal>
          </div>

          <div className="relative h-[70vh] w-full">
            <TextReveal className="absolute top-12 left-0 w-3/4 h-[80%] z-10" delay={0.3}>
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center border-4 border-ts-sand shadow-2xl" />
            </TextReveal>
            <TextReveal className="absolute bottom-0 right-0 w-2/3 h-[60%]" delay={0.4}>
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center border-4 border-ts-sand sepia-[0.3]" />
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-ts-moss text-ts-sand mt-24">
        <div className="container">
          <TextReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="block font-bold tracking-widest uppercase text-ts-clay mb-8 text-sm">The Philosophy</span>
              <h2 className="text-4xl md:text-6xl leading-tight font-playfair italic mb-12">
                "We did not build on top of the landscape. We poured concrete into the negative space of the forest."
              </h2>
              <p className="text-lg opacity-80 font-light leading-relaxed">
                Every structure at Terra is made from rammed earth, poured concrete, and reclaimed timber. The architecture is intentionally brutal, designed to weather and become overgrown by the surrounding flora over decades.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>
    </div>
  );
}
