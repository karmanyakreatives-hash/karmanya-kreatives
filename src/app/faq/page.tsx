"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const FAQS = [
  {
    category: "Booking & Planning",
    items: [
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 4–8 weeks in advance for smaller events (birthdays, anniversaries, baby showers), and 3–6 months ahead for weddings and large-scale celebrations. Popular dates fill up quickly, so the sooner the better.",
      },
      {
        q: "How does the booking process work?",
        a: "It starts with a free consultation — in person or virtual — where we discuss your vision, venue, and date. We then send a bespoke proposal within 48 hours. Once approved, a 25% deposit secures your date, and we begin the design process.",
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes, always. Every enquiry begins with a complimentary consultation, no strings attached. We want to fully understand your vision before presenting any proposal.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    items: [
      {
        q: "What is included in your event decor packages?",
        a: "Every package includes a free consultation, bespoke concept design (moodboards, palette, layout), full on-site setup, and complete breakdown/cleanup after the event. Specific elements — florals, draping, lighting, props — vary by package and are outlined in your proposal.",
      },
      {
        q: "Do you have a minimum budget?",
        a: "Our packages start from around $500 for intimate setups. Larger events and full venue transformations are priced based on scope, guest count, and theme complexity. We're transparent with pricing — your proposal will always include a full itemised breakdown.",
      },
      {
        q: "Can I customise a signature theme?",
        a: "Absolutely. Our signature themes are curated starting points, not rigid templates. Every event is uniquely tailored to your personality, story, and venue. Think of the themes as inspiration — we build everything from scratch around your vision.",
      },
      {
        q: "Do you offer day-of coordination?",
        a: "Yes. Our team is on-site for the full setup and available throughout your event to handle any decor-related needs. We coordinate directly with venue staff so you can focus entirely on your celebration.",
      },
    ],
  },
  {
    category: "Logistics",
    items: [
      {
        q: "Do you serve areas outside the Bay Area?",
        a: "We're based in the San Francisco Bay Area and serve the wider Bay Area region. We also travel for destination events — weddings, destination birthdays, and more. Contact us to discuss your location and we'll work out the details.",
      },
      {
        q: "Can you work with my existing venue décor?",
        a: "Definitely. We can complement, enhance, or completely transform whatever the venue provides. We'll do a site visit or review floor plans to design around the existing space.",
      },
      {
        q: "Who handles setup and cleanup?",
        a: "Our team handles everything — full setup before your event begins and complete breakdown/cleanup afterward. You arrive to a beautifully decorated venue and leave without worrying about a thing.",
      },
      {
        q: "What if I need to change or cancel my booking?",
        a: "Life happens, and we understand. Changes can be made up to 4 weeks before your event date subject to availability. For cancellations, please refer to the terms in your agreement. We always aim to find a fair resolution.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center pb-16 pt-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a1200_0%,_#080808_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 lg:px-24 w-full text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Got Questions?
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-8xl font-light text-[#faf7f0] leading-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Frequently <span className="italic gold-text">Asked</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {FAQS.map((section) => (
            <motion.div
              key={section.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14"
            >
              <p
                className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-8"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {section.category}
              </p>

              <div className="space-y-px">
                {section.items.map((item) => {
                  const key = `${section.category}-${item.q}`;
                  const isOpen = open === key;

                  return (
                    <div key={key} className="border border-[#d4a017]/15 hover:border-[#d4a017]/30 transition-colors duration-300">
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left group"
                      >
                        <span
                          className={`text-base md:text-lg font-light transition-colors duration-300 ${isOpen ? "text-[#d4a017]" : "text-[#faf7f0]/80 group-hover:text-[#faf7f0]"}`}
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {item.q}
                        </span>
                        <span className={`ml-4 shrink-0 text-[#d4a017] transition-transform duration-300 ${isOpen ? "rotate-0" : ""}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p
                              className="px-6 pb-6 text-[#faf7f0]/50 text-sm leading-relaxed"
                              style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#080808_70%)]" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2
            className="text-4xl md:text-6xl font-light text-[#faf7f0] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Still have questions?
          </h2>
          <p
            className="text-[#faf7f0]/40 max-w-md mx-auto mb-8 text-sm"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            We&apos;re happy to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Contact Us
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
