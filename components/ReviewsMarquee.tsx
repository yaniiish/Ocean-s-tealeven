import { reviews, type Review } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-sm text-or-500" aria-label={`${rating} étoiles sur 5`}>
      {"★".repeat(rating)}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="rounded-card border border-or-700/40 bg-indigo-700 p-4">
      <Stars rating={review.rating} />
      <p className="mt-2 font-inter text-xs leading-relaxed text-creme-100/90">
        {review.quote}
      </p>
      <p className="mt-2 font-bebas text-sm uppercase tracking-cine text-or-300">
        {review.author}
      </p>
    </li>
  );
}

function ReviewGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-col gap-4 pb-4" aria-hidden={hidden || undefined}>
      {reviews.map((review) => (
        <ReviewCard key={review.author} review={review} />
      ))}
    </ul>
  );
}

// Reel vertical d'avis Google : défile de haut en bas, façon générique de cinéma.
export default function ReviewsMarquee() {
  return (
    <section
      aria-label="Avis clients Google"
      className="reel-wrap relative h-72 overflow-hidden"
    >
      {/* Fondus haut / bas pour l'effet projection. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-nuit-900 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-nuit-900 to-transparent"
      />
      <div className="reel-track flex animate-marquee-y flex-col">
        <ReviewGroup />
        <ReviewGroup hidden />
      </div>
    </section>
  );
}
