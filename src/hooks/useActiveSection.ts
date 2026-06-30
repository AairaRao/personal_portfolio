import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const visible = new Map<string, number>();

    const pickActive = () => {
      for (const id of sectionIds) {
        if (visible.has(id)) {
          setActive((prev) => (prev === id ? prev : id));
          return;
        }
      }
    };

    const observers = sectionIds
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              visible.set(id, entry.intersectionRatio);
            } else {
              visible.delete(id);
            }
            pickActive();
          },
          { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25] }
        );

        observer.observe(el);
        return observer;
      })
      .filter(Boolean) as IntersectionObserver[];

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return active;
}
