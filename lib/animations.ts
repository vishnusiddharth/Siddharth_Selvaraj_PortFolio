import { animate, stagger, type AnimationParams, type JSAnimation } from "animejs";

/**
 * Reusable anime.js motion presets for the portfolio.
 * Every export is a thin wrapper around `animate()` — call it from a
 * client component (e.g. inside `useEffect` or an event handler), never
 * at module scope, since it touches the DOM.
 */

export type AnimationTarget = Parameters<typeof animate>[0];

const DEFAULT_EASE = "outExpo";

/** Fade an element in while it rises slightly — the workhorse entrance preset. */
export function fadeInUp(target: AnimationTarget, overrides: AnimationParams = {}) {
  return animate(target, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 700,
    ease: DEFAULT_EASE,
    ...overrides,
  });
}

/** Fade an element in from the side — handy for panels sliding in from left/right. */
export function fadeInSide(
  target: AnimationTarget,
  direction: "left" | "right" = "left",
  overrides: AnimationParams = {}
) {
  const distance = direction === "left" ? -32 : 32;
  return animate(target, {
    opacity: [0, 1],
    translateX: [distance, 0],
    duration: 700,
    ease: DEFAULT_EASE,
    ...overrides,
  });
}

/** Simple scale + fade pop, useful for cards, badges, and icons. */
export function popIn(target: AnimationTarget, overrides: AnimationParams = {}) {
  return animate(target, {
    opacity: [0, 1],
    scale: [0.85, 1],
    duration: 500,
    ease: "outBack",
    ...overrides,
  });
}

/**
 * Stagger the same entrance across a list of elements (e.g. project cards,
 * skill pills). `delayStep` is the gap between each item's start time.
 */
export function staggerFadeInUp(
  targets: AnimationTarget,
  delayStep = 80,
  overrides: AnimationParams = {}
) {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 700,
    delay: stagger(delayStep),
    ease: DEFAULT_EASE,
    ...overrides,
  });
}

/** Subtle continuous float, e.g. for the hero terminal decoration. */
export function floatLoop(target: AnimationTarget, overrides: AnimationParams = {}) {
  return animate(target, {
    translateY: [0, -10, 0],
    duration: 3200,
    ease: "inOutSine",
    loop: true,
    ...overrides,
  });
}

/** Magnetic hover pull — moves an element toward a pointer offset, then snaps back. */
export function magneticPull(
  target: AnimationTarget,
  offsetX: number,
  offsetY: number,
  overrides: AnimationParams = {}
) {
  return animate(target, {
    translateX: offsetX,
    translateY: offsetY,
    duration: 350,
    ease: "outQuad",
    ...overrides,
  });
}

/** Snap an element back to its resting position — pair with `magneticPull`. */
export function magneticRelease(target: AnimationTarget, overrides: AnimationParams = {}) {
  return animate(target, {
    translateX: 0,
    translateY: 0,
    duration: 500,
    ease: "outElastic(1, .6)",
    ...overrides,
  });
}

/** Animate a numeric counter from 0 (or `from`) up to `to`, formatting each tick into `target`'s text. */
export function countUp(
  target: HTMLElement,
  to: number,
  options: { from?: number; duration?: number; format?: (value: number) => string } = {}
): JSAnimation {
  const { from = 0, duration = 1400, format = (value) => Math.round(value).toString() } = options;
  const counter = { value: from };
  return animate(counter, {
    value: to,
    duration,
    ease: DEFAULT_EASE,
    onUpdate: () => {
      target.textContent = format(counter.value);
    },
  });
}

/** A short typewriter-style reveal that staggers per-character opacity (see TypingRoles). */
export function typewriterIn(target: AnimationTarget, overrides: AnimationParams = {}) {
  return animate(target, {
    opacity: [0, 1],
    duration: 300,
    delay: stagger(28),
    ease: "outSine",
    ...overrides,
  });
}
