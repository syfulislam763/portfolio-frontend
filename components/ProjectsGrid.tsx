"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: Array<"All" | ProjectCategory> = ["All", "Mobile App", "Web", "AI/ML"];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.25 } },
};

export default function ProjectsGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="mx-auto bg-[#ded7e9] max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow=""
          title="Things I've completed"
          description="A handful of mobile, web and AI/ML products — from idea through to production."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                active === f
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={grid}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <motion.div key={project.id} variants={item} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.p variants={item} className="col-span-2 font-mono text-sm text-muted">
              No projects in this category yet.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
