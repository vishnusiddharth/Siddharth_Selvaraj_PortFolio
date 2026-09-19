"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts up to the leading number inside a stat string ("4.1", "~30%",
 * "9–10") whenever it scrolls into view, keeping any prefix/suffix static
 * so odd formats ("9–10") still land on the exact original text.
 */
export function NumberTicker({ value, className }: { value: string; className?: string }) {
  // Memoized on `value` alone — `.match()` returns a new array every call,
  // and putting that unstable reference in the effect's deps below was
  // restarting the count on every animation frame (it never settled).
  const match = useMemo(() => value.match(/^(\D*)([\d.]+)(.*)$/), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !inView) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    if (reduced) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, match, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {match ? display : value}
    </span>
  );
}
