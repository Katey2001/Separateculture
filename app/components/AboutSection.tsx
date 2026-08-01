"use client";

export default function AboutSection() {
  const pillars = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08C15.71 14.72 13.5 16 11 16z" fill="currentColor"/>
        </svg>
      ),
      label: "Faith",
      description: "Rooted in belief, not performance. We create from overflow, not obligation.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1.5L3 5.5v6c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5v-6L11 1.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Authenticity",
      description: "No performance, no pretense. Only the honest, in-process, becoming version of you.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Creativity",
      description: "Made in God's image — we are, therefore, creators. Building with purpose and beauty.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left column — mission text */}
          <div>
            <div className="accent-line" />
            <p className="section-label">Our Mission</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.75rem",
              }}
            >
              We Choose to Live{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-accent)",
                  fontWeight: 600,
                }}
              >
                Differently.
              </em>
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Separate Culture is a platform for people who are done sleepwalking through life. People who want their days to mean something. Who believe that faith isn't just for Sundays, that creativity is a calling, and that authenticity is not a weakness — it's a superpower.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              This is a space for the intentional, the curious, and the brave. Welcome.
            </p>
            <a href="#community" className="btn-primary">
              Join the Community
            </a>
          </div>

          {/* Right column — pillars */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.875rem 0",
                  borderBottom:
                    i < pillars.length - 1 ? "1px solid var(--color-border)" : "none",
                  cursor: "default",
                  transition: "padding-left 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    background: "var(--color-accent-glow)",
                    border: "1px solid var(--color-border-accent)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-accent)",
                  }}
                >
                  {pillar.icon}
                </div>

                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {pillar.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
