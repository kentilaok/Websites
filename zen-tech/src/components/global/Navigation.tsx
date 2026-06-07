import Link from "next/link";

export default function Navigation() {
  return (
    <>
      {/* Absolute Minimal Top Logo */}
      <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none mix-blend-difference">
        <Link href="/" className="pointer-events-auto cursor-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        </Link>
      </div>

      {/* Bottom Taskbar */}
      <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <nav className="flex gap-2 p-2 bg-pure-white/80 backdrop-blur-xl border border-carbon/5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] pointer-events-auto">
          {[
            { path: "/products", label: "Products" },
            { path: "/engineering", label: "Engineering" },
            { path: "/support", label: "Support" },
          ].map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="cursor-none px-6 py-3 text-xs uppercase tracking-widest text-titanium hover:text-carbon hover:bg-carbon/5 rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
