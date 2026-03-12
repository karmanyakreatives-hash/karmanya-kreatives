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
          <Link href="/" className="leading-none group flex items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 10px rgba(212,160,23,0.3)",
                  "0 0 25px rgba(212,160,23,0.7)",
                  "0 0 10px rgba(212,160,23,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.8 } }}
              className="w-[90px] h-[90px] rounded-full border-2 border-[#d4a017] overflow-hidden shrink-0 bg-black flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/Logo_upscayl.png"
                alt="Karmanya Kreatives Logo"
                width={90}
                height={90}
                className="w-full h-full" style={{ objectFit: "cover", objectPosition: "40% 35%", transform: "scale(1.2)" }}
                priority
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <span
                className="text-2xl md:text-3xl font-semibold gold-shimmer uppercase leading-tight"
                style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.18em" }}
              >
                KARMANYA KREATIVES
              </span>
              <div className="h-px mt-1" style={{ background: "linear-gradient(90deg, #d4a017, #f5d97e, #d4a017, transparent)" }} />
            </div>
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
