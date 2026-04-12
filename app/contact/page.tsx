"use client";

export default function Contact() {
  return (
    <main style={{ padding: "5rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* HEADER */}
      <div style={{ maxWidth: 650 }}>
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
          Let’s Connect
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 48,
            fontWeight: 600,
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "var(--text-mid)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          We’re here to guide you through every step of your journey.
          Reach out for consultations, support, or any questions.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* CONTACT INFO */}
        <div
          style={{
            background: "white",
            border: "0.5px solid var(--border)",
            borderRadius: 24,
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginBottom: "1.5rem",
              color: "var(--text-dark)",
            }}
          >
            Get in Touch
          </h2>

          <div style={{ marginBottom: "1.2rem" }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Phone</p>
            <p style={{ fontSize: 15, color: "var(--text-dark)" }}>
              +234 906 946 2977
            </p>
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Email</p>
            <p style={{ fontSize: 15, color: "var(--text-dark)" }}>
              info@fertilemoms.com
            </p>
          </div>

          <div>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Office</p>
            <p style={{ fontSize: 15, color: "var(--text-dark)" }}>
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          style={{
            background: "white",
            border: "0.5px solid var(--border)",
            borderRadius: 24,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            placeholder="Your Name"
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid var(--border)",
              outline: "none",
              fontSize: 14,
            }}
          />

          <input
            placeholder="Your Email"
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid var(--border)",
              outline: "none",
              fontSize: 14,
            }}
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid var(--border)",
              outline: "none",
              fontSize: 14,
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              background: "var(--fuchsia)",
              color: "white",
              padding: "12px 20px",
              borderRadius: 30,
              fontSize: 15,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/2349069462977"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "12px 18px",
          borderRadius: 50,
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14,
          fontWeight: 500,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          textDecoration: "none",
        }}
      >
        <span style={{ fontSize: 18 }}>💬</span>
        Chat on WhatsApp
      </a>
    </main>
  );
}