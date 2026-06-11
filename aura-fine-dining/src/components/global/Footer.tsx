import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-night)] text-[var(--color-warm-bone)] py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter leading-none italic">
          Aura.
        </h2>
        <p className="text-sm font-sans opacity-70 max-w-xs">
          An elegant, highly tactile culinary experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.2em] font-sans opacity-50 mb-2">Location</h3>
          <p className="text-sm font-sans opacity-80">
            123 Culinary Way<br />
            New York, NY 10001
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.2em] font-sans opacity-50 mb-2">Contact</h3>
          <p className="text-sm font-sans opacity-80">
            reservations@aura.com<br />
            +1 (212) 555-0199
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-[0.2em] font-sans opacity-50 mb-2">Legal</h3>
          <Link href="#" className="text-sm font-sans opacity-80 hover:opacity-100 hover:text-[var(--color-terracotta)] transition-colors duration-300 cursor-none">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-sans opacity-80 hover:opacity-100 hover:text-[var(--color-terracotta)] transition-colors duration-300 cursor-none">
            Terms of Service
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-[var(--color-warm-bone)]/20 mt-8 mb-4 md:hidden"></div>
      
      <div className="text-xs font-sans opacity-50 w-full md:w-auto text-center md:text-left mt-8 md:mt-0">
        &copy; {new Date().getFullYear()} Aura Fine Dining. All rights reserved.
      </div>
    </footer>
  );
}
