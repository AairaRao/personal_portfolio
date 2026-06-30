import { motion } from "framer-motion";
import { childFade, staggerContainer, viewport } from "../lib/motion";

const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "2", label: "Platforms" },
  { value: "2027", label: "Graduating" },
  { value: "Multan", label: "Based In" },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-line px-4 py-10 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={childFade} className="text-center">
            <p className="font-serif text-3xl font-semibold rose-gold-text sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs font-medium tracking-[0.15em] uppercase text-dim">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
