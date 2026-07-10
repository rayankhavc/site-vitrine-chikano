import { menu, site } from "@/lib/data";

export default function Menu() {
  return (
    <section id="carte" className="border-t border-night-border/50 bg-night-soft py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="section-kicker">Fait maison, à la commande</p>
          <h2 className="section-title">La carte</h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Prix par personne : environ{" "}
            <strong className="text-ember-soft">{site.priceRange}</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {menu.map((category) => (
            <div
              key={category.id}
              className="min-w-0 rounded-2xl border border-night-border bg-night-card p-6 shadow-card sm:p-8"
            >
              <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl">
                <span aria-hidden="true">{category.emoji}</span>
                {category.title}
              </h3>

              <ul className="space-y-5">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-cream">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-night-border"
                      />
                      <span className="font-bold text-ember">{item.price}</span>
                    </div>
                    {item.description ? (
                      <p className="mt-1 text-sm text-cream/60">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream/50">
          Carte complète et tarifs disponibles sur place — appelez-nous au{" "}
          <a href={site.phoneHref} className="font-semibold text-ember hover:underline">
            {site.phoneDisplay}
          </a>{" "}
          pour commander.
        </p>
      </div>
    </section>
  );
}
