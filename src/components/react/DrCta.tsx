import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  data: { title: string; accent: string; text: string; primary: string; secondary: string; secondaryHref: string };
  bookingUrl: string;
  phone: string;
}

export default function DrCta({ data, bookingUrl, phone }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  return (
    <section className="bg-palm py-20 text-white lg:py-28">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-12">
        <div>
          <motion.h2 {...fade(0)} className="font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05]">
            {data.title.replace(data.accent, '')}<span className="italic">{data.accent}</span>
          </motion.h2>
          <motion.p {...fade(0.08)} className="mt-4 max-w-[48ch] text-[19px] leading-relaxed text-white/90">{data.text}</motion.p>
        </div>
        <motion.div {...fade(0.16)} className="flex flex-wrap gap-4">
          <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-palm">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy-deep transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative transition-colors duration-500 group-hover:text-white">{data.primary}</span>
          </a>
          <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center rounded-full border border-white/60 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-palm">Call {phone}</a>
          <a href={data.secondaryHref} className="inline-flex items-center rounded-full border border-white/60 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-white hover:text-palm">{data.secondary}</a>
        </motion.div>
      </div>
    </section>
  );
}
