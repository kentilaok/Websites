import Link from "next/link";
import { Mountain } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-terrain border-t border-snow/10 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 text-snow hover:text-moss-400 transition-colors">
            <Mountain size={28} strokeWidth={1.5} />
            <span className="font-display uppercase tracking-widest text-lg font-bold">Apex Expeditions</span>
          </Link>
          <p className="text-slate-400 text-sm text-center md:text-left max-w-sm">
            Exclusive, elite mountaineering expeditions to the world's most formidable peaks.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-slate-400">
          <Link href="/about" className="hover:text-snow transition-colors">About</Link>
          <Link href="/destinations" className="hover:text-snow transition-colors">Destinations</Link>
          <Link href="/contact" className="hover:text-snow transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-snow transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-snow transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-snow/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {currentYear} Apex Expeditions. All rights reserved.</p>
        <p>Designed for the ultimate ascent.</p>
      </div>
    </footer>
  );
}
