"use client";

import { useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Booking() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-terrain pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <p className="text-moss-400 font-bold tracking-widest uppercase text-sm mb-4">Application for Ascent</p>
          <TextReveal 
            text="Plan Your Expedition" 
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-snow opacity-100! [&_h2]:opacity-100!"
          />
          <p className="text-slate-400 text-lg leading-relaxed mt-8 max-w-2xl">
            Due to the extreme nature of our expeditions, we require all prospective clients to complete an initial assessment. Our team will contact you to discuss your climbing resume and logistical requirements.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-snow/5">
              <h3 className="font-display text-3xl font-bold uppercase text-snow mb-8 border-b border-snow/10 pb-4">Climber Profile</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-terrain border border-snow/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-moss-500 transition-colors" placeholder="Sir Edmund" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-terrain border border-snow/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-moss-500 transition-colors" placeholder="edmund@himalaya.com" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Target Expedition</label>
                <select className="w-full bg-terrain border border-snow/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-moss-500 transition-colors appearance-none">
                  <option value="">Select an Expedition...</option>
                  <option value="everest">Mt. Everest (8,848m)</option>
                  <option value="k2">K2 (8,611m)</option>
                  <option value="denali">Denali (6,190m)</option>
                  <option value="vinson">Mt. Vinson (4,892m)</option>
                  <option value="aconcagua">Aconcagua (6,960m)</option>
                  <option value="custom">Custom Private Expedition</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Climbing Resume (Highest Summits Reached)</label>
                <textarea required rows={4} className="w-full bg-terrain border border-snow/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-moss-500 transition-colors" placeholder="E.g., Aconcagua (2018), Denali (2020), Cho Oyu (2022)"></textarea>
              </div>

              <div className="mb-12">
                <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Additional Logistics / Medical Needs</label>
                <textarea rows={3} className="w-full bg-terrain border border-snow/10 rounded-lg px-4 py-3 text-snow focus:outline-none focus:border-moss-500 transition-colors" placeholder="Dietary restrictions, private Sherpa requests, O2 requirements..."></textarea>
              </div>

              <button 
                disabled={formStatus !== "idle"}
                className="w-full bg-moss-600 text-snow px-8 py-5 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-moss-500 transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
              >
                {formStatus === "idle" ? (
                  <>Submit Application <Send size={18} /></>
                ) : formStatus === "submitting" ? (
                  "Transmitting to Base Camp..."
                ) : (
                  "Application Received"
                )}
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-snow/5">
              <h3 className="font-display text-2xl font-bold uppercase text-snow mb-6 border-b border-snow/10 pb-4">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-moss-400 mt-1" size={24} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Location</p>
                    <p className="text-snow">124 Alpine Way<br/>Chamonix-Mont-Blanc<br/>74400, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-moss-400 mt-1" size={24} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                    <p className="text-snow">+33 4 50 53 00 00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-moss-400 mt-1" size={24} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email</p>
                    <p className="text-snow">summit@apexexpeditions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-moss-900/40 p-8 rounded-2xl border border-moss-500/30">
              <h3 className="font-display text-xl font-bold uppercase text-snow mb-4">Vetting Process</h3>
              <ul className="text-slate-300 text-sm space-y-3 list-disc list-inside">
                <li>Submit application form</li>
                <li>Initial consultation call</li>
                <li>Medical & fitness clearance</li>
                <li>Route selection & logistics planning</li>
                <li>Deposit & gear check</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
