"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

/**
 * Flips the `data-theme` attribute the inline script in layout.tsx sets
 * before hydration. Starts rendered as "dark" (matching that script's
 * fallback) and corrects itself post-mount, avoiding a hydration mismatch
 * at the cost of a same-frame icon swap on first paint.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage blocked — theme still applies for this visit.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="inline-flex h-10 w-10 flex-none items-center justify-center rounded border border-line text-muted transition-colors hover:border-amber hover:text-amber"
    >
      {theme === "light" ? <MoonIcon className="h-[17px] w-[17px]" /> : <SunIcon className="h-[18px] w-[18px]" />}
    </button>
  );
}
