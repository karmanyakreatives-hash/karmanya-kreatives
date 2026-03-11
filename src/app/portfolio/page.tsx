"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const CATEGORIES = ["All", "Wedding", "Birthday", "Anniversary", "Corporate", "Baby Shower", "Engagement"];

const EMOJI_MAP: Record<string, string> = {
  Wedding: "💍",
  Birthday: "🎂",
  Anniversary: "✨",
  Corporate: "🏆",
  "Baby Shower": "🌸",
  Engagement: "💫",
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1200_0%,_#080808_60%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Our Work
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light text-[#faf7f0] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
              Portfolio &amp; <span className="italic gold-text">Gallery</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="py-10 border-b border-[#d4a017]/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 justify-center"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeUp}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#d4a017] text-[#080808]"
                    : "border border-[#d4a017]/30 text-[#faf7f0]/50 hover:border-[#d4a017] hover:text-[#d4a017]"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  className="group border border-[#d4a017]/15 hover:border-[#d4a017]/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Image placeholder */}
                  <div className="h-64 bg-[#161616] relative flex items-center justify-center overflow-hidden">
                    <div className="text-6xl">{EMOJI_MAP[item.category] || "✨"}</div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#d4a017]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Category badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 bg-[#080808]/80 border border-[#d4a017]/30 text-[#d4a017] text-xs tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {item.category}
                    </div>
                    <div
                      className="absolute top-4 right-4 text-[#faf7f0]/30 text-xs"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {item.year}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-light text-[#faf7f0] mb-2 group-hover:text-[#d4a017] transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[#faf7f0]/40 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#080808_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-light text-[#faf7f0] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Your Event Could Be
            <br /><span className="italic gold-text">Our Next Masterpiece</span>
          </h2>
          <p className="text-[#faf7f0]/40 max-w-md mx-auto mb-8 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
            Join 500+ happy clients who trusted us with their most special moments.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Start Planning
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
