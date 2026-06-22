'use client';
import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { StatusDot } from "./StatusDot";
import { profile } from "@/data/profile";
import ContactModal from "./ContactModal";


function getYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  

  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }

  return years;
}

export default function Hero() {
  const yearsOfExperience = getYearsOfExperience("2023-01-01");
  const [open, setOpen] = React.useState(false);
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 bg-[#ded7e9]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              <StatusDot color="shipped" />
              Available 
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Syful
            </h1>
            <p className="mt-2 font-display text-2xl text-muted sm:text-3xl">
              Software Engineer | Research Enthusiast - AI
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              CSE graduate with {yearsOfExperience}+ years of experience building production-ready applications end-to-end. I specialize in React Native, Expo, Next.js, FastAPI, and NestJS, with a strong focus on scalable, user-focused software. Based in Dhaka, Bangladesh, I'm passionate about solving real-world problems, learn quickly, and thrive in collaborative team environments.

            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
              >
                View work
              </a>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center font-mono text-sm text-ink transition-colors hover:text-signal"
              >
                dev.syfulislam@gmail.com →
              </button>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:pt-20">
          <Reveal delay={120}>
            <div className="mx-auto w-44 sm:w-56 lg:w-full">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-line bg-signal/[0.06]"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                  
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={profile.photo}
                      alt="Portrait of Syful"
                      fill
                      sizes="(min-width: 1024px) 280px, 224px"
                      className="object-cover grayscale-[0%] transition-all duration-500 hover:scale-105 hover:grayscale-[0%] hover:contrast-[1.2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={320}>
        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Research</dt>
            <dd className="mt-1 font-medium text-ink"> 2 Papers published</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Completed</dt>
            <dd className="mt-1 font-medium text-ink">6+ Production apps</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Stack</dt>
            <dd className="mt-1 font-medium text-ink">React Native · Next.js · FastAPI · AI </dd>
          </div>
          
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Based in</dt>
            <dd className="mt-1 font-medium text-ink">Dhaka, BD — remote friendly</dd>
          </div>
          
        </dl>
      </Reveal>
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </section>
  );
}
