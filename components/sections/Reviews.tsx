"use client";

import { motion } from "framer-motion";
import { reviews, site } from "@/lib/data";
import Stars from "@/components/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Reviews() {
  return (
    <section id="avis" className="py-20">
      <div className="wrap">
        <div className="mb-10 text-center">
          <p className="kicker justify-center">Ils sont passés</p>
          <h2 className="h-section">Avis clients</h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="font-display text-5xl text-gold">
              {site.rating.display}
            </span>
            <div className="text-left">
              <Stars className="h-5 w-5" />
              <p className="mt-1 text-sm text-bone/60">
                {site.rating.count} avis Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.author}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="plate flex flex-col p-6"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-bone/80">
                {review.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-lg text-ink"
                >
                  {review.author.charAt(0).toUpperCase()}
                </span>
                <span>
                  <span className="block font-semibold text-bone">
                    {review.author}
                  </span>
                  <span className="block text-xs text-bone/50">
                    Avis Google · 5/5
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
