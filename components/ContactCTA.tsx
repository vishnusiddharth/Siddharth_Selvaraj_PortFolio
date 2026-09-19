import { Section } from "./Section";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { Reveal } from "./magicui/reveal";
import { Magnetic } from "./magicui/magnetic";

export function ContactCTA() {
  return (
    <Section
      id="contact"
      index="07"
      title="Interested in working together?"
      lead="Open to full-time roles, freelance engagements, and consulting on platform or frontend architecture."
    >
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal direction="left">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-words font-mono text-xl text-amber underline decoration-amber/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-amber sm:text-2xl"
            >
              {site.email}
            </a>

            <p className="mt-6 text-sm leading-relaxed text-muted">{site.responseTime}</p>

            <ul className="mt-7 flex gap-3">
              {[
                { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
                { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                { href: site.socials.twitter, label: "Twitter", Icon: TwitterIcon },
              ].filter((s) => s.href.length > 0).map(({ href, label, Icon }) => (
                <li key={label}>
                  <Magnetic strength={16}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-muted transition-colors hover:border-amber hover:text-amber"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
