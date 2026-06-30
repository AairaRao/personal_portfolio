import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { childFade, staggerContainer, viewport } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-wrap relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num="05"
          tag="Contact"
          title="Let's connect"
          description="Open to internships, freelance work, and collaborations."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-3"
        >
          {contacts.map((item) => (
            <motion.div key={item.label} variants={childFade}>
              {item.href ? (
                <a href={item.href} className="contact-card group block h-full">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface transition-colors duration-300 group-hover:border-gold/40">
                    <item.icon size={20} className="text-gold" />
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-dim">
                    {item.label}
                  </p>
                  <p className="mt-2 break-anywhere text-sm text-muted transition-colors duration-300 group-hover:text-rose">
                    {item.value}
                  </p>
                </a>
              ) : (
                <div className="contact-card h-full">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface">
                    <item.icon size={20} className="text-gold" />
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-dim">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={childFade}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <a href={`mailto:${personalInfo.email}`} className="btn-luxe relative z-10">
            Send an Email
            <ArrowUpRight size={16} />
          </a>

          <div className="flex gap-4">
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10">
                <Github size={18} />
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10">
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
