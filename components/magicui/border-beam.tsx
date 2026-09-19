/** Rotating amber ring masked down to a hairline border. Pass `hoverOnly`
 *  for cards that should only light up on interaction. */
export function BorderBeam({ hoverOnly = false }: { hoverOnly?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`border-beam absolute inset-0 rounded-[inherit] ${
        hoverOnly ? "opacity-0 transition-opacity duration-500 group-hover:opacity-100" : ""
      }`}
    />
  );
}
