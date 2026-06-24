"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "@/lib/data";

const KEY = "ot-curtain-seen";

// Rideau d'ouverture : un clap de cinéma s'actionne, disparaît, puis les deux
// panneaux velours s'écartent. Joué une fois par session, fondu si reduced-motion.
export default function Curtain() {
  const [active, setActive] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const clapRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen) {
      setActive(false);
      return;
    }
    sessionStorage.setItem(KEY, "1");

    // Reduced-motion : pas de clap ni d'écartement, simple fondu.
    if (reduced) {
      const tl = gsap.timeline({ onComplete: () => setActive(false) });
      tl.set(stickRef.current, { rotation: 0, transformOrigin: "0% 100%" });
      tl.to(rootRef.current, { autoAlpha: 0, duration: 0.6, delay: 0.5 });
      tlRef.current = tl;
      return () => {
        tl.kill();
      };
    }

    const tl = gsap.timeline({ onComplete: () => setActive(false) });
    gsap.set(stickRef.current, { rotation: -32, transformOrigin: "0% 100%" });
    gsap.set(clapRef.current, { autoAlpha: 0, scale: 0.92, y: 12 });

    // 1. Apparition du clap
    tl.to(clapRef.current, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
    });
    // 2. Le clap claque (avec un léger rebond)
    tl.addLabel("clap", "+=0.25");
    tl.to(stickRef.current, { rotation: 0, duration: 0.2, ease: "power3.in" }, "clap");
    tl.to(stickRef.current, { rotation: -7, duration: 0.1, ease: "power1.out" });
    tl.to(stickRef.current, { rotation: 0, duration: 0.13, ease: "power2.inOut" });
    // 3. Le clap disparaît
    tl.to(
      clapRef.current,
      { autoAlpha: 0, scale: 1.08, duration: 0.45, ease: "power2.in" },
      "+=0.35",
    );
    // 4. Le rideau s'ouvre (smooth)
    tl.addLabel("open");
    tl.to(leftRef.current, { xPercent: -100, duration: 1.4, ease: "power4.inOut" }, "open");
    tl.to(rightRef.current, { xPercent: 100, duration: 1.4, ease: "power4.inOut" }, "open");
    tl.to(rootRef.current, { autoAlpha: 0, duration: 0.5 }, "open+=1.05");

    tlRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  const skip = () => {
    tlRef.current?.kill();
    sessionStorage.setItem(KEY, "1");
    setActive(false);
  };

  if (!active) return null;

  return (
    <div ref={rootRef} aria-label="Animation d'ouverture" className="fixed inset-0 z-[90] overflow-hidden">
      {/* Panneaux velours */}
      <div ref={leftRef} className="velvet absolute left-0 top-0 h-full w-1/2" />
      <div ref={rightRef} className="velvet absolute right-0 top-0 h-full w-1/2" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-[1] h-full w-px -translate-x-1/2 bg-or-500/70"
      />

      {/* Clap de cinéma */}
      <div
        ref={clapRef}
        className="absolute left-1/2 top-1/2 z-[2] w-[300px] max-w-[80vw] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="clap">
          <div className="clap-sticks">
            <div className="clap-stick clap-stick--fixed" />
            <div ref={stickRef} className="clap-stick clap-stick--moving" />
          </div>
          <div className="clap-body">
            <p className="font-bebas text-2xl uppercase tracking-cine text-or-300">
              {site.name}
            </p>
            <div className="clap-row">
              <span>Scène 01</span>
              <span>Prise 01</span>
            </div>
            <div className="clap-row">
              <span>Réal.</span>
              <span>{site.chef}</span>
            </div>
            <div className="clap-row">
              <span>Lieu</span>
              <span>{site.city}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={skip}
        className="btn-ghost absolute bottom-8 left-1/2 z-[3] -translate-x-1/2 px-5 py-2 text-sm"
        aria-label="Passer l'animation d'ouverture"
      >
        Passer
      </button>
    </div>
  );
}
