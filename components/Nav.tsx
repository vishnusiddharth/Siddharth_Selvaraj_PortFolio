"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#achievements", label: "Recognition" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  // Escape closes the menu; body scroll locks while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/85 backdrop-blur">
      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 top-full h-px origin-left bg-amber"
        />
      )}
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-amber">~/</span>
          {site.firstName.toLowerCase()}
        </Link>

        <ul className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHovered(null)}>
          {links.map((l) => (
            <li key={l.href} className="relative">
              <Link
                href={l.href}
                onMouseEnter={() => setHovered(l.href)}
                className="relative z-10 block rounded px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
              {hovered === l.href && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded bg-raised"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-muted transition-colors hover:text-ink md:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 block h-[1.5px] w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ground md:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/60 py-3.5 font-mono text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
