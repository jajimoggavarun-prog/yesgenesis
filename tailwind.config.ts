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
        // Design tokens pulled directly from the Figma file
        navy: {
          DEFAULT: "#00155e", // top bar / primary buttons
          dark: "#011356",
          950: "#001153",
        },
        midnight: {
          DEFAULT: "#16163f", // branches section background
          light: "#1e1842", // stats / partners / awards section background
        },
        brand: {
          cyan: "#01d4fd", // primary accent
          cyanLight: "#54d7fd",
          cyanCard: "#2ca6fc",
          blueCard: "#01359d",
          gold: "#f7bf1d",
          goldLight: "#f7bb1a",
          goldSoft: "#f3bb52",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-inria)", "Inria Serif", "serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        card: "10px",
        pill: "15px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
