import Link from "next/link";
import { Anchor, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-bio-cyan/20 bg-black/50 glass-panel relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Anchor className="text-bio-cyan group-hover:text-bio-green transition-colors duration-300" size={24} />
              <span className="text-lg font-bold tracking-widest text-glow-cyan uppercase text-white">
                Abyss Oceanics
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Pioneering the next frontier in deep-sea exploration and research. Uncovering the mysteries of the abyss.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white uppercase tracking-wider font-semibold mb-4 text-sm">Exploration</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/submersibles" className="hover:text-bio-cyan transition-colors">Submersibles</Link></li>
              <li><Link href="/expeditions" className="hover:text-bio-cyan transition-colors">Expeditions</Link></li>
              <li><Link href="/research" className="hover:text-bio-cyan transition-colors">Research</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white uppercase tracking-wider font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-bio-cyan transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-bio-cyan transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-bio-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white uppercase tracking-wider font-semibold mb-4 text-sm">Connect</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-bio-cyan transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-bio-cyan transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-bio-cyan transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-bio-cyan/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Abyss Oceanics. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-bio-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bio-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
