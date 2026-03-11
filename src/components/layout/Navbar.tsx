"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#d4a017]/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="leading-none group flex flex-col items-start">
            <span
              className="text-3xl md:text-4xl font-semibold tracking-[0.25em] gold-shimmer uppercase"
              style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
            >
              KARMANYA KREATIVES
            </span>
            <span
              className="text-[8px] tracking-[0.55em] uppercase text-[#d4a017]/60 mt-0.5 ml-0.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Event Decor Management ✦
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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
              className="ml-4 px-5 py-2 border border-[#d4a017] text-[#d4a017] text-xs tracking-[0.2em] uppercase hover:bg-[#d4a017] hover:text-[#080808] transition-all duration-300"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#faf7f0] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
