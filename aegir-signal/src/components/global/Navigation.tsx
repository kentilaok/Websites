"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = site.navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={isActive(pathname, link.href) ? "is-active" : ""}
      onClick={() => setOpen(false)}
    >
      <span>{link.label}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </Link>
  ));

  if ((site.navStyle as string) === "dock") {
    return (
      <>
        <header className="site-nav nav-dock-brand" data-reveal>
          <Link href="/" className="brand-lockup" aria-label={site.name}>
            <span>{site.shortName}</span>
            <small>{site.industry}</small>
          </Link>
          <button
            className="mobile-nav-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </header>
        <nav className="dock-nav" aria-label="Primary navigation">
          {links}
        </nav>
        <MobileMenu open={open} links={links} />
      </>
    );
  }

  if ((site.navStyle as string) === "command") {
    return (
      <>
        <header className="site-nav command-nav" data-reveal>
          <Link href="/" className="brand-lockup command-brand" aria-label={site.name}>
            <span>{site.shortName}</span>
            <small>secure line open</small>
          </Link>
          <nav aria-label="Primary navigation">{links}</nav>
          <Link href="/contact" className="nav-cta">
            Open brief
          </Link>
          <button
            className="mobile-nav-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </header>
        <MobileMenu open={open} links={links} />
      </>
    );
  }

  if ((site.navStyle as string) === "compass") {
    return (
      <>
        <header className="site-nav compass-nav" data-reveal>
          <Link href="/" className="brand-lockup compass-brand" aria-label={site.name}>
            <span className="compass-symbol" aria-hidden="true" />
            <span>{site.shortName}</span>
          </Link>
          <nav aria-label="Primary navigation">{links}</nav>
          <Link href="/contact" className="nav-cta">
            Plan route
          </Link>
          <button
            className="mobile-nav-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </header>
        <MobileMenu open={open} links={links} />
      </>
    );
  }

  if ((site.navStyle as string) === "clinical") {
    return (
      <>
        <header className="site-nav clinical-nav" data-reveal>
          <Link href="/" className="brand-lockup" aria-label={site.name}>
            <span>{site.shortName}</span>
            <small>{site.availability}</small>
          </Link>
          <nav aria-label="Primary navigation">{links}</nav>
          <Link href="/contact" className="nav-cta">
            Book consult
          </Link>
          <button
            className="mobile-nav-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </header>
        <MobileMenu open={open} links={links} />
      </>
    );
  }

  return (
    <>
      <header className="site-nav masthead-nav" data-reveal>
        <Link href="/" className="brand-lockup masthead-brand" aria-label={site.name}>
          <span>{site.shortName}</span>
          <small>{site.availability}</small>
        </Link>
        <nav aria-label="Primary navigation">{links}</nav>
        <Link href="/contact" className="nav-cta">
          Reserve
        </Link>
        <button
          className="mobile-nav-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span>Menu</span>
        </button>
      </header>
      <MobileMenu open={open} links={links} />
    </>
  );
}

function MobileMenu({
  open,
  links,
}: {
  open: boolean;
  links: React.ReactNode;
}) {
  return (
    <div id="mobile-menu" className={open ? "mobile-menu is-open" : "mobile-menu"} aria-hidden={!open}>
      <div className="mobile-menu-panel">
        <p className="eyebrow">{site.themeName}</p>
        <nav aria-label="Mobile navigation">{links}</nav>
        <Link href="/contact" className="button-primary">
          {site.cta}
        </Link>
      </div>
    </div>
  );
}
