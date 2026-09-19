import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="shell flex min-h-[55vh] flex-col justify-center py-20">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-mono text-3xl font-medium tracking-tight">This page does not exist.</h1>
        <p className="mt-4 max-w-md text-muted">
          The link may be stale, or the case study may have been renamed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded border border-amber bg-amber px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#0B0D10] transition-colors hover:bg-amber-dim"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
