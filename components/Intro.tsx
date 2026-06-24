import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

export default function Intro() {
  const embedUrl = getYouTubeEmbedUrl(profile.introVideoUrl);

  return (
    <section id="introduction" className="mx-auto max-w-content border-t border-line px-6 py-20 bg-[#ded7e9]">
      <Reveal>
        <SectionHeading
          eyebrow=""
          title="A quick intro"
          description="60 seconds on who I am and how I work."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <span className="font-mono text-xs text-muted">intro.mp4</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">▶ watch</span>
          </div>
          <div className="relative aspect-video w-full bg-paper">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Intro video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              /* Clean placeholder — visible until a YouTube URL is added to data/profile.ts */
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-muted">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" opacity="0.4" />
                  </svg>
                </div>
                <p className="font-mono text-xs text-muted">
                  Add <code className="rounded bg-line px-1.5 py-0.5">introVideoUrl</code> in{" "}
                  <code className="rounded bg-line px-1.5 py-0.5">data/profile.ts</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
