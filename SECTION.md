# SECTION.md — Ocean's Tealeven

Ordre d'affichage du one-page. Assets dans `public/img/` : les noms listés ci-dessous sont les fichiers réels fournis (conservés tels quels, espaces inclus).

## 0. Rideau d'ouverture
- **Objectif** : poser l'univers « projection » dès le chargement.
- **Contenu** : deux panneaux velours bleu nuit qui s'écartent et révèlent le hero. Bouton « Passer ».
- **Visuels** : texture velours CSS, liseré or central.
- **CTA** : aucun (transition automatique).

## 1. Navbar (sticky)
- **Objectif** : navigation permanente et accès rapide aux infos.
- **Contenu** : logo à gauche ; liens Accueil · La maison · Galerie · Séances ; bouton « Nous trouver ».
- **Visuels** : `img/logo.png` (PNG transparent à fournir).
- **CTA** : « Nous trouver » → ancre Séances.

## 2. Hero — « La grande première »
- **Objectif** : impact visuel immédiat fidèle à la charte + infos essentielles.
- **Contenu** : eyebrow « SÉANCE PERMANENTE » ; titre **Ocean's Tealeven** ; sous-titre « Salon de thé · Pâtisserie » ; signature « Tout un cinéma à chaque bouchée » ; ligne contact : 02 31 28 01 44 · 24 route de Cabourg, Merville-Franceville-Plage 14810.
- **Visuels** : illustration signature `img/background header.png` (image fournie) en fond avec voile bleu nuit pour lisibilité ; faisceau de projecteur ; grain de pellicule global.
- **CTA** : « Voir les séances » (ancre) + « Nous appeler » (tel:).

## 3. Avis Google (bandeau défilant)
- **Objectif** : rassurer via la preuve sociale, en discret.
- **Contenu** : 3 avis 5 étoiles défilants (légèrement nettoyés pour la lisibilité) :
  1. « Belle découverte du salon de thé, nous avons passé un agréable moment. Un accueil convivial par Océane avec ses pâtisseries faites maison excellentes. Nous recommandons sans hésitation. » Laurent Llerena, 5 étoiles.
  2. « Je recommande les délicieux gâteaux de ce petit salon de thé. On peut aussi y passer le midi pour des tartes salées et des parts de pizza. À découvrir absolument ! » Muriel Yung, 5 étoiles.
  3. « Patronne aimable, serviable et souriante, magasin très beau. Les pâtisseries sont sublimes, les gâteaux légers, les tartes exceptionnelles, et les mini kouign-amann comme en Bretagne. Allez-y, vos papilles en redemanderont. » Jocelyne Hebert, 5 étoiles.
- **Visuels** : étoiles or, cartes `indigo-700`.
- **CTA** : aucun.

## 4. Qui sommes-nous — « Le pitch »
- **Objectif** : raconter Océane et le concept cinéma.
- **Contenu (texte intégral, prêt à intégrer)** :
  « Bienvenue à Océane Poullain, cheffe pâtissière, qui réalise aujourd'hui son rêve au 24 route de Cabourg. Dans son salon de thé et pâtisserie Ocean's Tealeven, elle réunit ses deux passions : la pâtisserie et le cinéma. Ici, chaque gourmandise évoque un film, et chaque visite devient une séance. Plaisir, gourmandise et partage : un univers à découvrir, fait maison sur place, à déguster chez nous ou à emporter, du mardi au dimanche de 10h à 19h. Que l'on allume les projecteurs : la séance commence. »
- **Visuels** : `img/qui sommes nous.jpg` (intérieur, affiches ciné), en cadre or façon photogramme.
- **CTA** : « Découvrir la carte » → ancre Galerie.

## 5. Galerie — « À l'affiche »
- **Objectif** : donner envie avec les créations.
- **Contenu** : grille de pâtisseries (tartes, choux, kouign-amann, tartes salées, parts de pizza), légendes courtes optionnelles.
- **Visuels** : `img/img gallerie.webp`, `img/img gallerie 2.webp`, `img/img gallerie 3..jpg`, `img/img gallerie 4.jpg` (4 visuels fournis). Grille data-driven (`lib/data.ts`), 4 entrées actuelles, layout 2/3/4 colonnes extensible sans retoucher le code (d'autres visuels possibles plus tard).
- **CTA** : « Réserver une part » via téléphone, ou aucun.

## 6. Contact & Adresse — « Le programme »
- **Objectif** : infos pratiques affichées comme un programme de cinéma.
- **Contenu** :
  - Horaires en style séances :
    - LUNDI FERMÉ
    - MARDI 10:00 / 19:00
    - MERCREDI 10:00 / 19:00
    - JEUDI 10:00 / 19:00
    - VENDREDI 10:00 / 19:00
    - SAMEDI 10:00 / 19:00
    - DIMANCHE 10:00 / 19:00
  - Adresse : 24 route de Cabourg, Merville-Franceville-Plage, 14810.
  - Téléphone : 02 31 28 01 44.
- **Visuels** : embed Google Maps (iframe, `title` accessible), `img/devanture.webp` en appui.
- **CTA** : « Itinéraire » (lien Maps) + « Nous appeler » (tel:).

## 7. Footer — « Générique de fin »
- **Objectif** : clore la projection, rappeler l'essentiel.
- **Contenu** : crédits stylés générique : « CHEFFE PÂTISSIÈRE · Océane Poullain », « SALLE · Merville-Franceville-Plage », horaires résumés, adresse, téléphone, mention « Tout un cinéma à chaque bouchée ». Liens réseaux si fournis.
- **Visuels** : logo, liseré or, fond `nuit-900`.
- **CTA** : « Nous trouver » + téléphone.

## Assets fournis (`public/img/`)
- `logo.png` (logo)
- `background header.png` (illustration signature, fond du hero)
- `devanture.webp` (façade)
- `qui sommes nous.jpg` (intérieur, affiches ciné)
- `img gallerie.webp`, `img gallerie 2.webp`, `img gallerie 3..jpg`, `img gallerie 4.jpg` (galerie : 4 visuels pour l'instant, d'autres à venir possibles)