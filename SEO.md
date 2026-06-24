# SEO.md — Ocean's Tealeven

> Conformément à ta consigne, ce site est un **exemple commercial** : pas de stratégie SEO active pour le moment. Ce fichier ne couvre que l'**hygiène technique minimale**. À activer plus tard si le site est retravaillé et mis en ligne pour de bon.

## Objectif SEO
Aucun pour l'instant. Le site reste en **`noindex, nofollow`** pour ne pas être indexé tant qu'il s'agit d'une maquette de démonstration.

## Mots-clés
Différés (hypothèses à valider le jour d'une vraie mise en ligne) :
- Principal : « salon de thé Merville-Franceville ».
- Secondaires : « pâtisserie Merville-Franceville-Plage », « pâtisserie cinéma Normandie », « gâteaux faits maison Cabourg ».

## On-page (page unique)
- **Title** (≤ 60 car.) : `Ocean's Tealeven · Salon de thé & pâtisserie`.
- **Meta description** (≤ 155 car.) : `Salon de thé et pâtisserie à Merville-Franceville. Des gourmandises faites maison sur le thème du cinéma. Tout un cinéma à chaque bouchée.`
- **H1 unique** : `Ocean's Tealeven` (le sous-titre « Salon de thé · Pâtisserie » reste en sous-texte, pas en H1).

## Bases techniques
- `robots.txt` : `Disallow: /` tant que c'est une démo.
- Balise meta robots : `noindex, nofollow`.
- `sitemap.xml` : non nécessaire en démo (à générer si mise en ligne réelle).
- **Open Graph** : `og:title`, `og:description`, `og:image` (`img/background header.png`), `og:type=website`, `og:locale=fr_FR`.
- **Attributs alt** des images :
  - logo : `Logo Ocean's Tealeven, salon de thé et pâtisserie`.
  - hero : `Illustration : tout un cinéma à chaque bouchée`.
  - devanture : `Devanture bleue d'Ocean's Tealeven à Merville-Franceville-Plage`.
  - qui sommes nous : `Devant la devanture bleue d'Ocean's Tealeven à Merville-Franceville-Plage`.
  - galerie : `alt` précis par visuel dans `lib/data.ts` (pâtisseries, comptoir + clap, salle aux affiches).

## Mesure
À brancher seulement le jour d'une vraie mise en ligne : **Google Search Console** (validation de propriété) et, si souhaité, un outil d'analyse respectueux de la vie privée (Plausible). Inutile sur la maquette.