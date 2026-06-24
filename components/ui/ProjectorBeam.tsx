import { cn } from "@/lib/cn";

type ProjectorBeamProps = {
  className?: string;
};

// Faisceau de projecteur : lueur dorée radiale depuis le coin haut, scintillement doux.
export default function ProjectorBeam({ className }: ProjectorBeamProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute -top-1/4 right-[-10%] h-[120vh] w-[120vh] animate-flicker rounded-full"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(201,176,116,0.22) 0%, rgba(201,176,116,0.07) 32%, transparent 62%)",
        }}
      />
    </div>
  );
}
