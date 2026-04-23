"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const options = [
    { value: "light", label: "light" },
    { value: "dark",  label: "dark"  },
    { value: "system", label: "auto" },
  ] as const;

  return (
    <div className="flex items-center gap-px font-mono text-[10px] uppercase tracking-[0.08em]">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`px-2 py-1 rounded-sm transition-colors ${
            theme === value
              ? "bg-[var(--text)] text-[var(--bg)]"
              : "text-[var(--text-muted)] hover:bg-[var(--hover)]"
          }`}
          aria-pressed={theme === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
