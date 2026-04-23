import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // All three map to Inter Tight — single family per R2 brief
        sans:    ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-sans)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      colors: {
        // Semantic tokens — values flip automatically in .dark
        ink:     "var(--text)",
        paper:   "var(--bg)",
        surface: "var(--surface)",
        muted:   "var(--text-muted)",
        rule:    "var(--hairline)",
        hover:   "var(--hover)",
        // No accent — chromatic accent removed per R2 brief
      },
      maxWidth: {
        site: "1100px",
        hero: "1200px",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm:  "2px",
        md:  "4px",
        lg:  "4px",  // cap at 4px per brief
        xl:  "4px",
        "2xl": "4px",
        full: "9999px",
      },
      fontSize: {
        "display-lg": ["clamp(40px,5vw,48px)", { lineHeight: "1.15", fontWeight: "500" }],
        "h2":          ["clamp(28px,3vw,32px)", { lineHeight: "1.2",  fontWeight: "500" }],
        "h3":          ["20px",                 { lineHeight: "1.3",  fontWeight: "500" }],
        "body":        ["15px",                 { lineHeight: "1.55", fontWeight: "400" }],
        "small":       ["13px",                 { lineHeight: "1.5",  fontWeight: "400" }],
        "micro":       ["11px",                 { lineHeight: "1.4",  fontWeight: "400" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
