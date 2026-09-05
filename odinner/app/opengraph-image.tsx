import { ImageResponse } from "next/og";

// Runtime edge : la generation statique de @vercel/og echoue sous Windows.
export const runtime = "edge";
export const alt =
  "O'dinner · Kebab, Pizza, Tacos & Couscous à Mareuil-sur-Lay-Dissais (85320)";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090A",
          color: "#F6F6F7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "4px solid #F40000",
            borderRadius: 18,
            padding: "30px 60px",
          }}
        >
          <div
            style={{
              fontSize: 128,
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: 2,
              color: "#F40000",
            }}
          >
            O&apos;dinner
          </div>
        </div>
        <div style={{ fontSize: 38, fontWeight: 700, marginTop: 28 }}>
          Kebab · Pizza · Tacos · Burger · Couscous
        </div>
        <div style={{ fontSize: 28, marginTop: 18, color: "#F40000" }}>
          Halal · Ouvert 7j/7 · Mareuil-sur-Lay-Dissais (85320)
        </div>
      </div>
    ),
    size
  );
}
