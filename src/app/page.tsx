"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, scaleIn, fadeLeft, fadeRight } from "@/lib/animations";
import { STATS, SERVICES, TESTIMONIALS, THEMES } from "@/lib/constants";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#080808_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a017]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4a017]/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#d4a017]/60" />
            <span
              className="text-[#d4a017] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Premium Event Decor
            </span>
            <div className="h-px w-12 bg-[#d4a017]/60" />
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-6xl md:text-8xl lg:text-9xl font-light text-[#faf7f0] leading-none tracking-tight"
            >
              We Craft
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-6xl md:text-8xl lg:text-9xl font-light gold-shimmer leading-none tracking-tight italic"
            >
              Memories
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-6xl md:text-8xl lg:text-9xl font-light text-[#faf7f0] leading-none tracking-tight"
            >
              That Last
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#faf7f0]/50 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Luxury event decor for weddings, birthdays, anniversaries & all celebrations.
            Every detail, orchestrated to perfection.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="group px-8 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300 flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              View Our Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#d4a017]/50 text-[#faf7f0]/80 text-sm tracking-[0.2em] uppercase hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book a Consultation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#d4a017]/50"
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="py-16 border-y border-[#d4a017]/15 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-4xl md:text-5xl font-light gold-text mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT TEASER ───────────────────────────────────────── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Our Story
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0] leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Where Vision<br />
              <span className="italic gold-text">Meets Craft</span>
            </h2>
            <p className="text-[#faf7f0]/50 leading-relaxed mb-4" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem" }}>
              Karmanya Kreatives was born from a deep passion for transforming ordinary spaces
              into extraordinary experiences. For over 8 years, we&apos;ve been the secret behind
              Mumbai&apos;s most talked-about celebrations.
            </p>
            <p className="text-[#faf7f0]/50 leading-relaxed mb-8" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem" }}>
              Every event we design is a unique narrative — told through flowers, light, fabric,
              and the finest details that take your breath away.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#d4a017] text-sm tracking-[0.2em] uppercase border-b border-[#d4a017]/40 pb-1 hover:border-[#d4a017] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative h-[480px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#161616] border border-[#d4a017]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">💍</div>
                  <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>Wedding Decor</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#1a1200] border border-[#d4a017]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">✨</div>
                  <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>Luxury Events</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#d4a017]" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#d4a017]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ───────────────────────────────────── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>What We Do</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Services</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d4a017]/10"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                className="bg-[#0a0a0a] p-8 group hover:bg-[#111100] transition-all duration-500 cursor-pointer"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-light text-[#faf7f0] mb-1 group-hover:text-[#d4a017] transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {service.title}
                </h3>
                <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.subtitle}
                </p>
                <p className="text-[#faf7f0]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-[#d4a017]/50 text-[#d4a017] text-sm tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              All Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── THEMES PREVIEW ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Signature Collections</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Themes</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {THEMES.slice(0, 3).map((theme) => (
              <motion.div key={theme.id} variants={fadeUp} className="group relative overflow-hidden border border-[#d4a017]/15 hover:border-[#d4a017]/50 transition-all duration-500">
                <div className="h-2 flex">
                  {theme.palette.map((color, i) => (
                    <div key={i} className="flex-1" style={{ background: color }} />
                  ))}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-[#faf7f0] mb-2 group-hover:text-[#d4a017] transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {theme.title}
                  </h3>
                  <p className="text-[#d4a017]/50 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {theme.mood}
                  </p>
                  <p className="text-[#faf7f0]/40 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {theme.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {theme.bestFor.map((tag) => (
                      <span key={tag} className="text-xs border border-[#d4a017]/20 text-[#d4a017]/60 px-2 py-1 tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
            <Link
              href="/themes"
              className="group inline-flex items-center gap-2 text-[#d4a017] text-sm tracking-[0.2em] uppercase border-b border-[#d4a017]/40 pb-1 hover:border-[#d4a017] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Explore All Themes
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Client Love</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              What They <span className="italic gold-text">Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 border border-[#d4a017]/15 hover:border-[#d4a017]/30 transition-all duration-300">
                <div className="text-6xl text-[#d4a017]/20 leading-none mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>"</div>
                <p className="text-[#faf7f0]/60 leading-relaxed mb-6 italic text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {t.quote}
                </p>
                <div className="gold-divider mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#faf7f0]/80 text-sm font-medium" style={{ fontFamily: "var(--font-montserrat)" }}>{t.name}</p>
                    <p className="text-[#d4a017]/60 text-xs tracking-wider mt-0.5" style={{ fontFamily: "var(--font-montserrat)" }}>{t.event}</p>
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
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#080808_70%)]" />
        <div className="absolute inset-0 border-y border-[#d4a017]/20" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl font-light text-[#faf7f0] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Ready to Create<br />
            <span className="italic gold-shimmer">Something Magical?</span>
          </h2>
          <p className="text-[#faf7f0]/40 max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem" }}>
            Let&apos;s talk about your vision. Every great event starts with a conversation.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.25em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300"
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
