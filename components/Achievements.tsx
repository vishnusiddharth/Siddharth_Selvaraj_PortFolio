import { Section } from "./Section";
import { achievements, site } from "@/lib/site";
import { Reveal } from "./magicui/reveal";
import { SpotlightCard } from "./magicui/spotlight-card";

/** Replaces the open-source section: recognition actually listed on the CV. */
export function Achievements() {
  return (
    <Section
      id="achievements"
      index="04"
      title="Recognition"
      lead="Formal recognition and awards received for work delivered."
    >
      <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} as="li" delay={i * 0.08} className="h-full">
            <SpotlightCard className="h-full">
              <div className="bg-surface p-6 transition-colors duration-300 hover:bg-raised">
                <span className="inline-block font-mono text-[10.5px] tabular-nums tracking-[0.14em] text-amber transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-mono text-base font-medium">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.2} className="mt-6">
        <SpotlightCard>
          <div className="card p-6">
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-mono text-base">{site.education.degree}</p>
            <p className="mt-1.5 text-sm text-muted">{site.education.school}</p>
            <p className="mt-2 font-mono text-[11.5px] tabular-nums tracking-[0.1em] text-muted">
              {site.education.start} — {site.education.end}
            </p>
          </div>
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}
