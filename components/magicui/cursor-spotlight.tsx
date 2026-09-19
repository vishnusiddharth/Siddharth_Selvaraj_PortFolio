"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A soft amber glow that follows the cursor across the entire site, not
 * just inside individual cards. Fixed to the viewport and sunk to -z-10 so
 * it only shows through the plain background between sections/cards —
 * it never washes out text sitting on top of a solid card background.
 * Mounted once in the root layout.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    function onMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el!.style.setProperty("--cx", `${e.clientX}px`);
        el!.style.setProperty("--cy", `${e.clientY}px`);
        el!.style.opacity = "1";
      });
    }
    function onLeave() {
      el!.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (reduced) return null;

  return <div ref={ref} aria-hidden="true" className="cursor-spotlight pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-500" />;
}
