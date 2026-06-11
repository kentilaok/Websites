"use client";

import { TextReveal } from "@/components/ui/TextReveal";
import { ArrowUpRight, Calendar, MapPin, Rocket, Navigation } from "lucide-react";

const launches = [
  {
    id: "VNG-101",
    name: "Aurora Excursion",
    date: "March 15, 2027",
    orbitType: "Polar Orbit",
    payload: "Passenger / Observation Module",
    description: "A spectacular journey over the Earth's poles to witness the aurora borealis from above the atmosphere. Experience continuous daylight and stunning atmospheric phenomena.",
    status: "Booking Fast",
  },
  {
    id: "VNG-102",
    name: "Equatorial Express",
    date: "April 02, 2027",
    orbitType: "Low Earth Orbit (LEO)",
    payload: "Passenger / Microgravity Lab",
    description: "Our classic orbital experience. 48 hours of weightlessness while completing an orbit around the Earth every 90 minutes. Perfect for first-time space travelers.",
    status: "Available",
  },
  {
    id: "VNG-103",
    name: "Lunar Horizon",
    date: "June 20, 2027",
    orbitType: "High Earth Orbit (HEO)",
    payload: "Deep Space Passenger Module",
    description: "Pushing further than our standard LEO flights, this mission takes you to an apogee of 2,000km, providing an unmatched, unbroken view of the entire Earth sphere.",
    status: "Waitlist Only",
  },
  {
    id: "VNG-104",
    name: "Habitat Transfer Alpha",
    date: "August 10, 2027",
    orbitType: "Orbital Rendezvous",
    payload: "Passenger / Cargo Resupply",
    description: "Journey to our flagship orbital habitat, Vanguard Prime. Includes docking procedures and an optional 3-day stay aboard the station before returning to Earth.",
    status: "Available",
  },
  {
    id: "VNG-105",
    name: "Starlight Observation",
    date: "October 05, 2027",
    orbitType: "Sun-Synchronous Orbit",
    payload: "Astronomical Passenger Module",
    description: "Designed for astronomy enthusiasts. The spacecraft maintains an orientation that avoids Earth's glare, offering pristine, unobstructed views of deep space.",
    status: "Available",
  },
  {
    id: "VNG-106",
    name: "Zero-G Research",
    date: "November 18, 2027",
    orbitType: "Low Earth Orbit (LEO)",
    payload: "Scientific & Passenger Charter",
    description: "A specialized 7-day mission catering to researchers and long-duration spaceflight enthusiasts. Fully equipped with modular microgravity testing bays.",
    status: "Booking Now",
  }
];

export default function OrbitalFlights() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#05050a]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <TextReveal>
          <div className="flex items-center gap-4 mb-4 text-[#9b51e0]">
            <Rocket className="w-8 h-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Orbital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d194ff] to-[#9b51e0]">Flights</span></h1>
          </div>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            Review our manifest of upcoming commercial launches. Select your mission profile, prepare for training, and secure your place in the cosmos.
          </p>
        </TextReveal>
      </section>

      {/* Launches Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {launches.map((launch, index) => (
            <TextReveal key={launch.id} delay={index * 0.1} className="h-full">
              <div className="group relative bg-[#0a0a14] border border-white/10 rounded-2xl p-8 hover:border-[#9b51e0]/50 transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9b51e0]/5 rounded-full blur-3xl group-hover:bg-[#9b51e0]/20 transition-colors" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-tech text-xs text-[#d194ff] tracking-widest uppercase mb-2 block">
                      Mission {launch.id}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{launch.name}</h3>
                  </div>
                  <span className={`text-xs font-tech px-3 py-1 rounded-full border ${
                    launch.status === 'Available' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                    launch.status === 'Waitlist Only' ? 'border-orange-500/30 text-orange-400 bg-orange-500/10' :
                    'border-[#9b51e0]/30 text-[#d194ff] bg-[#9b51e0]/10'
                  }`}>
                    {launch.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center gap-3 text-white/60">
                    <Calendar className="w-5 h-5 text-[#9b51e0]" />
                    <span>{launch.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Navigation className="w-5 h-5 text-[#9b51e0]" />
                    <span>{launch.orbitType}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <MapPin className="w-5 h-5 text-[#9b51e0]" />
                    <span>{launch.payload}</span>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {launch.description}
                </p>

                <button className="mt-auto w-full py-4 border border-white/10 rounded-xl flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 font-semibold">
                  View Mission Details
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <TextReveal>
          <div className="bg-gradient-to-r from-[#0a0a14] to-[#120a1f] border border-[#9b51e0]/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Need Custom Accommodations?</h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                We offer private charters for scientific organizations, film productions, and exclusive group experiences. Contact our mission planning team to design your bespoke orbital trajectory.
              </p>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-colors">
                Contact Mission Control
              </button>
            </div>
          </div>
        </TextReveal>
      </section>
    </div>
  );
}
