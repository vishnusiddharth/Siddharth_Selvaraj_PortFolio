import { Reveal } from "./magicui/reveal";

/** Shared section shell: semantic <section>, consistent heading pattern,
 *  and an id every nav link and skip target can rely on. */
export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <p className="eyebrow">
              <span aria-hidden="true">{index} / </span>
              {title}
            </p>
            <h2 id={headingId} className="mt-4 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
              {title}
            </h2>
            {lead ? <p className="mt-4 text-muted leading-relaxed">{lead}</p> : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
