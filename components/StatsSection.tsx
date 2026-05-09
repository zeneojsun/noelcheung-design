"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { prefix: "$", value: 300, suffix: "M+", label: "USD value saved across client projects" },
  { prefix: "",  value: 10,  suffix: "+",  label: "Enterprise products shipped" },
  { prefix: "",  value: 20,  suffix: "+",  label: "Clients served, MNCs to startups" },
];

function StatNum({
  prefix, value, suffix, label, started, delay,
}: {
  prefix: string; value: number; suffix: string; label: string;
  started: boolean; delay: number;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplayed(value); return; }
    const controls = animate(0, value, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      delay: delay / 1000,
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return controls.stop;
  }, [started, value, delay]);

  return (
    <div>
      <p className="stat-num tabular">{prefix}{displayed}{suffix}</p>
      <p className="stat-lbl">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="hero-stats">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
        >
          <StatNum {...s} started={inView} delay={i * 220} />
        </motion.div>
      ))}
    </div>
  );
}
