import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2", // page background — warm off-white, not pure white
        surface: "#FFFFFF", // card surfaces
        ink: "#15181F", // primary text, near-black navy
        muted: "#5B6270", // secondary text
        line: "#E3E0D7", // hairline borders
        signal: "#2547D0", // single accent — flat, used sparingly
        shipped: "#0F8B6C", // status green for "shipped" tags
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
