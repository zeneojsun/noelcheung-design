"use client";

import { useEffect, useRef, useState } from "react";

const outcomes = [
  { prefix: "$", value: 300, suffix: "M+", label: "value saved across client projects" },
  { prefix: "",  value: 10,  suffix: "+",  label: "enterprise DX products shipped" },
  { prefix: "",  value: 20,  suffix: "+",  label: "clients served, from MNCs to startups" },
];

const easeOut = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function StatBlock({
  prefix, value, suffix, label,
  delay, started, reduced,
}: {
  prefix: string; value: number; suffix: string; label: string;
  delay: number; started: boolean; reduced: boolean;
}) {
  const [displayed, setDisplayed] = useState(reduced ? value : 0);
  const [visible, setVisible]     = useState(reduced);

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setVisible(true);
      setDisplayed(value);
      return;
    }

    // CSS transition-delay handles the visual stagger
    setVisible(true);

    // Count-up starts at the same offset as the visual delay
    let raf: number;
    const timer = setTimeout(() => {
      let startTime: number | null = null;
      const step = (now: number) => {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / 750, 1);
        setDisplayed(Math.round(easeOut(progress) * value));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [started, delay, value, reduced]);

  return (
    <div
      className="pt-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: reduced
          ? "none"
          : `opacity 750ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 750ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <p className="display text-[64px] md:text-[80px] leading-[1] tracking-tight mb-3 tabular-nums font-semibold">
        {prefix}{displayed}{suffix}
      </p>
      <p className="text-sm text-muted leading-snug">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref          = useRef<HTMLDivElement>(null);
  const [started,    setStarted]    = useState(false);
  const [reduced,    setReduced]    = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setStarted(true);
      setCtaVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          // CTA appears after all 3 blocks finish: last block delay (300) + duration (750) + buffer (100)
          setTimeout(() => setCtaVisible(true), 1150);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
        {outcomes.map((o, i) => (
          <StatBlock
            key={i}
            {...o}
            delay={i * 150}
            started={started}
            reduced={reduced}
          />
        ))}
      </div>

      <div
        className="flex flex-wrap items-center gap-4"
        style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "none" : "translateY(16px) scale(0.96)",
          transition: reduced
            ? "none"
            : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 h-12 rounded-full px-8 bg-ink text-paper font-mono text-base font-medium hover:opacity-90 hover:-translate-y-px transition-all duration-200"
        >
          Request availability
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 h-12 rounded-full px-8 border border-rule font-mono text-base font-medium hover:border-ink hover:-translate-y-px transition-all duration-200"
        >
          See my work
        </a>
      </div>
    </div>
  );
}
