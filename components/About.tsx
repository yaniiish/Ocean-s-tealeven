import Image from "next/image";
import { about } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-nuit-900 py-section">
      <div className="mx-auto grid max-w-container items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <Reveal className="order-2 md:order-1">
          {/* Cadre or façon photogramme. */}
          <div className="relative rounded-img border border-or-700/50 bg-nuit-800 p-2 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <SectionTitle eyebrow="La maison" title="Le pitch" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 font-inter text-body text-creme-100/90">
              {about.text}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href="#gallery" className="btn-primary mt-8">
              Voir mon travail
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
