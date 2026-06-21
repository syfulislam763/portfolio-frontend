# Syful — Portfolio

A light, clean, modular portfolio built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        → fonts + metadata + shared Navbar/Footer
  page.tsx           → homepage, assembles sections in order
  globals.css
  gallery/
    page.tsx          → dedicated gallery page (filterable grid + lightbox)
components/
  Navbar.tsx, Hero.tsx, Intro.tsx, Stack.tsx, ProjectsGrid.tsx,
  ProjectCard.tsx, Research.tsx, Experience.tsx, Contact.tsx, Footer.tsx
  GalleryGrid.tsx, Lightbox.tsx → gallery page pieces
  Reveal.tsx          → scroll-reveal wrapper used across sections
  SectionHeading.tsx, StatusDot.tsx, Icons.tsx → small shared pieces
data/
  profile.ts          → your photo + intro video link
  projects.ts          → project showcase content
  research.ts           → publication(s)
  gallery.ts             → gallery photos
  experience.ts            → work history
  skills.ts                 → stack/skills grid
public/
  profile.svg          → placeholder headshot (replace)
  projects/*.svg         → placeholder project previews (replace)
  gallery/*.svg            → placeholder gallery photos (replace)
```

Everything you'll want to update day-to-day lives in `data/` — you should
rarely need to touch the component files.

## Things to personalize before publishing

1. **`data/projects.ts`** — replace placeholder `githubUrl` / `liveUrl` /
   `video` values, and swap the `image` for a real screenshot (drop files
   into `public/projects/` and point `image` at the path, e.g.
   `/projects/my-app.png`). To add a new project, just add another object
   to the array.
2. **`public/projects/*.svg`** — these are styled placeholders. Replace
   with real screenshots or app store/Play Store frames once you have them.
3. **`data/profile.ts`** — your headshot and intro video, in one place:
   - `photo`: drop a real photo into `/public` (e.g. `profile.jpg`) and
     point `photo` at it, e.g. `"/profile.jpg"`.
   - `introVideoUrl`: once your intro video is live on YouTube, paste the
     link here (`https://www.youtube.com/watch?v=...` or a `youtu.be` link
     both work). Leave it empty and the site shows a placeholder instead.
4. **`data/research.ts`** — your paper's title, authors, venue, abstract,
   and links (paper/DOI/code). Set the array to `[]` to hide the whole
   section if you'd rather not show it yet.
5. **`data/gallery.ts`** + **`/gallery`** — your achievement/casual photos,
   shown on the dedicated Gallery page (linked in the navbar). Drop images
   into `/public/gallery`, then add `{ id, src, caption, category }` objects
   to the array (`category` is `"Achievement"` or `"Work"`, used by the
   filter buttons). Around 20 photos is the sweet spot before it gets long.
6. **`data/experience.ts`** — fix the placeholder dates (`20XX — 20XX`).
7. **Email & socials** — search for `you@example.com` and `yourhandle`
   (in `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`) and replace with your real
   email, GitHub, LinkedIn and Upwork links.
8. **`app/layout.tsx`** — update the `<title>` / `description` metadata.

## Adding a demo video

Either drop an `.mp4` into `public/` and reference it as `video: "/demo.mp4"`,
or paste a YouTube/Loom URL directly — both work the same way since it's
just a link.

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) —
zero config needed, it's a standard Next.js app.
