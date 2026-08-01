"use client";

const episodes = [
  {
    ep: "052",
    title: "Choosing Simplicity in a Complicated World",
    guest: "Solo Episode",
    duration: "38 min",
    description:
      "What does it actually look like to slow down, strip back, and build a life around what matters? A conversation with yourself.",
  },
  {
    ep: "051",
    title: "The Cost of Conformity (and the Gift of Being Different)",
    guest: "Solo Episode",
    duration: "44 min",
    description:
      "On the quiet pressure to fit in, and why your difference isn't a problem to solve but a gift to steward.",
  },
  {
    ep: "050",
    title: "Creativity as Worship: Making Things That Honor God",
    guest: "with Jordan Lee Dooley",
    duration: "52 min",
    description:
      "A rich conversation on the theology of creativity, why making things matters, and what it means to create as an act of devotion.",
  },
  {
    ep: "049",
    title: "Rest is Not a Reward",
    guest: "Solo Episode",
    duration: "29 min",
    description:
      "We've been conditioned to earn our rest. What if rest was something you were designed for — not something you had to deserve?",
  },
];

export default function PodcastSection() {
  return (
    <section id="podcast" className="section-padding">
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — Section intro */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <div className="accent-line" />
            <p className="section-label">The Podcast</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Conversations
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-accent)",
                  fontWeight: 600,
                }}
              >
                Worth Having.
              </em>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Weekly conversations on faith, creativity, intentional living, and
              what it means to build a life that feels true. New episodes every
              Tuesday.
            </p>

            {/* Listen on badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
              {["Apple Podcasts", "Spotify", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "2px",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "var(--color-text-secondary)",
                    transition: "border-color 0.25s, color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-accent)";
                    el.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-text-secondary)";
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4.5 4L8 6L4.5 8V4Z" fill="currentColor"/>
                  </svg>
                  {platform}
                </a>
              ))}
            </div>

            <a href="#" className="btn-secondary" style={{ alignSelf: "flex-start" }}>
              All Episodes
            </a>
          </div>

          {/* Right — Episode list */}
          <div>
            {episodes.map((ep, i) => (
              <div
                key={ep.ep}
                className="podcast-ep"
                style={{ transition: "all 0.25s ease" }}
              >
                {/* Ep number */}
                <div
                  className="ep-num font-serif"
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    minWidth: "36px",
                    paddingTop: "0.2rem",
                    transition: "color 0.25s ease",
                  }}
                >
                  {ep.ep}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                      }}
                    >
                      {ep.guest}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {ep.duration}
                    </span>
                  </div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {ep.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {ep.description}
                  </p>
                </div>

                {/* Play button */}
                <div style={{ paddingTop: "0.2rem" }}>
                  <button
                    style={{
                      width: "36px",
                      height: "36px",
                      minWidth: "36px",
                      background: "transparent",
                      border: "1px solid var(--color-border)",
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-text-muted)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget;
                      btn.style.background = "var(--color-accent)";
                      btn.style.borderColor = "var(--color-accent)";
                      btn.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget;
                      btn.style.background = "transparent";
                      btn.style.borderColor = "var(--color-border)";
                      btn.style.color = "var(--color-text-muted)";
                    }}
                    aria-label={`Play episode ${ep.ep}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 2L10 6L3 10V2Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
