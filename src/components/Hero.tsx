import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { childFade, staggerContainer } from "../lib/motion";

function Monogram() {
  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
      <div className="ring-spin monogram-ring absolute inset-0" />
      <div className="ring-spin-reverse absolute inset-6 rounded-full border border-line/50 sm:inset-8" />
      <div className="luxe-card relative flex h-44 w-44 flex-col items-center justify-center rounded-full p-6 text-center sm:h-52 sm:w-52">
        <p className="font-serif text-5xl font-semibold rose-gold-text sm:text-6xl">A</p>
        <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-dim sm:text-xs">
          Software Engineer
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {["Flutter", "Firebase", "React"].map((t) => (
            <span key={t} className="text-[9px] font-medium text-gold/80 sm:text-[10px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {personalInfo.availableForWork && (
            <motion.div variants={childFade} className="mb-6 sm:mb-8">
              <span className="section-tag inline-flex items-center gap-2">
                <Sparkles size={12} />
                Open to internships & roles
              </span>
            </motion.div>
          )}

          <motion.p
            variants={childFade}
            className="text-xs font-medium tracking-[0.3em] uppercase text-dim sm:text-sm"
          >
            Full-Stack · Mobile · Cloud
          </motion.p>

          <motion.h1
            variants={childFade}
            className="font-serif mt-4 text-[2.25rem] leading-[1.08] font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-fg">Aaira Wajahat</span>
            <br />
            <span className="shimmer-text italic">Rao</span>
          </motion.h1>

          <motion.p
            variants={childFade}
            className="mt-5 text-base font-medium text-rose sm:text-lg md:text-xl"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p variants={childFade} className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={childFade}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a href="#projects" className="btn-luxe relative z-10 justify-center">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-outline justify-center">
              Email Me
            </a>
          </motion.div>

          <motion.div variants={childFade} className="mt-10 flex flex-col gap-3 sm:mt-12 sm:gap-4">
            {[
              { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
              { icon: MapPin, text: personalInfo.location },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 text-sm text-dim">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface">
                  <item.icon size={15} className="text-gold" />
                </span>
                {item.href ? (
                  <a href={item.href} className="break-anywhere pt-1.5 transition-colors duration-300 hover:text-rose">
                    {item.text}
                  </a>
                ) : (
                  <span className="pt-1.5">{item.text}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <Monogram />
        </motion.div>
      </div>
    </section>
  );
}
