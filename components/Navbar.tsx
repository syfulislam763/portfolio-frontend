"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/gallery", label: "Gallery", id: "gallery" },
  { href: "/#introduction", label: "Introduction", id: "introduction" },
  { href: "/#stack", label: "Tech Stack", id: "stack" },
  { href: "/#work", label: "Projects", id: "work" },
  { href: "/#research", label: "Publications", id: "research" },
  { href: "/#experience", label: "Experience", id: "experience" },
  // { href: "/#contact", label: "Contact", id: "contact" },
];

// Section ids tracked by the scrollspy on the homepage (everything except
// the standalone Gallery route, which is handled by the current path instead).
const sectionIds = links.filter((l) => l.id !== "gallery").map((l) => l.id);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Scrollspy only applies on the homepage, where the section ids live.
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Account for the sticky navbar height plus a little breathing room —
    // a section counts as "current" once it's scrolled up to this line.
    const OFFSET = 120;

    const updateActive = () => {
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    updateActive();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const isActive = (link: (typeof links)[number]) =>
    link.id === "gallery" ? pathname === "/gallery" : pathname === "/" && activeSection === link.id;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-medium text-ink">
          Syful<span className="text-signal">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                isActive(l) ? "font-semibold text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper md:inline-flex"
        >
          Contact me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line bg-paper px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${
                isActive(l) ? "font-semibold text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" className="text-sm font-medium text-ink">
            Contact me →
          </a>
        </nav>
      )}
    </header>
  );
}
