import Image from "next/image";
import { site, images, navLinks, hoursSummary } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-or-500/40 bg-nuit-800">
      <div className="mx-auto max-w-container px-4 py-14 md:px-6">
        <span aria-hidden className="mx-auto mb-10 block h-px w-24 bg-or-500" />

        <div className="grid gap-10 md:grid-cols-3">
          {/* Marque */}
          <div>
            <div className="relative h-28 w-28">
              <Image
                src={images.logo.src}
                alt={images.logo.alt}
                fill
                sizes="112px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 font-playfair text-lg text-or-300">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation de pied de page">
            <p className="font-bebas text-base uppercase tracking-cine text-or-500">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center font-inter text-creme-100/90 transition-colors hover:text-or-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-bebas text-base uppercase tracking-cine text-or-500">
              Nous trouver
            </p>
            <address className="mt-4 flex flex-col gap-2 font-inter not-italic text-creme-100/90">
              <span>{site.address}</span>
              <a href={site.phoneHref} className="hover:text-or-300">
                {site.phone}
              </a>
              <span className="text-creme-100/70">{hoursSummary}</span>
            </address>
          </div>
        </div>

        {/* Barre basse : copyright + crédit */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-or-500/10 pt-6 text-sm text-creme-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            Fait par{" "}
            <a
              href={site.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-or-300 underline-offset-4 hover:underline"
            >
              {site.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
