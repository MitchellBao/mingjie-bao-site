import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { Tag } from "@/components/Tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-t border-ink-900/10 py-6 dark:border-ink-50/10">
      <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-500 dark:text-ink-200">
        <span>{project.category}</span>
        <span aria-hidden="true">/</span>
        <span>{project.status}</span>
      </div>
      <h2 className="font-serif text-2xl font-semibold tracking-normal text-ink-900 dark:text-ink-50">
        {project.title}
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-ink-700 dark:text-ink-100">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </div>
      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-signal-600 hover:text-signal-400 dark:text-signal-400"
            >
              {link.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
