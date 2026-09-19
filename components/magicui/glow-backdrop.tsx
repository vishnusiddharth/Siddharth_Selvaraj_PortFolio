/**
 * Hero-only decoration: a faint dot grid fading toward the edges plus two
 * slow-floating blurred blobs for depth. The cursor-tracked glow used to
 * live here too, scoped to just this section — it's now the site-wide
 * <CursorSpotlight /> in layout.tsx instead, so this needs no JS anymore.
 */
export function GlowStage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_35%,black,transparent)]"
          style={{
            // --glow-dot flips light/dark in globals.css so the grid stays
            // visible against either background.
            backgroundImage: "radial-gradient(var(--glow-dot) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* Fixed vivid amber, not the theme token — these stay a warm glow
            in light mode too instead of muddying into the bronze text color. */}
        <div className="absolute -left-24 top-10 h-72 w-72 animate-float rounded-full bg-[#F0B23E]/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 animate-float rounded-full bg-[#F0B23E]/[0.07] blur-3xl [animation-delay:-3s]" />
      </div>
      {children}
    </div>
  );
}
