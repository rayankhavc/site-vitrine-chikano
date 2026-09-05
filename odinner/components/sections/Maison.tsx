import Image from "next/image";
import { photos } from "@/lib/data";

const points = [
  {
    title: "Préparé à la commande",
    text: "Rien n'attend sous une lampe : votre kebab, votre pizza ou votre tacos part en cuisine quand vous commandez.",
  },
  {
    title: "Viandes halal",
    text: "Toutes les viandes servies chez O'dinner sont halal, du kebab au couscous.",
  },
  {
    title: "Pâtisseries orientales",
    text: "Baklava, cornes de gazelle, makrouts : la vitrine sucrée change au fil des jours, à emporter à la pièce ou au plateau.",
  },
  {
    title: "Plus qu'un kebab",
    text: "Pizzas et couscous à la carte : c'est rare pour un fast-food, et ça change des mêmes menus toute la semaine.",
  },
];

export default function Maison() {
  return (
    <section id="maison" className="border-t border-coal-line/60 py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        {/* Photo reelle de la vitrine */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-coal-line/70">
            <Image
              src={photos.patisseries}
              alt="Vitrine de pâtisseries orientales chez O'dinner à Mareuil-sur-Lay-Dissais"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rotate-3 rounded-xl border-2 border-ink bg-red px-4 py-2 text-center shadow-plate">
            <span className="block font-display text-lg uppercase leading-none tracking-wide text-bone">
              La vitrine
            </span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-wide text-bone/85">
              Pâtisseries orientales
            </span>
          </div>
        </div>

        {/* Texte */}
        <div>
          <p className="kicker">
            <span className="h-px w-8 bg-red" /> La différence O&apos;dinner
          </p>
          <h2 className="h-section">Du salé, du sucré, du vrai</h2>
          <ul className="mt-6 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-red"
                />
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-bone/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
