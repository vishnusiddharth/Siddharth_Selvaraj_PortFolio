"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 14 },
  left: { x: -18 },
  right: { x: 18 },
  none: {},
};

/**
 * Fades + slides an element in every time it crosses into the viewport —
 * scrolling back up past it and back down replays it, rather than firing
 * once and freezing. Delay is meant to be indexed by callers
 * (delay={i * 0.06}) to stagger a list without a separate stagger-container.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    show: { opacity: 1, x: 0, y: 0 },
  };

  if (reduced) {
    const Static = Tag;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2, margin: "-80px" }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
