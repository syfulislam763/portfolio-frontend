"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { StatusDot } from "./StatusDot";
import { profile } from "@/data/profile";
import ContactModal from "./ContactModal";
import Counter from "./Counter";

function getYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) years--;
  return years;
}

export default function Hero() {
  const yearsOfExperience = getYearsOfExperience("2023-01-01");
  const [open, setOpen] = React.useState(false);

  return (
    <section
      id="top"
      className="relative mx-auto max-w-content overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28"
      style={{ background: "#ded7e9" }}
    >
      {/* ── Animated background ─────────────────────────────── */}
      {/* Dot-grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2547D0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Drifting colour blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* top-left — signal blue */}
        <div
          className="hero-blob-1 absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.13]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #2547D0 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        {/* top-right — lavender */}
        <div
          className="hero-blob-2 absolute -right-16 top-0 h-[360px] w-[360px] rounded-full opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle at 60% 30%, #a78bfa 0%, transparent 70%)",
            filter: "blur(56px)",
          }}
        />
        {/* bottom-center — teal */}
        <div
          className="hero-blob-3 absolute bottom-0 left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at 50% 80%, #0F8B6C 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <StatusDot color="shipped" />
              Available to connect
            </motion.div>
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
              CSE graduate with {yearsOfExperience}+ years of experience engineering production-ready distributed systems. Specializing in robust mobile architectures (React Native/Expo), web (Next.js, React.js), and scalable backend frameworks (FastAPI/NestJS). Based in Dhaka, Bangladesh, my focus centers on algorithmic problem-solving, rapid technical adaptation, and cross-functional collaborative engineering.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
              >
                View work
              </motion.a>
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-1.5 font-mono text-sm text-ink transition-colors hover:text-signal"
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 6l7 4.5L15 6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                dev.syfulislam@gmail.com
              </motion.button>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:pt-20">
          <Reveal delay={120}>
            <div className="mx-auto w-44 sm:w-56 lg:w-full">
              <div className="relative">
                {/* Animated glow ring behind the photo */}
                <motion.div
                  aria-hidden
                  className="absolute -inset-2 rounded-2xl opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, #2547D0 0%, #a78bfa 50%, #0F8B6C 100%)",
                    filter: "blur(16px)",
                  }}
                  animate={{ opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={profile.photo}
                      alt="Portrait of Syful"
                      fill
                      sizes="(min-width: 1024px) 280px, 224px"
                      className="object-cover transition-all duration-500 hover:scale-105 hover:contrast-[1.1]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Stats row ────────────────────────────────────────── */}
      <Reveal delay={320}>
        <dl className="relative z-10 mt-16 grid grid-cols-1 gap-6 border-t border-line/60 pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Research</dt>
            <dd className="mt-1 font-medium text-ink">
              <Counter to={2} suffix=" Papers published" />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Completed</dt>
            <dd className="mt-1 font-medium text-ink">
              <Counter to={6} suffix="+ Production apps" />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Stack</dt>
            <dd className="mt-1 font-medium text-ink">React Native · Next.js · FastAPI · AI</dd>
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
