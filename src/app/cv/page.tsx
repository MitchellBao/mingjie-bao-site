import type { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Academic CV overview for Mitchell Bao.",
};

export default function CVPage() {
  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="CV"
        title="Academic and technical profile."
        description="A compact online CV. Replace the placeholder PDF at public/cv.pdf when the full version is ready."
      />

      <a
        href={site.cvPath}
        className="mb-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-ink-50 transition hover:bg-signal-600 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-signal-400"
      >
        <Download size={16} />
        Download CV
      </a>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Education
          </h2>
          <p className="mt-4 leading-7 text-ink-700 dark:text-ink-100">
            Computer Science undergraduate student, currently based in China. Planning to apply for Master's programs in Computer Science, Software Engineering, or Artificial Intelligence in the United States.
          </p>
          <p className="mt-4 font-mono text-sm text-ink-500 dark:text-ink-200">GRE: 325</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Technical Areas
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Python",
              "Machine learning experimentation",
              "Audio processing",
              "Linux / WSL",
              "Docker",
              "Git and GitHub",
              "Web development",
              "LaTeX",
              "Security workflows",
              "Experimental reproducibility"
            ].map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </section>
      </div>

      <section className="mt-12 border-t border-ink-900/10 pt-6 dark:border-ink-50/10">
        <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
          Research Interests
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-ink-700 dark:text-ink-100">
          AI safety, trustworthy AI systems, machine learning security, software and system security, open-source software supply chain security, audio CAPTCHA security, large audio-language models, adversarial audio, and robustness evaluation.
        </p>
      </section>
    </div>
  );
}
