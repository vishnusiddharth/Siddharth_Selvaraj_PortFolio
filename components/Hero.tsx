import Link from "next/link";
import { site } from "@/lib/site";
import { TypingRoles } from "./TypingRoles";
import { GitHubIcon, LinkedInIcon, TwitterIcon, ArrowIcon, DownloadIcon } from "./Icons";
import { GlowStage } from "./magicui/glow-backdrop";
import { Reveal } from "./magicui/reveal";
import { Magnetic } from "./magicui/magnetic";
import { BorderBeam } from "./magicui/border-beam";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.socials.twitter, label: "Twitter", Icon: TwitterIcon },
].filter((s) => s.href.length > 0);

export function Hero() {
  return (
    <GlowStage>
      <section aria-labelledby="hero-heading" className="shell grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Reveal delay={0}>
            <p className="eyebrow">{site.location}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 id="hero-heading" className="mt-5 font-mono text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Hi, I&apos;m {site.firstName}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 font-mono text-lg sm:text-xl">
              <TypingRoles roles={site.roles} />
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{site.intro}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Magnetic strength={10}>
                <Link
                  href="/#projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded border border-amber bg-amber px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#0B0D10] transition-colors hover:bg-amber-dim hover:border-amber-dim"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100"
                  />
                  <span className="relative">View projects</span>
                  <ArrowIcon className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <a
                  href={site.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded border border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-amber/50 hover:text-amber"
                >
                  <DownloadIcon className="h-3.5 w-3.5" />
                  Download resume
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-9 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
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
          </Reveal>
        </div>

        {/* Terminal decoration — presentational, hidden from assistive tech.
            Colors are fixed (not theme tokens): a terminal window reads as
            dark chrome regardless of the site's light/dark mode. */}
        <Reveal direction="left" delay={0.15} duration={0.6}>
          <div aria-hidden="true" className="group relative animate-float overflow-hidden rounded-lg border border-[#232931] bg-[#12151A] scan shadow-2xl shadow-black/40">
            <BorderBeam />
            <div className="flex items-center gap-2 border-b border-[#232931] bg-[#171B21] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5A6169]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5A6169]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5A6169]" />
              <span className="ml-2 font-mono text-[11px] text-[#8B939D]">{site.firstName.toLowerCase()}@dev — zsh</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.85] text-[#8B939D] sm:text-[13px]">
<span className="text-[#F0B23E]">$</span> whoami{"\n"}
{site.name.toLowerCase().replace(/\s+/g, "-")}{"\n"}
{"\n"}
<span className="text-[#F0B23E]">$</span> cat stack.json{"\n"}
{"{"}{"\n"}
{"  "}<span className="text-[#E6E9EC]">&quot;frontend&quot;</span>: [<span className="text-[#F0B23E]">&quot;React&quot;</span>, <span className="text-[#F0B23E]">&quot;Redux&quot;</span>, <span className="text-[#F0B23E]">&quot;Angular&quot;</span>],{"\n"}
{"  "}<span className="text-[#E6E9EC]">&quot;mobile&quot;</span>:{"   "}[<span className="text-[#F0B23E]">&quot;React Native&quot;</span>, <span className="text-[#F0B23E]">&quot;Ionic&quot;</span>],{"\n"}
{"  "}<span className="text-[#E6E9EC]">&quot;backend&quot;</span>:{"  "}[<span className="text-[#F0B23E]">&quot;Node&quot;</span>, <span className="text-[#F0B23E]">&quot;PHP&quot;</span>],{"\n"}
{"  "}<span className="text-[#E6E9EC]">&quot;data&quot;</span>:{"     "}[<span className="text-[#F0B23E]">&quot;Neo4j&quot;</span>, <span className="text-[#F0B23E]">&quot;MySQL&quot;</span>]{"\n"}
{"}"}{"\n"}
{"\n"}
<span className="text-[#F0B23E]">$</span> uptime{"\n"}
{site.yearsExperience} years, still enjoying it{"\n"}
{"\n"}
<span className="text-[#F0B23E]">$</span> <span className="inline-block h-[1em] w-[.55ch] translate-y-[.12em] bg-[#F0B23E] animate-blink" />
            </pre>
          </div>
        </Reveal>
      </section>
    </GlowStage>
  );
}
