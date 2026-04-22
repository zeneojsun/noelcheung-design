import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md backdrop-saturate-150 border-b border-rule">
      <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-[13px] font-medium tracking-wide flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          NOEL CHEUNG
        </Link>
        <nav className="flex items-center gap-6 md:gap-8 font-mono text-[12px] uppercase tracking-[0.08em]">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative pb-[3px] text-ink hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-[width] after:duration-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
