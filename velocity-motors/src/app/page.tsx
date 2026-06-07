import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Abstract background representing speed */}
        <div className="absolute inset-0 bg-vm-dark">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-vm-red opacity-20 transform -translate-y-1/2 blur-sm" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-vm-red transform -translate-y-1/2 rotate-12 origin-left scale-x-150" />
        </div>
        
        <div className="container relative z-10 text-center">
          <TextReveal>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-difference">
              MACH <span className="text-vm-red">1</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="mt-6 text-xl text-vm-steel font-manrope max-w-2xl mx-auto">
              Breaking the barrier between physical limitation and aerodynamic perfection.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="py-32 bg-vm-black border-t border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <TextReveal>
                <h2 className="text-4xl md:text-5xl text-white mb-6">CARBON<br/>FORGED</h2>
              </TextReveal>
              <TextReveal delay={0.1}>
                <p className="text-vm-steel text-lg mb-8">
                  Our proprietary weave matrix reduces weight by 40% while increasing tensile strength to aviation standards.
                </p>
                <Link href="/aerodynamics" className="inline-flex items-center text-vm-red font-syncopate text-sm tracking-widest hover:text-white transition-colors">
                  DISCOVER AERO <span className="ml-2">→</span>
                </Link>
              </TextReveal>
            </div>
            <div className="relative aspect-square bg-vm-dark border border-white/10 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-1/2 h-1/2 border-2 border-vm-red rounded-full opacity-20" />
              <div className="absolute w-full h-[1px] bg-vm-red/30 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 bg-vm-dark relative overflow-hidden">
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/5" />
        <div className="container relative z-10 text-center">
          <TextReveal>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">UNYIELDING.</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-2xl text-vm-steel max-w-3xl mx-auto leading-relaxed">
              We do not build cars. We build kinetic sculptures designed to tear through the atmosphere with absolute precision.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen bg-vm-red flex items-center justify-center text-vm-dark">
        <div className="container text-center">
          <TextReveal>
            <h2 className="text-5xl md:text-8xl font-bold mb-8">CLAIM YOURS.</h2>
            <Link href="/ownership" className="border-2 border-vm-dark px-8 py-4 font-syncopate font-bold text-xl hover:bg-vm-dark hover:text-vm-red transition-all duration-300">
              INITIATE ALLOCATION
            </Link>
          </TextReveal>
        </div>
      </section>
    </div>
  );
}
