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
        // Palette reelle Chikano, relevee sur la devanture et les panneaux :
        // ardoise charbon + dore signage + rouge accent.
        ink: "#0E1216", // fond le plus profond
        slate: {
          DEFAULT: "#161C22", // panneau ardoise de la facade
          soft: "#1D242C",
          card: "#232C35",
          line: "#333F4B",
        },
        gold: {
          DEFAULT: "#E8B54A", // dore des lettres "CHIKANO"
          bright: "#F5C869",
          deep: "#B8862B",
        },
        bone: "#F4EEE2", // texte creme chaud
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        plate: "0 18px 40px -18px rgba(0,0,0,0.7)",
        gold: "0 10px 30px -10px rgba(232,181,74,0.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
