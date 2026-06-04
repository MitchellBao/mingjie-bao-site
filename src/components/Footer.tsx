import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/10 py-10 text-sm text-ink-500 dark:border-ink-50/10 dark:text-ink-200">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Built as a quiet archive for research, writing, and sound. Last edited for graduate applications and long-term notes.
        </p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-signal-600 dark:hover:text-signal-400">
            <Mail size={18} />
          </a>
          <a href={site.links.github} aria-label="GitHub" className="hover:text-signal-600 dark:hover:text-signal-400">
            <Github size={18} />
          </a>
          <a href={site.links.linkedin} aria-label="LinkedIn" className="hover:text-signal-600 dark:hover:text-signal-400">
            <Linkedin size={18} />
          </a>
          <Link href="/contact" className="font-mono text-xs uppercase tracking-[0.16em] hover:text-signal-600 dark:hover:text-signal-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
