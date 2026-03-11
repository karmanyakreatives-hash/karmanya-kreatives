"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, scaleIn } from "@/lib/animations";
import { STATS } from "@/lib/constants";

const VALUES = [
  { icon: "✦", title: "Artistry First", description: "Every installation is approached as a work of art. We don't just decorate — we compose experiences that resonate long after the event ends." },
  { icon: "◆", title: "White-Glove Service", description: "From the first consultation to the final breakdown, our team is with you at every step, ensuring seamless execution and zero-stress planning." },
  { icon: "❋", title: "Bespoke by Nature", description: "No two events are the same. Every concept is built from scratch, tailored to your personality, vision, and the story you want to tell." },
  { icon: "✿", title: "Sustainable Luxury", description: "We source responsibly and prioritise reusable elements, ensuring your beautiful event treads lightly on the planet." },
];

const TEAM = [
  { name: "Karmanya Sharma", role: "Founder & Creative Director", bio: "With a background in fine arts and 10+ years in luxury event design, Karmanya founded the studio with a singular vision: to make every event a living work of art." },
  { name: "Riya Mehta", role: "Lead Event Stylist", bio: "Riya's eye for detail and passion for florals has made her the creative force behind some of our most iconic wedding installations." },
  { name: "Arjun Nair", role: "Lighting & Ambience Designer", bio: "Arjun transforms any space through the magic of light — from dramatic spotlights to ethereal fairy-light canopies, he sets the perfect mood." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1a1200_0%,_#080808_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Our Story
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light text-[#faf7f0] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
              About <span className="italic gold-text">Us</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-light text-[#faf7f0] leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
              Born from a Passion
              <br /><span className="italic gold-text">for Beauty</span>
            </h2>
            <div className="space-y-5 text-[#faf7f0]/50 leading-relaxed" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem" }}>
              <p>
                Karmanya Kreatives began in 2016 as a small floral studio in Mumbai, driven by
                one belief: that every celebration deserves to be extraordinary. What started as
                weekend weddings soon grew into a full-service luxury event decor studio trusted
                by families across the city.
              </p>
              <p>
                Over eight years, we&apos;ve curated over 500 events — from intimate 20-person
                dinner parties to grand weddings with over 1,000 guests. Each one received the
                same level of care, creativity, and white-glove attention.
              </p>
              <p>
                Today, Karmanya Kreatives is synonymous with refined taste, flawless execution,
                and the kind of magic that makes guests stop, breathe, and feel something.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative h-[500px]">
              <div className="absolute inset-0 bg-[#161616] border border-[#d4a017]/20 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-7xl mb-6">🌸</div>
                  <p className="text-[#d4a017] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>Est. 2016</p>
                  <p className="text-[#faf7f0]/30 text-sm mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#d4a017]/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-[#d4a017]/15 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* ── VALUES ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>What Drives Us</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Our <span className="italic gold-text">Values</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={scaleIn} className="p-8 border border-[#d4a017]/15 hover:border-[#d4a017]/40 transition-all duration-300 group">
                <div className="text-2xl text-[#d4a017] mb-4">{v.icon}</div>
                <h3 className="text-2xl font-light text-[#faf7f0] mb-3 group-hover:text-[#d4a017] transition-colors duration-300" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {v.title}
                </h3>
                <p className="text-[#faf7f0]/40 leading-relaxed text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <p className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>The Creatives</p>
            <h2 className="text-5xl md:text-6xl font-light text-[#faf7f0]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Meet the <span className="italic gold-text">Team</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="group text-center">
                <div className="w-full h-64 bg-[#161616] border border-[#d4a017]/15 group-hover:border-[#d4a017]/40 transition-all duration-300 mb-6 flex items-center justify-center">
                  <div className="text-5xl">👤</div>
                </div>
                <h3 className="text-2xl font-light text-[#faf7f0] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {member.name}
                </h3>
                <p className="text-[#d4a017]/60 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {member.role}
                </p>
                <p className="text-[#faf7f0]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {member.bio}
                </p>
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
            Let&apos;s Create Together
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get in Touch
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
