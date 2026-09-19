import { skillGroups } from "@/lib/skills";
import { Marquee } from "./magicui/marquee";

/** A quiet strip of scrolling tech between the hero and the fold — the kind
 *  of "trust bar" vibe-driven portfolios use, built from the same skills
 *  list rather than a separate hand-picked set. */
export function TechMarquee() {
  const items = skillGroups.flatMap((g) => g.items);

  return (
    <div aria-hidden="true" className="border-t border-line py-6">
      <Marquee>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
            <span className="h-1 w-1 rounded-full bg-amber/60" />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
