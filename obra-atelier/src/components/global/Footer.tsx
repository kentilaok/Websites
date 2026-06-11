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
      <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", fontSize: "0.875rem", opacity: 0.8 }}>
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
