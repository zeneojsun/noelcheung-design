"use client";

import { useState } from "react";

const items = [
  {
    n: "01",
    title: "Design Audit",
    body: "A structured review of your product's current design state — identifying gaps, inconsistencies, and opportunities to improve usability, system cohesion, and conversion.",
  },
  {
    n: "02",
    title: "Design System Build",
    body: "Token architecture, component libraries, multi-brand governance, and cross-team adoption. Built to scale — not just to document.",
  },
  {
    n: "03",
    title: "0→1 Product Design",
    body: "From ambiguous brief to shippable product. I build the foundations that hold up through growth — strategy, IA, flows, and high-fidelity execution.",
  },
  {
    n: "04",
    title: "Fractional Design Lead",
    body: "Embedded senior design leadership without the full-time overhead. I work with your team on strategy, hiring, process, and quality bar.",
  },
  {
    n: "05",
    title: "Product Turnaround",
    body: "Rescue work. Root cause analysis, rapid reframing, and fast execution on products that are off-track, shelved, or flagged as non-viable.",
  },
  {
    n: "06",
    title: "UX Strategy · 0→1 Execution",
    body: "End-to-end strategic design — from user research and opportunity framing through to final execution, ready for engineering handoff.",
  },
];

export default function ServicesAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div>
      {items.map((item) => {
        const isOpen = openItem === item.n;
        const contentId = `service-body-${item.n}`;
        const buttonId = `service-btn-${item.n}`;

        return (
          <div key={item.n} className="border-t border-rule">
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenItem(isOpen ? null : item.n)}
              className="w-full grid grid-cols-[48px_1fr_20px] gap-4 md:gap-8 items-center py-7 text-left"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                {item.n}
              </span>
              <span className="text-lg md:text-xl font-medium leading-[1.35]">
                {item.title}
              </span>
              <span
                className="font-mono text-base text-muted leading-none transition-transform duration-200 flex-shrink-0 select-none"
                aria-hidden="true"
                style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 280ms ease",
              }}
            >
              <div className="overflow-hidden">
                <p className="text-base text-muted leading-[1.6] max-w-[58ch] pb-6 pl-14 md:pl-20">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
