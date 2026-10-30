import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function SpineRail({ sections }: { sections: readonly { id: string; label: string }[] }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 2xl:block" aria-label="Page progress">
      <div className="relative h-64 w-px bg-ink/15">
        <motion.div style={{ scaleY, transformOrigin: 'top' }} className="absolute inset-0 bg-brand" />
      </div>
      <span className="sr-only">Current section: {active}</span>
    </aside>
  );
}
