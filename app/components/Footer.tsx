"use client";

const footerLinks = {
  Explore: [
    { label: "Stories", href: "#stories" },
    { label: "Podcast", href: "#podcast" },
    { label: "Resources", href: "#resources" },
    { label: "Community", href: "#community" },
  ],
  Platform: [
    { label: "About", href: "#" },
    { label: "Newsletter", href: "#community" },
    { label: "Contact", href: "#" },
    { label: "Write for Us", href: "#" },
  ],
  Topics: [
    { label: "Faith", href: "#" },
    { label: "Authenticity", href: "#" },
    { label: "Creativity", href: "#" },
    { label: "Intentional Living", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke="currentColor" strokeWidth="1.8"/>
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.25-5.31 1.25-5.31s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.4 3.14-5.23 0-2.15-1.45-3.77-4.08-3.77-2.97 0-4.82 2.22-4.82 4.7 0 .85.25 1.46.64 1.93.18.21.21.3.14.55-.05.17-.15.58-.2.74-.07.27-.28.37-.52.27-1.47-.6-2.16-2.22-2.16-4.03 0-2.99 2.53-6.58 7.57-6.58 4.05 0 6.72 2.94 6.72 6.1 0 4.18-2.32 7.32-5.73 7.32-1.15 0-2.23-.62-2.6-1.32l-.72 2.77c-.27 1.01-.96 2.28-1.41 3.05.88.27 1.81.41 2.77.41 5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 14.5c2.5-1 5.5-.5 7.5.5M8 11.5c3-1.2 6.5-.7 9 .5M9.5 8.5c2.8-1 5.8-.5 8 .5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: "3rem",
            padding: "4rem 0 3rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="#"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                flexDirection: "column",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  letterSpacing: "0.01em",
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
                  marginTop: "2px",
                }}
              >
                Culture
              </span>
            </a>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                maxWidth: "240px",
                marginBottom: "1.75rem",
              }}
            >
              A lifestyle platform for intentional living — stories, resources, podcast, and community.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "transparent",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-accent)";
                    el.style.color = "var(--color-accent)";
                    el.style.background = "var(--color-accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-muted)";
                    el.style.background = "transparent";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                {group}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 0",
            borderTop: "1px solid var(--color-border)",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Separate Culture. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
