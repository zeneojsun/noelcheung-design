"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { num: "$300M+", label: "USD value saved across client projects" },
  { num: "10+",    label: "Enterprise products shipped" },
  { num: "20+",    label: "Clients served, MNCs to startups" },
];

function StatNum({ value, started, delay = 0 }: { value: string; started: boolean; delay?: number }) {
  const m = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m) return <span>{value}</span>;
  const [, prefix, n, suffix] = m;
  const target = parseFloat(n);
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setV(target); return; }
    let raf: number;
    let start: number | undefined;
    const dur = 2400;
    const ease = (p: number) => 1 - Math.pow(1 - p, 5);
    const step = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(step); return; }
      const p = Math.min(1, elapsed / dur);
      setV(target * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, delay]);

  const display = target % 1 === 0
    ? (v < target ? Math.floor(v).toString() : String(target))
    : v.toFixed(1);

  return <span>{prefix}{display}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="hero-stats">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`reveal${inView ? " reveal-in" : ""}`}
          style={{ transitionDelay: `${140 + i * 160}ms` }}
        >
          <p className="stat-num tabular">
            <StatNum value={s.num} started={inView} delay={i * 220} />
          </p>
          <p className="stat-lbl">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
