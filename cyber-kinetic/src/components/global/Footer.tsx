import Link from "next/link";

const footerLinks = [
  { path: "/privacy", label: "PRIVACY_POLICY" },
  { path: "/terms", label: "TERMS_OF_SERVICE" },
  { path: "/contact", label: "CONTACT" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-matrix-green/30 bg-cyber-black p-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono tracking-widest text-matrix-green/70">
        
        <div className="flex gap-4 items-center">
          <div className="w-1.5 h-1.5 bg-matrix-green rounded-full opacity-50" />
          <span className="hover:text-matrix-green transition-colors">
            © {currentYear} CYBER_KINETIC_CORP
          </span>
          <span className="opacity-50">:: ALL_RIGHTS_RESERVED</span>
        </div>

        <nav className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {footerLinks.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="cursor-none hover:text-white hover:bg-matrix-green/10 px-2 py-1 transition-all"
            >
              [{item.label}]
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="opacity-50">STATUS:</span>
          <span className="text-matrix-green">OPTIMAL</span>
        </div>

      </div>
    </footer>
  );
}
