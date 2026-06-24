"use client";

import { useCallback, useRef } from "react";

// Suivi du curseur pour l'effet "projecteur" : met à jour --spot-x/--spot-y/--spot-o
// directement sur l'élément (ref + rAF, sans state donc sans re-render).
// Respect de prefers-reduced-motion : pas de suivi, lueur statique centrée.
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef<number | null>(null);
  const reduced = useRef<boolean | null>(null);

  const isReduced = () => {
    if (reduced.current === null) {
      reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return reduced.current;
  };

  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el || isReduced()) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    });
  }, []);

  const onPointerEnter = useCallback(() => {
    ref.current?.style.setProperty("--spot-o", "1");
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot-o", "0");
    el.style.setProperty("--spot-x", "50%");
    el.style.setProperty("--spot-y", "50%");
  }, []);

  return {
    ref,
    spotlightProps: { onPointerMove, onPointerEnter, onPointerLeave },
  };
}
