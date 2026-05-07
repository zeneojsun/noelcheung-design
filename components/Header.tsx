"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Work",    href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-5 sm:px-6 flex items-center justify-between py-5 sm:py-6">
        <Link
          href="/"
          className="text-[14px] tracking-[-0.01em] text-ink hover:text-muted transition-colors duration-200"
        >
          Noel Cheung
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7" aria-label="Primary">
          {navItems.map((item) => {
            const isPageRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
            const isActive = isPageRoute && pathname === item.href;
            const cls = `text-[13px] tracking-[0.01em] transition-colors duration-200 ${
              isActive ? "text-ink" : "text-muted hover:text-ink"
            }`;

            if (isPageRoute) {
              return <Link key={item.href} href={item.href} className={cls}>{item.label}</Link>;
            }
            return <a key={item.href} href={item.href} className={cls}>{item.label}</a>;
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
