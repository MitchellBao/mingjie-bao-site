import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/Tag";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-t border-ink-900/10 py-6 dark:border-ink-50/10">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-200">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">/</span>
        <span>{post.category}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
        <Link href={`/writing/${post.slug}`} className="hover:text-signal-600 dark:hover:text-signal-400">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-ink-700 dark:text-ink-100">
        {post.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} href={`/writing?tag=${encodeURIComponent(tag)}`} />
        ))}
      </div>
    </article>
  );
}
