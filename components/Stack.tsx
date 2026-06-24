"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/skills";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Stack() {
  return (
    <section id="stack" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="" title="What I build with" />
      </Reveal>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={card}
            whileHover={{ y: -4, boxShadow: "0 12px 28px -8px rgba(21,24,31,0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-surface p-6 cursor-default"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
              {group.label}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
