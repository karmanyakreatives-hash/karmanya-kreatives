"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/lib/animations";

const EVENT_TYPES = ["Wedding", "Birthday", "Anniversary", "Corporate Event", "Baby Shower", "Engagement", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#1a1200_0%,_#080808_60%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="text-[#d4a017] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              Let&apos;s Begin
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-light text-[#faf7f0] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>
              Get in <span className="italic gold-text">Touch</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl font-light text-[#faf7f0] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Every great event
                  <br /><span className="italic gold-text">starts with a call.</span>
                </h2>
                <p className="text-[#faf7f0]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Share your vision with us and we&apos;ll craft a bespoke proposal within 48 hours.
                  Consultations are always complimentary.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#d4a017]/30 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="text-[#faf7f0]/30 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>Phone</p>
                    <p className="text-[#faf7f0]/70 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>425-469-0660 / 571-421-4321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#d4a017]/30 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="text-[#faf7f0]/30 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>Email</p>
                    <p className="text-[#faf7f0]/70 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>karmanyakreatives@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#d4a017]/30 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-[#d4a017]" />
                  </div>
                  <div>
                    <p className="text-[#faf7f0]/30 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>Location</p>
                    <p className="text-[#faf7f0]/70 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>Mumbai, Maharashtra, India</p>
                    <p className="text-[#faf7f0]/30 text-xs mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>Serving pan-India & destination events</p>
                  </div>
                </div>
              </div>

              <div className="gold-divider" />

              <div>
                <p className="text-[#faf7f0]/30 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 border border-[#d4a017]/30 flex items-center justify-center text-[#d4a017]/60 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300" aria-label="Instagram">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-[#d4a017]/30 flex items-center justify-center text-[#d4a017]/60 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300" aria-label="Facebook">
                    <Facebook size={14} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p className="text-[#faf7f0]/30 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Studio Hours</p>
                <div className="space-y-1 text-sm text-[#faf7f0]/40" style={{ fontFamily: "var(--font-montserrat)" }}>
                  <div className="flex justify-between"><span>Mon – Fri</span><span>10 AM – 7 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>11 AM – 5 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>By appointment</span></div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#d4a017]/20"
                >
                  <div className="text-5xl mb-6">✨</div>
                  <h3 className="text-3xl font-light text-[#faf7f0] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Thank You!
                  </h3>
                  <p className="text-[#faf7f0]/40 text-sm max-w-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
                    We&apos;ve received your enquiry. Our team will reach out within 24–48 hours with a bespoke proposal.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0] px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0] px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0] px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0]/70 px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        <option value="">Select event type</option>
                        {EVENT_TYPES.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date + Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0]/70 px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Approx. Guest Count
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0] px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        placeholder="e.g. 100–200"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0]/70 px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      <option value="">Select budget range</option>
                      <option>Under ₹1 Lakh</option>
                      <option>₹1 – ₹3 Lakhs</option>
                      <option>₹3 – ₹5 Lakhs</option>
                      <option>₹5 – ₹10 Lakhs</option>
                      <option>₹10 Lakhs+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-[#faf7f0]/40 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#161616] border border-[#d4a017]/20 text-[#faf7f0] px-4 py-3 text-sm focus:outline-none focus:border-[#d4a017] transition-colors duration-300 resize-none"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                      placeholder="Describe your dream event — theme preferences, venue, mood, any specific ideas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-4 bg-[#d4a017] text-[#080808] text-sm tracking-[0.25em] uppercase font-medium hover:bg-[#f5d97e] transition-all duration-300 flex items-center justify-center gap-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Send Enquiry
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[#faf7f0]/25 text-xs text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
                    We respond within 24–48 hours. Consultation is always complimentary.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
