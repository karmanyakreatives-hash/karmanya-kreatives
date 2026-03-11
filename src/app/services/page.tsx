"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a1200_0%,_#080808_60%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              What We Offer
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light text-[#faf7f0] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Services</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[#faf7f0]/50 text-lg leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>
          From intimate gatherings to grand spectacles, every event we design is a bespoke creation.
          We handle every detail so you can be fully present in your moment.
        </motion.p>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 gap-12 items-center py-16 border-b border-[#d4a017]/10 last:border-b-0"
            >
              {/* Text — alternating sides */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="h-px flex-1 bg-[#d4a017]/20" />
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#faf7f0] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {service.title}
                </h2>
                <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.subtitle}
                </p>
                <p className="text-[#faf7f0]/50 leading-relaxed mb-6 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#faf7f0]/50" style={{ fontFamily: "var(--font-montserrat)" }}>
                      <Check size={12} className="text-[#d4a017] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[#d4a017] text-xs tracking-[0.2em] uppercase border-b border-[#d4a017]/40 pb-1 hover:border-[#d4a017] transition-all duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Enquire Now
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual */}
              <div className={`relative h-80 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="absolute inset-0 bg-[#161616] border border-[#d4a017]/15 flex items-center justify-center group hover:border-[#d4a017]/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <p className="text-[#d4a017]/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {service.title}
                    </p>
                  </div>
                </div>
                {i % 2 === 0 ? (
                  <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#d4a017]/10 pointer-events-none" />
                ) : (
                  <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#d4a017]/10 pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>How We Work</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Process</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Consultation", desc: "We listen to your vision, understand your story, and define the aesthetic direction." },
              { step: "02", title: "Concept", desc: "We craft a bespoke mood board, theme proposal, and detailed decor plan." },
              { step: "03", title: "Creation", desc: "Our team sources, builds, and crafts every element with meticulous attention." },
              { step: "04", title: "Installation", desc: "We transform your venue on the day, so you arrive to magic." },
            ].map((p) => (
              <motion.div key={p.step} variants={fadeUp} className="text-center">
                <div className="text-5xl font-light gold-text mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>{p.step}</div>
                <h3 className="text-xl font-light text-[#faf7f0] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{p.title}</h3>
                <p className="text-[#faf7f0]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#080808_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-light text-[#faf7f0] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Ready to Begin?
          </h2>
          <p className="text-[#faf7f0]/40 max-w-md mx-auto mb-8 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
            Book a free consultation and let&apos;s start designing your dream event.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Book Free Consultation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
