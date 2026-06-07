import TextReveal from "@/components/ui/TextReveal";
import { Globe, Droplets, Wind, Battery, ShieldCheck, TreePine } from "lucide-react";

export default function Sustainability() {
  const metrics = [
    {
      title: "Land Usage Optimization",
      value: "99.8%",
      label: "Reduction vs Traditional",
      icon: Globe,
      desc: "Our vertical bioreactors require virtually zero arable land, returning massive tracts of earth back to rewilding efforts."
    },
    {
      title: "Water Conservation",
      value: "97.5%",
      label: "Less Water Required",
      icon: Droplets,
      desc: "Closed-loop systems recycle all water used in the synthesis process. No agricultural runoff or aquifer depletion."
    },
    {
      title: "Atmospheric Carbon",
      value: "-12k",
      label: "Tons CO2e Annually",
      icon: Wind,
      desc: "Our primary fermentation strains are engineered to utilize atmospheric carbon as their primary feedstock, making the process net-negative."
    },
    {
      title: "Energy Efficiency",
      value: "100%",
      label: "Renewable Power",
      icon: Battery,
      desc: "All facilities run entirely on localized geothermal and next-gen solar matrices. Zero fossil fuels in the production pipeline."
    },
    {
      title: "Pathogen Exclusion",
      value: "Absolute",
      label: "Sterility Rating",
      icon: ShieldCheck,
      desc: "Completely eliminates zoonotic disease vectors, antibiotic usage, and biological contamination from the food supply chain."
    },
    {
      title: "Biodiversity Restoration",
      value: "+400",
      label: "Species Recovering",
      icon: TreePine,
      desc: "By removing agriculture from ecosystems, local flora and fauna are actively reclaiming former farmland near our legacy sites."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="pt-20 px-6 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Planetary <span className="text-brand-green">Restoration</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-500 font-light">
          Sustainability is a flawed concept; it implies maintaining the current broken equilibrium. At Eden Synthetic, our goal is active planetary restoration through industrial-scale technological detachment from nature.
        </p>
      </section>

      {/* Statement */}
      <section className="px-6 max-w-5xl mx-auto text-center py-12 bg-gray-50 rounded-3xl border border-gray-100">
        <TextReveal 
          text="We must stop using the Earth as a farm. By moving food production into sterile, highly efficient bioreactors, we allow nature to heal."
          className="text-2xl md:text-4xl font-medium"
        />
      </section>

      {/* Metrics Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="p-8 bg-white border border-gray-200 rounded-3xl hover:border-brand-green transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl group-hover:bg-brand-green/20 transition-colors duration-700" />
              
              <metric.icon className="w-8 h-8 text-black mb-8 group-hover:text-brand-green transition-colors" />
              
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-500 mb-1">{metric.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tighter">{metric.value}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green">{metric.label}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 mt-4">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Visual Break */}
      <section className="px-6 max-w-7xl mx-auto w-full">
         <div className="h-64 w-full rounded-3xl bg-black relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <h2 className="relative z-10 text-white text-3xl md:text-5xl font-bold tracking-tight text-center">Rewilding The Planet</h2>
         </div>
      </section>
    </div>
  );
}
