"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactModal from "./ContactModal";
import Image from "next/image";

const socials = [
  { label: "WhatsApp", href: "https://wa.me/8801782788050", icon: "/whatsapp.png" },
  { label: "GitHub", href: "https://github.com/syfulislam763", icon: "/github.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-syful-islam/", icon: "/linkedin.png" },
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
            description="Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you."
          />
        </Reveal>

        {/* Primary CTA — email compose */}
        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs text-muted">compose</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-shipped inline-block" /> ready
              </span>
            </div>
            <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Direct email</p>
                <p className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  dev.syfulislam@gmail.com
                </p>
                <p className="mt-2 text-sm text-muted">
                  Click the button to open a compose form — your message lands straight in my inbox.
                </p>
              </div>
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                Send me a message
              </motion.button>
            </div>
          </div>
        </Reveal>

        {/* Socials row */}
        <Reveal delay={160}>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 transition-colors hover:border-ink/20"
              >
                {/* <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line font-mono text-xs text-ink">
                  {s.icon}
                </span> */}
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0"
                />
                <div>
                  <p className="text-sm font-medium text-ink">{s.label}</p>
                  <p className="font-mono text-[11px] text-muted">Open profile ↗</p>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </section>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}
