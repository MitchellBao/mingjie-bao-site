import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { getAllPosts, getCategories, getTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Research notes, essays, technical notes, and music writing by Mitchell Bao.",
};

type WritingPageProps = {
  searchParams?: Promise<{
    category?: string;
    tag?: string;
  }>;
};

export default async function WritingPage({ searchParams }: WritingPageProps) {
  const params = await searchParams;
  const posts = getAllPosts();
  const selectedCategory = params?.category;
  const selectedTag = params?.tag;
  const categories = getCategories(posts);
  const tags = getTags(posts);

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
    const tagMatch = selectedTag ? post.tags.includes(selectedTag) : true;
    return categoryMatch && tagMatch;
  });

  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Writing"
        title="A blog-first archive for research notes, technical work, essays, and fragments."
        description="This is less a feed than a long-term filing system: paper notes, security essays, political philosophy, queer theory, music analysis, debugging records, and graduate application reflections."
      />

      <section className="mb-10 space-y-5 border-y border-ink-900/10 py-6 dark:border-ink-50/10">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">
            Categories
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag label="All" href="/writing" />
            {categories.map((category) => (
              <Tag key={category} label={category} href={`/writing?category=${encodeURIComponent(category)}`} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} href={`/writing?tag=${encodeURIComponent(tag)}`} />
            ))}
          </div>
        </div>
      </section>

      {(selectedCategory || selectedTag) ? (
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-ink-500 dark:text-ink-200">
            Showing {filteredPosts.length} post{filteredPosts.length === 1 ? "" : "s"}
            {selectedCategory ? ` in ${selectedCategory}` : ""}
            {selectedTag ? ` tagged ${selectedTag}` : ""}.
          </p>
          <Link href="/writing" className="text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400">
            Clear filter
          </Link>
        </div>
      ) : null}

      <div>
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
