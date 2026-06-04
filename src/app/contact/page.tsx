import type { Metadata } from "next";
import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact links for Mitchell Bao.",
};

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email, icon: Mail },
  { label: "GitHub", href: site.links.github, value: "placeholder", icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, value: "placeholder", icon: Linkedin },
  { label: "Google Scholar", href: site.links.scholar, value: "placeholder", icon: GraduationCap },
];

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Contact"
        title="Research conversations, collaboration, and graduate program contact."
        description="The best way to reach me is email. Placeholder academic and professional links can be replaced once the public profiles are ready."
      />

      <div className="divide-y divide-ink-900/10 border-y border-ink-900/10 dark:divide-ink-50/10 dark:border-ink-50/10">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between gap-4 py-5 text-ink-800 transition hover:text-signal-600 dark:text-ink-50 dark:hover:text-signal-400"
            >
              <span className="flex items-center gap-3">
                <Icon size={18} />
                <span className="font-medium">{link.label}</span>
              </span>
              <span className="text-right text-sm text-ink-500 dark:text-ink-200">{link.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
