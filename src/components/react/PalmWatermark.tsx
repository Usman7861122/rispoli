import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import palm from '../../assets/palm.png';

const palmUrl = typeof palm === 'string' ? palm : (palm as any).src;
const maskStyle = {
  WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`,
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskSize: 'contain', maskSize: 'contain',
} as const;

interface Props {
  /** position + size classes for the outer wrapper, e.g. "-right-24 top-24 h-[420px] w-[420px]" */
  className?: string;
  /** color classes for the palm, e.g. "bg-palm/[0.06]" */
  color?: string;
  /** which way the palm leans in from (1 = from right, -1 = from left) */
  side?: 1 | -1;
}

/** Faint palm watermark: grows in with a soft sway when its section appears, then drifts slowly while scrolling. */
export default function PalmWatermark({ className = '', color = 'bg-palm/[0.06]', side = 1 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5 * side, 0, 5 * side]);

  return (
    <span ref={ref} aria-hidden="true" className={`pointer-events-none absolute -z-10 hidden lg:block ${className}`}>
      <motion.span
        className="block h-full w-full"
        style={reduce ? undefined : { y, rotate, transformOrigin: '50% 100%' }}
      >
        <motion.span
          className={`block h-full w-full ${color}`}
          style={{ ...maskStyle, transformOrigin: '50% 100%' }}
          initial={reduce ? false : { opacity: 0, scale: 0.8, x: 60 * side, rotate: 10 * side }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 60, damping: 13, mass: 1.1, opacity: { duration: 0.9 } }}
        />
      </motion.span>
    </span>
  );
}
