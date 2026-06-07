import TextReveal from "@/components/ui/TextReveal";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="container max-w-4xl mx-auto">
        <TextReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight mb-6">
              Begin Your Protocol
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every protocol begins with a comprehensive biomarker panel. Schedule your initial consultation at our Swiss or California facility.
            </p>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Legal Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:border-ll-blue-glow focus:ring-2 focus:ring-ll-blue-glow/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Date of Birth</label>
                  <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:border-ll-blue-glow focus:ring-2 focus:ring-ll-blue-glow/20 outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:border-ll-blue-glow focus:ring-2 focus:ring-ll-blue-glow/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Preferred Facility</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:border-ll-blue-glow focus:ring-2 focus:ring-ll-blue-glow/20 outline-none transition-all appearance-none">
                    <option>Geneva, Switzerland (HQ)</option>
                    <option>Palo Alto, California</option>
                    <option>Virtual Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700">Primary Objective</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 focus:border-ll-blue-glow focus:ring-2 focus:ring-ll-blue-glow/20 outline-none transition-all resize-none" placeholder="Briefly describe your health goals or specific concerns..." />
              </div>

              <button type="button" className="w-full bg-slate-900 text-white font-bold text-lg rounded-xl py-6 hover:bg-ll-blue-glow transition-colors duration-300 shadow-lg">
                Request Appointment
              </button>
            </form>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}
