
"use client";

import { useState } from "react";

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
        <a href="/contact">
          Connect with our team <span>↗</span>
        </a>
      </div>

      <div className="header-inner">
        <a
          href="/"
          className="brand"
          aria-label="Remain In My Love home"
        >
          <img
            src="/assets/images/logo.png"
            alt="Remain In My Love Inc."
            className="brand-logo"
          />
        </a>

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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="donate-button"
            href="/donate"
            onClick={() => setMenuOpen(false)}
          >
            Donate <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
