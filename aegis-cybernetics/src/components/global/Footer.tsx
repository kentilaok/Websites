import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-[var(--color-aegis-dark-grey)] bg-[var(--color-aegis-black)] relative z-[10] mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-glitch text-white brutal-clip px-4 py-2 bg-[var(--color-aegis-dark-grey)] border-l-4 border-[var(--color-aegis-neon-red)] inline-block w-max">
            AEGIS_CYBER
          </span>
          <p className="text-[var(--color-aegis-light-grey)] text-sm font-mono mt-4">
            // DEFENDING THE DIGITAL FRONTIER
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold tracking-widest text-sm uppercase border-b border-[var(--color-aegis-dark-grey)] pb-2 mb-2">
              SYSTEM_LINKS
            </h3>
            <Link href="/privacy" className="text-[var(--color-aegis-light-grey)] text-sm hover:text-[var(--color-aegis-neon-red)] transition-colors">
              // PRIVACY_POLICY
            </Link>
            <Link href="/terms" className="text-[var(--color-aegis-light-grey)] text-sm hover:text-[var(--color-aegis-neon-red)] transition-colors">
              // TERMS_OF_SERVICE
            </Link>
            <Link href="/contact" className="text-[var(--color-aegis-light-grey)] text-sm hover:text-[var(--color-aegis-neon-red)] transition-colors">
              // SECURE_COMM
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-[var(--color-aegis-dark-grey)]/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--color-aegis-light-grey)] text-xs font-mono">
          © {currentYear} AEGIS CYBERNETICS. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[var(--color-aegis-dark-grey)] text-xs font-mono">
          SYS_VER_0.1.0 // ONLINE
        </p>
      </div>
    </footer>
  );
}
