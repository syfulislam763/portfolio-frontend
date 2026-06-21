import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section id="work" className=" bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="// selected work"
          title="Things I've shipped"
          description="A handful of recent mobile and web products — from idea through to production."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
