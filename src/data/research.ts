export const currentResearch = {
  title:
    "Audio CAPTCHAs Under Siege: Systematizing Security Risks from Zero-Shot Large Audio-Language Models",
  status: "Manuscript and experiments in progress",
  summary:
    "This project studies whether large audio-language models weaken audio CAPTCHA systems by combining speech recognition, acoustic perception, instruction following, and lightweight reasoning in a single generalist model.",
  questions: [
    "How do zero-shot large audio-language models perform against contemporary audio CAPTCHA challenges?",
    "Where do humans and machines diverge in noisy, distorted, or semantically ambiguous audio tasks?",
    "Which usability-security trade-offs become unstable when attackers can use generalist audio models?",
    "How should robustness evaluations adapt when attack models are no longer narrow ASR pipelines?"
  ],
};

export const researchThemes = [
  "Audio CAPTCHA security",
  "ASR-based and LALM-based attacks",
  "Large audio-language models",
  "Zero-shot audio reasoning",
  "Human-machine perception mismatch",
  "Adversarial examples in audio",
  "Usability-security trade-offs",
  "Security evaluation of AI systems",
  "Robustness evaluation"
];

export const researchNotes = [
  {
    title: "Threat models for audio CAPTCHAs after generalist audio models",
    description:
      "A working taxonomy of attacker capabilities, model interfaces, prompt strategies, and evaluation pitfalls.",
    status: "Draft note"
  },
  {
    title: "Perception mismatch as a security boundary",
    description:
      "Notes on cases where human tolerance for noise and machine recognition diverge in ways that may matter for authentication.",
    status: "Reading note"
  },
  {
    title: "From ASR benchmarks to end-to-end CAPTCHA evaluation",
    description:
      "An argument for measuring task success, not only transcription accuracy, when models can reason over audio.",
    status: "Experiment design"
  }
];
