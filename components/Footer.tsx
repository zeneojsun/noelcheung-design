"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => { setSent(false); setEmail(""); }, 2400);
  }

  return (
    <footer id="contact" className="footer">
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-14">

        <span className="eyebrow block mb-2">Contact</span>

        <h2 className="foot-h">
          Have a project that needs a <em>design diagnosis?</em>
        </h2>

        <div className="foot-cta">
          <a href={siteConfig.cal} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book a call
            <span className="arrow">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width:14,height:14}}>
                <path d="M3.5 10.5 10.5 3.5"/><path d="M4.5 3.5h6v6"/>
              </svg>
            </span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
            Email me
          </a>
        </div>

        {/* Newsletter */}
        <div style={{ marginBottom: "clamp(56px, 8vh, 96px)" }}>
          <p className="font-sans font-semibold text-[15px] text-ink mb-2">Newsletter</p>
          <p className="text-[15px] leading-[1.55] mb-5 max-w-[52ch]" style={{ color: "var(--muted)" }}>
            I write monthly notes on design systems, fintech UX, and building with agentic AI. No spam, no nonsense.
          </p>

          {sent ? (
            <div className="flex items-start gap-3 p-5 border border-rule rounded-lg max-w-[480px]" style={{ background: "rgba(255,255,255,0.3)" }}>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold text-paper" style={{ background: "var(--avail)" }}>✓</span>
              <div>
                <p className="font-medium text-[15px] mb-0.5">Subscribed.</p>
                <p className="text-[13px]" style={{ color: "var(--muted)" }}>A confirmation is on its way.</p>
              </div>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="footer-nl-email">Email address</label>
              <input
                id="footer-nl-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          )}
        </div>

        {/* Colophon */}
        <div className="colophon">
          <span className="colo-left">
            <span>© 2026 Noel Cheung</span>
            <span className="colo-sep">|</span>
            <span>Built with Claude</span>
          </span>
          <span className="colo-right">
            <a href="https://linkedin.com/in/noelcheung" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="colo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href="https://x.com/zeneojsun" target="_blank" rel="noreferrer" aria-label="X" className="colo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>
            <ThemeToggle />
          </span>
        </div>

      </div>
    </footer>
  );
}
