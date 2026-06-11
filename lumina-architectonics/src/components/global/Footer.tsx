import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-10 border-t border-[var(--color-border)] bg-background text-foreground z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <Link href="/" className="font-serif text-2xl tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors duration-300">
            Lumina
          </Link>
          <p className="text-sm text-[var(--color-muted-foreground)] font-sans">
            &copy; {new Date().getFullYear()} Lumina Architectonics. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-[var(--color-muted-foreground)] font-sans uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
