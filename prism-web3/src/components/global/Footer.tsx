import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 border-t border-stark-white/10 bg-void-black relative z-10 pointer-events-auto mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="cursor-none">
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-indigo">
              PRISM
            </span>
          </Link>
          <p className="text-stark-white/50 text-xs font-mono uppercase tracking-widest">
            The Elusive Web3 Infrastructure
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 items-center">
          <Link
            href="/privacy"
            className="text-xs font-mono uppercase tracking-widest text-stark-white/50 hover:text-stark-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs font-mono uppercase tracking-widest text-stark-white/50 hover:text-stark-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
          >
            Terms
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-widest text-stark-white/50 hover:text-stark-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 cursor-none"
          >
            Twitter
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-stark-white/30 uppercase tracking-widest text-center md:text-right">
          &copy; {currentYear} Prism Web3. <br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
