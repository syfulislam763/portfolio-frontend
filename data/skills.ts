export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Language",
    items: ["C++", "Python", "TypeScript", "JavaScript", "Kotlin", "SQL"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Jetpack Compose"],
  },
  {
    label: "Web",
    items: ["Next.js", "React", "HTML/CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI","Nest.js", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    label: "Tooling",
    items: ["Git", "CI/CD", "Vercel", "Docker"],
  },
];
