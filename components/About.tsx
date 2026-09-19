import { Section } from "./Section";
import { site, stats } from "@/lib/site";
import { skillGroups } from "@/lib/skills";
import { Reveal } from "./magicui/reveal";
import { NumberTicker } from "./magicui/number-ticker";
import { BorderBeam } from "./magicui/border-beam";
import { SpotlightCard } from "./magicui/spotlight-card";

export function About() {
  return (
    <Section id="about" index="01" title="About" lead={site.summary}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Reveal>
            <p className="leading-relaxed text-muted">
              Currently building at{" "}
              {site.companyUrl ? (
                <a href={site.companyUrl} target="_blank" rel="noreferrer noopener" className="text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber">
                  {site.company}
                </a>
              ) : (
                <span className="text-ink">{site.company}</span>
              )}
              , where I moved from UI/UX development into full stack work across the web, mobile and backend
              systems the products depend on.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <SpotlightCard key={s.label}>
                  <div className="bg-surface px-4 py-5 transition-colors duration-300 hover:bg-raised">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <NumberTicker value={s.figure} className="block font-mono text-2xl font-medium text-amber tabular-nums" />
                      <span className="mt-1.5 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">{s.label}</span>
                    </dd>
                  </div>
                </SpotlightCard>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.14}>
            <SpotlightCard>
              <p className="relative overflow-hidden rounded-lg border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
                <span className="eyebrow">Fun fact</span>
                <span className="mt-2 block">{site.funFact}</span>
              </p>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Tech stack visualisation — weighted by where the time actually goes. */}
        <Reveal direction="right" delay={0.1}>
          <SpotlightCard>
            <div className="card p-6">
              <BorderBeam hoverOnly />
              <p className="eyebrow">Stack at a glance</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skillGroups.flatMap((g) => g.items).map((item, i) => (
                  <li
                    key={item}
                    className={`rounded border px-2.5 py-1.5 font-mono text-[11.5px] transition-all duration-300 hover:-translate-y-0.5 ${
                      i % 4 === 0
                        ? "border-amber/45 bg-amber-glow text-amber"
                        : "border-line bg-raised text-muted hover:border-amber/30 hover:text-ink"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
