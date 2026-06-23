"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/emailjs";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [from, setFrom]       = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const firstRef = useRef<HTMLInputElement>(null);

  /* lock body scroll & focus first field */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSend = async () => {
    if (!from || !subject || !message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { email: from, subject, message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-lg border border-line bg-paper px-4 py-3 font-sans text-sm text-ink placeholder:text-muted/60 outline-none focus:border-signal transition-colors";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line  bg-[#FFCEE3] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tab header — matches project card style */}
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <span className="font-mono text-xs text-muted">Compose</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded p-1 font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            ESC ✕
          </button>
        </div>

        {status === "sent" ? (
          <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
            <span className="text-3xl">✉️</span>
            <h3 className="font-display text-xl font-medium text-ink">Message sent!</h3>
            <p className="text-sm text-muted">
              Thanks for reaching out — I'll get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-6">
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
                Your email
              </label>
              <input
                ref={firstRef}
                type="email"
                placeholder="you@example.com"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry, freelance work…"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-xs text-red-500">
                Something went wrong — please try again or email directly.
              </p>
            )}

            <div className="flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-[11px] text-muted">
                → dev.syfulislam@gmail.com
              </span>
              <button
                onClick={handleSend}
                disabled={status === "sending" || !from || !subject || !message}
                className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
