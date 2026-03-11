"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { THEMES } from "@/lib/constants";

export default function ThemesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1a1200_0%,_#080808_60%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Signature Collections
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light text-[#faf7f0] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Themes</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[#faf7f0]/50 text-lg leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>
          Each theme is a curated visual world — a complete aesthetic language of colour, texture,
          light, and form. Choose one as your starting point, or let us blend elements to craft
          something entirely your own.
        </motion.p>
      </section>

      {/* ── THEMES GRID ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {THEMES.map((theme) => (
              <motion.div
                key={theme.id}
                variants={scaleIn}
                className="group border border-[#d4a017]/15 hover:border-[#d4a017]/50 transition-all duration-500 overflow-hidden"
              >
                {/* Palette bar */}
                <div className="h-3 flex">
                  {theme.palette.map((color, i) => (
                    <div key={i} className="flex-1" style={{ background: color }} />
                  ))}
                </div>

                {/* Color preview */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${theme.palette[0]} 0%, ${theme.palette[3] || theme.palette[0]} 100%)` }}
                >
                  <div className="absolute inset-0 bg-[#080808]/60" />
                  <h3
                    className="relative z-10 text-4xl font-light text-white text-center px-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {theme.title}
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {theme.mood}
                  </p>
                  <p className="text-[#faf7f0]/50 text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {theme.description}
                  </p>

                  {/* Palette swatches */}
                  <div className="flex gap-2 mb-5">
                    {theme.palette.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 border border-[#ffffff]/10"
                        style={{ background: color }}
                        title={color}
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {theme.bestFor.map((tag) => (
                      <span key={tag} className="text-xs border border-[#d4a017]/20 text-[#d4a017]/60 px-3 py-1 tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 text-[#d4a017] text-xs tracking-[0.2em] uppercase border-b border-[#d4a017]/40 pb-1 hover:border-[#d4a017] transition-all duration-300"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Book This Theme
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CUSTOM THEME ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-4xl mb-6">🎨</div>
            <h2 className="text-4xl md:text-5xl font-light text-[#faf7f0] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
              Don&apos;t See Your <span className="italic gold-text">Vision?</span>
            </h2>
            <p className="text-[#faf7f0]/40 leading-relaxed mb-8 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
              Our most memorable events were born from completely custom concepts. Share your
              references, your mood, even a feeling — and we&apos;ll build a theme from scratch,
              exclusively for you.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-[#d4a017]/50 text-[#d4a017] text-sm tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Create Custom Theme
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
