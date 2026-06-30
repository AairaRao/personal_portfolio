import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import type { projects } from "../data/portfolio";
import { childFade } from "../lib/motion";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article variants={childFade} className="luxe-card group flex h-full flex-col overflow-hidden">
      <div className="h-[2px] w-full bg-gradient-to-r from-rose-deep via-gold to-champagne opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-5 sm:p-7 md:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="shrink-0 font-serif text-xl font-light text-gold/40 sm:text-2xl">
              {num}
            </span>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface sm:h-11 sm:w-11">
              {project.category === "mobile" ? (
                <Smartphone size={18} className="text-gold" />
              ) : (
                <Globe size={18} className="text-gold" />
              )}
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-line px-2.5 py-1 text-[9px] font-semibold tracking-wider uppercase text-dim sm:px-3 sm:text-[10px]">
            {project.category}
          </span>
        </div>

        <h3 className="font-serif mt-5 text-lg font-semibold leading-snug text-fg sm:mt-6 sm:text-xl md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.highlights && (
          <ul className="mt-4 flex-1 space-y-2 sm:mt-5 sm:space-y-2.5">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-dim">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-pill !text-gold !border-gold/25 !text-[11px] sm:!text-xs">
                {tag}
              </span>
            ))}
          </div>
          {(project.github || project.live) && (
            <div className="flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                  <Github size={16} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-btn">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
