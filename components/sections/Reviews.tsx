"use client";

import { motion } from "framer-motion";
import { reviews, site } from "@/lib/data";
import Stars from "@/components/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Reviews() {
  return (
    <section id="avis" className="py-20">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="section-kicker">Ils ont goûté, ils ont adoré</p>
          <h2 className="section-title">Avis clients</h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="font-heading text-4xl font-extrabold text-ember">
              {site.rating.display}/5
            </span>
            <div>
              <Stars className="h-5 w-5" />
              <p className="mt-1 text-sm text-cream/60">
                {site.rating.count} avis Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.author}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className="flex flex-col rounded-2xl border border-night-border bg-night-card p-6 shadow-card"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-cream/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-flame-gradient font-heading font-bold text-white"
                >
                  {review.author.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-cream">
                    {review.author}
                  </span>
                  <span className="block text-xs text-cream/50">Avis Google · 5/5</span>
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
            className="btn-outline"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
