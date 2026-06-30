import { motion } from "framer-motion";
import { about } from "../data/portfolio";
import { childFade, staggerContainer, viewport } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-wrap relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading num="01" tag="About" title="Crafting digital experiences" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-8 lg:grid-cols-5"
        >
          <motion.div variants={childFade} className="space-y-6 lg:col-span-3">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-[1.8] text-muted sm:text-lg">
                {p}
              </p>
            ))}
            <blockquote className="border-l-2 border-gold/40 pl-5 italic text-rose/90">
              &ldquo;Clean code, thoughtful design, and products that actually work.&rdquo;
            </blockquote>
          </motion.div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {about.highlights.map((item) => (
              <motion.div key={item.label} variants={childFade} className="luxe-card p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-fg">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
