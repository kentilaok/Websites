import Link from "next/link";
import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-hyperion-border bg-hyperion-bg pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <Activity className="w-6 h-6 text-hyperion-neon-orange group-hover:text-hyperion-neon-blue transition-colors duration-300" />
              <span className="text-xl font-bold font-mono tracking-wider uppercase text-hyperion-text">
                HYPERION<span className="text-hyperion-neon-blue">_LOGISTICS</span>
              </span>
            </Link>
            <p className="text-hyperion-muted font-mono text-sm max-w-md">
              Advanced global freight and supply chain tracking solutions for the modern world. Moving cargo at the speed of light.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-hyperion-text font-bold mb-6 uppercase tracking-widest text-sm">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">About Us</Link></li>
              <li><Link href="/fleet" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Our Fleet</Link></li>
              <li><Link href="/careers" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Careers</Link></li>
              <li><Link href="/contact" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-hyperion-text font-bold mb-6 uppercase tracking-widest text-sm">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Terms of Service</Link></li>
              <li><Link href="/compliance" className="font-mono text-sm text-hyperion-muted hover:text-hyperion-neon-blue transition-colors duration-300">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-hyperion-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-hyperion-muted">
            &copy; {new Date().getFullYear()} HYPERION LOGISTICS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs font-mono text-hyperion-muted uppercase">SYS_STATUS: <span className="text-hyperion-neon-blue">ONLINE</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
