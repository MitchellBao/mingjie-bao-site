import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function parsePost(fileName: string): Post {
  const fullPath = path.join(postsDirectory, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    slug: fileName.replace(/\.mdx?$/, ""),
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Notes"),
    tags: isStringArray(data.tags) ? data.tags : [],
    draft: Boolean(data.draft ?? false),
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts({ includeDrafts = false } = {}): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => /\.mdx?$/.test(fileName))
    .map(parsePost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  return parsePost(path.basename(filePath));
}

export function getCategories(posts = getAllPosts()): string[] {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getTags(posts = getAllPosts()): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
}
