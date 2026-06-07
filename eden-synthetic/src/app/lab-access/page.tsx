import TextReveal from "@/components/ui/TextReveal";
import { Lock, FileSignature, CheckCircle2, FlaskRound, Fingerprint, Database } from "lucide-react";

export default function LabAccess() {
  const steps = [
    { icon: FileSignature, title: "1. Institutional Verification", desc: "Submit your research credentials or enterprise details." },
    { icon: Lock, title: "2. Security Clearance", desc: "Pass our bio-security background checks." },
    { icon: Database, title: "3. Protocol Alignment", desc: "Align your testing methodology with Eden protocols." },
    { icon: FlaskRound, title: "4. Sample Dispensation", desc: "Receive customized synthetic constructs." }
  ];

  const criteria = [
    "Academic Research Institutions",
    "High-Performance Culinary Groups",
    "Space Exploration Agencies",
    "Military Nutrition Boards",
    "Elite Athletics Programs"
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="pt-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Lab <span className="text-brand-pink">Access</span>
          </h1>
          <p className="text-xl text-gray-500 font-light mb-12">
            Our synthetic constructs are currently restricted to authorized partners. Please submit your credentials to initiate the review protocol.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-brand-pink" /> Clearance Process
             </h3>
             <div className="space-y-6">
                {steps.map((step, i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                         <step.icon className="w-4 h-4 text-black" />
                      </div>
                      <div>
                         <h4 className="font-bold text-sm">{step.title}</h4>
                         <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-100">
          <form className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4">Access Request Form</h2>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Institution Name</label>
              <input type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="e.g. MIT Synthetic Biology Dept" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Primary Investigator / Contact</label>
              <input type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="Full Name" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Secure Comm Link</label>
              <input type="email" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" placeholder="Institutional Email" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Requested Construct</label>
              <select className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all appearance-none cursor-pointer">
                <option>OmniMyo™ (Muscle Matrix)</option>
                <option>CogniFat™ (Lipid Synthesizer)</option>
                <option>BiomeCult™ (Probiotic Matrix)</option>
                <option>Custom Synthesis</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wider">Research Proposal</label>
              <textarea rows={4} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none" placeholder="Briefly describe your intended application..."></textarea>
            </div>

            <button type="button" className="mt-4 w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-brand-green hover:text-black transition-colors flex items-center justify-center gap-2">
              Submit Encrypted Request
            </button>
            <p className="text-xs text-center text-gray-400 mt-2">All submissions are PGP encrypted locally before transmission.</p>
          </form>
        </div>
      </section>

      {/* Accepted Criteria */}
      <section className="px-6 max-w-7xl mx-auto w-full">
         <h3 className="text-2xl font-bold mb-8 text-center">Currently Accepting Phase IV Trials From:</h3>
         <div className="flex flex-wrap justify-center gap-4">
            {criteria.map((item, i) => (
               <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  {item}
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
