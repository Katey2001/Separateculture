"use client";

const words = [
  "Faith",
  "·",
  "Authenticity",
  "·",
  "Creativity",
  "·",
  "Intentional Living",
  "·",
  "Community",
  "·",
  "Separate Culture",
  "·",
  "Stories",
  "·",
  "Purpose",
  "·",
  "Growth",
  "·",
  "Faith",
  "·",
  "Authenticity",
  "·",
  "Creativity",
  "·",
  "Intentional Living",
  "·",
  "Community",
  "·",
  "Separate Culture",
  "·",
  "Stories",
  "·",
  "Purpose",
  "·",
  "Growth",
  "·",
];

export default function MarqueeBand() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg-secondary)",
        overflow: "hidden",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="marquee-track">
          {words.map((word, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                padding: "0 1.25rem",
                fontSize: "0.75rem",
                fontWeight: word === "·" ? 400 : 600,
                letterSpacing: word === "·" ? "0" : "0.18em",
                textTransform: "uppercase",
                color: word === "·" ? "var(--color-accent)" : "var(--color-text-secondary)",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
