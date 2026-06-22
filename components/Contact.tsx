"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactModal from "./ContactModal";

const socials = [
  { label: "Whatsapp", href: "https://wa.me/8801519609744" },
  { label: "GitHub", href: "https://github.com/syfulislam763" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-syful-islam/" },
];

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="bg-[#ded7e9] mx-auto max-w-content border-t border-line px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="Let's get in touch"
            description="Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. I'll do my best to get back to you!"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <button
              onClick={() => setOpen(true)}
              className="font-display text-3xl font-medium text-ink transition-colors hover:text-signal sm:text-4xl text-left"
            >
              dev.syfulislam@gmail.com
            </button>
            <ul className="flex flex-wrap gap-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-ink"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}
