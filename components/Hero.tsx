import Image from "next/image";
import { site, images } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectorBeam from "@/components/ui/ProjectorBeam";
import Reveal from "@/components/ui/Reveal";
import SpotlightTitle from "@/components/ui/SpotlightTitle";
import ReviewsMarquee from "@/components/ReviewsMarquee";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden md:min-h-[calc(100svh-88px)]"
    >
      {/* Illustration signature en fond + voile bleu nuit pour la lisibilité. */}
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(12,23,51,0.9) 0%, rgba(12,23,51,0.62) 45%, rgba(12,23,51,0.38) 100%)",
        }}
      />
      <ProjectorBeam />

      <div className="relative z-10 mx-auto grid w-full max-w-container items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-20">
        {/* Colonne gauche : identité + contact + CTAs */}
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>{site.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <SpotlightTitle
              as="h1"
              className="mt-4 text-hero font-playfair font-bold text-creme-100"
            >
              {site.name}
            </SpotlightTitle>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 font-bebas text-2xl uppercase tracking-cine text-or-300 md:text-3xl">
              {site.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 font-playfair text-2xl text-or-500 md:text-3xl">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 max-w-xl font-inter text-body text-creme-100/90">
              <a href={site.phoneHref} className="hover:text-or-300">
                {site.phone}
              </a>
              <span className="px-2 text-or-700" aria-hidden>
                ·
              </span>
              <a
                href={site.mapDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-or-300"
              >
                {site.address}
              </a>
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#showtimes" className="btn-primary">
                Voir les horaires
              </a>
              <a href={site.phoneHref} className="btn-ghost">
                Nous appeler
              </a>
            </div>
          </Reveal>
        </div>

        {/* Colonne droite : devanture + avis qui défilent verticalement */}
        <Reveal delay={200} className="w-full">
          <div className="mx-auto w-full max-w-md md:ml-auto">
            {/* Devanture en cadre or façon photogramme, zoom doux au survol. */}
            <div className="group rounded-img border border-or-700/50 bg-nuit-800/80 p-2 shadow-soft backdrop-blur-sm transition duration-300 hover:border-or-500 hover:shadow-glow-or">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[10px]">
                <Image
                  src={images.devanture.src}
                  alt={images.devanture.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 font-bebas text-sm uppercase tracking-cine text-or-500">
                Ils en parlent
              </p>
              <ReviewsMarquee />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
