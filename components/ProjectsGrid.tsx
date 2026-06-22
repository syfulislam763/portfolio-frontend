"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: Array<"All" | ProjectCategory> = ["All", "Mobile App", "Web", "AI/ML"];

export default function ProjectsGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow=""
          title="Things I've completed"
          description="A handful of recent mobile, web, and AI/ML products — from idea through to production."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                active === f
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 ml-5 font-mono text-sm text-muted">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
