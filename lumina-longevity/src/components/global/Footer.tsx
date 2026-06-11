import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-6 mt-20 border-t border-white/60 bg-white/20 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-ll-blue-glow shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
          <span className="font-bold text-lg text-ll-slate">LUMINA</span>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-ll-slate/70">
          <Link href="/privacy" className="hover:text-ll-blue-glow transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ll-blue-glow transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-ll-blue-glow transition-colors">Contact</Link>
        </div>
        
        <div className="text-sm text-ll-slate/60">
          &copy; {currentYear} Lumina Longevity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
