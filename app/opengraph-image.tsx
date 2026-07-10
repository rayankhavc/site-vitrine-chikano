import { ImageResponse } from "next/og";

// Runtime edge requis : la génération statique de @vercel/og échoue sous
// Windows (bug fileURLToPath) ; en edge la route est rendue à la demande.
export const runtime = "edge";
export const alt =
  "Chikano — Tacos, Kebab & Sandwichs à La Barre-de-Monts (85550)";
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
          background:
            "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(230,49,37,0.45), #0B0B0C 70%)",
          backgroundColor: "#0B0B0C",
          color: "#FAF5EF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: -4,
            textTransform: "uppercase",
            background: "linear-gradient(100deg, #E63125, #FF8A00)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Chikano
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, marginTop: 10 }}>
          Tacos · Kebabs · Sandwichs
        </div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#FFB347" }}>
          ★ 4,9/5 sur Google — La Barre-de-Monts (85550)
        </div>
      </div>
    ),
    size
  );
}
