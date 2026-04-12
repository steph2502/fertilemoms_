"use client";

import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "Surrogate Matching",
      desc: "Our careful, values-aligned matching process ensures compatibility between surrogates and intended parents based on medical history, personality, and mutual expectations.",
      tag: "Most Popular",
    },
    {
      num: "02",
      title: "Medical Coordination",
      desc: "We coordinate all clinical appointments, fertility treatments, prenatal care, and delivery logistics in partnership with leading reproductive health clinics.",
    },
    {
      num: "03",
      title: "Legal & Contract Support",
      desc: "We connect you with accredited reproductive lawyers to draft and review all surrogacy agreements, parental orders, and legal documentation.",
    },
    {
      num: "04",
      title: "Psychological Counselling",
      desc: "Licensed fertility counsellors provide ongoing emotional support for both surrogates and intended parents throughout the journey.",
    },
    {
      num: "05",
      title: "Post-Birth Care & Support",
      desc: "Our support doesn't end at delivery. We assist with newborn handover, postnatal care, and follow-up support for all parties involved.",
    },
  ];

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
            Compassionate · Structured · Trusted Care
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
            Everything You Need for a{" "}
            <span style={{ color: "var(--fuchsia)" }}>
              Safe Surrogacy Journey
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
            From medical coordination to emotional and legal support, we handle
            every step with precision, care, and transparency.
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
              Book a Free Consultation
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
            borderRadius: "40% 60% 55% 45% / 45% 50% 50% 55%",
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
              overflow: "hidden",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1437987801/photo/pregnant-woman.jpg?s=612x612&w=0&k=20&c=HRM98-4r1eG4UlLnTNfNVvj6bIyY_JcEG7CHHSXgXPU="
              alt="Pregnant woman holding belly"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
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
        {services.map((s) => (
          <div
            key={s.num}
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
              {s.num}
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--text-dark)",
                marginBottom: 8,
              }}
            >
              {s.title}
            </h3>

            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              {s.desc}
            </p>

            {s.tag && (
              <span
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: "var(--fuchsia-pale)",
                  color: "var(--fuchsia-dark)",
                  fontWeight: 500,
                }}
              >
                {s.tag}
              </span>
            )}
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