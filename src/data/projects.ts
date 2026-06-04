export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: "Research" | "Prototype" | "Planned" | "Maintained";
  category: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Audio CAPTCHA Security Evaluation",
    description:
      "Experimental framework for testing audio CAPTCHA robustness against ASR pipelines and large audio-language models.",
    stack: ["Python", "Audio processing", "ML evaluation", "Reproducibility"],
    status: "Research",
    category: "Security"
  },
  {
    title: "LALM Attack Notes",
    description:
      "A structured notebook of prompt strategies, model behavior observations, and evaluation concerns for audio-language models.",
    stack: ["Python", "MDX", "LaTeX", "Experiment logs"],
    status: "Prototype",
    category: "Research notes"
  },
  {
    title: "Personal Knowledge Archive",
    description:
      "This website: a blog-first personal archive for research notes, technical writing, philosophical essays, and music analysis.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    status: "Maintained",
    category: "Web"
  },
  {
    title: "Open Source Supply Chain Reading Map",
    description:
      "A planned reading and experiment map around dependency confusion, maintainer trust, malicious packages, and reproducible builds.",
    stack: ["Security research", "GitHub", "Docker", "Linux"],
    status: "Planned",
    category: "Systems security"
  }
];
