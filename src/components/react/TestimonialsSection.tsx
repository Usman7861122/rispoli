import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import palm from '../../assets/palm.png';
import PalmWatermark from './PalmWatermark';
import type { testimonials as T } from '../../data/testimonials';

const EASE = [0.22, 1, 0.36, 1] as const;
const url = (i: any) => (typeof i === 'string' ? i : i.src);
const palmUrl = url(palm);
const maskStyle = {
  WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`,
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskSize: 'contain', maskSize: 'contain',
} as const;

interface Props { data: typeof T; bookingUrl: string }

function Stars({ n, size = 'h-5 w-5' }: { n: number; size?: string }) {
  return (
    <span className="inline-flex gap-1" role="img" aria-label={`${n} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((k) => (
        <svg key={k} viewBox="0 0 24 24" className={`${size} ${k < n ? 'text-[#f5b82e]' : 'text-white/25'}`} fill="currentColor" aria-hidden="true">
          <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Pic({ src, fallback, ...rest }: { src: string; fallback: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [bad, setBad] = useState(false);
  useEffect(() => setBad(false), [src]);
  return <img {...rest} src={bad ? fallback : src} onError={() => setBad(true)} />;
}

function Arrow({ dir }: { dir: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'r' ? 'M5 12h14M13 6l6 6-6 6' : 'M19 12H5M11 6l-6 6 6 6'} />
    </svg>
  );
}

const MotionPic = motion.create(Pic as any) as any;

export default function TestimonialsSection({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const items = data.items;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setI((x) => (x + 1) % items.length), 9000);
    return () => clearTimeout(t);
  }, [i, paused, reduce, items.length]);

  const go = (n: number) => setI((n + items.length) % items.length);
  const cur = items[i];
  const fade = (delay = 0) => reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.8, ease: EASE, delay } };

  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-gradient-to-b from-navy-deep via-[#0e2150] to-navy-deep py-20 text-white lg:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-24 -z-10 h-[520px] w-[520px] rounded-full bg-palm/25 blur-3xl" />
      <PalmWatermark className="-right-32 bottom-0 h-[460px] w-[460px]" color="bg-white/[0.06]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
              <span className="h-px w-12 bg-palm-soft/70" />{data.eyebrow}
            </motion.p>
            <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.06] text-white">
              {data.title.split(' ').map((w, k) => (
                <span key={k} className={w === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
              ))}
            </motion.h2>
          </div>
          <motion.p {...fade(0.16)} className="max-w-[38ch] text-[18px] leading-relaxed text-white/75">{data.intro}</motion.p>
        </div>

        <motion.div
          {...fade(0.1)}
          className="mt-12 lg:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Featured review: photo + quote */}
          <figure className="relative grid overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.10] to-white/[0.03] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/15 backdrop-blur lg:grid-cols-[5fr_7fr]">
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[500px]">
              <AnimatePresence initial={false}>
                <MotionPic
                  key={cur.image}
                  src={cur.image}
                  fallback={cur.fallback}
                  alt={cur.imageAlt}
                  loading="lazy"
                  initial={reduce ? false : { opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: cur.position }}
                />
              </AnimatePresence>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy/30 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy/80" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-navy-deep/50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">{cur.tag}</span>
            </div>

            {/* Quote */}
            <div className="relative flex flex-col justify-between p-7 text-white sm:p-10 lg:p-14">
              <span aria-hidden="true" className="pointer-events-none absolute right-6 top-0 select-none font-display text-[14rem] leading-none text-white/[0.06]">“</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  aria-live="polite"
                  className="relative"
                >
                  <div className="flex items-center gap-3">
                    <Stars n={cur.rating} />
                    <span className="text-[13px] font-semibold tracking-wide text-white/70">{cur.rating}.0</span>
                  </div>
                  <blockquote className={`mt-6 font-display leading-[1.3] ${cur.quote.length > 220 ? 'text-[clamp(1.15rem,1.7vw,1.5rem)]' : 'text-[clamp(1.4rem,2.3vw,2rem)]'}`}>
                    “{cur.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[15px] font-semibold tracking-wide text-navy">{cur.name.replace('.', '').split(' ').map((p) => p[0]).join('')}</span>
                    <span>
                      <span className="block text-[17px] font-semibold">{cur.name}</span>
                      <span className="block text-[14px] text-white/70">Verified patient · {cur.date}</span>
                    </span>
                  </figcaption>
                </motion.div>
              </AnimatePresence>

              <div className="relative mt-8 flex items-center justify-between gap-4">
                <p className="text-[13px] font-semibold tracking-[0.2em] text-white/60">{String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</p>
                <div className="flex gap-2">
                  <button type="button" onClick={() => go(i - 1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-navy"><Arrow dir="l" /></button>
                  <button type="button" onClick={() => go(i + 1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-navy"><Arrow dir="r" /></button>
                </div>
              </div>
            </div>
          </figure>

          {/* Thumbnails */}
          <ul className="mt-5 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6" role="tablist" aria-label="Choose a review">
            {items.map((t, k) => (
              <li key={t.name}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={k === i}
                  aria-label={`Show review from ${t.name}`}
                  onClick={() => go(k)}
                  className={`group relative block w-full overflow-hidden rounded-xl text-left ring-2 transition-all duration-300 ${k === i ? 'ring-palm-soft shadow-lg shadow-black/40' : 'ring-white/10 opacity-80 hover:-translate-y-0.5 hover:opacity-100 hover:ring-white/40'}`}
                >
                  <span className="block aspect-[4/3]">
                    <Pic src={t.image} fallback={t.fallback} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: t.position }} />
                  </span>
                  <span aria-hidden="true" className={`absolute inset-0 transition-colors duration-300 ${k === i ? 'bg-navy/10' : 'bg-navy/45 group-hover:bg-navy/20'}`} />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-navy-deep/90 to-transparent px-3 pb-2.5 pt-8 text-white">
                    <span className="truncate text-[13px] font-semibold">{t.name}</span>
                    <Stars n={t.rating} size="h-3 w-3" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fade(0.1)} className="mt-12 lg:mt-16">
          <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-palm transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Book a visit <Arrow dir="r" /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
