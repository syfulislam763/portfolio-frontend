import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stack from "@/components/Stack";
import ProjectsGrid from "@/components/ProjectsGrid";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Intro />
      <Stack />
      <ProjectsGrid />
      <Research />
      <Experience />
      <Contact />
    </main>
  );
}
