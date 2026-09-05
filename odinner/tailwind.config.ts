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
        // Palette reelle O'dinner, relevee pixel par pixel sur le logo de la
        // fiche Google : noir pur + rouge vif + blanc. Rien d'autre.
        ink: "#08090A", // fond le plus profond
        coal: {
          DEFAULT: "#0E1012", // panneau sombre
          soft: "#141719",
          card: "#1A1E21",
          line: "#2B3034",
        },
        red: {
          DEFAULT: "#F40000", // rouge exact du logo
          bright: "#FF2E22",
          deep: "#B00000",
        },
        // Orange chaud utilise uniquement en degrade (bandeau, halos) pour
        // rechauffer le rouge sans introduire une seconde couleur de marque.
        flame: "#FF6A00",
        bone: "#F6F6F7", // blanc casse du logo
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        script: ["var(--font-kaushan)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        plate: "0 18px 40px -18px rgba(0,0,0,0.8)",
        red: "0 10px 30px -10px rgba(244,0,0,0.5)",
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
