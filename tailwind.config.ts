import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink:    "var(--ink)",
        paper:  "var(--paper)",
        muted:  "var(--muted)",
        rule:   "var(--rule)",
        hover:  "var(--hover)",
        accent: "var(--accent)",
      },
      maxWidth: {
        site: "1240px",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm:      "2px",
        md:      "4px",
        lg:      "4px",
        xl:      "4px",
        "2xl":   "4px",
        full:    "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
