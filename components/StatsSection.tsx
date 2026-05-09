"use client";

import { useEffect, useState } from "react";

const stats = [
  { prefix: "$", value: 300, suffix: "M+", label: "USD value saved across client projects" },
  { prefix: "",  value: 10,  suffix: "+",  label: "Enterprise products shipped" },
  { prefix: "",  value: 20,  suffix: "+",  label: "Clients served, MNCs to startups" },
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function StatNum({
  prefix, value, suffix, label, delay,
}: {
  prefix: string; value: number; suffix: string; label: string; delay: number;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplayed(value); return; }

    let rafId: number;
    const duration = 2000;

    const timeoutId = setTimeout(() => {
      let start: number | null = null;
      const tick = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setDisplayed(Math.round(easeOutExpo(progress) * value));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => { clearTimeout(timeoutId); cancelAnimationFrame(rafId); };
  }, [value, delay]);

  return (
    <div>
      <p className="stat-num tabular">{prefix}{displayed}{suffix}</p>
      <p className="stat-lbl">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="hero-stats">
      {stats.map((s, i) => (
        <div key={i} className="rise" style={{ animationDelay: `${0.56 + i * 0.16}s` }}>
          <StatNum {...s} delay={600 + i * 220} />
        </div>
      ))}
    </div>
  );
}
