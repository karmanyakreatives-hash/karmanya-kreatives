"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, title, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[#080808]/96 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 border border-[#d4a017]/40 flex items-center justify-center text-[#faf7f0]/60 hover:text-[#d4a017] hover:border-[#d4a017] transition-all duration-300 z-10"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div
          className="absolute top-7 left-1/2 -translate-x-1/2 text-[#faf7f0]/40 text-xs tracking-[0.3em] uppercase z-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 w-12 h-12 border border-[#d4a017]/30 flex items-center justify-center text-[#faf7f0]/60 hover:text-[#d4a017] hover:border-[#d4a017] transition-all duration-300 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl mx-16 md:mx-28"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[75vh]">
          <Image
            src={images[currentIndex]}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        {/* Gold frame accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d4a017]/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4a017]/40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#d4a017]/40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d4a017]/40 pointer-events-none" />
        <p
          className="text-center text-[#faf7f0]/30 text-lg italic mt-4 tracking-wider"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </p>
      </motion.div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 w-12 h-12 border border-[#d4a017]/30 flex items-center justify-center text-[#faf7f0]/60 hover:text-[#d4a017] hover:border-[#d4a017] transition-all duration-300 z-10"
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </motion.div>
  );
}
