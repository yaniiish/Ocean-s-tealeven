import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nuit: { 900: "#0C1733", 800: "#14224A" },
        indigo: { 700: "#2E3A6B" },
        cobalt: { 500: "#2B36B0" },
        or: { 300: "#E0CD96", 500: "#C9B074", 700: "#A8884A" },
        creme: { 100: "#F4ECD8" },
        acc: { rouge: "#C8443A", jaune: "#E6C13F", vert: "#2E6E50" },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        bebas: ["var(--font-bebas)", "Impact", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
        h2: ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
        eyebrow: ["clamp(1rem, 2vw, 1.25rem)", { lineHeight: "1.2" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "clamp(4rem, 10vw, 8rem)",
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        img: "16px",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0,0,0,.35)",
        "glow-or": "0 0 24px rgba(201,176,116,.25)",
      },
      letterSpacing: {
        cine: "0.14em",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 12%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(8%, 0)" },
          "70%": { transform: "translate(0, 10%)" },
          "80%": { transform: "translate(-12%, 0)" },
          "90%": { transform: "translate(8%, 6%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeY: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        grain: "grain 8s steps(8) infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-y": "marqueeY 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
