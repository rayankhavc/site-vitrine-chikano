# O'dinner — site vitrine

Site vitrine du restaurant **O'dinner**, 51 Rue Hervé de Mareuil, 85320
Mareuil-sur-Lay-Dissais (Vendée). Même socle technique que le site Chikano :
Next.js 14 (App Router) + Tailwind CSS + Framer Motion, déployé sur Vercel.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Où modifier le contenu

Tout le contenu éditorial est centralisé dans **`lib/data.ts`** :

| À changer | Où |
| --- | --- |
| Nom de domaine | `site.url` (une seule ligne : SEO, sitemap, robots et données structurées suivent) |
| Téléphone, adresse, GPS | `site.phoneDisplay` / `site.address` / `site.geo` |
| Horaires | `openingHours` (plusieurs créneaux par jour possibles, `slots: []` = fermé) |
| Carte et prix | `menu` — remplir le tableau `items` d'une catégorie |
| Avis clients | `reviews` — volontairement vide, aucun avis n'est inventé |
| Communes ciblées (SEO local) | `site.areaServed` |
| FAQ | `faq` (alimente aussi le bloc FAQPage de Google) |

Les visuels sont dans `public/photos/` : `logo.png` (logo de la fiche Google,
fond détouré) et `patisseries-orientales.jpg`.

## SEO / GEO déjà en place

- Métadonnées complètes (title < 60 car., description < 160 car., canonique,
  Open Graph, Twitter Card, balises `geo.*` / ICBM).
- Données structurées `Restaurant` (adresse, GPS, horaires par créneau,
  `hasMenu` par catégories, zone desservie) et `FAQPage`.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, favicon, icône Apple et
  image Open Graph générés par le framework.
- `/llms.txt` : résumé factuel en texte brut pour les moteurs de réponse (IA).
- Images servies en AVIF/WebP, aucun script tiers, carte Google chargée
  seulement au clic (pas de cookie tiers → pas de bandeau cookies).

## À activer à la livraison du domaine

Dans Vercel → Settings → Environment Variables, puis redéployer :

| Variable | Effet |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | active Google Analytics 4 (`G-XXXXXXXXXX`) |
| `GOOGLE_SITE_VERIFICATION` | ajoute la balise de vérification Search Console |

Tant que ces variables sont absentes, aucun script tiers n'est chargé.

---

Conçu et réalisé par [Raythan Web Design](https://raythan.fr).
