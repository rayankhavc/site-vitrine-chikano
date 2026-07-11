"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site, photos } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";
import Stars from "@/components/Stars";

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
      <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        {/* Colonne texte */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="kicker"
          >
            <span className="h-px w-8 bg-gold" /> {site.city} · Vendée (85550)
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-[clamp(3.2rem,13vw,7rem)] uppercase leading-[0.85] tracking-wide text-bone"
          >
            Chik<span className="text-gold">a</span>no
          </motion.h1>

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
            custom={3}
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
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href={site.phoneHref} className="btn-gold w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              Appeler maintenant
            </a>
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
            className="mt-6 inline-flex items-center gap-2 text-sm text-bone/70 transition-colors hover:text-gold"
          >
            <Stars />
            <span>
              <strong className="text-gold">{site.rating.display}/5</strong> sur
              Google · {site.rating.count} avis
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
              src={photos.cheeseburger}
              alt="Cheeseburger maison de Chikano avec frites"
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
