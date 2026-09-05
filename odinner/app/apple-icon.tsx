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
          backgroundColor: "#08090A",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            fontStyle: "italic",
            fontFamily: "serif",
            color: "#F40000",
          }}
        >
          O
        </div>
      </div>
    ),
    size
  );
}
