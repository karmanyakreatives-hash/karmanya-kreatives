import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4a017]/20">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="leading-none mb-4 flex items-center gap-3">
              <div className="w-[90px] h-[90px] rounded-full border-2 border-[#d4a017] overflow-hidden shrink-0 shadow-[0_0_15px_rgba(212,160,23,0.3)] bg-black flex items-center justify-center">
                <Image
                  src="/Logo_upscayl.png"
                  alt="Karmanya Kreatives Logo"
                  width={90}
                  height={90}
                  className="w-full h-full" style={{ objectFit: "cover", objectPosition: "40% 35%", transform: "scale(1.2)" }}
                />
              </div>
              <div className="flex flex-col items-start">
                <span
                  className="text-3xl font-semibold tracking-[0.2em] gold-shimmer uppercase"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  KARMANYA KREATIVES
                </span>
                <span
                  className="text-[8px] tracking-[0.55em] uppercase text-[#d4a017]/60 mt-0.5 ml-0.5"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  ✦ Event Decor Management ✦
                </span>
              </div>
            </div>
            <p
              className="text-[#faf7f0]/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Transforming spaces into unforgettable experiences. Every event, a masterpiece.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 border border-[#d4a017]/30 flex items-center justify-center text-[#d4a017]/60 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-[#d4a017]/30 flex items-center justify-center text-[#d4a017]/60 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="mailto:karmanyakreatives@gmail.com"
                className="w-9 h-9 border border-[#d4a017]/30 flex items-center justify-center text-[#d4a017]/60 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-[#d4a017] mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#faf7f0]/50 hover:text-[#d4a017] text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-[#d4a017] mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {["Weddings", "Birthdays", "Anniversaries", "Corporate Events", "Baby Showers", "Custom Events"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#faf7f0]/50 hover:text-[#d4a017] text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-[0.3em] uppercase text-[#d4a017] mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#d4a017] mt-0.5 shrink-0" />
                <span
                  className="text-[#faf7f0]/50 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  425-469-0660 / 571-421-4321
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#d4a017] mt-0.5 shrink-0" />
                <span
                  className="text-[#faf7f0]/50 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  karmanyakreatives@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#d4a017] mt-0.5 shrink-0" />
                <span
                  className="text-[#faf7f0]/50 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  San Francisco Bay Area, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#faf7f0]/30 text-xs tracking-wider"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            © {new Date().getFullYear()} Karmanya Kreatives. All rights reserved.
          </p>
          <p
            className="text-[#faf7f0]/30 text-xs tracking-wider italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every event, a masterpiece.
          </p>
        </div>
      </div>
    </footer>
  );
}
