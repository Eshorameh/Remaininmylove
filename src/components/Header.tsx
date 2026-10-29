
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Orphanage", href: "/orphanage" },
  { label: "Nigerian Team", href: "/nigerian-team" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
  { label: "Stories & Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <p>Faith. Love. Purpose.</p>
        <Link href="/contact">
          Connect with our team <span>↗</span>
        </Link>
      </div>

      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Remain In My Love home"
        >
          <img
            src="/assets/images/logo.png"
            alt="Remain In My Love Inc."
            className="brand-logo"
          />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="donate-button"
            href="/donate"
            onClick={() => setMenuOpen(false)}
          >
            Donate <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
