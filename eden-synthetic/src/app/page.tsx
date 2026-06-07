import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import { ArrowRight, Leaf, Droplet, Activity, FlaskConical } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-8 shadow-sm">
          <span className="flex w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">Synthetic Biology V4.0 Online</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl leading-[1.1]">
          Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-pink">Nutrition</span> for a Post-Scarce World
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl font-light">
          We synthesize pure, hyper-nutritious proteins from base elements. No land, no animals, no compromise. The future of food is clinical, precise, and beautiful.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/innovations" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-brand-green hover:text-black transition-all flex items-center justify-center gap-2 group">
            Explore Innovations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/lab-access" className="px-8 py-4 bg-white border border-gray-200 text-black rounded-full font-medium hover:border-brand-pink transition-all flex items-center justify-center">
            Request Lab Access
          </Link>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <TextReveal 
            text="Nature provided the blueprint. We refined the execution. Eden Synthetic merges computational biology with food science to create macronutrients that outperform traditional agriculture in every measurable metric."
            className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-gray-900"
          />
        </div>
      </section>

      {/* Core Pillars */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Synthesis<br/>Protocol</h2>
          <Link href="/sustainability" className="text-brand-pink hover:text-brand-green font-medium flex items-center gap-2 transition-colors uppercase tracking-wider text-sm">
            View Sustainability Metrics <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FlaskConical, title: "Precision Fermentation", desc: "Microflora engineered to produce exact protein structures without biological waste." },
            { icon: Activity, title: "Hyper-Nutritious", desc: "Bioavailable amino acid profiles tailored for optimal human absorption and performance." },
            { icon: Droplet, title: "Zero Contamination", desc: "Sterile lab environments ensure absolute purity. No microplastics, no heavy metals." },
            { icon: Leaf, title: "Carbon Negative", desc: "Our bioreactors capture atmospheric carbon, actively reversing historical emissions." }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-green transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/10 transition-colors">
                <feature.icon className="w-6 h-6 text-black group-hover:text-brand-green transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Banner */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-black text-white p-12 md:p-24 flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-pink to-brand-green" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Phase 4 Trials Active</h2>
          <p className="text-gray-400 max-w-xl mb-10">We are currently accepting early access applications for our latest neuro-optimized lipid formulations. Research institutions and culinary pioneers prioritized.</p>
          <Link href="/lab-access" className="px-8 py-4 bg-brand-green text-black rounded-full font-bold hover:bg-white transition-colors">
            Initialize Access Protocol
          </Link>
        </div>
      </section>
    </div>
  );
}
