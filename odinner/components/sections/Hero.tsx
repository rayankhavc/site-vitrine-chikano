"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, photos } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";
import Stars from "@/components/Stars";
import PhoneLink from "@/components/PhoneLink";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const chips = ["Viandes halal", "Sur place & à emporter", "Ouvert 7j/7"];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 15% 12%, rgba(244,0,0,0.22), transparent 62%), radial-gradient(ellipse 55% 45% at 88% 8%, rgba(255,106,0,0.14), transparent 60%), radial-gradient(ellipse 70% 45% at 50% 100%, rgba(244,0,0,0.12), transparent 62%)",
        }}
      />

      <div className="wrap relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Colonne texte */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="kicker"
          >
            <span className="h-px w-8 bg-gradient-to-r from-red-deep via-red to-flame" />{" "}
            {site.city} · Vendée ({site.zip})
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-2"
          >
            <span className="block font-script text-5xl leading-none text-red sm:text-6xl">
              O&apos;dinner
            </span>
            <span className="mt-3 block font-display text-4xl uppercase leading-[0.95] tracking-wide text-bone sm:text-5xl">
              Kebab · Pizza · Tacos
              <span className="block text-bone/70">à Mareuil-sur-Lay</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-5 max-w-md text-lg text-bone/75"
          >
            Le fast-food du bourg, préparé{" "}
            <strong className="text-bone">à la commande</strong> : kebabs,
            pizzas, tacos, burgers, couscous — et une vraie vitrine de
            pâtisseries orientales.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-6 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-coal-line bg-coal-soft px-3 py-1.5 text-sm font-semibold text-bone/80"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <PhoneLink className="btn-red w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              Appeler maintenant
            </PhoneLink>
            <a href="#carte" className="btn-ghost w-full sm:w-auto">
              Voir la carte
            </a>
          </motion.div>

          <motion.a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-6 inline-flex items-center gap-2 text-sm text-bone/70 transition-colors hover:text-red"
          >
            <Stars />
            <span>Nos avis clients sur Google</span>
          </motion.a>
        </div>

        {/* Colonne visuelle : le logo reel de l'enseigne */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-red/40 bg-coal">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 45%, rgba(244,0,0,0.22), transparent 65%)",
              }}
            />
            <div className="relative flex aspect-square items-center justify-center p-10">
              <div className="relative h-full w-full">
                <Image
                  src={photos.logo}
                  alt="Logo O'dinner — pizza, fast food à Mareuil-sur-Lay-Dissais"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="relative border-t border-coal-line/70 bg-ink/60 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-bone/60">
              Pizza · Fast food · Halal
            </p>
          </div>

          {/* Sticker facon autocollant de vitrine */}
          <div className="absolute -bottom-4 -left-4 -rotate-6 rounded-xl border-2 border-ink bg-red px-4 py-2 text-center shadow-plate">
            <span className="block text-xl leading-none text-bone">★★★★★</span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-wide text-bone/85">
              Avis Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
