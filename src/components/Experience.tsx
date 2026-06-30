import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "../data/portfolio";
import { childFade, staggerContainer, viewport } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-wrap relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-soft/30 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          num="04"
          tag="Experience"
          title="Journey & education"
          align="center"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface">
                <Briefcase size={20} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-fg">Work</h3>
            </div>

            <div className="space-y-5">
              {experience.map((item) => (
                <motion.div key={item.role} variants={childFade} className="luxe-card p-7">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                    {item.period}
                  </p>
                  <h4 className="font-serif mt-3 text-xl font-semibold text-fg">{item.role}</h4>
                  <p className="text-sm text-dim">{item.company}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-surface">
                <GraduationCap size={20} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-fg">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <motion.div
                  key={item.school}
                  variants={childFade}
                  className="luxe-card border-l-2 border-l-gold/30 p-7"
                >
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                    {item.period}
                  </p>
                  <h4 className="font-serif mt-3 text-xl font-semibold text-fg">{item.degree}</h4>
                  <p className="text-sm text-dim">{item.school}</p>
                  <ul className="mt-5 space-y-2">
                    {item.details.map((d) => (
                      <li key={d} className="text-sm text-muted">
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
