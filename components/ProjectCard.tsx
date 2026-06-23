import Image from "next/image";
import type { Project } from "@/data/projects";
import { GithubIcon, ExternalIcon, PlayIcon } from "./Icons";
import { StatusDot } from "./StatusDot";

const statusColor: Record<Project["status"], "shipped" | "signal" | "muted" | "completed"> = {
  Shipped: "shipped",
  "In Development": "signal",
  "Case Study": "muted",
  Completed: "completed",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(21,24,31,0.15)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="truncate font-mono text-xs text-muted">{project.file}</span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
          <StatusDot color={statusColor[project.status]} />
          {project.status}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-ink">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-line pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
          )}
          {project.githubUrl2 && (
            <a
              href={project.githubUrl2}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              <GithubIcon className="h-4 w-4" /> Backend Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              <ExternalIcon className="h-3.5 w-3.5" /> Live
            </a>
          )}
          {project.androidUrl && (
            <a
              href={project.androidUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              Play Store
            </a>
          )}
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              Apple Store
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
            >
              <PlayIcon className="h-3.5 w-3.5" /> Demo
            </a>
          )}
          
        </div>
      </div>
    </article>
  );
}
