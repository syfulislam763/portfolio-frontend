import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/skills";

export default function Stack() {
  return (
    <section id="stack" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="" title="What I build with" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80} className="bg-surface p-6">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
