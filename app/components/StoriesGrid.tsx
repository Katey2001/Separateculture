"use client";

const stories = [
  {
    id: 1,
    category: "Faith",
    title: "When Silence Becomes Sacred",
    excerpt:
      "Learning to hear God's voice in a world engineered for distraction. The discipline of stillness as a revolutionary act.",
    author: "Katey M.",
    date: "July 2026",
    readTime: "6 min",
    accent: "#C8783A",
  },
  {
    id: 2,
    category: "Authenticity",
    title: "Unlearning the Performance of Perfection",
    excerpt:
      "Why showing up exactly as you are — flawed, in-process, becoming — is more powerful than any curated version of yourself.",
    author: "Katey M.",
    date: "June 2026",
    readTime: "8 min",
    accent: "#9E7A5A",
  },
  {
    id: 3,
    category: "Creativity",
    title: "Making Things That Matter",
    excerpt:
      "On the spiritual dimension of creative work, and why creating from a place of purpose changes everything about how — and why — you make.",
    author: "Katey M.",
    date: "May 2026",
    readTime: "5 min",
    accent: "#6E8C7A",
  },
  {
    id: 4,
    category: "Intentional Living",
    title: "Designing a Life That Looks Like You",
    excerpt:
      "The daily choices — small, unremarkable, consistent — that together shape a life aligned with what you actually believe.",
    author: "Katey M.",
    date: "April 2026",
    readTime: "7 min",
    accent: "#7A6E9E",
  },
  {
    id: 5,
    category: "Community",
    title: "The People Who Shape You",
    excerpt:
      "Real community is never accidental. Reflections on surrounding yourself with people who pull you toward your truest self.",
    author: "Katey M.",
    date: "March 2026",
    readTime: "9 min",
    accent: "#9E5A6A",
  },
  {
    id: 6,
    category: "Growth",
    title: "Seasons of Becoming",
    excerpt:
      "Not every season is a harvest. Some are preparation. Learning to honor the slow, hidden work happening beneath the surface.",
    author: "Katey M.",
    date: "February 2026",
    readTime: "6 min",
    accent: "#5A7A8C",
  },
];

export default function StoriesGrid() {
  return (
    <section id="stories" className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div className="accent-line" />
            <p className="section-label">Featured Stories</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Words That Move You
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--color-text-secondary)" }}>
                Forward.
              </em>
            </h2>
          </div>

          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "gap 0.25s ease",
              paddingBottom: "0.5rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "0.875rem";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "0.5rem";
            }}
          >
            All Stories
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Featured large card (first story) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Large featured card */}
          <article
            className="card"
            style={{
              gridColumn: "span 2",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "360px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--color-border-accent)";
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--color-border)";
              el.style.transform = "none";
              el.style.boxShadow = "none";
            }}
          >
            {/* Color block left */}
            <div
              style={{
                background: `linear-gradient(135deg, ${stories[0].accent}22 0%, ${stories[0].accent}44 100%)`,
                display: "flex",
                alignItems: "flex-end",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30%",
                  right: "-20%",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${stories[0].accent}33, transparent 70%)`,
                }}
              />
              <span
                className="font-serif"
                style={{
                  fontSize: "7rem",
                  fontWeight: 900,
                  color: `${stories[0].accent}22`,
                  lineHeight: 1,
                  position: "absolute",
                  bottom: "-1rem",
                  left: "1rem",
                  userSelect: "none",
                }}
              >
                01
              </span>
              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    display: "inline-block",
                    background: stories[0].accent,
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "1px",
                  }}
                >
                  Featured
                </span>
              </div>
            </div>

            {/* Content right */}
            <div
              style={{
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className="section-label" style={{ color: stories[0].accent }}>
                  {stories[0].category}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.625rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stories[0].title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {stories[0].excerpt}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-text-primary)", fontWeight: 500 }}>
                    {stories[0].author}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.125rem" }}>
                    {stories[0].date} · {stories[0].readTime} read
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: stories[0].accent,
                  }}
                >
                  Read →
                </span>
              </div>
            </div>
          </article>

          {/* Regular story cards */}
          {stories.slice(1).map((story, index) => (
            <article
              key={story.id}
              className="card"
              style={{
                padding: "1.875rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "240px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    className="section-label"
                    style={{ marginBottom: 0, color: story.accent }}
                  >
                    {story.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {story.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {story.excerpt}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                  {story.date} · {story.readTime} read
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: story.accent,
                  }}
                >
                  Read →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
