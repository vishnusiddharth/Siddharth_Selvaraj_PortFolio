"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types each role out, pauses, deletes, moves on.
 * Renders the first role immediately so the heading is never empty
 * on first paint, and collapses to static text under reduced motion.
 */
export function TypingRoles({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0] ?? "");
  const [reduced, setReduced] = useState(false);
  const idx = useRef(0);
  const dir = useRef<"typing" | "pausing" | "deleting">("pausing");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || roles.length === 0) return;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = roles[idx.current] ?? "";
      let delay = 70;

      setText((prev) => {
        if (dir.current === "typing") {
          if (prev.length < full.length) return full.slice(0, prev.length + 1);
          dir.current = "pausing";
          return prev;
        }
        if (dir.current === "deleting") {
          if (prev.length > 0) return prev.slice(0, -1);
          idx.current = (idx.current + 1) % roles.length;
          dir.current = "typing";
          return prev;
        }
        return prev;
      });

      if (dir.current === "pausing") {
        dir.current = "deleting";
        delay = 1700;
      } else if (dir.current === "deleting") {
        delay = 38;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1700);
    return () => clearTimeout(timer);
  }, [reduced, roles]);

  return (
    <span className="inline-flex items-baseline">
      {/* Screen readers get the complete list, not a character-by-character stream. */}
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="text-amber">
        {reduced ? roles[0] : text}
      </span>
      {!reduced && (
        <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[.55ch] translate-y-[.08em] bg-amber animate-blink" />
      )}
    </span>
  );
}
