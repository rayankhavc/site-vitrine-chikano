import Image from "next/image";
import { photos } from "@/lib/data";

const points = [
  {
    title: "Pain fait maison",
    text: "Buns et pains cuits sur place, tous les jours. Un détail rare que nos clients repèrent tout de suite.",
  },
  {
    title: "Viande 100% bœuf",
    text: "Steaks hachés frais pour les burgers, viandes grillées à la commande.",
  },
  {
    title: "Fait à la commande",
    text: "Rien n'attend sous une lampe : on prépare votre plat quand vous arrivez.",
  },
];

export default function Maison() {
  return (
    <section className="border-t border-slate-line/60 py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        {/* Photos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-line/70">
            <Image
              src={photos.painBuns}
              alt="Buns au sésame faits maison sortant du four chez Chikano"
              fill
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-slate-line/70">
            <Image
              src={photos.painBaguettes}
              alt="Pains maison cuits sur place chez Chikano"
              fill
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div>
          <p className="kicker">
            <span className="h-px w-8 bg-gold" /> La différence Chikano
          </p>
          <h2 className="h-section">Le vrai fait maison</h2>
          <ul className="mt-6 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-gold" />
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
