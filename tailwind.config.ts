import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Each value reads an "R G B" CSS variable (see globals.css) so
        // light/dark just swap the variable and every shade + opacity
        // modifier (bg-ground/85, border-amber/40, ...) keeps working.
        ground: "rgb(var(--color-ground) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        raised: "rgb(var(--color-raised) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        amber: {
          DEFAULT: "rgb(var(--color-amber) / <alpha-value>)",
          dim: "rgb(var(--color-amber-dim) / <alpha-value>)",
          glow: "var(--color-amber-glow)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1120px" },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        rise: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shimmer: { from: { transform: "translateX(-150%) skewX(-15deg)" }, to: { transform: "translateX(150%) skewX(-15deg)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        blink: "blink 1.05s steps(1) infinite",
        rise: "rise .5s ease-out both",
        marquee: "marquee 26s linear infinite",
        shimmer: "shimmer 1.1s ease",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
