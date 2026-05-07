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
        sans:   ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif:  ["var(--font-serif)", "Iowan Old Style", "Baskerville", "Times New Roman", "serif"],
        mono:   ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink:       "var(--text)",
        "ink-soft":"var(--ink-soft)",
        paper:     "var(--bg)",
        surface:   "var(--surface)",
        muted:     "var(--text-muted)",
        "muted-2": "var(--text-muted-2)",
        rule:      "var(--hairline)",
        hover:     "var(--hover)",
      },
      maxWidth: {
        site: "720px",
        hero: "720px",
      },
      fontSize: {
        "lead-sm": ["22px", { lineHeight: "1.4",  letterSpacing: "-0.005em" }],
        "lead":    ["26px", { lineHeight: "1.4",  letterSpacing: "-0.005em" }],
        "body":    ["15px", { lineHeight: "1.65", fontWeight: "400" }],
        "small":   ["13px", { lineHeight: "1.5",  fontWeight: "400" }],
        "micro":   ["11px", { lineHeight: "1.4",  fontWeight: "400" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
