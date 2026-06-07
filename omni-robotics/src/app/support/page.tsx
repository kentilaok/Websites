import TextReveal from "@/components/ui/TextReveal";
import { Headphones, Wrench, Shield, Globe2, Cpu, Zap } from "lucide-react";

const SUPPORT_SERVICES = [
  {
    icon: <Globe2 className="w-8 h-8 text-industrial-orange" />,
    title: "Global Dispatch",
    desc: "Technicians deployed within 24 hours to any major industrial zone worldwide."
  },
  {
    icon: <Cpu className="w-8 h-8 text-safety-yellow" />,
    title: "Remote Diagnostics",
    desc: "Secure telemetry links allow our engineers to troubleshoot software issues off-site."
  },
  {
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: "Preventative Maintenance",
    desc: "Scheduled part replacements before MTBF thresholds are reached."
  },
  {
    icon: <Shield className="w-8 h-8 text-industrial-orange" />,
    title: "Extended Warranty",
    desc: "Comprehensive coverage plans for highly volatile operational environments."
  },
  {
    icon: <Zap className="w-8 h-8 text-safety-yellow" />,
    title: "Firmware Upgrades",
    desc: "Over-the-air (OTA) updates pushing new operational capabilities."
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "24/7 Priority Support",
    desc: "Direct line to L3 engineering for critical line-down situations."
  }
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-3 h-3 bg-safety-yellow rounded-full animate-pulse"></span>
              <span className="text-safety-yellow font-mono uppercase tracking-widest text-sm">System Online</span>
            </div>
            <TextReveal text="MISSION CONTROL" className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none mb-6" />
            <p className="text-steel-400 font-mono text-lg">
              Downtime is not an option. Our global support infrastructure is designed to keep your manufacturing lines operational 24/7/365.
            </p>
          </div>
          
          <div className="bg-steel-800 border border-steel-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-orange/10 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold uppercase text-white mb-6">Initialize Contact</h3>
            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Operator Name" className="bg-steel-900 border border-steel-700 p-4 text-white font-mono text-sm focus:border-industrial-orange focus:outline-none w-full" />
                <input type="text" placeholder="Facility ID" className="bg-steel-900 border border-steel-700 p-4 text-white font-mono text-sm focus:border-industrial-orange focus:outline-none w-full" />
              </div>
              <input type="email" placeholder="Secure Comms Channel (Email)" className="bg-steel-900 border border-steel-700 p-4 text-white font-mono text-sm focus:border-industrial-orange focus:outline-none w-full" />
              <textarea placeholder="Diagnostic Report / Inquiry" rows={4} className="bg-steel-900 border border-steel-700 p-4 text-white font-mono text-sm focus:border-industrial-orange focus:outline-none w-full resize-none"></textarea>
              <button type="button" className="bg-industrial-orange hover:bg-safety-yellow text-white hover:text-steel-900 w-full py-4 uppercase font-bold tracking-widest transition-colors">
                Transmit Request
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-black uppercase text-white mb-12 border-b border-steel-700 pb-4">Service Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUPPORT_SERVICES.map((service, i) => (
              <div key={i} className="p-6 border border-steel-700 bg-steel-900/50 hover:bg-steel-800 transition-colors group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold uppercase text-white mb-3 group-hover:text-industrial-orange transition-colors">{service.title}</h3>
                <p className="text-steel-400 font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
