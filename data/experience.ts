export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
}

// TODO: update periods (dates) to match your actual employment history.
export const experience: ExperienceItem[] = [
  {
    company: "SparkTech IT Limited",
    role: "Full-Stack & Mobile Developer",
    period: "jan-2025-may-2026",
    summary:
      "Led end-to-end development of client-facing mobile applications using advanced React Native expertise, working closely with clients to understand requirements and deliver tailored solutions, while building flexible, reusable UI components optimized for smooth, high-quality cross-platform performance.",
  },
  {
    company: "CRC Research Center",
    role: "Undergraduate Research Assistant",
    period: "sep-2023-dec-2024",
    summary:
      "Conducted advanced research in hand gesture recognition and computer vision, implementing state-of-the-art algorithms across dataset handling, model training, evaluation, and documentation, contributing to high-quality experimental results and a successful research paper submission.",
  },
  {
    company: "iBOS Limited",
    role: "Software Engineer Intern",
    period: "mar-2023-aug-2023",
    summary:
      "Built scalable mobile and web applications using React Native and React, collaborating closely with designers and backend engineers to deliver polished UI/UX, integrate REST APIs, and optimize cross-platform performance, while maintaining clean, reusable, well-structured code.",
  },
];
