"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string): React.CSSProperties => ({
    padding: "6px 14px",
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 400,
    color:
      pathname === path ? "var(--fuchsia-dark)" : "var(--text-mid)",
    background:
      pathname === path ? "var(--fuchsia-pale)" : "transparent",
    transition: "all 0.2s",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: 70,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "0.5px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* LOGO (REPLACED TEXT) */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.svg" // 👈 make sure this matches your file name
          alt="Fertile Moms Logo"
          width={300}   // adjust if too big/small
          height={130}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </Link>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: 6 }}>
        <Link href="/" style={linkStyle("/")}>Home</Link>
        <Link href="/services" style={linkStyle("/services")}>Services</Link>
        <Link href="/process" style={linkStyle("/process")}>Our Process</Link>
        <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
      </div>

      {/* CTA */}
      <Link href="/contact">
        <button
          style={{
            padding: "8px 20px",
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 500,
            background: "var(--fuchsia)",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </Link>
    </nav>
  );
}