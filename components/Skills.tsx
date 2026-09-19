import { Section } from "./Section";
import { skillGroups } from "@/lib/skills";
import { Reveal } from "./magicui/reveal";
import { SpotlightCard } from "./magicui/spotlight-card";

/** Icon grid with labels. Deliberately no progress bars — a percentage on
 *  "PostgreSQL" is a number nobody can defend in an interview. */
export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      lead="Grouped by where they sit in the stack rather than rated on a scale."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.07} className="h-full">
            <SpotlightCard className="h-full">
              <div className="card h-full p-6 transition-colors duration-300 hover:border-amber/40">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">{group.category}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="group flex items-center gap-3 font-mono text-[13px] text-muted transition-colors hover:text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rotate-45 bg-amber/70 transition-transform duration-300 group-hover:rotate-[225deg] group-hover:bg-amber" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
