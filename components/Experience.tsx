import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="" title="Where I've worked" />
      </Reveal>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {experience.map((item, i) => (
          <Reveal key={item.company} delay={i * 80}>
            <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div className="sm:w-1/3">
                <h3 className="font-display text-lg font-medium text-ink">{item.company}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{item.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted sm:w-1/2">{item.summary}</p>
              <span className="shrink-0 font-mono text-xs text-muted">{item.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
