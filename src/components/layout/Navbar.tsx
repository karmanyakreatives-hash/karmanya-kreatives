"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#d4a017]/20"
            : "bg-transparent"
        }`}
      >
        {/* ── SCROLLED: single compact row ── */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              key="compact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-3"
            >
              {/* Logo + small brand */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <Image
                  src="/Logo_upscayl.png"
                  alt="Karmanya Kreatives Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
                <span
                  className="text-lg font-semibold gold-shimmer uppercase leading-none"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.18em" }}
                >
                  KARMANYA KREATIVES
                </span>
              </Link>

              {/* Nav links */}
              <nav className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    <span
                      className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-[#d4a017]"
                          : "text-[#faf7f0]/70 hover:text-[#faf7f0]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#d4a017] transition-all duration-300 ${
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="px-4 py-1.5 border border-[#d4a017] text-[#d4a017] text-xs tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Book Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── TOP: two-row centered layout ── */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-6 pb-3"
            >
              {/* Row 1: centered logo + brand */}
              <div className="flex flex-col items-center mb-3">
                <Link href="/" className="flex items-center gap-4 group">
                  <motion.div whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}>
                    <Image
                      src="/Logo_upscayl.png"
                      alt="Karmanya Kreatives Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                  <div className="flex flex-col justify-center">
                    <span
                      className="text-4xl font-semibold gold-shimmer uppercase leading-tight"
                      style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.18em" }}
                    >
                      KARMANYA KREATIVES
                    </span>
                    <div
                      className="h-px mt-1"
                      style={{ background: "linear-gradient(90deg, transparent, #d4a017, #f5d97e, #d4a017, transparent)" }}
                    />
                    <span
                      className="text-sm tracking-[0.35em] uppercase text-[#d4a017] mt-1 text-center"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      ✦ Event Decor Management ✦
                    </span>
                  </div>
                </Link>
              </div>

              {/* Row 2: centered nav links */}
              <nav className="flex items-center justify-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    <span
                      className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-[#d4a017]"
                          : "text-[#faf7f0]/70 hover:text-[#faf7f0]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#d4a017] transition-all duration-300 ${
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="px-5 py-2 border border-[#d4a017] text-[#d4a017] text-xs tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Book Now
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE: single row ── */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#faf7f0] p-1 shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link href="/" className="flex flex-col items-center flex-1 px-2">
            <span
              className="text-2xl font-bold gold-shimmer uppercase leading-tight text-center"
              style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.22em" }}
            >
              KARMANYA KREATIVES
            </span>
            <div className="h-px w-full mt-1" style={{ background: "linear-gradient(90deg, transparent, #d4a017, #f5d97e, #d4a017, transparent)" }} />
          </Link>

          <div className="w-8" />
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center items-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`text-4xl font-light tracking-wide transition-colors duration-300 ${
                    pathname === link.href ? "text-[#d4a017]" : "text-[#faf7f0]/80 hover:text-[#d4a017]"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
              className="mt-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 border border-[#d4a017] text-[#d4a017] text-sm tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
