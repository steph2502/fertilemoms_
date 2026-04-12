import Navbar from "../components/Navbar";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL STYLES */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

          :root {
            --fuchsia:      #ed25ec;
            --fuchsia-dark: #c91ec8;
            --fuchsia-light:#f9d0f9;
            --fuchsia-pale: #fdf0fd;
            --purple:       #7c3aed;
            --purple-dark:  #5b21b6;
            --purple-mid:   #a855f7;
            --purple-light: #ede9fe;
            --purple-pale:  #f5f3ff;
            --plum:         #4a1d6b;
            --text-dark:    #1e0b2e;
            --text-mid:     #4b2067;
            --text-muted:   #8b5aaa;
            --bg:           #fdf8ff;
            --border:       rgba(237,37,236,0.15);
          }

          * { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: 'DM Sans', sans-serif;
            background: var(--bg);
            color: var(--text-dark);
          }

          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            background: "var(--plum)",
            color: "white",
            padding: "3rem 2rem 2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "2rem",
            }}
          >
            {/* BRAND */}
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  color: "var(--fuchsia-light)",
                  marginBottom: 8,
                }}
              >
                 Fertile Moms
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Compassionate, professional surrogacy support, from first
                steps to first breaths.
              </p>
            </div>

            {/* NAV */}
            <div>
              <h4 style={footerHeading}>Navigate</h4>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/process">Our Process</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>

            {/* LEGAL */}
            <div>
              <h4 style={footerHeading}>Legal</h4>
              <span style={footerLink}>Privacy Policy</span>
              <span style={footerLink}>Terms of Service</span>
              <span style={footerLink}>Surrogacy Ethics</span>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            style={{
              maxWidth: 1100,
              margin: "2rem auto 0",
              paddingTop: "1.5rem",
              borderTop: "0.5px solid rgba(255,255,255,0.1)",
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2025 Fertile Moms. All rights reserved. | Serving Nigeria &
            beyond.
          </div>
        </footer>
      </body>
    </html>
  );
}

/* STYLES */
const footerHeading: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  color: "rgba(255,255,255,0.6)",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  marginBottom: 12,
};

const footerLink: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255,255,255,0.75)",
  display: "block",
  marginBottom: 8,
  cursor: "pointer",
};

function FooterLink({ href, children }: any) {
  return (
    <Link href={href} style={footerLink}>
      {children}
    </Link>
  );
}