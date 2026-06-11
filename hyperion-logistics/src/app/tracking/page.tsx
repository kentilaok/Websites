"use client";

import { useState } from "react";
import { TextReveal } from "@/components/ui/TextReveal";
import { Search, MapPin, Package, Clock, ShieldAlert, CheckCircle2, Anchor } from "lucide-react";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("HYP-8924-XQ");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1500);
  };

  const steps = [
    { status: "Manifest Generated", location: "Neo-Tokyo Hub", time: "10:24:01 UTC", icon: Package, completed: true },
    { status: "Customs Cleared", location: "Neo-Tokyo Port", time: "14:12:44 UTC", icon: ShieldAlert, completed: true },
    { status: "In Transit (Ocean)", location: "Pacific Sector 4", time: "Active", icon: MapPin, completed: true, current: true },
    { status: "Port Arrival", location: "San Francisco Apex", time: "Est. 2 Days", icon: Anchor, completed: false },
    { status: "Final Delivery", location: "Silicon Valley", time: "Est. 3 Days", icon: CheckCircle2, completed: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <section className="mt-12 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-mono font-bold uppercase mb-6 flex justify-center"><TextReveal text="Telemetry Uplink" /></h1>
        <p className="text-xl text-hyperion-muted font-mono mb-12">
          Sub-millisecond tracking across all global vectors. Enter your Waybill ID.
        </p>

        <form onSubmit={handleSearch} className="flex gap-4 relative">
          <div className="absolute inset-0 bg-hyperion-neon-blue/20 blur-xl rounded-full" />
          <input 
            type="text" 
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-1 bg-hyperion-card border-2 border-hyperion-neon-blue/50 text-hyperion-text font-mono text-xl md:text-2xl p-6 uppercase tracking-widest focus:outline-none focus:border-hyperion-neon-blue relative z-10"
            placeholder="ENTER WAYBILL ID"
          />
          <button type="submit" className="bg-hyperion-neon-blue text-black font-mono font-bold px-8 md:px-12 text-lg md:text-xl uppercase tracking-widest hover:bg-hyperion-text transition-colors flex items-center justify-center gap-4 relative z-10">
            {isSearching ? <span className="animate-pulse">Scanning...</span> : <><Search className="w-6 h-6" /> Track</>}
          </button>
        </form>
      </section>

      <section className={`transition-opacity duration-1000 ${isSearching ? 'opacity-20' : 'opacity-100'}`}>
        <div className="border border-hyperion-border bg-hyperion-card p-8 relative overflow-hidden">
          {/* Radar background effect */}
          <div className="absolute top-1/2 left-[50px] -translate-y-1/2 w-96 h-96 border border-hyperion-neon-blue/20 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-[50px] -translate-y-1/2 w-64 h-64 border border-hyperion-neon-blue/10 rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-hyperion-border pb-6 mb-12 gap-6 relative z-10">
            <div>
              <span className="text-hyperion-neon-orange font-mono text-sm tracking-widest uppercase block mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-hyperion-neon-orange animate-pulse" />
                Active Waybill
              </span>
              <h2 className="text-4xl font-mono font-bold text-hyperion-text">{trackingNumber}</h2>
            </div>
            <div className="text-left md:text-right">
              <span className="text-hyperion-muted font-mono text-sm tracking-widest uppercase block mb-2">Status</span>
              <span className="text-hyperion-neon-blue font-mono text-2xl uppercase font-bold animate-pulse block">In Transit</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-hyperion-border" />
            <div className="space-y-12 relative">
              {steps.map((step, i) => (
                <div key={i} className={`flex gap-8 items-start group ${step.completed ? 'opacity-100' : 'opacity-40 hover:opacity-70 transition-opacity'}`}>
                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center bg-hyperion-card shrink-0 transition-all duration-500 relative
                    ${step.current ? 'border-hyperion-neon-blue text-hyperion-neon-blue shadow-[0_0_15px_var(--color-hyperion-neon-blue)]' : 
                      step.completed ? 'border-hyperion-neon-orange text-hyperion-neon-orange' : 'border-hyperion-border text-hyperion-muted'}`}>
                    {step.current && (
                      <div className="absolute inset-0 rounded-full border border-hyperion-neon-blue animate-ping opacity-20" />
                    )}
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className={`text-xl font-mono font-bold uppercase mb-2 transition-colors
                      ${step.current ? 'text-hyperion-neon-blue' : 'text-hyperion-text'}`}>
                      {step.status}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-md">
                      <div className="flex items-center gap-2 text-hyperion-muted font-mono text-sm">
                        <MapPin className="w-4 h-4 text-hyperion-neon-orange" /> {step.location}
                      </div>
                      <div className="flex items-center gap-2 text-hyperion-muted font-mono text-sm">
                        <Clock className="w-4 h-4 text-hyperion-neon-blue" /> {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
