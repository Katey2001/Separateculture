"use client";

const resources = [
  {
    type: "Guide",
    title: "The Intentional Morning",
    description:
      "A 30-day morning framework to start each day grounded in purpose, prayer, and clarity — before the noise begins.",
    tag: "Free Download",
    accent: "#C8783A",
    icon: "☀️",
  },
  {
    type: "Workbook",
    title: "Defining Your Enough",
    description:
      "A reflective workbook for identifying your values, setting seasonal goals, and designing a life aligned with what actually matters.",
    tag: "Free Download",
    accent: "#7A6E9E",
    icon: "📖",
  },
  {
    type: "Reading List",
    title: "Books That Changed Everything",
    description:
      "Curated titles on faith, creativity, relationships, and intentional living — books we return to again and again.",
    tag: "Curated List",
    accent: "#5A7A8C",
    icon: "📚",
  },
  {
    type: "Prayer Guide",
    title: "Praying Through the Mundane",
    description:
      "Practical prayers for ordinary days — the commute, the kitchen, the hard meeting, the quiet moment before sleep.",
    tag: "Free Resource",
    accent: "#6E8C7A",
    icon: "🙏",
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        padding: "var(--section-py) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
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
            <p className="section-label">Resources</p>
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
              Tools for the
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                }}
              >
                Journey.
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
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "0.875rem";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "0.5rem";
            }}
          >
            All Resources
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Resources grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="card"
              style={{ padding: "2rem", cursor: "pointer" }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: `${resource.accent}18`,
                    border: `1px solid ${resource.accent}35`,
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.375rem",
                  }}
                >
                  {resource.icon}
                </div>

                {/* Tag badge */}
                <span
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: resource.accent,
                    background: `${resource.accent}18`,
                    border: `1px solid ${resource.accent}30`,
                    borderRadius: "1px",
                    padding: "0.25rem 0.5rem",
                  }}
                >
                  {resource.tag}
                </span>
              </div>

              {/* Type label */}
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: resource.accent,
                  marginBottom: "0.5rem",
                }}
              >
                {resource.type}
              </div>

              {/* Title */}
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.875rem",
                }}
              >
                {resource.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {resource.description}
              </p>

              {/* CTA link */}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: resource.accent,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  transition: "gap 0.25s ease",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "0.625rem";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap = "0.375rem";
                }}
              >
                Access Resource →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
