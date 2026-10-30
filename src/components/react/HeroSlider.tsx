import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HeroSlide } from '../../data/hero';

const DURATION = 5500; // ms per slide
const EASE = [0.22, 1, 0.36, 1] as const;

function Headline({ text, accent, active, accentClass }: { text: string; accent: string; active: boolean; accentClass: string }) {
  const reduce = useReducedMotion();
  return (
    <h2 className="font-display text-[clamp(2.6rem,5.2vw,5rem)] leading-[1.04] text-white">
      {text.split(' ').map((w, i) => {
        const isAccent = w.replace(/[.,]/g, '') === accent;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className={`inline-block ${isAccent ? `italic ${accentClass}` : ''}`}
              initial={false}
              animate={{ y: active || reduce ? '0%' : '110%' }}
              transition={{ duration: 0.8, ease: EASE, delay: active ? 0.25 + i * 0.07 : 0 }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </h2>
  );
}

function Cta({ href, label, external, ghost }: { href: string; label: string; external?: boolean; ghost?: boolean }) {
  const base = 'group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-semibold';
  const style = ghost ? 'border border-white/40 text-white' : 'bg-white text-navy';
  const sweep = ghost ? 'bg-white' : 'bg-palm';
  const hoverText = ghost ? 'group-hover:text-navy' : 'group-hover:text-white';
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`${base} ${style}`}>
      {/* loading-style sweep on hover */}
      <span className={`absolute inset-0 -translate-x-full ${sweep} transition-transform duration-500 ease-out group-hover:translate-x-0`} />
      <span className={`relative transition-colors duration-300 ${hoverText}`}>{label}</span>
      <svg viewBox="0 0 20 20" className={`relative h-4 w-4 transition-all duration-300 group-hover:translate-x-1 ${hoverText}`} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 10h13M11 5l5 5-5 5" />
      </svg>
    </a>
  );
}

function Arrow({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'next' ? 'Next slide' : 'Previous slide'}
      className="group pointer-events-auto relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/35 bg-navy-deep/40 text-white backdrop-blur-sm lg:h-12 lg:w-12"
    >
      {/* loading-style sweep on hover */}
      <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
      <svg viewBox="0 0 20 20" className={`relative h-4 w-4 transition-colors duration-300 group-hover:text-navy ${dir === 'prev' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 10h13M11 5l5 5-5 5" />
      </svg>
    </button>
  );
}

function Photo({ s, active, first }: { s: HeroSlide; active: boolean; first: boolean }) {
  const reduce = useReducedMotion();
  const team = s.kind === 'team';
  // Portrait: photo fills the right side and melts into navy on the left. Team: full width.
  const mask = team
    ? undefined
    : { WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 34%)', maskImage: 'linear-gradient(to right, transparent 0%, #000 34%)' };
  return (
    <motion.div
      className={`absolute inset-y-0 right-0 ${team ? 'left-0' : 'left-0 lg:left-[34%]'}`}
      initial={false}
      animate={{ scale: active || reduce ? 1 : 1.06 }}
      transition={{ duration: 6, ease: 'linear' }}
    >
      <img
        src={s.image}
        alt={s.imageAlt}
        referrerPolicy="no-referrer"
        loading={first ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
        style={{ objectPosition: s.position, ...mask }}
      />
    </motion.div>
  );
}

export default function HeroSlider({ slides, bookingUrl, locations }: { slides: HeroSlide[]; bookingUrl: string; locations: readonly string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label="Meet our doctors and team"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-navy-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <h1 className="sr-only">Westside Interventional Pain &amp; Physiatry</h1>

      {slides.map((s, idx) => {
        const active = idx === i;
        return (
          <motion.div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${slides.length}`}
            aria-hidden={!active}
            className={`absolute inset-0 ${active ? 'z-10' : 'pointer-events-none z-0'}`}
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_90%_at_75%_40%,#17356f_0%,#0a1b3d_70%)]" />
            <Photo s={s} active={active} first={idx === 0} />

            {/* Navy layers: left side for text, bottom for the tabs, top for the header */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/25 lg:bg-gradient-to-r lg:from-navy-deep lg:via-navy-deep/65 lg:via-[38%] lg:to-transparent lg:to-[72%]" />
            <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-navy-deep to-transparent lg:block" />

            {/* Text layer (left) */}
            <div className="relative mx-auto flex h-full max-w-[1400px] items-end px-6 pb-44 lg:items-center lg:px-12 lg:pb-28 lg:pt-24">
              <div className="max-w-[42rem]">
                <motion.p
                  className={`flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.26em] sm:text-[13px] ${s.kind === 'team' ? 'text-white' : 'text-palm-light'}`}
                  initial={false}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: active ? 0.1 : 0 }}
                >
                  <motion.span
                    className={`h-px w-10 origin-left sm:w-12 ${s.kind === 'team' ? 'bg-white' : 'bg-palm-light'}`}
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: active ? 0.2 : 0 }}
                  />
                  {s.eyebrow}
                </motion.p>

                <div className="mt-5">
                  <Headline text={s.title} accent={s.accent} active={active} accentClass={s.kind === 'team' ? 'text-white' : 'text-palm-light'} />
                </div>

                <motion.p
                  className="mt-6 max-w-[31rem] text-[17px] leading-relaxed text-white/80 lg:text-[19px]"
                  initial={false}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.7, delay: active ? 0.65 : 0 }}
                >
                  {s.text}
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={false}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.7, delay: active ? 0.8 : 0 }}
                >
                  <Cta href={bookingUrl} label="Book a visit" external />
                  <Cta href={s.cta.href} label={s.cta.label} ghost />
                </motion.div>

                <motion.p
                  className="mt-9 hidden border-t border-white/15 pt-5 text-[12px] uppercase tracking-[0.22em] text-white/60 lg:block"
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: active ? 1 : 0 }}
                >
                  {locations.join('  ·  ')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Arrows: sides on phones, bottom right on desktop */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="relative mx-auto h-full max-w-[1400px]">
          <div className="pointer-events-none absolute inset-x-3 top-[30%] flex justify-between lg:inset-x-auto lg:bottom-9 lg:right-12 lg:top-auto lg:gap-3">
            <Arrow dir="prev" onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)} />
            <Arrow dir="next" onClick={() => setI((v) => (v + 1) % slides.length)} />
          </div>
        </div>
      </div>

      {/* Slide tabs: each one fills while its slide is showing */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div role="tablist" aria-label="Choose a slide" className="mx-auto grid max-w-[1400px] grid-cols-3 gap-3 px-6 pb-[4.75rem] sm:max-w-3xl md:pb-9 lg:mx-0 lg:ml-[max(0px,calc((100vw-1400px)/2))] lg:px-12">
          {slides.map((s, idx) => {
            const active = idx === i;
            return (
              <button key={s.id} role="tab" aria-selected={active} aria-label={`Show slide: ${s.tab}`} onClick={() => setI(idx)} className="group text-left">
                <span className={`block text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity ${active ? 'opacity-100' : 'opacity-50 group-hover:opacity-90'}`}>
                  {s.tab}
                </span>
                <span className="relative mt-3 block h-[2px] overflow-hidden bg-white/25">
                  {active && (
                    <span
                      key={`${s.id}-${i}`}
                      className="absolute inset-0 origin-left bg-palm-light"
                      style={reduce ? undefined : { animation: `wipp-fill ${DURATION}ms linear forwards`, animationPlayState: paused ? 'paused' : 'running' }}
                      onAnimationEnd={() => setI((v) => (v + 1) % slides.length)}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
