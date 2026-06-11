import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-data";

export default function Footer() {
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
      <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted)]">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[var(--color-fg)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[var(--color-fg)] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
