"use client";

import { useState } from "react";
import { SpotlightCard } from "./magicui/spotlight-card";
import { BorderBeam } from "./magicui/border-beam";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Posts to /api/contact. No endpoint ships with the template, so the submit
 * handler short-circuits to a success state — replace `submit` with a real
 * fetch once you wire Resend, Formspree, or a route handler.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 700)); // replace with fetch("/api/contact", …)
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded border border-line bg-raised px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-amber";

  return (
    <SpotlightCard>
    <form onSubmit={submit} className="card p-6">
      <BorderBeam hoverOnly />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} placeholder="Ada Lovelace" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="ada@example.com" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`${field} resize-y`} placeholder="What are you building?" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded border border-amber bg-amber px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[#0B0D10] transition-colors hover:bg-amber-dim hover:border-amber-dim disabled:opacity-60"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100"
          />
          <span className="relative">{status === "sending" ? "Sending…" : "Send message"}</span>
        </button>

        {/* Status is announced, not just coloured. */}
        <p role="status" aria-live="polite" className="font-mono text-[12px]">
          {status === "sent" && <span className="text-amber">Thanks — I&apos;ll be in touch.</span>}
          {status === "error" && <span className="text-red-400">Something went wrong. Email me directly.</span>}
        </p>
      </div>
    </form>
    </SpotlightCard>
  );
}
