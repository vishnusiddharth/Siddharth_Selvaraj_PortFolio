"use client";

import { useRef } from "react";

/**
 * Wraps card content with a pointer-tracked amber glow. Position is written
 * straight to the DOM via CSS custom properties on mousemove instead of
 * React state, so hovering never triggers a re-render.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} className={`group relative ${className}`}>
      <div aria-hidden="true" className="spotlight-overlay pointer-events-none absolute inset-0 rounded-[inherit]" />
      {children}
    </div>
  );
}
