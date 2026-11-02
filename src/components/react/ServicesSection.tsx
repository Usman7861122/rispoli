import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import palm from '../../assets/palm.png';
import type { HomeService } from '../../data/home-services';

const EASE = [0.22, 1, 0.36, 1] as const;
const url = (i: any) => (typeof i === 'string' ? i : i.src);
const palmUrl = url(palm);

interface Props {
  data: {
    eyebrow: string; title: string; accent: string; intro: string;
    cta: { label: string; href: string }; band: { title: string; text: string }; items: HomeService[];
  };
  bookingUrl: string;
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Card({ s, i, wide }: { s: HomeService; i: number; wide: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  const tall = i === 0;

  return (
    <motion.li
      className={`${tall ? 'xl:row-span-2' : ''} ${wide ? 'sm:col-span-2 xl:col-span-1' : ''}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
    >
      <a
        href={`/services/${s.slug}`}
        className={`group relative block overflow-hidden rounded-xl bg-navy-deep shadow-[0_28px_60px_-34px_rgba(10,27,61,0.6)] ${tall ? 'aspect-square lg:aspect-auto lg:h-full lg:min-h-[640px]' : 'aspect-square'}`}
      >
        {missing ? (
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-deep" />
        ) : (
          <img
            ref={ref}
            src={s.image}
            alt={s.imageAlt}
            loading="lazy"
            onError={() => setMissing(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
            style={{ objectPosition: s.position }}
          />
        )}
        {/* soft navy tint, deeper at the bottom so text stays easy to read */}
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-navy-deep/10 transition-opacity duration-500 group-hover:from-navy-deep/95" />
        {/* thin inner frame appears on hover */}
        <span aria-hidden="true" className="absolute inset-3 rounded-lg border border-white/0 transition-colors duration-500 group-hover:border-white/50" />

        <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
          <span aria-hidden="true" className="mb-4 block h-[3px] w-10 bg-palm transition-all duration-500 group-hover:w-20" />
          <h3 className={`font-display leading-tight text-white ${tall ? 'text-[2.2rem] lg:text-[2.8rem]' : 'text-[1.7rem] lg:text-[2rem]'}`}>{s.title}</h3>
          <p className="mt-3 max-w-[42ch] text-[16px] leading-relaxed text-white/85">{s.text}</p>
          <span className="relative mt-5 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/50 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-500 group-hover:text-navy">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Learn more <Arrow /></span>
          </span>
        </div>
      </a>
    </motion.li>
  );
}

export default function ServicesSection({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section id="services" className="relative isolate overflow-hidden bg-gradient-to-br from-palm-soft/80 via-white to-[#e6edf8] py-20 lg:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-palm/10 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[560px] w-[560px] rounded-full bg-navy/10 blur-3xl" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
              <span className="h-px w-12 bg-palm" />
              {data.eyebrow}
            </motion.p>
            <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.06] text-navy">
              {data.title.split(' ').map((w, i) => (
                <span key={i} className={w === data.accent ? 'italic text-palm' : ''}>{w} </span>
              ))}
            </motion.h2>
            <motion.p {...fade(0.16)} className="mt-5 max-w-[56ch] text-[18px] leading-relaxed text-slate">{data.intro}</motion.p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4">
          {data.items.map((s, i) => <Card key={s.slug} s={s} i={i} wide={i === data.items.length - 1 && data.items.length % 2 === 1} />)}
        </ul>

        {/* Call to action */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mt-6 overflow-hidden rounded-xl bg-palm-soft px-8 py-10 lg:mt-8 lg:px-14 lg:py-12"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-[28%] hidden h-60 w-60 bg-palm/10 lg:block" style={{ WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`, WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain' }} />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-navy">{data.band.title}</p>
              <p className="mt-3 text-[17px] leading-relaxed text-slate">{data.band.text}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-3">Book a visit <Arrow /></span>
              </a>
              <a href={data.cta.href} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-3">{data.cta.label} <Arrow /></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
