"use client";

import { useState } from "react";

const items = [
  {
    id: "1",
    title: "A project is off-track, or flagged as non-viable.",
    body: "Rescue work. Root cause analysis, reframing, and fast execution. At HSBC India, I turned a shelved project into a regional success with 7× submission increase and full GDR approval.",
  },
  {
    id: "2",
    title: "A product needs to go from 0 to shippable 1.",
    body: "Small teams, ambiguous brief, hard deadlines. Build the foundations that hold up through scale — like OKGroup's full design system, shipped and adopted at 95% within four months.",
  },
  {
    id: "3",
    title: "A design system is slowing the team down, not speeding them up.",
    body: "Token architecture, multi-brand governance, cross-team adoption. At Melco, I led a team of 7 to build the company's first design system — 1000+ components, 40% production cost saved.",
  },
  {
    id: "4",
    title: "An existing product is expanding into new markets or brands.",
    body: "Multi-brand token architecture, localisation systems, and design governance for teams shipping across regions. From single-product to scalable platform.",
  },
];

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <g style={{ opacity: open ? 0 : 1, transition: "opacity 150ms ease" }}>
        <line x1="4" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="4" x2="11" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g style={{ opacity: open ? 1 : 0, transition: "opacity 150ms ease" }}>
        <line x1="5.5" y1="5.5" x2="16.5" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16.5" y1="5.5" x2="5.5" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function EngagementsAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const contentId = `eng-body-${item.id}`;
        const btnId = `eng-btn-${item.id}`;

        return (
          <div key={item.id} className="border-t border-rule">
            <button
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span
                style={{
                  fontSize: "18px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                }}
              >
                {item.title}
              </span>
              <span
                className="text-muted"
                style={{ flexShrink: 0 }}
              >
                <AccordionIcon open={isOpen} />
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={btnId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 280ms ease",
              }}
            >
              <div className="overflow-hidden">
                <p
                  className="text-muted pb-6"
                  style={{ fontSize: 15, lineHeight: 1.6, maxWidth: "58ch" }}
                >
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
