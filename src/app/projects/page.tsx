import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical projects and research prototypes by Mitchell Bao.",
};

export default function ProjectsPage() {
  return (
    <div className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Projects"
        title="Technical projects, research prototypes, and working archives."
        description="A selective project archive centered on security research workflows, machine learning experimentation, reproducibility, and web publishing."
      />
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
