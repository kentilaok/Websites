import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-carbon/5 bg-pure-white text-titanium mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Zen-Tech. All rights reserved.
          </p>
        </div>
        
        <nav className="flex gap-8 text-xs tracking-widest uppercase">
          <Link href="/privacy" className="hover:text-carbon transition-colors cursor-none">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-carbon transition-colors cursor-none">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
