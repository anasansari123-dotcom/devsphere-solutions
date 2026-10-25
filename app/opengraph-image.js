import { ImageResponse } from "next/og";

// Default social-share card (WhatsApp, LinkedIn, Facebook, X) for every page without its own image
export const alt = "DevSphere Solutions — IT Company in Uttar Pradesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "radial-gradient(ellipse at 20% 20%, #1e3a8a 0%, #070b16 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, letterSpacing: 6, color: "#7dd3fc" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#38bdf8" }} />
          UTTAR PRADESH · INDIA · DUBAI · OMAN
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>DevSphere Solutions</div>
          <div style={{ fontSize: 46, marginTop: 18, color: "#cbd5e1" }}>IT Company in Uttar Pradesh</div>
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8" }}>Websites · SaaS · Mobile Apps · CRMs · Admin Dashboards · SEO</div>
      </div>
    ),
    size
  );
}
