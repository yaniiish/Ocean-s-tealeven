// Grain de pellicule : overlay fixe, bruit SVG, soft-light, figé en reduced-motion.
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function FilmGrain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-[-50%] top-[-50%] z-[60] h-[200%] w-[200%] animate-grain opacity-[0.06] mix-blend-soft-light"
      style={{
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: "140px 140px",
      }}
    />
  );
}
