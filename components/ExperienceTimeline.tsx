import { Section } from "./Section";
import { experience } from "@/lib/experience";
import { Reveal } from "./magicui/reveal";
import { SpotlightCard } from "./magicui/spotlight-card";

export function ExperienceTimeline() {
  return (
    <Section id="experience" index="06" title="Experience" lead="Where the last six years went.">
      <ol className="relative">
        {/* Spine */}
        <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[calc(9rem+7px)]" />
        {experience.map((role, i) => (
          <Reveal key={role.company} as="li" direction="left" delay={i * 0.1} className={`relative pl-8 sm:pl-0 ${i === 0 ? "" : "mt-10"}`}>
            <div className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
              <div className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-muted sm:text-right sm:pr-8">
                <span className={i === 0 ? "text-amber" : undefined}>
                  {role.start} — {role.end}
                </span>
              </div>
              <SpotlightCard>
                {i === 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-2 h-[15px] w-[15px] animate-ping rounded-full bg-amber/50 sm:-left-[calc(2rem+7px)]"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-2 h-[15px] w-[15px] rounded-full border-2 sm:-left-[calc(2rem+7px)] ${
                    i === 0 ? "border-amber bg-amber" : "border-line bg-surface"
                  }`}
                />
                <h3 className="font-mono text-lg font-medium tracking-tight">{role.role}</h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-amber">{role.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{role.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {role.tech.map((t) => (
                    <li key={t} className="rounded border border-line bg-raised px-2 py-1 font-mono text-[10.5px] text-muted transition-colors hover:border-amber/30 hover:text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
