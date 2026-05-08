"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const outcomes = [
  { prefix: "$", value: 300, suffix: "M+", label: "USD value saved across client projects" },
  { prefix: "",  value: 10,  suffix: "+",  label: "Enterprise products shipped" },
  { prefix: "",  value: 20,  suffix: "+",  label: "Clients served, from MNCs to startups" },
];

function StatBlock({
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: delay / 1000,
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return controls.stop;
  }, [started, value, delay]);

  return (
    <div className="pt-5">
      <p className="text-sm text-muted leading-snug mb-3">{label}</p>
      <p className="display text-[64px] md:text-[80px] leading-[1] tracking-tight tabular-nums font-semibold">
        {prefix}{displayed}{suffix}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
        {outcomes.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <StatBlock {...o} started={inView} delay={i * 150} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center h-12 rounded-full px-8 bg-ink text-paper font-mono text-sm font-medium hover:opacity-90 hover:-translate-y-px transition-all duration-200"
        >
          Get in touch
        </a>
      </motion.div>
    </div>
  );
}
