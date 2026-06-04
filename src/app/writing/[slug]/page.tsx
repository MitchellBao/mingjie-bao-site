import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Tag } from "@/components/Tag";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return (
      <article className="mx-auto max-w-3xl py-14 sm:py-20">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-ink-500 dark:text-ink-200">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-normal text-ink-900 dark:text-ink-50 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-700 dark:text-ink-100">
            {post.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} href={`/writing?tag=${encodeURIComponent(tag)}`} />
            ))}
          </div>
        </div>

        <div className="prose-archive">
          <MDXRemote source={post.content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
