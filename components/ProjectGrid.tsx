import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";
import { Reveal } from "./magicui/reveal";

export function ProjectGrid() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      lead="Selected work, each with a case study covering the problem, the tradeoffs, and what actually shipped."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} priority={i < 2} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
