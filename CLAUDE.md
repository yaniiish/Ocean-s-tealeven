# CLAUDE.md — Ocean's Tealeven

## Contexte
Site one-page vitrine pour **Ocean's Tealeven**, salon de thé et pâtisserie à Merville-Franceville-Plage (14810). Concept : la pop-culture cinéma transformée en expérience gourmande, univers bleu nuit et or. Ce site est une **première proposition commerciale** destinée à convaincre la cliente (Océane Poullain) : la priorité est le rendu visuel fidèle à sa charte et l'affichage clair des infos pratiques.

## Objectif du site
- Démontrer une DA aboutie, en accord avec la charte (bleu marine + or, thème cinéma).
- Afficher les informations clés : horaires, adresse, téléphone, carte, avis clients.
- Aucune fonctionnalité e-commerce. Site informationnel et immersif.

## Stack technique
- **Next.js** (App Router, TypeScript).
- **Tailwind CSS** pour le styling (tokens définis dans `tailwind.config.ts`, voir DESIGN.md).
- **GSAP** pour les animations d'entrée et transitions + CSS pur.
- Référence design/goût : repo `taste-skill` (https://github.com/leonxlnx/taste-skill) à consulter avant toute décision esthétique.
- **Playwright + Chromium** installés pour auto-vérifier le rendu (screenshots desktop + mobile à chaque étape).

## Arborescence attendue
```
oceans-tealeven/
├─ app/
│  ├─ layout.tsx          # fonts, métadonnées, FilmGrain global, Curtain
│  ├─ page.tsx            # assemble les sections dans l'ordre
│  └─ globals.css         # tokens CSS, keyframes ambiance
├─ components/
│  ├─ Curtain.tsx         # rideau d'ouverture (load)
│  ├─ Navbar.tsx          # sticky, logo gauche + liens
│  ├─ Hero.tsx            # titre, tagline, contact, CTA
│  ├─ ReviewsMarquee.tsx  # avis Google défilants
│  ├─ About.tsx           # qui sommes-nous
│  ├─ Gallery.tsx         # pâtisseries "à l'affiche"
│  ├─ Showtimes.tsx       # horaires programme + carte + contact
│  ├─ Footer.tsx          # générique de fin
│  └─ ui/
│     ├─ ProjectorBeam.tsx
│     ├─ FilmGrain.tsx
│     ├─ Eyebrow.tsx      # label cinéma uppercase
│     └─ SectionTitle.tsx
├─ lib/
│  └─ data.ts             # horaires, avis, items galerie (source unique)
├─ public/img/            # assets fournis (voir SECTION.md pour les noms)
├─ tailwind.config.ts
└─ next.config.js
```
Note assets : les fichiers actuels de `img/` (racine) sont conservés tels quels (noms inclus) et seront déplacés dans `public/img/` au moment du scaffold. Les chemins contenant espaces ou double point (ex. `img gallerie 3..jpg`) seront référencés via `next/image` (encodage d'URL).

## Conventions de code
- TypeScript strict. Composants fonctionnels, un composant par fichier, `PascalCase`.
- Données (horaires, avis, galerie) centralisées dans `lib/data.ts`, jamais en dur dans le JSX.
- Classes Tailwind uniquement ; pas de CSS inline sauf valeurs dynamiques. Tokens de couleur/espacement via la config, pas de hex en dur dans les composants.
- Nommage fichiers : composants `PascalCase.tsx`, utilitaires `camelCase.ts`.
- Images via `next/image`, attribut `alt` obligatoire (voir SEO.md).
- Accessibilité non négociable : focus visible, contrastes, `prefers-reduced-motion` respecté partout.

## Design
Se référer à **DESIGN.md**, qui fait autorité sur la palette, la typo, les composants, le motion, le responsive et l'accessibilité.

## Contenu des sections
Se référer à **SECTION.md** pour l'objectif, le message et les visuels de chaque section.

## SEO
Se référer à **SEO.md**. Le site est en `noindex` (exemple commercial, pas destiné au référencement).

## Workflow Git (strict)
- Jamais de commit direct sur `main`.
- Une branche dédiée par chantier : `feat/hero`, `feat/curtain`, `fix/marquee`, `chore/setup`.
- Merge sur `main` **uniquement après validation explicite** de ma part.
- Messages de commit en **Conventional Commits** : `type(scope): description` (ex. `feat(showtimes): programme horaires en style cinéma`). Types : `feat`, `fix`, `style`, `refactor`, `chore`, `docs`.

## Vérification
Après chaque section construite : lancer Playwright, capturer desktop (1440px) et mobile (390px), vérifier visuellement la fidélité à DESIGN.md avant de proposer le merge.

## Ordre de lecture au démarrage
1. CLAUDE.md (ce fichier)
2. DESIGN.md
3. SECTION.md
4. SEO.md
5. taste-skill (repo de référence design)

## Règles de rédaction du contenu du site (impératives)
- Ne jamais utiliser le tiret cadratin (—) dans les phrases du site.
- Ne jamais commencer une phrase en écriture classique pour la terminer en italique.
- Français uniquement, ton chaleureux et gourmand, vocabulaire cinéma assumé.
- Les infos pratiques (horaires, jour de fermeture) restent en formulation classique et lisible : le jour de fermeture est libellé « FERMÉ » (jamais « RELÂCHE »).