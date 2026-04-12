"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5rem 2rem 4rem",
          gap: "3rem",
          maxWidth: 1100,
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ maxWidth: 520 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--fuchsia-light)",
              color: "var(--fuchsia-dark)",
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--fuchsia)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Compassionate · Trusted · Expert
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 52,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "var(--text-dark)",
              marginBottom: "1.25rem",
            }}
          >
            Your Journey to{" "}
            <span style={{ color: "var(--fuchsia)" }}>Parenthood</span>{" "}
            Starts Here
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--text-mid)",
              marginBottom: "2rem",
              fontWeight: 300,
            }}
          >
            We provide professional, compassionate gestational surrogacy support,
            guiding intended parents and surrogates every step of the way.
          </p>

          {/* BUTTONS */}
          <div>
            <Link href="/services">
              <button
                style={{
                  background: "var(--fuchsia)",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: 30,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  marginRight: 12,
                }}
              >
                Explore Services
              </button>
            </Link>

            <Link href="/process">
              <button
                style={{
                  background: "transparent",
                  color: "var(--purple)",
                  padding: "12px 28px",
                  borderRadius: 30,
                  fontSize: 15,
                  fontWeight: 500,
                  border: "1.5px solid var(--purple-mid)",
                  cursor: "pointer",
                }}
              >
                How It Works
              </button>
            </Link>
          </div>
        </div>

        {/* Blob Visual */}
        <div
          style={{
            width: 340,
            height: 380,
            flexShrink: 0,
            background:
              "linear-gradient(135deg, var(--fuchsia-pale) 0%, var(--purple-light) 100%)",
            borderRadius:
              "40% 60% 55% 45% / 45% 50% 50% 55%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            animation: "morphBlob 8s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(237,37,236,0.2)",
              overflow: "hidden",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/2199047180/photo/man-in-love-hugs-his-pregnant-wife-they-are-waiting-together-for-the-babys-arrival-love-family.jpg?s=612x612&w=0&k=20&c=izCMEMAB4ErqPcJB4jI4CZaCmRwI3sa5O7LFgULwy5o="
              alt="Pregnant woman holding her belly"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          background: "white",
          borderTop: "0.5px solid var(--border)",
          borderBottom: "0.5px solid var(--border)",
        }}
      >
        {[
          { num: "500+", label: "Families Created" },
          { num: "12+", label: "Years Experience" },
          { num: "98%", label: "Satisfaction Rate" },
          { num: "24/7", label: "Support Available" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              minWidth: 140,
              padding: "1.5rem 2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 600,
                color: "var(--fuchsia)",
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes morphBlob {
          0%,100% { border-radius: 40% 60% 55% 45% / 45% 50% 50% 55%; }
          50% { border-radius: 55% 45% 40% 60% / 50% 55% 45% 50%; }
        }
      `}</style>
    </>
  );
}