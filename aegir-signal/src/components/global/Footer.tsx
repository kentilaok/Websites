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
      <div
        className="footer-bottom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--color-line)",
          color: "var(--color-muted)",
          fontSize: "0.875rem",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div
          className="footer-legal-links"
          style={{ display: "flex", gap: "1.5rem" }}
        >
          <Link
            href="/privacy"
            style={{ color: "var(--color-muted)", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            style={{ color: "var(--color-muted)", textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
