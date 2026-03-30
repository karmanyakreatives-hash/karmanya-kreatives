"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

interface Review {
  name: string;
  quote: string;
  rating: number;
  time: string;
  photo?: string;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overall, setOverall] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews?.length) {
          setReviews(data.reviews);
          setOverall(data.overall);
          setTotal(data.total);
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Fall back to constants if API not set up yet
  const displayReviews: Review[] = reviews.length
    ? reviews
    : TESTIMONIALS.map((t) => ({
        name: t.name,
        quote: t.quote,
        rating: t.rating,
        time: t.event,
      }));

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Client Love
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
            What They <span className="italic gold-text">Say</span>
          </h2>
          {overall && total && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.round(overall) ? "fill-[#d4a017] text-[#d4a017]" : "text-[#d4a017]/30"} />
                ))}
              </div>
              <span className="text-[#faf7f0]/50 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                {overall} · {total} Google reviews
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayReviews.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 border border-[#d4a017]/15 hover:border-[#d4a017]/30 transition-all duration-300"
            >
              <div className="text-6xl text-[#d4a017]/20 leading-none mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>"</div>
              <p className="text-[#faf7f0]/60 leading-relaxed mb-6 italic text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
                {t.quote}
              </p>
              <div className="gold-divider mb-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.photo && (
                    <img src={t.photo} alt={t.name} className="w-8 h-8 rounded-full object-cover opacity-80" />
                  )}
                  <div>
                    <p className="text-[#faf7f0]/80 text-sm font-medium" style={{ fontFamily: "var(--font-montserrat)" }}>{t.name}</p>
                    <p className="text-[#d4a017]/60 text-xs tracking-wider mt-0.5" style={{ fontFamily: "var(--font-montserrat)" }}>{t.time}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={10} className="fill-[#d4a017] text-[#d4a017]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {loaded && reviews.length > 0 && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-10">
            <a
              href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a017]/60 text-xs tracking-[0.2em] uppercase hover:text-[#d4a017] transition-colors duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              View all Google reviews →
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
