import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16 md:py-24 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4 cursor-none hover:opacity-80 transition-opacity duration-300">
            <span className="text-4xl md:text-5xl font-serif tracking-tight leading-none uppercase">
              Vanguard
            </span>
          </Link>
          <p className="text-background/70 font-sans text-sm tracking-wider uppercase text-center md:text-left">
            Curated Editorial Fashion
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <div className="flex gap-8 mb-4">
            <Link href="/about" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-primary transition-colors duration-300 cursor-none">
              About
            </Link>
            <Link href="/archive" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-primary transition-colors duration-300 cursor-none">
              Archive
            </Link>
            <Link href="/contact" className="text-xs uppercase tracking-[0.2em] font-sans hover:text-primary transition-colors duration-300 cursor-none">
              Contact
            </Link>
          </div>
          <p className="text-background/50 text-xs font-sans tracking-widest">
            &copy; {currentYear} VANGUARD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/privacy" className="text-background/50 hover:text-background text-[10px] uppercase tracking-widest transition-colors cursor-none">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/50 hover:text-background text-[10px] uppercase tracking-widest transition-colors cursor-none">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
