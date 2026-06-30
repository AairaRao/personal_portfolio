import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { childFade, staggerContainer, viewport } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-wrap relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-soft/40 via-transparent to-bg-soft/40" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          num="02"
          tag="Skills"
          title="Technologies & tools"
          description="Languages, frameworks, and platforms I use to build mobile and web applications."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={childFade} className="luxe-card p-6 sm:p-7">
              <h3 className="font-serif text-lg font-semibold text-rose">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
