"use client";
import { useState } from "react";

export default function CommunitySection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="community"
      style={{
        position: "relative",
        padding: "var(--section-py) 0",
        overflow: "hidden",
      }}
    >
      {/* Background decorative element */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 120, 58, 0.06) 0%, transparent 70%),
            var(--color-bg-primary)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Large decorative text */}
      <div
        className="font-serif"
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(6rem, 18vw, 18rem)",
          fontWeight: 900,
          color: "rgba(240, 235, 227, 0.02)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        Together
      </div>

      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div className="accent-line" style={{ display: "block" }} />
          </div>
          <p className="section-label" style={{ textAlign: "center" }}>
            Join the Community
          </p>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            You Were Made
            <br />
            for{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              More.
            </em>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              marginBottom: "3rem",
              maxWidth: "520px",
              margin: "0 auto 3rem",
            }}
          >
            Join thousands of people choosing to live intentionally. Get weekly
            stories, curated resources, and early access to new podcast episodes —
            straight to your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  maxWidth: "480px",
                  margin: "0 auto",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="input-field"
                  style={{ flex: "1 1 220px" }}
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                  Join Free
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  marginTop: "1rem",
                  letterSpacing: "0.04em",
                }}
              >
                No spam. Unsubscribe anytime. We protect your privacy.
              </p>
            </form>
          ) : (
            <div
              style={{
                maxWidth: "480px",
                margin: "0 auto",
                padding: "2rem",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border-accent)",
                borderRadius: "4px",
                animation: "fadeInUp 0.5s ease",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                🎉
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Welcome to Separate Culture!
              </h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                Check your inbox — your first letter is on its way.
              </p>
            </div>
          )}

          {/* Social proof */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "3rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--color-border)",
              flexWrap: "wrap",
            }}
          >
            {/* Avatar stack */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: `hsl(${i * 60}, 35%, 25%)`,
                    border: "2px solid var(--color-bg-primary)",
                    marginLeft: i > 1 ? "-8px" : "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                    fontWeight: 600,
                  }}
                >
                  {["K", "M", "J", "A", "L"][i - 1]}
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Join{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>
                10,000+
              </strong>{" "}
              intentional people already inside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
