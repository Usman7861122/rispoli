import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import palm from '../../assets/palm.png';
import PalmWatermark from './PalmWatermark';
import type { Provider } from '../../data/team';

const EASE = [0.22, 1, 0.36, 1] as const;
const url = (i: any) => (typeof i === 'string' ? i : i.src);
const palmUrl = url(palm);
const maskStyle = {
  WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`,
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskSize: 'contain', maskSize: 'contain',
} as const;

interface Props {
  data: {
    eyebrow: string; title: string; accent: string; intro: string;
    cta: { label: string; href: string };
    lead: Provider[]; peers: Provider[];
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

function Photo({ p, ratio }: { p: Provider; ratio: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  return (
    <div className={`relative overflow-hidden rounded-xl bg-palm-soft ${ratio}`}>
      {missing ? (
        <div className="absolute inset-0 grid place-items-center">
          <span aria-hidden="true" className="block h-24 w-24 bg-palm/30" style={maskStyle} />
        </div>
      ) : (
        <img
          ref={ref}
          src={p.image}
          alt={p.imageAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setMissing(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: p.position }}
        />
      )}
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/35 to-transparent" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-palm transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

function Tags({ tags, role }: { tags: string[]; role: string }) {
  // skip a chip that only repeats the role line above it
  const shown = tags.filter((t) => !role.toLowerCase().includes(t.toLowerCase()));
  if (!shown.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Credentials">
      {shown.map((t) => <li key={t} className="rounded-full bg-palm-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-palm">{t}</li>)}
    </ul>
  );
}

function Card({ p, lead, i, offset }: { p: Provider; lead?: boolean; i: number; offset?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      className={offset ? 'lg:mt-16' : ''}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: EASE, delay: (i % 3) * 0.1 }}
    >
      <a href={p.href} className="group flex h-full flex-col rounded-xl bg-white p-3 shadow-[0_30px_60px_-38px_rgba(10,27,61,0.5)] ring-1 ring-navy/5 transition-shadow duration-500 hover:shadow-[0_40px_70px_-34px_rgba(10,27,61,0.55)]">
        <Photo p={p} ratio={lead ? 'aspect-[4/4.6]' : 'aspect-square'} />
        <div className={`flex flex-1 flex-col ${lead ? 'px-4 pb-5 pt-6 lg:px-6 lg:pb-7' : 'px-3 pb-4 pt-5 lg:px-4'}`}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">{p.role}</p>
          <h3 className={`mt-2 font-display leading-tight text-navy ${lead ? 'text-[2rem] lg:text-[2.5rem]' : 'text-[1.6rem] lg:text-[1.8rem]'}`}>{p.name}</h3>
          <Tags tags={p.tags} role={p.role} />
          {lead && p.bio ? (
            <div className="mt-4 space-y-3 text-[16.5px] leading-relaxed text-slate">
              {p.bio.map((b, k) => <p key={k}>{b}</p>)}
            </div>
          ) : (
            <p className="mt-3 text-[16px] leading-relaxed text-slate">{p.focus}</p>
          )}
          <div className="mt-auto pt-6">
            <span className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 group-hover:text-white">
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-3">View profile <Arrow /></span>
            </span>
          </div>
        </div>
      </a>
    </motion.li>
  );
}


function WideCard({ p }: { p: Provider }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      <a href={p.href} className="group grid rounded-xl bg-white p-3 shadow-[0_30px_60px_-38px_rgba(10,27,61,0.5)] ring-1 ring-navy/5 transition-shadow duration-500 hover:shadow-[0_40px_70px_-34px_rgba(10,27,61,0.55)] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10 md:p-4">
        <Photo p={p} ratio="aspect-square" />
        <div className="flex flex-col justify-center px-3 pb-5 pt-6 md:px-0 md:py-6 md:pr-8">
          {p.badge && (
            <span className="inline-flex w-fit items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-palm">
              <span className="h-px w-8 bg-palm" />{p.badge}
            </span>
          )}
          <h3 className="mt-3 font-display text-[2.1rem] leading-tight text-navy lg:text-[2.8rem]">{p.name}</h3>
          <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate">{p.role}</p>
          <Tags tags={p.tags} role={p.role} />
          {p.bio && <div className="mt-5 max-w-[60ch] space-y-3 text-[17px] leading-relaxed text-slate">{p.bio.map((b, k) => <p key={k}>{b}</p>)}</div>}
          <div className="pt-7">
            <span className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 group-hover:border-navy group-hover:text-white">
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative flex items-center gap-3">View profile <Arrow /></span>
            </span>
          </div>
        </div>
      </a>
    </motion.li>
  );
}

export default function TeamSection({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section id="team" className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-white py-20 lg:py-32">
      <PalmWatermark className="-right-24 top-24 h-[420px] w-[420px]" color="bg-palm/[0.07]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
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
            <motion.p {...fade(0.16)} className="mt-5 max-w-[58ch] text-[18px] leading-relaxed text-slate">{data.intro}</motion.p>
          </div>
        </div>

        {/* The founder, featured quietly in one wide card */}
        <ul className="mt-14 lg:mt-20">
          {data.lead.map((p) => <WideCard key={p.slug} p={p} />)}
        </ul>

        {/* Four providers: same card style, equal size */}
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          {data.peers.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
        </ul>

        <motion.div {...fade(0.1)} className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:mt-20">
          <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Book a visit <Arrow /></span>
          </a>
          <a href={data.cta.href} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">{data.cta.label} <Arrow /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
