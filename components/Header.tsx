import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md backdrop-saturate-150 border-b border-rule">
      <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between py-4 gap-6">
        <Link
          href="/"
          className="hover:opacity-60 transition-opacity"
        >
          <span className="font-medium text-[15px] tracking-[-0.02em]">
            <span className="md:hidden">N.C</span>
            <span className="hidden md:inline">Noel Cheung</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-6 md:gap-8 font-mono text-[12px] uppercase tracking-[0.08em]">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
