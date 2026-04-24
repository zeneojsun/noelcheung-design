"use client";

import { useState } from "react";

const items = [
  {
    n: "01",
    title: "A project is off-track, or flagged as non-viable.",
    body: "Rescue work. Root cause analysis, reframing, and fast execution. At HSBC India, I turned a shelved project into a regional success with 7× submission increase and full GDR approval.",
  },
  {
    n: "02",
    title: "A product needs to go from 0 to shippable 1.",
    body: "Small teams, ambiguous brief, hard deadlines. Build the foundations that hold up through scale — like OKGroup's full design system, shipped and adopted at 95% within four months.",
  },
  {
    n: "03",
    title: "A design system is slowing the team down, not speeding them up.",
    body: "Token architecture, multi-brand governance, cross-team adoption. At Melco, I led a team of 7 to build the company's first design system — 1000+ components, 40% production cost saved.",
  },
];

export default function EngagementsAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div>
      {items.map((item) => {
        const isOpen = openItem === item.n;
        const contentId = `engagement-body-${item.n}`;
        const buttonId = `engagement-btn-${item.n}`;

        return (
          <div key={item.n} className="border-t border-rule">
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenItem(isOpen ? null : item.n)}
              className="w-full grid grid-cols-[48px_1fr_20px] gap-4 md:gap-8 items-center py-6 text-left"
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
