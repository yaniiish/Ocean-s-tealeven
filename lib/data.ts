// Source unique des contenus du site (jamais de données en dur dans le JSX).

export const site = {
  name: "Ocean's Tealeven",
  subtitle: "Salon de thé · Pâtisserie",
  tagline: "Tout un cinéma à chaque bouchée",
  eyebrow: "Séance permanente",
  chef: "Océane Poullain",
  city: "Merville-Franceville-Plage",
  postalCode: "14810",
  phone: "02 31 28 01 44",
  phoneHref: "tel:+33231280144",
  address: "24 route de Cabourg, Merville-Franceville-Plage, 14810",
  addressShort: "24 route de Cabourg",
  // Embed Google Maps sans clé API.
  mapEmbedSrc:
    "https://maps.google.com/maps?q=24%20route%20de%20Cabourg%2C%20Merville-Franceville-Plage%2014810&z=15&output=embed",
  // Lien itinéraire Google Maps.
  mapDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=24+route+de+Cabourg+Merville-Franceville-Plage+14810",
  credit: { label: "yan-dev.fr", href: "https://yan-dev.fr" },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "La maison", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Séances", href: "#showtimes" },
];

export type Review = {
  quote: string;
  author: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote:
      "Belle découverte du salon de thé, nous avons passé un agréable moment. Un accueil convivial par Océane avec ses pâtisseries faites maison excellentes. Nous recommandons sans hésitation.",
    author: "Laurent Llerena",
    rating: 5,
  },
  {
    quote:
      "Je recommande les délicieux gâteaux de ce petit salon de thé. On peut aussi y passer le midi pour des tartes salées et des parts de pizza. À découvrir absolument !",
    author: "Muriel Yung",
    rating: 5,
  },
  {
    quote:
      "Patronne aimable, serviable et souriante, magasin très beau. Les pâtisseries sont sublimes, les gâteaux légers, les tartes exceptionnelles, et les mini kouign-amann comme en Bretagne. Allez-y, vos papilles en redemanderont.",
    author: "Jocelyne Hebert",
    rating: 5,
  },
];

export type Hours = {
  day: string;
  value: string;
  closed?: boolean;
};

// Programme des séances (style cinéma, mais infos classiques et lisibles).
export const hours: Hours[] = [
  { day: "Lundi", value: "Fermé", closed: true },
  { day: "Mardi", value: "10:00 / 19:00" },
  { day: "Mercredi", value: "10:00 / 19:00" },
  { day: "Jeudi", value: "10:00 / 19:00" },
  { day: "Vendredi", value: "10:00 / 19:00" },
  { day: "Samedi", value: "10:00 / 19:00" },
  { day: "Dimanche", value: "10:00 / 19:00" },
];

export const hoursSummary = "Du mardi au dimanche, 10:00 / 19:00";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

// Grille data-driven : 4 entrées aujourd'hui, extensible sans toucher au layout.
export const gallery: GalleryItem[] = [
  {
    src: "/img/img gallerie 3..jpg",
    alt: "Assortiment de pâtisseries maison d'Ocean's Tealeven : tarte aux framboises, flan, entremets et choux",
    caption: "La sélection du jour",
  },
  {
    src: "/img/img gallerie 4.jpg",
    alt: "Pâtisseries maison d'Ocean's Tealeven en boîte, dont un chou praliné saupoudré de sucre",
    caption: "Le praliné en vedette",
  },
  {
    src: "/img/img gallerie.webp",
    alt: "Comptoir d'Ocean's Tealeven : clap de cinéma, figurine R2-D2 et carte des cafés encadrée",
    caption: "Dans les coulisses",
  },
  {
    src: "/img/img gallerie 2.webp",
    alt: "Salle d'Ocean's Tealeven décorée d'affiches de cinéma, avec ses chaises rouge, jaune et verte",
    caption: "La salle, grand écran",
  },
];

export const about = {
  text: "Bienvenue à Océane Poullain, cheffe pâtissière, qui réalise aujourd'hui son rêve au 24 route de Cabourg. Dans son salon de thé et pâtisserie Ocean's Tealeven, elle réunit ses deux passions : la pâtisserie et le cinéma. Ici, chaque gourmandise évoque un film, et chaque visite devient une séance. Plaisir, gourmandise et partage : un univers à découvrir, fait maison sur place, à déguster chez nous ou à emporter, du mardi au dimanche de 10h à 19h. Que l'on allume les projecteurs : la séance commence.",
  image: {
    src: "/img/qui sommes nous.jpg",
    alt: "Devant la devanture bleue d'Ocean's Tealeven à Merville-Franceville-Plage",
  },
} as const;

export const images = {
  logo: { src: "/img/logo.png", alt: "Logo Ocean's Tealeven, salon de thé et pâtisserie" },
  hero: { src: "/img/background header.png", alt: "Illustration : tout un cinéma à chaque bouchée" },
  devanture: {
    src: "/img/devanture.webp",
    alt: "Devanture bleue d'Ocean's Tealeven à Merville-Franceville-Plage",
  },
} as const;
