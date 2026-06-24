"use client";

import { useSpotlight } from "@/lib/useSpotlight";
import { cn } from "@/lib/cn";

type SpotlightTitleProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

// Titre avec "projecteur" : au survol, un spot doré suit le curseur sur le texte.
export default function SpotlightTitle({
  as = "h2",
  children,
  className,
}: SpotlightTitleProps) {
  const Tag = as as React.ElementType;
  const { ref, spotlightProps } = useSpotlight<HTMLHeadingElement>();

  return (
    <Tag ref={ref} {...spotlightProps} className={cn("spotlight-text", className)}>
      {children}
    </Tag>
  );
}
