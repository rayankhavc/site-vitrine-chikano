import { ImageResponse } from "next/og";

// Runtime edge : la generation statique de @vercel/og echoue sous Windows.
export const runtime = "edge";
export const alt =
  "Chikano · Kebab, Burger, Tacos & Panini à La Barre-de-Monts (85550)";
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
          backgroundColor: "#161C22",
          color: "#F4EEE2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "4px solid #E8B54A",
            borderRadius: 18,
            padding: "36px 60px",
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#E8B54A",
            }}
          >
            CHIKANO
          </div>
        </div>
        <div style={{ fontSize: 38, fontWeight: 700, marginTop: 28 }}>
          Kebab · Burger · Tacos · Panini
        </div>
        <div style={{ fontSize: 28, marginTop: 18, color: "#E8B54A" }}>
          Pain maison · 4,9/5 sur Google · La Barre-de-Monts (85550)
        </div>
      </div>
    ),
    size
  );
}
