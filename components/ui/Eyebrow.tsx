import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

// Label "cinéma" : Bebas Neue uppercase, interlettrage large, or.
export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-bebas text-eyebrow uppercase tracking-cine text-or-500",
        className,
      )}
    >
      {children}
    </p>
  );
}
