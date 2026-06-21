import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { researchPapers } from "@/data/research";
import { DocumentIcon, ExternalIcon, GithubIcon } from "./Icons";
import { StatusDot } from "./StatusDot";

const statusColor: Record<string, "shipped" | "signal" | "muted"> = {
  Published: "shipped",
  Preprint: "signal",
  "Under Review": "muted",
};

export default function Research() {
  if (researchPapers.length === 0) return null;

  return (
    <section id="research" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="" title="Published Papers" title2="View all on Google Scholar" />
      </Reveal>

      <div className="mt-10 space-y-6">
        {researchPapers.map((paper, i) => (
          <Reveal key={paper.id} delay={i * 80}>
            <article className="overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <span className="font-mono text-xs text-muted">paper.pdf</span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                  <StatusDot color={statusColor[paper.status]} />
                  {paper.status}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-ink">{paper.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {paper.authors} · {paper.venue}, {paper.year}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{paper.abstract}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-line pt-4">
                  {paper.paperUrl && (
                    <a
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
                    >
                      <DocumentIcon className="h-4 w-4" /> Read paper
                    </a>
                  )}
                  {paper.doiUrl && (
                    <a
                      href={paper.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
                    >
                      <ExternalIcon className="h-3.5 w-3.5" /> DOI
                    </a>
                  )}
                  {paper.codeUrl && (
                    <a
                      href={paper.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-signal"
                    >
                      <GithubIcon className="h-4 w-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
