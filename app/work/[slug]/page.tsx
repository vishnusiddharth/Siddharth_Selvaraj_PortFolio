import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GitHubIcon, ExternalIcon, ArrowIcon } from "@/components/Icons";
import { projects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = { slug: string };

/** Every case study is statically generated at build time. */
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };

  const title = `${project.title} — ${project.tagline}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `${site.url}/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url: `${site.url}/work/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 750, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.image],
    },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-12">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
      <Nav />
      <main id="main" className="shell py-14">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-amber"
        >
          <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
          All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">
            {project.year} · {project.tagline}
          </p>
          <h1 className="mt-4 font-mono text-4xl font-medium tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded border border-line px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.12em] transition-colors hover:border-amber hover:text-amber"
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
                className="inline-flex items-center gap-2 rounded border border-line px-4 py-2.5 font-mono text-[11.5px] uppercase tracking-[0.12em] transition-colors hover:border-amber hover:text-amber"
              >
                <ExternalIcon className="h-3.5 w-3.5" />
                Live demo
              </a>
            )}
          </div>
        </header>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-raised">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover"
          />
        </div>

        {/* Results first — the reader wants to know whether it worked. */}
        <section className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cs.results.map((r) => (
            <div key={r.label} className="bg-surface px-5 py-6">
              <p className="font-mono text-2xl font-medium text-amber tabular-nums">{r.value}</p>
              <p className="mt-2 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.11em] text-muted">{r.label}</p>
            </div>
          ))}
        </section>

        <div className="mt-6 max-w-3xl">
          <Block title="Problem">
            <p className="leading-relaxed text-muted">{cs.problem}</p>
          </Block>

          <Block title="Users">
            <p className="leading-relaxed text-muted">{cs.users}</p>
          </Block>

          <Block title="Constraints">
            <ul className="space-y-2.5">
              {cs.constraints.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[.6em] h-1.5 w-1.5 flex-none rotate-45 bg-amber/70" />
                  {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Tradeoffs">
            <ul className="space-y-4">
              {cs.tradeoffs.map((t) => (
                <li key={t.choice} className="card p-5">
                  <p className="font-mono text-sm text-ink">{t.choice}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-amber">Because </span>
                    {t.because}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">Cost </span>
                    {t.cost}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        {/* Data-flow diagram area — a real ordered pipeline, not decoration. */}
        <section className="border-t border-line py-12">
          <h2 className="eyebrow">Architecture / data flow</h2>
          <ol className="mt-6 grid gap-3 lg:grid-cols-3">
            {cs.architecture.map((node, i) => (
              <li key={node.step} className="card relative p-5">
                <span className="font-mono text-[10.5px] tabular-nums text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-mono text-sm text-ink">{node.step}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{node.detail}</p>
                {i < cs.architecture.length - 1 && (
                  <span aria-hidden="true" className="absolute -bottom-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-line lg:block" />
                )}
              </li>
            ))}
          </ol>
        </section>

        <div className="max-w-3xl">
          <Block title="UI states">
            <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
              {cs.uiStates.map((s) => (
                <div key={s.state} className="bg-surface px-5 py-4 sm:flex sm:gap-6">
                  <dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-amber sm:w-36 sm:flex-none">{s.state}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-0">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Lessons learned">
            <ul className="space-y-3">
              {cs.lessons.map((l) => (
                <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[.6em] h-1.5 w-1.5 flex-none rotate-45 bg-amber/70" />
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <section className="border-t border-line py-12">
          <p className="text-muted">
            Want the detail behind another project?{" "}
            <Link href="/#projects" className="text-amber underline decoration-amber/40 decoration-2 underline-offset-4 hover:decoration-amber">
              Back to all work
            </Link>
            , or{" "}
            <a href={`mailto:${site.email}`} className="text-amber underline decoration-amber/40 decoration-2 underline-offset-4 hover:decoration-amber">
              get in touch
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
