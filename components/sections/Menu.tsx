import Image from "next/image";
import { menu, menus, viandes, sauces, site, photos } from "@/lib/data";
import PhoneLink from "@/components/PhoneLink";

export default function Menu() {
  return (
    <section id="carte" className="border-t border-slate-line/60 bg-slate py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">La carte</p>
          <h2 className="h-section">Faim ? On s&apos;occupe de tout</h2>
          <p className="mx-auto mt-4 max-w-xl text-bone/70">
            Prix par personne : <strong className="text-gold">{site.priceRange}</strong>.
            Burgers avec frites +1 €, avec frite et boisson +2,50 €.
          </p>
        </div>

        {/* Carte complete en photos (panneaux reels du restaurant) */}
        <div className="mb-14">
          <h3 className="mb-5 text-center font-display text-2xl uppercase tracking-wide text-bone">
            La carte complète en photos
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {photos.menuBoards.map((board) => (
              <a
                key={board.src}
                href={board.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-slate-line/70"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={board.src}
                    alt={`Menu Chikano : ${board.label}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-ink/80 px-3 py-2 text-sm font-semibold text-bone">
                  {board.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Formules mises en avant */}
        <div className="mx-auto mb-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {menus.map((m, i) => (
            <div
              key={m.name}
              className="rounded-xl border-2 border-gold/50 bg-slate-card p-5 text-center ring-gold-soft"
            >
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-display text-2xl uppercase tracking-wide text-gold">
                  {m.name}
                </h3>
                <span
                  className={`price-pill text-base ${i % 2 === 0 ? "!bg-chili !text-bone" : "!bg-ember !text-ink"}`}
                >
                  {m.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-bone/70">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Grille des categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((category) => (
            <div key={category.id} className="plate min-w-0 p-6">
              <h3 className="font-display text-2xl uppercase tracking-wide text-bone">
                {category.title}
              </h3>
              {category.note ? (
                <p className="mt-1 text-xs uppercase tracking-wide text-gold/80">
                  {category.note}
                </p>
              ) : null}

              <ul className="mt-4 space-y-3.5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-bone">{item.name}</span>
                      {item.description ? (
                        <p className="text-sm text-bone/55">{item.description}</p>
                      ) : null}
                    </div>
                    <span className="price-pill">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Viandes & sauces au choix */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="plate p-6">
            <h3 className="font-display text-xl uppercase tracking-wide text-bone">
              Viandes au choix
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-gold/80">
              Pour tacos, maxis, assiettes et bowls · supplément +2,50 €
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {viandes.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-slate-line bg-slate-soft px-3 py-1.5 text-sm text-bone/80"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="plate p-6">
            <h3 className="font-display text-xl uppercase tracking-wide text-bone">
              Sauces maison
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-gold/80">
              Servies au choix
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sauces.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-line bg-slate-soft px-3 py-1.5 text-sm text-bone/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-bone/60">
          Une envie, une question ? Appelez le{" "}
          <PhoneLink className="font-semibold text-gold hover:underline">
            {site.phoneDisplay}
          </PhoneLink>{" "}
          pour commander.
        </p>
      </div>
    </section>
  );
}
