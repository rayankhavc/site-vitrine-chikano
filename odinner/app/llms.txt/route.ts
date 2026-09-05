import {
  site,
  menu,
  faq,
  openingHours,
  formatSlot,
  areaServedDisplay,
} from "@/lib/data";

/**
 * /llms.txt — resume factuel du restaurant en texte brut.
 *
 * Les moteurs de reponse (ChatGPT, Perplexity, Google AI Overviews...) citent
 * plus volontiers une source dont les faits sont lisibles sans JavaScript et
 * sans mise en page. C'est le pendant "GEO" du sitemap : le meme contenu que
 * la page d'accueil, mais servi tel quel.
 */
export const dynamic = "force-static";

export function GET() {
  const hours = openingHours
    .map((entry) => {
      const slots =
        entry.slots.length === 0
          ? "Fermé"
          : entry.slots.map(formatSlot).join(" et ");
      return `- ${entry.day} : ${slots}`;
    })
    .join("\n");

  const categories = menu
    .map((category) => `- ${category.title} : ${category.note}`)
    .join("\n");

  const questions = faq
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join("\n\n");

  const body = `# ${site.name}

> Restauration rapide halal à ${site.address.city} (${site.address.zip}), en Vendée.
> Kebab, pizza, tacos, burger, panini, couscous et pâtisseries orientales,
> préparés à la commande, sur place ou à emporter.

## Coordonnées

- Nom : ${site.name}
- Adresse : ${site.address.full}, France
- Téléphone : ${site.phoneDisplay} (${site.phoneE164})
- Coordonnées GPS : ${site.geo.lat}, ${site.geo.lng}
- Site web : ${site.url}
- Fiche Google : ${site.googleReviewsUrl}
- Facebook : ${site.facebookUrl}
- Services : ${site.services.join(", ")}
- Viandes halal : oui
- Communes desservies : ${site.city}, ${areaServedDisplay}

## Horaires d'ouverture

${hours}

Le lundi et le vendredi, le restaurant ouvre uniquement le soir.

## La carte

${categories}

Les prix ne sont pas publiés en ligne : ils sont communiqués par téléphone au ${site.phoneDisplay}.

## Questions fréquentes

${questions}

## Mentions

- Mentions légales : ${site.url}/mentions-legales
- Confidentialité : ${site.url}/confidentialite
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
