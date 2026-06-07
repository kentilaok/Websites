"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AlertTriangle, Crosshair, Skull, ShieldBan, RadioTower } from "lucide-react";
import TextReveal from "@/components/ui/TextReveal";

export default function ThreatMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".threat-row",
        { opacity: 0, x: 50, backgroundColor: "var(--color-aegis-neon-red)" },
        { 
          opacity: 1, 
          x: 0, 
          backgroundColor: "transparent",
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          delay: 0.5
        }
      );
      
      gsap.to(".radar-spin", {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "linear"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const threats = [
    { id: "TRT-8921", origin: "UNKNOWN_IP_PROXY", type: "DDoS Attempt", status: "NEUTRALIZED", severity: "HIGH" },
    { id: "TRT-8922", origin: "SUBNET_ALPHA", type: "Unauthorized Access", status: "BLOCKED", severity: "CRITICAL" },
    { id: "TRT-8923", origin: "EXTERNAL_NODE_7", type: "Malware Injection", status: "QUARANTINED", severity: "SEVERE" },
    { id: "TRT-8924", origin: "ROGUE_PROCESS", type: "Data Exfiltration", status: "TERMINATED", severity: "CRITICAL" },
    { id: "TRT-8925", origin: "GHOST_NETWORK", type: "Port Scan", status: "LOGGED", severity: "LOW" },
    { id: "TRT-8926", origin: "DARK_WEB_NODE", type: "Ransomware Payload", status: "ISOLATED", severity: "CRITICAL" },
    { id: "TRT-8927", origin: "INTERNAL_LAN", type: "Privilege Escalation", status: "REVOKED", severity: "HIGH" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      <header className="mb-16 flex justify-between items-end border-b-2 border-[var(--color-aegis-neon-red)] pb-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 flex items-center gap-6">
            <RadioTower className="w-16 h-16 text-[var(--color-aegis-neon-red)] radar-spin" />
            Threat_Matrix
          </h1>
          <div className="text-lg text-[var(--color-aegis-light-grey)] font-mono max-w-2xl">
            <TextReveal text="Live monitoring of hostile entities. Automated countermeasures are active. System integrity at 99.9%." />
          </div>
        </div>
        <div className="text-right font-mono text-sm hidden md:block">
          <p className="text-[var(--color-aegis-neon-red)] animate-pulse">LIVE_FEED_ACTIVE</p>
          <p className="text-[var(--color-aegis-light-grey)]">UPTIME: 9482:44:12</p>
        </div>
      </header>

      <div className="bg-[var(--color-aegis-dark-grey)] border-brutal p-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm whitespace-nowrap">
            <thead className="bg-[var(--color-aegis-black)] text-[var(--color-aegis-neon-purple)]">
              <tr>
                <th className="p-4 border-b border-[var(--color-aegis-dark-grey)]">ID</th>
                <th className="p-4 border-b border-[var(--color-aegis-dark-grey)]">ORIGIN</th>
                <th className="p-4 border-b border-[var(--color-aegis-dark-grey)]">TYPE</th>
                <th className="p-4 border-b border-[var(--color-aegis-dark-grey)]">SEVERITY</th>
                <th className="p-4 border-b border-[var(--color-aegis-dark-grey)]">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {threats.map((threat, i) => (
                <tr key={i} className="threat-row border-b border-[var(--color-aegis-black)] hover:bg-[var(--color-aegis-black)] transition-colors">
                  <td className="p-4 text-[var(--color-aegis-glitch)]">{threat.id}</td>
                  <td className="p-4 text-[var(--color-aegis-light-grey)]">{threat.origin}</td>
                  <td className="p-4 text-white font-bold">{threat.type}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 flex items-center gap-2 w-max ${
                      threat.severity === 'CRITICAL' ? 'bg-[var(--color-aegis-neon-red)] text-white' :
                      threat.severity === 'HIGH' ? 'text-[var(--color-aegis-neon-red)] border border-[var(--color-aegis-neon-red)]' :
                      threat.severity === 'SEVERE' ? 'bg-[var(--color-aegis-neon-purple)] text-white' :
                      'text-[var(--color-aegis-light-grey)] border border-[var(--color-aegis-dark-grey)]'
                    }`}>
                      {threat.severity === 'CRITICAL' && <AlertTriangle className="w-4 h-4" />}
                      {threat.severity === 'SEVERE' && <Skull className="w-4 h-4" />}
                      {threat.severity}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-[var(--color-aegis-glitch)] flex items-center gap-2">
                      <ShieldBan className="w-4 h-4" />
                      {threat.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
