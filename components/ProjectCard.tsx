import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { GitHubIcon, ExternalIcon, StarIcon, ArrowIcon } from "./Icons";
import { SpotlightCard } from "./magicui/spotlight-card";
import { BorderBeam } from "./magicui/border-beam";

/** Image top, content bottom, lift on hover. The whole card is a link to the
 *  case study; the repo/demo links sit above it so they stay independently
 *  clickable and keyboard reachable. */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <SpotlightCard className="h-full">
    <article className="card relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl hover:shadow-black/40">
      <BorderBeam hoverOnly />
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-mono text-lg font-medium tracking-tight">
              <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
                {project.title}
              </Link>
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{project.tagline}</p>
          </div>
          {project.stars !== null && (
            <span className="relative z-10 inline-flex flex-none items-center gap-1.5 rounded border border-line bg-raised px-2 py-1 font-mono text-[11px] text-muted">
              <StarIcon className="h-3 w-3 text-amber" />
              <span className="tabular-nums">{project.stars.toLocaleString()}</span>
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <p className="mt-4 border-l-2 border-amber/60 pl-3 text-sm leading-relaxed text-ink">{project.outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded border border-line bg-raised px-2 py-1 font-mono text-[10.5px] text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="relative z-10 inline-flex items-center gap-1.5 font-mono text-[11.5px] text-muted transition-colors hover:text-amber"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="relative z-10 inline-flex items-center gap-1.5 font-mono text-[11.5px] text-muted transition-colors hover:text-amber"
            >
              <ExternalIcon className="h-3.5 w-3.5" />
              Live demo
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11.5px] text-amber">
            Case study
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
    </SpotlightCard>
  );
}
