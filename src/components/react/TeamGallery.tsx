import { useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PhotoLightbox from './PhotoLightbox';
import PalmWatermark from './PalmWatermark';

const EASE = [0.22, 1, 0.36, 1] as const;
interface Photo { src: string; alt: string; position: string; size?: 'big' | 'wide' }
interface Props { data: { eyebrow: string; title: string; accent: string; intro: string; photos: Photo[] } }

export default function TeamGallery({ data }: Props) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const n = data.photos.length;
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  const span = (s?: string) => (s === 'big' ? 'sm:col-span-2 sm:row-span-2' : s === 'wide' ? 'sm:col-span-2' : '');
  const ratio = (s?: string) => (s === 'wide' ? 'aspect-square sm:aspect-[2/1]' : 'aspect-square');

  return (
    <section id="gallery" className="relative isolate overflow-hidden bg-navy-deep py-20 text-white lg:py-32">
      <PalmWatermark className="-right-28 top-10 h-[480px] w-[480px]" color="bg-white/[0.05]" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
          <span className="h-px w-12 bg-palm-soft/70" />{data.eyebrow}
        </motion.p>
        <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05]">
          {data.title.split(' ').map((w, i) => (
            <span key={i} className={w === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
          ))}
        </motion.h2>
        <motion.p {...fade(0.14)} className="mt-4 text-[18px] text-white/75">{data.intro}</motion.p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {data.photos.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open photo: ${p.alt}`}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.06 }}
              className={`group relative block overflow-hidden rounded-xl ${span(p.size)}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className={`h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06] ${ratio(p.size)}`} style={{ objectPosition: p.position }} />
              <span aria-hidden="true" className="absolute inset-0 bg-palm/0 transition-colors duration-500 group-hover:bg-palm/25" />
              <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-palm opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <PhotoLightbox photos={data.photos} index={open} onClose={close} onStep={step} />
    </section>
  );
}
