import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Syful",
  description: "A look at achievements, events, and behind-the-scenes moments.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-content px-6 pb-24 pt-20 sm:pt-28 bg-[#ded7e9]">
      <SectionHeading
        eyebrow=""
        title="Moments & milestones"
        description="A mix of achievements, events, and behind the scenes ."
      />
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </main>
  );
}
