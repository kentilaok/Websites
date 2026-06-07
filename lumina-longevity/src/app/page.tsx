import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-ll-blue-soft rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" />
        </div>

        <div className="container relative z-10 text-center max-w-5xl">
          <TextReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/80 backdrop-blur-md mb-8 text-sm font-medium text-ll-blue-glow">
              <span className="w-2 h-2 rounded-full bg-ll-blue-glow" />
              NOW ACCEPTING PHASE 2 PATIENTS
            </div>
          </TextReveal>
          
          <TextReveal delay={0.1}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-slate-800">
              Redefining the boundaries of <span className="text-transparent bg-clip-text bg-gradient-to-r from-ll-blue-glow to-blue-600">human longevity.</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-xl text-ll-slate-light max-w-2xl mx-auto mb-12">
              Advanced cellular regeneration, genetic optimization, and preventative biotech protocols designed to extend healthspan.
            </p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <Link href="/consultation" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-ll-blue-glow transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              Schedule Initial Biomarker Assessment
            </Link>
          </TextReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-ll-offwhite rounded-3xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-ll-blue-soft/50 to-transparent" />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/50 flex flex-col justify-center">
                <TextReveal>
                  <div className="text-5xl font-bold text-slate-800 mb-2">99.8%</div>
                  <div className="text-ll-slate-light text-sm">Cellular repair efficacy in recent clinical trials.</div>
                </TextReveal>
              </div>
            </div>

            <div>
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 tracking-tight">
                  We don't treat aging. We program against it.
                </h2>
              </TextReveal>
              <TextReveal delay={0.1}>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Aging is no longer an inevitability; it is a complex engineering problem. By analyzing over 10,000 biomarkers, Lumina creates highly personalized protocols to reverse biological age at the cellular level.
                </p>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  Our therapies combine hyperbaric oxygen conditioning, NAD+ restoration, and senolytic clearing to restore your body to its optimal state.
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                 <Link href="/research" className="text-ll-blue-glow font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2">
                  Read our clinical methodology <span className="text-xl">→</span>
                 </Link>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
