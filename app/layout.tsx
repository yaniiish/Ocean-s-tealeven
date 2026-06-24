import type { Metadata, Viewport } from "next";
import { Playfair_Display, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";
import { site, images } from "@/lib/data";
import FilmGrain from "@/components/ui/FilmGrain";
import Curtain from "@/components/Curtain";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Salon de thé et pâtisserie à Merville-Franceville. Des gourmandises faites maison sur le thème du cinéma. Tout un cinéma à chaque bouchée.";

export const metadata: Metadata = {
  metadataBase: new URL("https://oceans-tealeven.example"),
  title: "Ocean's Tealeven · Salon de thé & pâtisserie",
  description,
  // Maquette de démonstration : non indexée.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Ocean's Tealeven · Salon de thé & pâtisserie",
    description,
    type: "website",
    locale: "fr_FR",
    images: [{ url: images.hero.src, alt: images.hero.alt }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C1733",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={cn(playfair.variable, bebas.variable, inter.variable)}
    >
      <body>
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <FilmGrain />
        <Curtain />
        {children}
      </body>
    </html>
  );
}
