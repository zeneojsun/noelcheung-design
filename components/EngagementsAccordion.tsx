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
    title: "A product is expanding into new markets or brands.",
    body: "Multi-brand token architecture, localisation systems, and design governance for teams shipping across regions. From single-product to scalable platform.",
  },
];

export default function EngagementsAccordion() {
  const [openId, setOpenId] = useState<string>("1");

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const contentId = `eng-body-${item.id}`;
        const btnId = `eng-btn-${item.id}`;

        return (
          <div key={item.id} className={`item ${isOpen ? "accordion-open" : ""}`}>
            <button
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className="accordion-btn"
            >
              <span className="accordion-ttl">{item.title}</span>
              <span className="accordion-plus" aria-hidden="true" />
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={btnId}
              className="accordion-panel"
            >
              <div>
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
