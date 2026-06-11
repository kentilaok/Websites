import Link from "next/link";
import { Orbit, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-[#9b51e0]/20 py-12 px-6 md:px-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Orbit className="w-6 h-6 text-[#d194ff] group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-tech text-lg tracking-widest uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9b51e0]">
              Vanguard
            </span>
          </Link>
          <p className="text-white/50 text-sm max-w-xs text-center md:text-left">
            Pioneering the future of commercial space travel and orbital habitats.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-white/60 hover:text-[#d194ff] text-sm transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-white/60 hover:text-[#d194ff] text-sm transition-colors">Terms of Service</Link>
          <Link href="/contact" className="text-white/60 hover:text-[#d194ff] text-sm transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-white/50 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-white/50 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-white/50 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-xs font-sans">
          &copy; {currentYear} Vanguard Aerospace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
