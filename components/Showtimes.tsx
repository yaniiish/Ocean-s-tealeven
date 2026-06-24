import { site, hours } from "@/lib/data";
import { cn } from "@/lib/cn";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Showtimes() {
  return (
    <section id="showtimes" className="bg-nuit-900 py-section">
      <div className="mx-auto grid max-w-container gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        {/* Programme des séances */}
        <div>
          <Reveal>
            <SectionTitle eyebrow="Le programme" title="Séances" />
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8">
              {hours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-or-700/30 py-3"
                >
                  <span className="font-bebas text-xl uppercase tracking-cine text-creme-100">
                    {row.day}
                  </span>
                  <span
                    className={cn(
                      "font-inter",
                      row.closed
                        ? "font-semibold uppercase tracking-wide text-or-700"
                        : "text-creme-100/90",
                    )}
                  >
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 font-inter text-body text-creme-100/90">
              <p className="font-semibold text-creme-100">{site.name}</p>
              <p className="mt-1">{site.address}</p>
              <p className="mt-1">
                <a href={site.phoneHref} className="hover:text-or-300">
                  {site.phone}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.mapDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Itinéraire
              </a>
              <a href={site.phoneHref} className="btn-ghost">
                Nous appeler
              </a>
            </div>
          </Reveal>
        </div>

        {/* Carte */}
        <Reveal delay={120}>
          <div className="h-full overflow-hidden rounded-img border border-or-700/50 shadow-soft">
            <iframe
              src={site.mapEmbedSrc}
              title="Carte : Ocean's Tealeven, 24 route de Cabourg, Merville-Franceville-Plage"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full border-0 md:h-full md:min-h-[28rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
