"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function FadeUp({ children, className, delay = 0, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...(fadeUpVariants.visible as object),
          transition: {
            duration: 0.7,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

/* Hero-specific: bigger blur, faster stagger for above-the-fold */
const heroLineVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroLine({
  children,
  index,
  className,
  as: Tag = "p",
}: {
  children: ReactNode;
  index: number;
  className?: string;
  as?: "p" | "h1" | "h2" | "span";
}) {
  return (
    <motion.div
      className={className}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={heroLineVariants}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}
