export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

export const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px" as const,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: EASE_SMOOTH,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
};

export const childFade = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

/** @deprecated use childFade — kept for imports */
export const scaleIn = childFade;
