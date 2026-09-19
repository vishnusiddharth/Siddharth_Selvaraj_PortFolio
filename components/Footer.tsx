import { site } from "@/lib/site";
import { Reveal } from "./magicui/reveal";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Reveal duration={0.4}>
        <div className="shell flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          {/* <span>Built with Next.js · Deployed on Vercel</span> */}
        </div>
      </Reveal>
    </footer>
  );
}
