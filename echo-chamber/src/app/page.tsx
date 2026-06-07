import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero */}
      <section className="mb-32">
        <div className="container px-0">
          <TextReveal>
            <h1 className="text-7xl md:text-[12rem] font-black leading-none tracking-tighter uppercase break-words border-b-8 border-ec-white pb-8 mb-8">
              ECHO<br/><span className="text-ec-lime">CHAMBER</span>
            </h1>
          </TextReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <TextReveal delay={0.1}>
              <div className="bg-ec-lime text-ec-black p-8 brutalist-shadow">
                <h2 className="text-3xl font-bold uppercase mb-4">[ DISTORTION IS PURITY ]</h2>
                <p className="text-lg font-medium">
                  WE ARE NOT HERE TO MAKE BACKGROUND MUSIC. WE ARE HERE TO RUPTURE DRUMS AND SHATTER GLASS.
                </p>
              </div>
            </TextReveal>
            <TextReveal delay={0.2}>
               <div className="border-4 border-ec-white p-8 brutalist-shadow bg-ec-black h-full flex flex-col justify-end">
                <div className="text-ec-lime font-bold text-4xl mb-4">/// EST. 2026</div>
                <Link href="/roster" className="inline-block bg-ec-white text-ec-black font-bold uppercase py-4 px-8 text-center hover:bg-ec-lime hover:brutalist-shadow transition-all w-full">
                  VIEW THE ROSTER
                </Link>
               </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y-8 border-ec-lime bg-ec-lime py-4 overflow-hidden mb-32 -mx-4 md:-mx-8">
        <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] flex gap-8">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-ec-black font-black text-4xl uppercase">
               NOISE COMPLAINTS // EVICTION NOTICES // RUPTURED DRUMS //
             </span>
          ))}
        </div>
      </section>

      {/* Latest Release */}
      <section className="container px-0">
        <TextReveal>
          <div className="flex items-center gap-4 mb-8">
             <div className="w-4 h-4 bg-ec-lime animate-ping" />
             <h2 className="text-4xl font-bold uppercase">LATEST DROP</h2>
          </div>
        </TextReveal>
        
        <div className="border-4 border-ec-white p-4 brutalist-shadow bg-ec-black">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-ec-white p-2">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150" />
            </div>
            <div className="flex flex-col justify-between p-4">
              <TextReveal delay={0.1}>
                <div className="text-ec-lime font-bold uppercase mb-2">EP // EC-042</div>
                <h3 className="text-5xl font-black uppercase mb-4 break-words">CONCRETE<br/>LUNGS</h3>
                <p className="text-xl mb-8">BY: NULL_POINTER</p>
              </TextReveal>
              <TextReveal delay={0.2}>
                <button className="w-full bg-ec-lime text-ec-black font-bold py-6 text-2xl uppercase hover:bg-ec-white brutalist-shadow transition-all">
                  LISTEN NOW
                </button>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
