import { ImageResponse } from "next/og";

// Runtime edge : la generation statique de @vercel/og echoue sous Windows.
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
          backgroundColor: "#161C22",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            fontFamily: "sans-serif",
            color: "#E8B54A",
          }}
        >
          C
        </div>
      </div>
    ),
    size
  );
}
