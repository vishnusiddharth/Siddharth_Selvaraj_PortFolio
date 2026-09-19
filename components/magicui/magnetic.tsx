"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Nudges its child toward the cursor within a small radius, spring-back on
 * leave. Meant for buttons/icon links, not large layout blocks — the pull
 * is capped at `strength` px so it reads as a light magnetic tug, not a
 * teleport.
 */
export function Magnetic({ children, strength = 14 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.3 });

  if (reduced) return <>{children}</>;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * strength);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  );
}
