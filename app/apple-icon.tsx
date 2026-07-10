import { ImageResponse } from "next/og";

// Icône d'écran d'accueil iOS/Android — même bug fileURLToPath que
// opengraph-image.tsx sous Windows, donc runtime edge obligatoire.
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0C",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "sans-serif",
            background: "linear-gradient(100deg, #E63125, #FF8A00)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          C
        </div>
      </div>
    ),
    size
  );
}
