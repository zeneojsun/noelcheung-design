"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Work",    href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="max-w-site mx-auto px-5 sm:px-6 flex items-center justify-between py-8 sm:py-12">
        <Link
          href="/"
          className="text-[15px] tracking-[-0.01em] text-ink hover:text-muted transition-colors duration-150"
        >
          Noel Cheung
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7" aria-label="Primary">
          {navItems.map((item) => {
            const isPageRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
            const isActive = isPageRoute && pathname === item.href;
            const cls = `text-[14px] transition-colors duration-150 ${isActive ? "text-ink" : "text-muted hover:text-ink"}`;

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
