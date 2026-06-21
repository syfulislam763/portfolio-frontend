export type ProjectStatus = "Shipped" | "In Development" | "Case Study";

export interface Project {
  id: string;
  title: string;
  /** Shown like an editor tab above the preview image, e.g. "app/page.tsx" */
  file: string;
  description: string;
  /** Path under /public, or a full image URL */
  image: string;
  /** Optional: link to a demo video (mp4 file under /public, or a YouTube/Loom URL) */
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  status: ProjectStatus;
  year: string;
}

// ─────────────────────────────────────────────────────────────
// TODO: this is placeholder content. Before publishing, replace:
//   - image: drop real screenshots/exports into /public/projects
//   - video: link a real demo (mp4, YouTube or Loom URL)
//   - githubUrl / liveUrl: your real links ('#' hides the link if left empty)
// To add a new project, just add another object to this array —
// no other file needs to change.
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "mysportsnest",
    title: "MySportsNest",
    file: "mysportsnest/app.tsx",
    description:
      "A multi-sport social feed app built with React Native — covering football, cricket and beyond, with a custom feed engine and real-time client collaboration.",
    image: "/projects/mysportsnest.svg",
    githubUrl: "#",
    tags: ["React Native", "TypeScript", "Expo", "REST API"],
    status: "In Development",
    year: "2026",
  },
  {
    id: "preachly",
    title: "Preachly",
    file: "preachly/App.tsx",
    description:
      "A cross-platform Expo app shipped to Android and iOS, with custom native build configuration and a polished onboarding flow.",
    image: "/projects/preachly.svg",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["React Native", "Expo", "Android", "iOS"],
    status: "Shipped",
    year: "2026",
  },
  {
    id: "sports-data-explorer",
    title: "Sports Data Explorer",
    file: "sports-explorer/page.tsx",
    description:
      "An interactive tool for browsing leagues, match schedules and fixtures, built on a live sports data API with a fast, searchable interface.",
    image: "/projects/sports-data-explorer.svg",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    status: "Shipped",
    year: "2025",
  },
  {
    id: "cameraad",
    title: "CameraAd",
    file: "cameraad/MainActivity.kt",
    description:
      "A CameraX-based Android camera app with multiple processing modes (Vivid, Natural, Portrait) and full 4K capture support.",
    image: "/projects/cameraad.svg",
    githubUrl: "#",
    tags: ["Android", "Jetpack Compose", "CameraX", "Kotlin"],
    status: "Shipped",
    year: "2025",
  },
];
