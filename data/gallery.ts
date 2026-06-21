export type GalleryCategory = "Achievement" | "Work";

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: GalleryCategory;
}

// TODO: placeholder content — replace src/caption/category with your real
// photos. Drop images into /public/gallery and point src at them, e.g.
// "/gallery/award-2025.jpg". Add or remove objects freely (up to ~20 looks best).
export const galleryItems: GalleryItem[] = [
  { id: "g6", src: "/gallery/one.jpg", caption: "A contest mate - 2023 - BUBT", category: "Work" },
  { id: "g7", src: "/gallery/two.jpg", caption: "Football Tournament at SparkTech LTD", category: "Work" },
  { id: "g8", src: "/gallery/three.jpg", caption: "Contest Organizer", category: "Work" },
  { id: "g9", src: "/gallery/four.jpg", caption: "Before The Final - 2024 - DIU", category: "Work" },
  { id: "g10", src: "/gallery/five.jpg", caption: "The Team", category: "Work" },
  { id: "g11", src: "/gallery/seven.jpg", caption: "Received Award", category: "Work" },
  { id: "g12", src: "/gallery/eight.jpg", caption: "Group photo with teammates & mentors", category: "Work" },
  { id: "g13", src: "/gallery/six.jpg", caption: "Problem Solving", category: "Work" },



  { id: "g1", src: "/gallery/achievement1.png", caption: "The 2023 ICPC Dhaka Regional Contest", category: "Achievement" },
  { id: "g2", src: "/gallery/achievement2.png", caption: "The 2024 ICPC Dhaka Regional Contest", category: "Achievement" },
  { id: "g3", src: "/gallery/achievement3.png", caption: "Python Certificate", category: "Achievement" },
  { id: "g4", src: "/gallery/achievement4.png", caption: "SQL Certificate", category: "Achievement" },
  { id: "g5", src: "/gallery/achievement5.png", caption: "Gemini API Certificate", category: "Achievement" },
];
