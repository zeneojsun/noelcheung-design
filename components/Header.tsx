"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 h-[68px] flex items-center border-b"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--paper) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderColor: scrolled ? "var(--rule)" : "transparent",
        transition: "background 300ms ease, backdrop-filter 300ms ease, -webkit-backdrop-filter 300ms ease, border-color 300ms ease",
      }}
    >
      <div className="max-w-site mx-auto w-full px-5 md:px-8 lg:px-14 flex items-center justify-between gap-6">
        <Link href="/" className="font-sans font-medium text-[15px] tracking-[-0.02em] hover:opacity-70 transition-opacity">
          <span className="md:hidden">N.C</span>
          <span className="hidden md:inline">Noel Cheung</span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-7 font-mono text-[12px] uppercase tracking-[0.08em]">
          {siteConfig.nav.map((item) => {
            const isPageRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
            const isActive = isPageRoute && pathname === item.href;

            if (isPageRoute) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${isActive ? "text-ink" : "text-muted"} hover:text-accent transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
