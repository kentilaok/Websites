"use client";

import { useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrivateApplication() {
  const [step, setStep] = useState(1);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-30 pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto z-10">
        <div className="mb-16 text-center">
          <p className="text-silver-500 uppercase tracking-[0.3em] text-xs mb-4">
            Phase 01: Identification
          </p>
          <h1 className="font-serif text-4xl text-white mb-6">
            <TextReveal text="Request an Invitation" />
          </h1>
          <p className="text-silver-400 text-sm leading-relaxed">
            Please be advised: Obsidian Wealth accepts fewer than 1% of applicants. Completion of this preliminary dossier does not guarantee engagement. Our intelligence division will verify all claims.
          </p>
        </div>

        <form className="space-y-12">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-1000">
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-silver-500 mb-2 group-focus-within:text-white transition-colors">
                  Legal Entity / Family Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-silver-700 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Enter full legal name"
                />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-silver-500 mb-2 group-focus-within:text-white transition-colors">
                  Primary Jurisdiction
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-silver-700 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="E.g., Switzerland, Singapore, Caymans"
                />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-silver-500 mb-2 group-focus-within:text-white transition-colors">
                  Estimated Liquid Assets (USD)
                </label>
                <select className="w-full bg-black border-b border-silver-700 py-3 text-silver-300 focus:outline-none focus:border-white transition-colors appearance-none cursor-none">
                  <option value="" disabled selected>Select tier</option>
                  <option value="50-100">$50M - $100M</option>
                  <option value="100-500">$100M - $500M</option>
                  <option value="500-1b">$500M - $1B</option>
                  <option value="1b+">$1B+</option>
                </select>
              </div>

              <button 
                onClick={handleNext}
                className="w-full py-4 mt-8 border border-white/20 text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center space-x-2 cursor-none"
              >
                <span>Proceed to Origin</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-silver-500 mb-2 group-focus-within:text-white transition-colors">
                  Source of Wealth
                </label>
                <textarea 
                  className="w-full bg-transparent border-b border-silver-700 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none h-24"
                  placeholder="Provide a brief summary of primary liquidity events..."
                />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-silver-500 mb-2 group-focus-within:text-white transition-colors">
                  Referred By (Optional)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-silver-700 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Enter partner ID or alias"
                />
              </div>

              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-1 appearance-none w-4 h-4 border border-silver-500 checked:bg-white checked:border-white transition-colors cursor-none" />
                <p className="text-xs text-silver-500 leading-relaxed">
                  I hereby authorize Obsidian Wealth's internal intelligence division to conduct a deep-background cryptographic and sovereign database check based on the provided information. I understand that all submitted data is encrypted via Quantum Key Distribution (QKD).
                </p>
              </div>

              <button 
                onClick={(e) => { e.preventDefault(); alert("Application Transmitted via Encrypted Channel. We will be in touch."); }}
                className="w-full py-4 mt-8 bg-white text-black uppercase text-xs tracking-widest hover:bg-silver-300 transition-colors duration-500 cursor-none"
              >
                Transmit Dossier
              </button>

              <button 
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-silver-500 hover:text-white uppercase tracking-widest mt-4 cursor-none transition-colors"
              >
                Return
              </button>
            </div>
          )}
        </form>
      </div>

      <Link href="/" className="absolute bottom-8 left-8 text-xs text-silver-600 hover:text-white uppercase tracking-widest transition-colors">
        Cancel & Return
      </Link>
    </div>
  );
}
