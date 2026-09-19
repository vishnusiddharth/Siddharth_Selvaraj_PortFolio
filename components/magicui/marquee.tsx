"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Duplicates its children once and animates the whole row left, wrapping
 * seamlessly at the halfway point. Pauses on hover so it doesn't fight the
 * user for attention, and falls back to a static wrapped row under
 * reduced-motion.
 */
export function Marquee({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">{children}</div>;
  }

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-10 pr-10">{children}</div>
        <div aria-hidden="true" className="flex items-center gap-10 pr-10">
          {children}
        </div>
      </div>
    </div>
  );
}
