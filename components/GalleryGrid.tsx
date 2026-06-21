"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import Lightbox from "./Lightbox";

const categories: Array<"All" | GalleryCategory> = ["All", "Achievement", "Work"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setFilter(c);
              setActiveIndex(null);
            }}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              filter === c
                ? "border-ink bg-ink text-paper"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden bg-surface"
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover grayscale-[0%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 py-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="truncate font-mono text-[11px] text-paper">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 font-mono text-sm text-muted">No photos in this category yet.</p>
      )}

      {activeIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
