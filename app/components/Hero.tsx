"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };

    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: `
          radial-gradient(
            ellipse 60% 50% at var(--mouse-x, 70%) var(--mouse-y, 40%),
            rgba(200, 120, 58, 0.07) 0%,
            transparent 70%
          ),
          linear-gradient(
            160deg,
            #0e0d0b 0%,
            #151210 40%,
            #0e0d0b 100%
          )
        `,
      }}
    >
      {/* Background texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0ebe3' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />

      {/* Vertical accent line */}
      <div
        style={{
          position: "absolute",
          left: "clamp(1.5rem, 5vw, 6rem)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--color-accent), transparent)",
          opacity: 0.5,
        }}
      />

      {/* Issue number / date — editorial detail */}
      <div
        style={{
          position: "absolute",
          right: "clamp(1.5rem, 5vw, 6rem)",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center center",
          fontSize: "0.6875rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          whiteSpace: "nowrap",
        }}
      >
        Est. 2024 · Faith · Authenticity · Creativity
      </div>

      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        <div style={{ maxWidth: "840px" }}>
          {/* Eyebrow label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
              animation: "fadeInUp 0.7s ease 0.1s both",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "var(--color-accent)",
              }}
            />
            <span className="section-label" style={{ marginBottom: 0 }}>
              A Lifestyle Platform
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
              animation: "fadeInUp 0.8s ease 0.2s both",
            }}
          >
            A Life{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              Different
            </em>
            <br />
            by Design.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "2.75rem",
              animation: "fadeInUp 0.8s ease 0.35s both",
            }}
          >
            Intentional living through stories, resources, conversations, and
            community — rooted in faith, authenticity, and creativity. This is
            Separate Culture.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              animation: "fadeInUp 0.8s ease 0.5s both",
            }}
          >
            <a href="#stories" className="btn-primary">
              Explore Stories
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#podcast" className="btn-secondary">
              Listen to Podcast
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--color-border)",
              animation: "fadeInUp 0.8s ease 0.65s both",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "200+", label: "Stories Published" },
              { value: "50+", label: "Podcast Episodes" },
              { value: "10K+", label: "Community Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginTop: "0.375rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg-primary))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
