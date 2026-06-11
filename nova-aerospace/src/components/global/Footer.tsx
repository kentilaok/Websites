import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-na-atmosphere/20 bg-na-void py-12 px-8 overflow-hidden z-20">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="font-orbitron font-bold text-2xl tracking-[0.3em] text-white">
            NOVA<span className="text-na-nebula">/</span>AERO
          </Link>
          <p className="text-white/40 text-sm max-w-sm text-center md:text-left">
            Pioneering the future of commercial spaceflight. To the stars, in unparalleled luxury.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex gap-16 text-center md:text-left">
          <div className="flex flex-col space-y-3">
            <h4 className="font-orbitron text-xs tracking-[0.2em] text-na-atmosphere uppercase mb-2">Vessel</h4>
            <Link href="/vessel" className="text-sm text-white/60 hover:text-white transition-colors">Specifications</Link>
            <Link href="/vessel#amenities" className="text-sm text-white/60 hover:text-white transition-colors">Amenities</Link>
            <Link href="/vessel#safety" className="text-sm text-white/60 hover:text-white transition-colors">Safety Protocols</Link>
          </div>
          
          <div className="flex flex-col space-y-3">
            <h4 className="font-orbitron text-xs tracking-[0.2em] text-na-atmosphere uppercase mb-2">Voyages</h4>
            <Link href="/destinations#lunar" className="text-sm text-white/60 hover:text-white transition-colors">Lunar Orbit</Link>
            <Link href="/destinations#mars" className="text-sm text-white/60 hover:text-white transition-colors">Mars Transit</Link>
            <Link href="/launch" className="text-sm text-white/60 hover:text-white transition-colors">Launch Schedule</Link>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-xs text-white/40 font-mono">
          &copy; {currentYear} NOVA AEROSPACE CORPORATION. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</Link>
          <Link href="/terms" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-wider">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
