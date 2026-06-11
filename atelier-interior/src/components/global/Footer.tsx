import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 md:px-12 mt-24 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-6 pointer-events-auto relative z-10">
      <div className="flex flex-col items-center md:items-start gap-2">
        <Link href="/" className="cursor-none">
          <span className="text-xl font-serif italic tracking-wide text-charcoal">Atelier.</span>
        </Link>
        <p className="text-xs font-sans text-charcoal/60 uppercase tracking-[0.2em]">
          Bespoke Interiors
        </p>
      </div>
      
      <div className="flex gap-6 md:gap-8">
        <Link href="/privacy" className="cursor-none group flex flex-col gap-1 items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500">
            Privacy
          </span>
          <span className="w-0 h-[1px] bg-muted-coral group-hover:w-full transition-all duration-500 ease-out" />
        </Link>
        <Link href="/terms" className="cursor-none group flex flex-col gap-1 items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500">
            Terms
          </span>
          <span className="w-0 h-[1px] bg-muted-coral group-hover:w-full transition-all duration-500 ease-out" />
        </Link>
        <Link href="/contact" className="cursor-none group flex flex-col gap-1 items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-sans text-charcoal/70 group-hover:text-charcoal transition-colors duration-500">
            Instagram
          </span>
          <span className="w-0 h-[1px] bg-muted-coral group-hover:w-full transition-all duration-500 ease-out" />
        </Link>
      </div>

      <div className="text-xs font-sans text-charcoal/50 uppercase tracking-[0.2em] text-center md:text-right">
        &copy; {currentYear} Atelier.
      </div>
    </footer>
  );
}
