import { cn } from "@/lib/cn";
import Eyebrow from "./Eyebrow";
import SpotlightTitle from "./SpotlightTitle";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

// Titre de section : eyebrow optionnelle, H2 Playfair, liseré or.
export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center" ? "flex flex-col items-center text-center" : "",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <SpotlightTitle as="h2" className="text-h2 font-playfair font-bold text-creme-100">
        {title}
      </SpotlightTitle>
      <span
        aria-hidden
        className="mt-4 block h-px w-16 bg-or-500"
      />
    </div>
  );
}
