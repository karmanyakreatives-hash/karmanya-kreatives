"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "14254690660";
const MESSAGE = encodeURIComponent("Hi! I'd like to enquire about event decor services at Karmanya Kreatives.");

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#161616] border border-[#d4a017]/30 px-4 py-3 max-w-[220px] shadow-xl"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-[#faf7f0]/40 hover:text-[#faf7f0]"
            >
              <X size={12} />
            </button>
            <p
              className="text-[#faf7f0]/80 text-xs leading-relaxed pr-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Chat with us on WhatsApp!
            </p>
            <p
              className="text-[#d4a017] text-xs mt-1"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              We reply within minutes ✨
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-[#161616] border-r border-b border-[#d4a017]/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-black/50"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.476-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.747-1.835l-.483-.287-4.99 1.18 1.24-4.863-.314-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.352-1.16-2.717-1.292-.365-.133-.63-.199-.896.199-.266.398-1.03 1.292-1.263 1.558-.232.266-.464.299-.862.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.614.174-.812.179-.178.398-.465.597-.697.2-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.2-.896-2.16-1.228-2.957-.323-.777-.652-.672-.896-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.853 1.626 4.119c.2.266 2.808 4.287 6.806 6.014.951.411 1.694.656 2.272.839.955.304 1.824.261 2.511.158.766-.114 2.352-.961 2.684-1.889.333-.928.333-1.724.233-1.889-.1-.166-.365-.266-.763-.465z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
      </motion.a>
    </div>
  );
}
