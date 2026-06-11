import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-shell" data-reveal>
      <div className="footer-grid">
        <div>
          <p className="eyebrow">{site.industry}</p>
          <h2>{site.name}</h2>
          <p>{site.pages.home.finalCta}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {site.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <p>{site.address}</p>
          <a href={"mailto:" + site.email}>{site.email}</a>
          <a href={"tel:" + site.phone.replace(/[^+\d]/g, "")}>{site.phone}</a>
        </div>
      </div>
      <div className="footer-bottom mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
