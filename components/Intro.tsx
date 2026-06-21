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
          description="60 seconds on who I am and How I work."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <span className="font-mono text-xs text-muted">▶ watch</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              
            </span>
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
              <div className="flex h-full items-center justify-center px-6 text-center font-mono text-sm text-muted">
                add your YouTube link to introVideoUrl in data/profile.ts
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
