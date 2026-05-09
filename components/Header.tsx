"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-backdrop sticky top-0 z-50 h-[68px] flex items-center border-b border-rule">
      <div className="max-w-site mx-auto w-full px-5 md:px-8 lg:px-14 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 font-sans font-medium text-[15px] tracking-[-0.02em] hover:opacity-70 transition-opacity">
          <span className="avail-dot" />
          <span>
            <span className="md:hidden">N.C</span>
            <span className="hidden md:inline">Noel Cheung</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-7">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
