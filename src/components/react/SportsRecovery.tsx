import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import palm from '../../assets/palm.png';
import PalmWatermark from './PalmWatermark';
import type { sports as SportsData } from '../../data/sports';

const EASE = [0.22, 1, 0.36, 1] as const;
const url = (i: any) => (typeof i === 'string' ? i : i.src);
const palmUrl = url(palm);
const maskStyle = {
  WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`,
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskSize: 'contain', maskSize: 'contain',
} as const;

interface Props { data: typeof SportsData; bookingUrl: string }

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-palm-soft" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" className="opacity-40" /><path d="m8 12.4 2.6 2.6L16 9.6" />
    </svg>
  );
}

function VideoPanel({ v }: { v: Props['data']['video'] }) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [time, setTime] = useState(0);

  // Play only while the video is on screen (saves data and battery)
  useEffect(() => {
    const el = wrap.current, video = vid.current;
    if (!el || !video || reduce) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) video.play().catch(() => {}); else video.pause();
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, failed]);

  const toggle = () => { const x = vid.current; if (!x) return; x.paused ? x.play().catch(() => {}) : x.pause(); };

  return (
    <div ref={wrap} className="group relative overflow-hidden rounded-2xl bg-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
      <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-[calc(100vh-8rem)] lg:max-h-[760px] lg:min-h-[520px]">
        {!failed ? (
          <video
            ref={vid}
            className="absolute inset-0 h-full w-full object-cover"
            src={v.src}
            poster={v.poster}
            muted
            loop
            playsInline
            preload="metadata"
            controls={!!reduce}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy via-navy-deep to-palm/60">
            <span aria-hidden="true" className="block h-40 w-40 bg-white/15" style={maskStyle} />
          </div>
        )}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/30 via-transparent to-transparent" />

        {/* Step caption, bottom left */}
        {(() => {
          const steps = v.steps;
          const end = v.length;
          let idx = 0;
          steps.forEach((st, i) => { if (time >= st.start) idx = i; });
          const cur = steps[idx];
          const next = steps[idx + 1]?.start ?? end;
          const pct = Math.min(1, Math.max(0, (time - cur.start) / (next - cur.start)));
          return (
            <div className="pointer-events-none absolute bottom-5 left-5 right-24 max-w-[min(26rem,100%)] lg:bottom-8 lg:left-8">
              <div className="rounded-xl border border-white/15 bg-navy-deep/55 p-4 backdrop-blur-md lg:p-5">
                <div className="flex gap-1.5" aria-hidden="true">
                  {steps.map((_, i) => (
                    <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
                      <span className="block h-full rounded-full bg-palm-soft" style={{ width: i < idx ? '100%' : i === idx ? `${pct * 100}%` : '0%' }} />
                    </span>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="mt-3"
                    aria-live="polite"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-palm-soft">Step {idx + 1} of {steps.length} · {cur.label}</p>
                    <p className="mt-1.5 font-display text-lg leading-snug text-white lg:text-xl">{cur.text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          );
        })()}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-end gap-4 p-5 lg:p-8">
          {!failed && !reduce && (
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={toggle} aria-label={playing ? 'Pause video' : 'Play video'} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white hover:text-navy">
                {playing
                  ? <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
                  : <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SportsRecovery({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.8, ease: EASE, delay } };

  return (
    <section id="sports-injury" className="relative isolate overflow-clip bg-gradient-to-b from-navy-deep via-navy to-navy-deep py-20 text-white lg:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-palm/25 blur-3xl" />
      <PalmWatermark side={-1} className="-left-16 -top-10 h-[460px] w-[460px]" color="bg-white/[0.05]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
              <span className="h-px w-12 bg-palm-soft/70" />{data.eyebrow}
            </motion.p>
            <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.06]">
              {data.title.split(' ').map((w, i) => (
                <span key={i} className={w.replace(/[.,]/g, '') === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
              ))}
            </motion.h2>
          </div>
          <motion.p {...fade(0.16)} className="max-w-[56ch] text-[18px] leading-relaxed text-white/80">{data.intro}</motion.p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          {/* Video stays in place while the cards on the right scroll past (desktop) */}
          <motion.div {...fade(0.1)} className="lg:sticky lg:top-24"><VideoPanel v={data.video} /></motion.div>

          <motion.div {...fade(0.2)} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur lg:p-8">
              <h3 className="font-display text-2xl">{data.care.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-white/75">{data.care.text}</p>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {data.care.items.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[16px] text-white/90 transition-transform duration-300 hover:translate-x-1 hover:text-white"><Check />{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-8">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.22em] text-palm-soft">{data.signs.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {data.signs.items.map((t) => (
                  <li key={t} className="cursor-default rounded-full border border-white/20 px-4 py-1.5 text-[14px] text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy hover:shadow-lg hover:shadow-black/30">{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-8">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.22em] text-palm-soft">{data.injuries.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {data.injuries.items.map((t) => (
                  <li key={t} className="cursor-default rounded-full bg-white/10 px-4 py-1.5 text-[14px] text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:bg-palm hover:text-white hover:shadow-lg hover:shadow-black/30">{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div {...fade(0.1)} className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:mt-16">
          <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-palm transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Book a visit <Arrow /></span>
          </a>
          <a href={data.cta.href} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/40 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:text-navy">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">{data.cta.label} <Arrow /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
