import { Section } from "./Section";
import { posts } from "@/lib/posts";
import { ExternalIcon } from "./Icons";
import { Reveal } from "./magicui/reveal";
import { SpotlightCard } from "./magicui/spotlight-card";

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

export function Writing() {
  // No published articles yet — the section stays out of the page entirely.
  if (posts.length === 0) return null;

  return (
    <Section id="writing" index="05" title="Writing" lead="Notes from things that broke and what fixed them.">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.url} delay={i * 0.08} className="h-full">
            <SpotlightCard className="h-full">
              <article className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40">
                <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
                  <time dateTime={post.date}>{fmt.format(new Date(post.date))}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-mono text-base font-medium leading-snug">
                  <a href={post.url} target="_blank" rel="noreferrer noopener" className="transition-colors group-hover:text-amber">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11.5px] text-amber">
                  Read
                  <ExternalIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </article>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
