"use client";

import { motion } from "framer-motion";

const techs = [
  "React Native", "Next.js", "TypeScript", "FastAPI","AI/ML", "NestJS",
  "Expo", "Python", "TensorFlow", "PostgreSQL", "Docker",
  "Tailwind CSS", "Kotlin", "Node.js", "REST APIs", "Jetpack Compose",
];

// Duplicate for seamless loop
const items = [...techs, ...techs];

export default function TechMarquee() {
  return (
    <div className="absolute z-10 mt-4 overflow-hidden border-y border-line py-4 bg-transparent">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap font-mono text-xs text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-signal opacity-60" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
