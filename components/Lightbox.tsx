"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { GalleryItem } from "@/data/gallery";

export default function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const item = items[activeIndex];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 px-4 py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 font-mono text-sm text-paper/70 transition-colors hover:text-paper"
      >
        ESC ✕
      </button>

      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 font-mono text-2xl text-paper/70 transition-colors hover:text-paper sm:left-6 z-10"
        >
          ←
        </button>
      )}

      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-paper/10 bg-surface">
          <Image
            src={item.src}
            alt={item.caption}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <p className="mt-4 text-center font-mono text-sm text-paper/80">{item.caption}</p>
      </div>

      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next photo"
          className="absolute right-3 font-mono text-2xl text-paper/70 transition-colors hover:text-paper sm:right-6 z-10"
        >
          →
        </button>
      )}
    </div>
  );
}
