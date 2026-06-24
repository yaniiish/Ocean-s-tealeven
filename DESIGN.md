# DESIGN.md — Ocean's Tealeven

## 1. Vue d'ensemble
Salon de thé et pâtisserie « cinéma ». Le site se vit comme une **projection** : rideau qui s'ouvre, faisceau de projecteur, grain de pellicule, horaires en programme, footer en générique. Bleu nuit et or dominent ; le cobalt et quelques touches vives (rouge, jaune, vert des chaises) font respirer. Cible large : habitants et touristes, toutes générations.

## 2. Direction créative
- **Parti pris** : élégance nostalgique de salle de cinéma + clin d'œil geek cinéma 
- **Ambiance** : feutrée, dorée, chaleureuse. Sombre dominant, lumière dorée comme un projecteur.
- **Signature** : « Tout un cinéma à chaque bouchée ».
- **Références** : marquees de cinéma, génériques de fin, tickets de séance, programmes de salle.
- **À éviter** : look corporate plat, flat design froid, surcharge d'effets simultanés.

## 3. Système visuel

### Palette (tokens)
| Token | Hex | Usage |
|---|---|---|
| `nuit-900` | `#0C1733` | Fond principal (la salle) |
| `nuit-800` | `#14224A` | Fonds de sections alternés |
| `indigo-700` | `#2E3A6B` | Cartes, surfaces surélevées |
| `cobalt-500` | `#2B36B0` | Accent (devanture, hovers, liens) |
| `or-500` | `#C9B074` | Or principal : titres, traits, CTA |
| `or-300` | `#E0CD96` | Or clair : highlights, hover CTA |
| `or-700` | `#A8884A` | Bordures or, ombrages |
| `creme-100` | `#F4ECD8` | Texte sur fond sombre, sections « papier » |
| `acc-rouge` | `#C8443A` | Touches rares (chaises) |
| `acc-jaune` | `#E6C13F` | Touches rares (chaises) |
| `acc-vert` | `#2E6E50` | Touches rares (chaises) |

Règle : 80% bleu nuit + or, ~15% cobalt, ~5% accents vifs maximum.

### Typographie
- **Playfair Display** (700/900) : titres de sections, hero. `line-height: 1.05` sur le hero.
- **Bebas Neue** : labels « cinéma » (eyebrows, en-têtes de séances), uppercase, `letter-spacing: 0.14em`.
- **Inter** (400/500/600) : corps, navigation, valeurs.

Échelle (fluide, base 16px) :
| Rôle | Taille | Police |
|---|---|---|
| Hero title | `clamp(2.5rem, 6vw, 4.5rem)` | Playfair 700 |
| H2 section | `clamp(1.75rem, 3.5vw, 2.75rem)` | Playfair 700 |
| H3 | `1.5rem` | Playfair 600 |
| Eyebrow | `clamp(1rem, 2vw, 1.25rem)` | Bebas Neue |
| Body | `1.0625rem` / lh `1.7` | Inter 400 |
| Small | `0.875rem` | Inter 400 |

### Espacements et grille
- Échelle (px) : 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Container : `max-width: 1200px`, gouttière 24px desktop / 16px mobile.
- Padding vertical de section : 96–128px desktop, 64px mobile.
- Galerie : 12-col conceptuelle, rendu 2 / 3 / 4 colonnes (mobile / tablette / desktop).

### Rayons, ombres, traits
- Rayons : boutons 8px, cartes 12px, images 12–16px.
- Bordure signature : `1px solid or-700` à 40% d'opacité, passe à `or-500` plein au hover.
- Ombre douce : `0 8px 32px rgba(0,0,0,.35)`. Lueur or au hover : `0 0 24px rgba(201,176,116,.25)`.

## 4. Composants UI

### Boutons
- **Primaire** : fond `or-500`, texte `nuit-900`, radius 8px, padding `14px 28px`, Inter 600. Hover : fond `or-300` + translateY(-2px) + lueur or. Focus : outline `2px creme-100` offset 2px. Disabled : opacité .5.
- **Secondaire (ghost)** : fond transparent, bordure `1px or-500`, texte `or-500`. Hover : fond `or-500`, texte `nuit-900`.
- **Lien** : `creme-100`, soulignement `or-500` au hover.
- Cibles tactiles ≥ 44px.

### Cartes
- **Avis** : fond `indigo-700`, bordure or 40%, radius 12px, padding 20px. Contient : étoiles or, citation (Inter), nom (Bebas). Hover : bordure or pleine + scale 1.02.
- **Galerie** : image plein cadre, overlay dégradé bas au hover, légende qui monte, cadre or façon photogramme.

### Navigation (Navbar)
- Sticky, hauteur 72px desktop / 60px mobile, fond `nuit-900` à 80% + `backdrop-blur`, bordure basse or 20%.
- Logo image à gauche. Liens à droite (Inter 500, `creme-100`, soulignement or au hover) : Accueil, La maison, Galerie, Séances.
- CTA « Nous trouver » (bouton primaire) ancré vers Séances.
- Mobile : burger → overlay plein écran `nuit-900`, liens centrés Playfair.

### Formulaires
Aucun formulaire prévu (site informationnel). Si ajout ultérieur de contact : mêmes tokens, labels visibles, états focus/erreur explicites.

## 5. Motion et interactions
Tout effet respecte `prefers-reduced-motion: reduce` (désactivation des animations d'ambiance, conservation du contenu).
- **Rideau d'ouverture** : 2 panneaux velours (dégradé `nuit-900`→`nuit-800` + texture) couvrent l'écran au load, s'écartent après 400ms sur 1.2s `cubic-bezier(0.76,0,0.24,1)`, puis sont retirés du DOM. Bouton « Passer », joué une fois par session (`sessionStorage`).
- **Faisceau de projecteur** : lumière dorée radiale depuis un coin haut, scintillement subtil 6s (opacité 0.85↔1), `pointer-events: none`.
- **Grain de pellicule** : overlay fixe, bruit SVG, opacité 0.04–0.06, `mix-blend-mode: soft-light`, animation de position 8 pas. Désactivé en reduced-motion.
- **Reveals au scroll** : opacité 0→1, translateY 24px→0, 0.6s, stagger 0.08s, déclenché à 15% de visibilité, une seule fois.
- **Marquee avis** : translateX en boucle 35s linéaire, liste dupliquée pour la continuité, pause au hover/focus.
- **Galerie hover** : scale 1.03 + cadre or + légende.
- **Séances** : lignes en fade/slide ; le lundi « FERMÉ » en accent discret, toujours lisible.

## 6. Responsive
Mobile-first. Breakpoints Tailwind : sm 640, md 768, lg 1024, xl 1280.
- **Mobile** : navbar burger, hero en colonne, galerie 2 colonnes, horaires en liste verticale, carte pleine largeur.
- **Tablette** : galerie 3 colonnes, hero sur 2 zones.
- **Desktop** : galerie 4 colonnes, container 1200px, effets d'ambiance pleins.

## 7. Accessibilité
- Contrastes : crème sur nuit ≥ 12:1, or sur nuit réservé aux titres/grands éléments (≈ 8:1), cobalt sur crème pour boutons (≈ 8:1). Pas d'or en petit corps de texte.
- Clavier : `focus-visible` 2px `creme-100`/or partout, lien « Aller au contenu », ordre de tabulation logique, marquee et rideau interruptibles.
- ARIA : landmarks `nav`/`main`/`footer`, `aria-label` sur la région avis et l'iframe carte (`title`), boutons labellisés.
- Images : `alt` descriptif systématique (voir SEO.md).
- `prefers-reduced-motion` : rideau remplacé par un fade, grain et marquee figés.