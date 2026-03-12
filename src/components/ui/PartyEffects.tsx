"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["#d4a017", "#e8c547", "#f5d97e", "#ff6b9d", "#c084fc", "#60a5fa", "#34d399", "#fb923c"];

const BALLOON_EMOJIS = ["🎈", "🎀", "🎊", "🎉"];

interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: "circle" | "rect" | "star";
  rotation: number;
}

interface Balloon {
  id: number;
  x: number;
  emoji: string;
  size: number;
  delay: number;
  duration: number;
}

export default function PartyEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
      shape: (["circle", "rect", "star"] as const)[Math.floor(Math.random() * 3)],
      rotation: Math.random() * 360,
    }));

    const b: Balloon[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      emoji: BALLOON_EMOJIS[Math.floor(Math.random() * BALLOON_EMOJIS.length)],
      size: Math.random() * 20 + 24,
      delay: Math.random() * 6,
      duration: Math.random() * 5 + 8,
    }));

    setParticles(p);
    setBalloons(b);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Confetti */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 1, rotate: p.rotation }}
          animate={{
            y: "110vh",
            opacity: [1, 1, 0.8, 0],
            rotate: p.rotation + 360 * (Math.random() > 0.5 ? 1 : -1) * 3,
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0"
          style={{
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.4 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "2px" : "0",
            clipPath: p.shape === "star"
              ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
              : undefined,
          }}
        />
      ))}

      {/* Balloons floating up */}
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", x: `${b.x}vw` }}
          animate={{
            y: "-10vh",
            x: [`${b.x}vw`, `${b.x + (Math.random() * 6 - 3)}vw`, `${b.x}vw`],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0"
          style={{ fontSize: b.size }}
        >
          {b.emoji}
        </motion.div>
      ))}
    </div>
  );
}
