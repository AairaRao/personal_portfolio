import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { staggerContainer, viewport } from "../lib/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-wrap relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="03"
          tag="Projects"
          title="Selected creations"
          description="Applications spanning mobile and web commerce, workforce management, flight booking, native Android, and AI-powered computer vision."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
