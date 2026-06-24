import Image from "next/image";
import { gallery, site } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-nuit-800 py-section">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <Reveal>
          <SectionTitle eyebrow="Galerie" title="À l'affiche" align="center" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <li key={item.src}>
              <Reveal delay={index * 80}>
                <figure className="group relative overflow-hidden rounded-img border border-or-700/40 shadow-soft transition-colors duration-300 hover:border-or-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-nuit-900/85 via-nuit-900/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 font-bebas text-lg uppercase tracking-cine text-creme-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a href={site.phoneHref} className="btn-ghost">
              Réserver une part
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
