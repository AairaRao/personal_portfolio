import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    mass: 0.15,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="scroll-progress fixed top-0 left-0 right-0 z-[60] h-[2px]"
    />
  );
}
