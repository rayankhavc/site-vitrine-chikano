"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";
import Stars from "@/components/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Halo braise en fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 110%, rgba(230,49,37,0.35), transparent 65%), radial-gradient(ellipse 55% 40% at 80% 0%, rgba(255,138,0,0.12), transparent 60%)",
        }}
      />

      <div className="container-page relative py-16 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 inline-block rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-sm font-semibold text-ember-soft"
        >
          🔥 {site.tagline}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-heading text-[clamp(2rem,11vw,6rem)] font-extrabold uppercase leading-none tracking-tight"
        >
          Chik<span className="bg-flame-gradient bg-clip-text text-transparent">a</span>no
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-6 max-w-xl text-lg text-cream/80 sm:text-xl"
        >
          Tacos, kebabs et sandwichs généreux, préparés à la commande à{" "}
          <strong className="text-cream">La Barre-de-Monts</strong> (Vendée, 85550).
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 flex justify-center"
        >
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-night-border bg-night-soft/80 px-4 py-2 text-sm font-semibold text-cream/90 transition-colors hover:border-ember"
          >
            <Stars />
            <span>
              <strong className="text-ember-soft">{site.rating.display}/5</strong> sur
              Google ({site.rating.count} avis)
            </span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={site.phoneHref} className="btn-flame w-full sm:w-auto">
            <PhoneIcon className="h-5 w-5" />
            Appeler maintenant
          </a>
          <a href="#carte" className="btn-outline w-full sm:w-auto">
            Voir la carte
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-8 text-sm text-cream/50"
        >
          Ouvert dès 17h00 · {site.address.full}
        </motion.p>
      </div>
    </section>
  );
}
