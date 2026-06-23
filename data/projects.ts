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
  githubUrl2?: string;
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
    id: "reho",
    title: "ReHo",
    file: "ReHo/App.tsx",
    description:
      "ReHo is an AI-powered personal finance app that helps users manage debts, expenses, budgets, and savings in one place. It provides smart recommendations to improve spending habits and achieve financial goals. An AI assistant offers personalized guidance, insights, and support for better financial decisions.",
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
    id: "sports-data-explorer",
    title: "Evaluating ARIMA, LSTM, and Prophet for Time Series Forecasting: A Comparative Analysis",
    file: "Time_Series_Forecasting.ipynb",
    description:
      "Conducted a comparative study on 10 years of Apple stock market data using ARIMA, LSTM, and Prophet models. Trained and evaluated each model for short-term price forecasting, finding that ARIMA outperformed the others with the highest accuracy and lowest prediction error for 5-day forecasts.",
    image: "/projects/time_series_prediction.png",
    githubUrl: "https://github.com/syfulislam763/Time_Series_Forecasting_using_LSTM_ARIMA_Prophet",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "ARIMA", "LSTM", "Prophet", "TensorFlow",],
    status: "Completed",
    year: "",
    category: "AI/ML",
  },
  {
    id: "asrecognition",
    title: "ASL Recognition using Deep Learning",
    file: "HGIC1.ipynb",
    description:
      "Developed a CNN-based deep learning model for American Sign Language (ASL) recognition using 1,300 images across 26 alphabet classes (A–Z). The dataset was divided into 70% training, 20% validation, and 10% testing sets. The model employs convolutional and dense layers to classify hand-sign alphabets effectively.",
    image: "/projects/asl.png",
    githubUrl: "https://github.com/syfulislam763/ASL_classification",
    tags: ["Python", "TensorFlow", "Keras", "Matplotlib", "Computer Vision", "Deep Learning", "Image Classification"],
    status: "Completed",
    year: "",
    category: "AI/ML",
  },
  {
    id: "epharmaciy",
    title: "E-pharmacy",
    file: "-pharmacy/App.js",
    description:
      "Collaborated with a team of six to develop a full-stack E-Pharmacy platform that enables users to upload prescriptions, request medicines, receive invoices, and place orders online. The system helps pharmacies manage orders and deliveries while providing customers with convenient access to medicines from home.",
    image: "/projects/epharmaciy.png",
    githubUrl: "https://github.com/PriontoAbdullah/E-Pharmacy",
    liveUrl: "https://e-pharmacy-bd.web.app/",
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "REST API", "Full-Stack Development", "Redux", "Tailwind CSS"],
    status: "Completed",
    year: "",
    category: "Web",
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
  {
    id: "quickhire",
    title: "QuickHire",
    file: "--",
    description:
      "Developed QuickHire, a full-stack job portal that enables users to search and apply for jobs, track application progress, and manage activities through a personalized dashboard. Built the frontend with Next.js and Tailwind CSS, and developed scalable backend services using NestJS for efficient job and user management.",
    image: "/projects/quickhire.png",
    githubUrl: "https://github.com/syfulislam763/Job_Board_Application",
    githubUrl2: "https://github.com/syfulislam763/Job_Board_Application_Backend",
    tags: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "REST API", "Full-Stack Development"],
    status: "Completed",
    year: "",
    category: "Web",
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
  }
];
