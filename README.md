# Mitchell Bao Personal Archive

A Next.js personal blog, research portfolio, and writing archive for Mitchell Bao.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- MDX content files
- Static data modules

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Blog posts live in `src/content/posts`. Each post uses frontmatter:

```yaml
title: "Example Post"
date: "2026-05-28"
description: "A short summary."
category: "Research Notes"
tags: ["AI Safety", "Audio CAPTCHA"]
draft: false
```

Static site data lives in `src/data`.
