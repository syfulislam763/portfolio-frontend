export type ProjectStatus = "Shipped" | "In Development" | "Case Study" | "Completed";
export type ProjectCategory = "Mobile App" | "Web" | "AI/ML";

export interface Project {
  id: string;
  title: string;
  file: string;
  description: string;
  image: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  status: ProjectStatus;
  year: string;
  category: ProjectCategory;
  androidUrl?: string;
  iosUrl?: string;
}

export const projects: Project[] = [
  {
    id: "mysportsnest",
    title: "MySportsNest",
    file: "mysportsnest/app.tsx",
    description:
      "MySportsNest is a personalized sports app where users follow favorite teams, leagues, and players to receive news, videos, live scores, and match updates. Covering eight sports, it offers standings, rankings, schedules, and fixtures. Users can subscribe for an ad-free experience or use the ad-supported version.",
    image: "/projects/mysportsnest.png",
    githubUrl: "https://github.com/syfulislam763/MySportsNest",
    tags: ["React Native", "TypeScript",  "REST API", "AI Integration", "Cross-Platform", "In-App Purchases", "Zustand", "Admob"],
    status: "Completed",
    year: "2026",
    category: "Mobile App",
  },
  {
    id: "preachly",
    title: "Preachly",
    file: "preachly/App.tsx",
    description:
      "Preachly is an AI-powered Christian learning app that helps users grow in faith through Bible reading, audio listening, and gamified milestones. Users earn badges for daily, weekly, and monthly achievements. Personalized onboarding and an AI faith assistant provide guidance, Bible discussions, spiritual support, and encouragement.",
    image: "/projects/preachly.png",
    githubUrl: "https://github.com/syfulislam763/Preachly_v2",
    tags: ["React Native","Zustand", "Expo Bare Workflow", "JavaScript", "Cross-Platform", "AI Integration", "In-App Purchases", "REST API"],
    status: "Completed",
    year: "",
    category: "Mobile App",
  },
  {
    id: "sports-data-explorer",
    title: "Sports Data Explorer",
    file: "sports-explorer/page.tsx",
    description:
      "An interactive tool for browsing leagues, match schedules and fixtures, built on a live sports data API with a fast, searchable interface.",
    image: "/projects/time_series_prediction.png",
    githubUrl: "#",
    liveUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    status: "Completed",
    year: "",
    category: "AI/ML",
  },
  {
    id: "reho",
    title: "ReHo",
    file: "ReHo/App.tsx",
    description:
      "ReHo is an AI-powered personal finance management application that helps users track and manage their debts, expenses, budgets, and savings in one place. The platform provides intelligent insights and recommendations to optimize spending, improve budgeting, and achieve financial goals. With its built-in AI conversational assistant, users can receive personalized financial guidance, ask questions, and make smarter financial decisions with ease.",
    image: "/projects/reho.png",
    githubUrl: "https://github.com/syfulislam763/ReHo",
    androidUrl: "https://play.google.com/store/apps/details?id=com.RealWealth.ReHo&pcampaignid=web_share&pli=1",
    iosUrl: "https://apps.apple.com/us/app/reho/id6755340157",
    tags: ["React Native", "JavaScript", "Cross-Platform", "Expo Bare Workflow", "AI Integration", "In-App Purchases", "REST API"],
    status: "Completed",
    year: "",
    category: "Mobile App",
  },
  {
    id: "neonova",
    title: "Neonova",
    file: "Neonova/App.tsx",
    description:
      "Neonova is a fitness learning platform that helps users track workout progress, purchase gym courses, and achieve fitness goals. Users earn badges upon completing courses and milestones. The platform delivers structured video-based training, requiring lessons to be completed in sequence, ensuring a guided and effective learning experience.",
    image: "/projects/neonova.png",
    githubUrl: "https://github.com/syfulislam763/Neonova",
    tags: ["React Native", "JavaScript", "Cross-Platform", "In-App Purchases", "REST API"],
    status: "Completed",
    year: "",
    category: "Mobile App",
  },
];
