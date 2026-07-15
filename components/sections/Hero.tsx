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

const chips = ["Pain maison", "Viande 100% bœuf", "Ouvert 7j/7"];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 15% 15%, rgba(214,59,42,0.20), transparent 60%), radial-gradient(ellipse 55% 45% at 90% 10%, rgba(232,121,42,0.16), transparent 60%), radial-gradient(ellipse 70% 45% at 50% 100%, rgba(232,181,74,0.14), transparent 60%)",
        }}
      />
      <div className="wrap relative grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        {/* Colonne texte */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="kicker"
          >
            <span className="h-px w-8 bg-gradient-to-r from-chili via-ember to-gold" />{" "}
            {site.city} · Vendée (85550)
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="relative -ml-2 mt-2 h-[clamp(6.5rem,20vw,10rem)] w-[clamp(6.5rem,20vw,10rem)]"
          >
            <Image
              src={photos.logo}
              alt="Chikano - Fast food & burger"
              fill
              priority
              sizes="(max-width: 1024px) 30vw, 15vw"
              className="object-contain"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-5 max-w-md text-lg text-bone/75"
          >
            Le kebab, le burger et le tacos comme on les aime : généreux, faits à
            la commande, avec un <strong className="text-bone">pain maison</strong>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-6 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-line bg-slate-soft px-3 py-1.5 text-sm font-semibold text-bone/80"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <PhoneLink className="btn-gold w-full sm:w-auto">
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
            custom={6}
            className="mt-6 inline-flex items-center gap-2 text-sm text-bone/70 transition-colors hover:text-gold"
          >
            <Stars />
            <span>
              <strong className="text-gold">{site.rating.display}/5</strong> sur
              Google
            </span>
          </motion.a>
        </div>

        {/* Colonne photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/40">
            <Image
              src={photos.chikano1}
              alt="Chikano - fast food & burger à La Barre-de-Monts"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          {/* Sticker note façon autocollant */}
          <div className="absolute -bottom-4 -left-4 -rotate-6 rounded-xl border-2 border-ink bg-gold px-4 py-2 text-center shadow-plate">
            <span className="block font-display text-2xl leading-none text-ink">
              {site.rating.display}/5
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wide text-ink/80">
              sur Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
