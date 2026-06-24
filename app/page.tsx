import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import TechMarquee from "@/components/TechMarquee";
import Stack from "@/components/Stack";
import ProjectsGrid from "@/components/ProjectsGrid";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Intro /> */}
      <Stack />
      <ProjectsGrid />
      <Research />
      <Experience />
    </main>
  );
}
