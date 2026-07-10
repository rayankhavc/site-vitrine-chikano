import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Chikano — noir dominant, rouge & orange en accents (thème flyer)
        night: {
          DEFAULT: "#0B0B0C",
          soft: "#141416",
          card: "#1A1A1D",
          border: "#2A2A2E",
        },
        flame: {
          DEFAULT: "#E63125", // rouge grill
          dark: "#B7211A",
        },
        ember: {
          DEFAULT: "#FF8A00", // orange braise
          soft: "#FFB347",
        },
        cream: "#FAF5EF",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(100deg, #E63125 0%, #FF8A00 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255, 138, 0, 0.45)",
        card: "0 8px 30px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
