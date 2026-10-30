import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  data: { eyebrow: string; title: string; accent: string; text: string; cta: string; image: string; alt: string };
  bookingUrl: string;
}

export default function JourneyBand({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.8, ease: EASE, delay } };

  return (
    <section id="journey" aria-label={data.title} className="relative isolate overflow-hidden">
      {/* Fixed photo: stays still while the page scrolls over it (desktop). Phones scroll normally. */}
      <div
        role="img"
        aria-label={data.alt}
        className={`absolute inset-0 -z-20 bg-cover bg-[position:50%_60%] bg-no-repeat ${reduce ? '' : 'lg:bg-fixed'}`}
        style={{ backgroundImage: `url(${data.image})` }}
      />
      {/* Navy veil keeps the text easy to read and ties the photo to the brand */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/80 via-navy-deep/45 to-navy-deep/0" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-deep/40 to-transparent" />

      <div className="mx-auto flex min-h-[78vh] max-w-[1400px] items-center px-6 py-24 lg:min-h-[90vh] lg:px-12 lg:py-32">
        <div className="max-w-2xl">
          <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-white/85">
            <span className="h-px w-12 bg-white/70" />
            {data.eyebrow}
          </motion.p>
          <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.6rem,5.6vw,5rem)] leading-[1.04] text-white">
            {data.title.split(' ').map((w, i) => (
              <span key={i} className={w === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
            ))}
          </motion.h2>
          <motion.p {...fade(0.16)} className="mt-6 max-w-[48ch] text-[19px] leading-relaxed text-white/90">{data.text}</motion.p>
          <motion.div {...fade(0.24)} className="mt-10">
            <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-palm transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-3">
                {data.cta}
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
