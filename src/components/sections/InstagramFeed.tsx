"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function InstagramFeed() {
  useEffect(() => {
    const d = document;
    const s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.head.append(s);
  }, []);

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Follow Our Journey
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-[#faf7f0] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our <span className="italic gold-text">Instagram</span>
          </h2>
          <a
            href="https://www.instagram.com/karmanyakreatives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4a017]/60 hover:text-[#d4a017] text-sm tracking-widest transition-colors duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <Instagram size={14} />
            @karmanyakreatives
          </a>
        </motion.div>

        {/* Instagram Feed Widget */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* @ts-expect-error custom web component */}
          <behold-widget feed-id="AUz38pOSbCy4NgQ55giD"></behold-widget>
        </motion.div>

        {/* Follow Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/karmanyakreatives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#d4a017]/50 text-[#d4a017] text-sm tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <Instagram size={14} />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
