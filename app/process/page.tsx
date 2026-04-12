"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    detail:
      "We begin with a free, no-obligation consultation to understand your goals and create a personalised roadmap just for you.",
  },
  {
    num: "02",
    title: "Medical & Psychological Screening",
    detail:
      "All parties undergo thorough medical and psychological evaluations to ensure readiness and safety.",
  },
  {
    num: "03",
    title: "Surrogate Matching",
    detail:
      "We match intended parents with a surrogate based on values, lifestyle, and compatibility.",
  },
  {
    num: "04",
    title: "Legal Agreement",
    detail:
      "Reproductive lawyers finalise agreements covering rights, responsibilities, and protections.",
  },
  {
    num: "05",
    title: "IVF & Embryo Transfer",
    detail:
      "Our medical team coordinates embryo transfer and monitors every stage closely.",
  },
  {
    num: "06",
    title: "Pregnancy & Birth",
    detail:
      "We provide full prenatal support and guidance throughout the pregnancy journey.",
  },
  {
    num: "07",
    title: "Homecoming & Aftercare",
    detail:
      "We assist with documentation, baby handover, and postnatal support.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* HERO SECTION */}
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
        {/* TEXT */}
        <div style={{ maxWidth: 520 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--purple-light)",
              color: "var(--purple-dark)",
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
              }}
            />
            Step by Step
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
            <span style={{ color: "var(--fuchsia)" }}>
              Parenthood, Simplified
            </span>
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
            We guide you through every step with clarity, care, and expertise —
            so you always know what to expect.
          </p>

          <Link href="/contact">
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
              }}
            >
              Start Your Journey
            </button>
          </Link>
        </div>

        {/* BLOB VISUAL */}
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
            animation: "morphBlob 8s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(237,37,236,0.2)",
              overflow: "hidden", // 👈 keeps image inside circle
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=400&q=80"
              alt="Pregnant woman"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* STEPS GRID */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              background: "white",
              border: "0.5px solid var(--border)",
              borderRadius: 24,
              padding: "2rem",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--fuchsia)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 40,
                fontWeight: 600,
                color: "var(--fuchsia-light)",
                marginBottom: 10,
              }}
            >
              {step.num}
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--text-dark)",
                marginBottom: 8,
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              {step.detail}
            </p>
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes morphBlob {
          0%,100% { border-radius: 40% 60% 55% 45% / 45% 50% 50% 55%; }
          50% { border-radius: 55% 45% 40% 60% / 50% 55% 45% 50%; }
        }
      `}</style>
    </>
  );
}