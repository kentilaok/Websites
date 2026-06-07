import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight, Hexagon, Beaker, Zap } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "SYN-PRO-A",
    name: "OmniMyo™",
    category: "Muscle Matrix",
    description: "A complete lab-grown musculoskeletal protein analog. Identical texture to premium wagyu but with 40% higher protein density and zero saturated fat.",
    specs: ["Protein: 85g/100g", "Fat: 2g", "Bioavailability: 99.4%"],
    color: "brand-green"
  },
  {
    id: "NEURO-LIPID-7",
    name: "CogniFat™",
    category: "Lipid Synthesizer",
    description: "Engineered Omega-3 and DHA chains optimized to cross the blood-brain barrier. Enhances neural plasticity and cognitive longevity.",
    specs: ["DHA: 4000mg", "Purity: 100%", "Heavy Metals: 0.0ppb"],
    color: "brand-pink"
  },
  {
    id: "FLORA-GEN-X",
    name: "BiomeCult™",
    category: "Probiotic Matrix",
    description: "Programmable gut flora designed to maximize nutrient extraction. Dynamically adapts to your real-time dietary intake.",
    specs: ["CFU: 500 Billion", "Strains: 124 Engineered", "Survivability: 98%"],
    color: "brand-green"
  },
  {
    id: "CARB-ISO-3",
    name: "KetoCarb™",
    category: "Energy Substrate",
    description: "A synthetic carbohydrate that bypasses the insulin spike pathway. Delivers sustained ATP production for up to 12 hours.",
    specs: ["GI: 0", "Energy: Sustained", "Crash: Negative"],
    color: "brand-pink"
  },
  {
    id: "VITA-CUBE-1",
    name: "OmniMicros™",
    category: "Micronutrient Core",
    description: "A hyper-dense crystalline structure containing every essential human vitamin and mineral in highly bioavailable chelations.",
    specs: ["Coverage: 100% RDA", "Format: Crystalline", "Absorption: Rapid"],
    color: "brand-green"
  },
  {
    id: "AQUA-CELL-9",
    name: "HydraMatrix™",
    category: "Hydration Engine",
    description: "Water structured at the molecular level with integrated electrolytes. Absorbs at a cellular level 3x faster than standard H2O.",
    specs: ["Osmolarity: Ideal", "Electrolytes: Balanced", "State: Liquid Crystal"],
    color: "brand-pink"
  }
];

export default function Innovations() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="pt-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-6 border-b border-gray-200 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
            <Hexagon className="w-4 h-4 text-brand-pink" />
            Product Catalog V4.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Engineered <br />
            <span className="text-gray-400">Nutritional Constructs</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-500 font-light mt-4">
            Browse our current catalog of synthetic biological products. Each construct is designed from the atom up for absolute biological superiority.
          </p>
        </div>
      </section>

      {/* Intro Text Reveal */}
      <section className="px-6 max-w-5xl mx-auto text-center">
        <TextReveal 
          text="We do not farm. We calculate. Every molecule in our catalog serves a specific physiological purpose, eliminating biological redundancy."
          className="text-2xl md:text-4xl font-medium"
        />
      </section>

      {/* Product Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-black transition-all shadow-sm hover:shadow-xl">
              <div className="p-8 pb-0 flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-400 mb-2">{product.id}</span>
                  <h3 className="text-3xl font-bold tracking-tight mb-1">{product.name}</h3>
                  <span className={`text-sm font-medium text-${product.color}`}>{product.category}</span>
                </div>
                <div className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-${product.color} transition-colors duration-500`}>
                  <Beaker className="w-5 h-5 text-black" />
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div>
                  <div className="space-y-3 mb-8">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm border-t border-gray-100 pt-3">
                        <Zap className={`w-3 h-3 text-${product.color}`} />
                        <span className="text-gray-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/lab-access" className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                    <span className="font-medium text-sm">Request Sample</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto w-full text-center">
        <div className="p-12 rounded-3xl bg-gray-50 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">Require Custom Synthesis?</h3>
          <p className="text-gray-500 mb-8">Our bioworks facility can engineer custom nutritional profiles for high-performance organizations.</p>
          <Link href="/lab-access" className="inline-flex px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-brand-pink transition-colors">
            Contact Bioworks Lab
          </Link>
        </div>
      </section>
    </div>
  );
}
