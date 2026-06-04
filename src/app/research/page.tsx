import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { currentResearch, researchNotes, researchThemes } from "@/data/research";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests and current work by Mitchell Bao.",
};

export default function ResearchPage() {
  const posts = getAllPosts().filter((post) =>
    post.tags.some((tag) => ["Audio CAPTCHA", "AI Safety", "Security", "Machine Learning"].includes(tag))
  );

  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Research"
        title="Security evaluation for AI systems, with a focus on audio CAPTCHAs and large audio-language models."
        description="This page is written for professors, graduate admissions reviewers, and technical collaborators who want a compact view of my research direction."
      />

      <section className="border-y border-ink-900/10 py-8 dark:border-ink-50/10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-600 dark:text-signal-400">
          Current project
        </p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
          {currentResearch.title}
        </h2>
        <p className="mt-3 font-mono text-sm text-ink-500 dark:text-ink-200">{currentResearch.status}</p>
        <p className="mt-5 max-w-3xl leading-8 text-ink-700 dark:text-ink-100">
          {currentResearch.summary}
        </p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Research Questions
          </h2>
        </div>
        <div className="space-y-4">
          {currentResearch.questions.map((question) => (
            <p key={question} className="border-t border-ink-900/10 pt-4 leading-7 text-ink-700 dark:border-ink-50/10 dark:text-ink-100">
              {question}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
          Themes
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {researchThemes.map((theme) => (
            <Tag key={theme} label={theme} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {researchNotes.map((note) => (
          <article key={note.title} className="border-t border-ink-900/10 pt-5 dark:border-ink-50/10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-200">
              {note.status}
            </p>
            <h3 className="mt-3 font-serif text-xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
              {note.title}
            </h3>
            <p className="mt-3 leading-7 text-ink-700 dark:text-ink-100">{note.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
            Selected Research Notes
          </h2>
          <Link href="/writing?category=Research%20Notes" className="text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400">
            More notes
          </Link>
        </div>
        <div className="divide-y divide-ink-900/10 dark:divide-ink-50/10">
          {posts.slice(0, 4).map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="block py-4 hover:text-signal-600 dark:hover:text-signal-400">
              <span className="font-serif text-xl font-semibold tracking-normal">{post.title}</span>
              <span className="ml-3 text-sm text-ink-500 dark:text-ink-200">{post.category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
