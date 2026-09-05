import { menu, menuHasPrices, site } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";
import PhoneLink from "@/components/PhoneLink";

export default function Menu() {
  return (
    <section id="carte" className="border-t border-coal-line/60 bg-coal py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">La carte</p>
          <h2 className="h-section">Faim ? On s&apos;occupe de tout</h2>
          <p className="mx-auto mt-4 max-w-2xl text-bone/70">
            Kebabs, pizzas, tacos, burgers, couscous, paninis et pâtisseries
            orientales : tout est préparé à la commande, sur place ou à
            emporter.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((category, i) => (
            <div key={category.id} className="plate min-w-0 p-6">
              <span
                aria-hidden="true"
                className="font-display text-sm tracking-[0.2em] text-red"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-bone">
                {category.title}
              </h3>
              <span
                aria-hidden="true"
                className="mt-3 block h-0.5 w-10 bg-red"
              />
              <p className="mt-3 text-sm leading-relaxed text-bone/65">
                {category.note}
              </p>

              {category.items && category.items.length > 0 ? (
                <ul className="mt-5 space-y-3.5 border-t border-coal-line/60 pt-5">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-bone">
                          {item.name}
                        </span>
                        {item.description ? (
                          <p className="text-sm text-bone/55">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <span className="price-pill">{item.price}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* Tant que le detail des prix n'est pas publie par le restaurant,
            on assume : on envoie vers le telephone plutot que d'afficher
            des tarifs approximatifs. */}
        {!menuHasPrices ? (
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-red/40 bg-coal-card p-6 text-center ring-red-soft">
            <h3 className="font-display text-2xl uppercase tracking-wide text-bone">
              Carte complète & tarifs
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-bone/65">
              La carte évolue régulièrement. Pour connaître les prix du jour ou
              commander, un appel suffit — on vous répond directement.
            </p>
            <PhoneLink className="btn-red mt-5 w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </PhoneLink>
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-bone/60">
            Une envie, une question ? Appelez le{" "}
            <PhoneLink className="font-semibold text-red hover:underline">
              {site.phoneDisplay}
            </PhoneLink>{" "}
            pour commander.
          </p>
        )}
      </div>
    </section>
  );
}
