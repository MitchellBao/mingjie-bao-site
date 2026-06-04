import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Mail, Music2 } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Tag } from "@/components/Tag";
import { currentResearch, researchThemes } from "@/data/research";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  const selectedProjects = projects.slice(0, 2);

  return (
    <div className="py-14 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-600 dark:text-signal-400">
            Computer science / security / audio
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight tracking-normal text-ink-900 dark:text-ink-50 sm:text-6xl">
            Systems, sound, and the fragile boundary between human perception and machine recognition.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-700 dark:text-ink-100">
            I am a Computer Science undergraduate student interested in AI safety, trustworthy machine learning, and software/system security. My current research focuses on audio CAPTCHA security in the era of large audio-language models. Outside research, I write about political philosophy, queer theory, electronic music, and the strange borderlands between systems, sound, and autonomy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-ink-50 transition hover:bg-signal-600 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-signal-400"
            >
              Read research
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-sm font-medium text-ink-800 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-50/15 dark:text-ink-50 dark:hover:text-signal-400"
            >
              Browse writing
              <BookOpen size={16} />
            </Link>
          </div>
        </div>

        <aside className="border-l border-ink-900/10 pl-6 dark:border-ink-50/10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">
            Current focus
          </p>
          <h2 className="mt-4 font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            {currentResearch.title}
          </h2>
          <p className="mt-4 leading-7 text-ink-700 dark:text-ink-100">
            {currentResearch.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {researchThemes.slice(0, 5).map((theme) => (
              <Tag key={theme} label={theme} />
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal-600 dark:text-signal-400">
            <FlaskConical size={14} />
            Research highlight
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Security evaluation after generalist audio models
          </h2>
        </div>
        <div className="space-y-4 leading-8 text-ink-700 dark:text-ink-100">
          <p>
            Audio CAPTCHAs were designed around a narrow asymmetry: humans can interpret distorted speech while automated systems struggle. Large audio-language models make that boundary less stable by joining acoustic perception, speech recognition, instruction following, and reasoning.
          </p>
          <p>
            The project asks how to evaluate audio CAPTCHA systems when attackers can query generalist models rather than build custom ASR pipelines.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-2 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Recent Writing
          </h2>
          <Link href="/writing" className="text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400">
            All posts
          </Link>
        </div>
        {recentPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      <section className="mt-20">
        <div className="mb-2 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Selected Projects
          </h2>
          <Link href="/projects" className="text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400">
            Project archive
          </Link>
        </div>
        {selectedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <section className="mt-20 grid gap-8 border-y border-ink-900/10 py-10 dark:border-ink-50/10 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal-600 dark:text-signal-400">
            <Music2 size={14} />
            Music and notes
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Production sketches, harmony notes, and sound design fragments.
          </h2>
        </div>
        <div className="space-y-4 leading-8 text-ink-700 dark:text-ink-100">
          <p>
            The music section collects notes on electronic production, experimental pop, deconstructed club textures, DAW workflows, and the harmonic language of modern R&B, blues, J-pop, and city-pop adjacent arranging.
          </p>
          <Link href="/music" className="inline-flex items-center gap-2 text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400">
            Open music archive
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Contact
          </h2>
          <p className="mt-2 text-ink-700 dark:text-ink-100">
            Open to research conversations, graduate program discussions, and technical collaboration.
          </p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-sm font-medium text-ink-800 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-50/15 dark:text-ink-50 dark:hover:text-signal-400"
        >
          <Mail size={16} />
          {site.email}
        </a>
      </section>
    </div>
  );
}
