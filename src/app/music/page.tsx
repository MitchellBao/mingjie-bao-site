import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music",
  description: "Music production notes, harmony analysis, and sound design sketches by Mitchell Bao.",
};

const musicTopics = [
  "Electronic music production",
  "Experimental pop",
  "Deconstructed club",
  "Industrial textures",
  "Harmony and chord structures",
  "Synthesizer sound design",
  "FL Studio",
  "Studio One",
  "Modern R&B",
  "Blues harmony",
  "J-pop arranging",
  "City-pop adjacent arranging"
];

export default function MusicPage() {
  const posts = getAllPosts().filter((post) =>
    post.tags.some((tag) => ["Music Theory", "Electronic Music"].includes(tag)) || post.category === "Music"
  );

  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Music"
        title="Production notes, harmonic analysis, and sound design sketches."
        description="A creative archive for electronic music, experimental pop, modern R&B harmony, DAW workflows, and the technical side of listening."
      />

      <section className="flex flex-wrap gap-2 border-y border-ink-900/10 py-6 dark:border-ink-50/10">
        {musicTopics.map((topic) => (
          <Tag key={topic} label={topic} />
        ))}
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          ["Production notes", "Short logs on arrangement, texture, mixing decisions, and unfinished sketches."],
          ["Harmony analysis", "Notes on chord color, modal borrowing, blues movement, R&B progressions, and pop arranging."],
          ["Sound design", "Patches, noise layers, industrial percussion, synthesizer movement, and timbral references."],
        ].map(([title, body]) => (
          <article key={title} className="border-t border-ink-900/10 pt-5 dark:border-ink-50/10">
            <h2 className="font-serif text-xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-ink-700 dark:text-ink-100">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
          Music Writing
        </h2>
        <div className="mt-3 divide-y divide-ink-900/10 dark:divide-ink-50/10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="block py-4 hover:text-signal-600 dark:hover:text-signal-400">
              <span className="font-serif text-xl font-semibold tracking-normal">{post.title}</span>
              <span className="ml-3 text-sm text-ink-500 dark:text-ink-200">{post.readingTime}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
