"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Stories", href: "#stories" },
  { label: "Resources", href: "#resources" },
  { label: "Podcast", href: "#podcast" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        background: scrolled
          ? "rgba(14, 13, 11, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(240,235,227,0.06)"
          : "1px solid transparent",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.1,
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "0.02em",
            }}
          >
            Separate
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginTop: "1px",
            }}
          >
            Culture
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-secondary)",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
          <a href="#community" className="btn-primary" style={{ padding: "0.625rem 1.375rem", fontSize: "0.75rem" }}>
            Join Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text-primary)",
          }}
          aria-label="Toggle menu"
          className="hamburger-btn"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(14, 13, 11, 0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-secondary)",
                transition: "color 0.25s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#community"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ alignSelf: "flex-start" }}
          >
            Join Us
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
