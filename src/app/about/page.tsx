import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About Mitchell Bao, a Computer Science undergraduate student and writer.",
};

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="About"
        title="A computer science student building a personal archive across security, sound, and political thought."
        description="I am a Computer Science undergraduate student based in China, preparing to apply for Master's programs in Computer Science, Software Engineering, or Artificial Intelligence in the United States."
      />

      <div className="prose-archive max-w-3xl space-y-6 text-lg">
        <p>
          My technical center of gravity is security evaluation for AI systems. I am especially interested in AI safety, trustworthy machine learning, software and system security, open-source software supply chain security, and the ways modern models alter old security assumptions.
        </p>
        <p>
          My current research focuses on audio CAPTCHA security in the era of large audio-language models. I am drawn to this problem because it sits at an unusual intersection: speech recognition, acoustic perception, adversarial robustness, human usability, and the unstable boundary between what a human can tolerate and what a machine can now infer.
        </p>
        <p>
          Outside formal research, I use writing as a long-term knowledge archive. Some notes are technical and experimental; others move through political philosophy, queer theory, libertarian feminism, autonomy, embodiment, and social norms. I try to treat these topics as arguments to be tested and clarified, not as slogans.
        </p>
        <p>
          Music is the other recurring thread. I am interested in electronic music production, experimental pop, deconstructed club, industrial textures, harmony, synthesizer sound design, and DAW workflows in FL Studio and Studio One. The music archive is where production notes and analysis can sit next to research notes without pretending they are separate lives.
        </p>
      </div>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          ["Academic focus", "AI safety, machine learning security, audio CAPTCHA evaluation, and trustworthy systems."],
          ["Writing focus", "Research notes, paper readings, political philosophy essays, queer theory reflections, and personal intellectual fragments."],
          ["Creative focus", "Electronic production, sound design, harmony notes, modern R&B, blues, J-pop, and city-pop adjacent arranging."],
        ].map(([title, body]) => (
          <div key={title} className="border-t border-ink-900/10 pt-5 dark:border-ink-50/10">
            <h2 className="font-serif text-xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-ink-700 dark:text-ink-100">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
