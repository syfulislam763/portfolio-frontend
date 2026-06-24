export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  tags: string[];
  status: "Published" | "Preprint" | "Under Review";
  paperUrl?: string;
  doiUrl?: string;
  codeUrl?: string;
}

// TODO: placeholder content — replace with your real paper's details.
// Set researchPapers to [] to hide the section entirely if you don't want it shown yet.
export const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title: "Hand Gesture Recognition Systems: A Review of Methods, Datasets, and Emerging Trends",
    authors: "Md Selim Sarowar, Nur E Jannatul Farjana, Syful, et al.",
    venue: "International Journal of Computer Applications",
    year: "2025",
    abstract:
      "This study evaluates 252 peer-reviewed articles published between 1995 and 2024, with a focus on input modalities, algorithmic approaches, benchmark datasets, application domains, and system-level challenges such as automation, scalability, generalization, and real-time performance.",
    tags: ["Hand Gesture Recognition", "Deep Learning", "LSTM", "Multimodal Fusion", "Lightweight Architectures"],
    status: "Published",
    paperUrl: "https://www.ijcaonline.org/archives/volume187/number2/hand-gesture-recognition-systems-a-review-of-methods-datasets-and-emerging-trends/",
  },
  {
    id: "paper-2",
    title: "Multimodal Gesture Recognition using CNN-GCN-LSTM with RGB, Depth,and Skeleton Data",
    authors: "Md. Asraful Islam Khan, Syfu Islam",
    venue: "International Journal of Computer Applications",
    year: "2025",
    abstract:
      ` Our architecture leverages MobileNetV3Small-based
CNN backbones for visual feature extraction, GCNs for modeling skeletal relationships, and LSTM-attention modules for capturing temporal dynamics. Unlike previous works that rely on large
curated datasets, our approach is evaluated on a challenging lowsample, high-noise dataset derived from real-world video recordings`,
    tags: ["HCL",  "GCN", "LSTM", "Depth", "Skeleton", "CNN"],
    status: "Published",
    paperUrl: "https://www.researchgate.net/publication/393080951_Multimodal_Gesture_Recognition_using_CNN-GCN-LSTM_with_RGB_Depthand_Skeleton_Data",
  },
];
