"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks, images } from "@/lib/data";
import { useSpotlight } from "@/lib/useSpotlight";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { ref: headerRef, spotlightProps } = useSpotlight<HTMLElement>();

  return (
    <>
      <header
        ref={headerRef}
        {...spotlightProps}
        className="sticky top-0 z-50 border-b border-or-500/20 bg-nuit-900/80 backdrop-blur"
      >
        {/* Lueur "projecteur" suivant le curseur sur la barre. */}
        <div aria-hidden className="spotlight-overlay" />
        <nav
          aria-label="Navigation principale"
          className="relative z-10 mx-auto flex h-[72px] max-w-container items-center justify-between px-4 md:h-[88px] md:px-6"
        >
          <a
            href="#hero"
            className="relative block h-16 w-16 md:h-20 md:w-20"
            aria-label="Ocean's Tealeven, accueil"
          >
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              fill
              priority
              sizes="80px"
              className="object-contain object-left"
            />
          </a>

          {/* Liens desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-inter font-medium text-creme-100 underline-offset-8 transition-colors hover:text-or-300 hover:underline hover:decoration-or-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#showtimes" className="btn-primary text-sm">
                Nous trouver
              </a>
            </li>
          </ul>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center text-or-500 md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Overlay plein écran mobile : hors du header pour échapper au backdrop-filter
          (sinon le header devient le bloc conteneur des éléments position:fixed). */}
      {open ? (
        <div className="fixed inset-0 z-[80] flex flex-col bg-nuit-900 md:hidden">
          <div className="flex h-[60px] items-center justify-end px-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-or-500"
              aria-label="Fermer le menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-playfair text-3xl text-creme-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#showtimes" onClick={() => setOpen(false)} className="btn-primary">
                Nous trouver
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
