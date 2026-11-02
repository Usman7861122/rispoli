import { motion, useReducedMotion } from 'framer-motion';
import type { ReactElement } from 'react';
import PalmWatermark from './PalmWatermark';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Step { stage: string; place: string; where: string; notes: string[]; icon: 'ball' | 'cap' | 'hospital' | 'award' }
interface Props {
  data: {
    eyebrow: string; title: string; accent: string; intro: string; steps: Step[];
    destination: { stage: string; place: string; where: string };
  };
}

const icons: Record<Step['icon'], ReactElement> = {
  ball: <><circle cx="12" cy="12" r="9" /><path d="M12 7l4 3-1.5 5h-5L8 10l4-3zM12 3v4M16 10l4-1M14.5 15l2.5 4M9.5 15L7 19M8 10L4 9" /></>,
  cap: <path d="M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6" />,
  hospital: <path d="M4 21V8l8-5 8 5v13M2 21h20M12 8v6M9 11h6M10 21v-4h4v4" />,
  award: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.3 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z" />,
};

export default function EducationPath({ data }: Props) {
  const reduce = useReducedMotion();
  const total = data.steps.length + 1;
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  const draw = (axis: 'x' | 'y', duration: number) => ({
    initial: reduce ? false : (axis === 'x' ? { scaleX: 0 } : { scaleY: 0 }),
    whileInView: axis === 'x' ? { scaleX: 1 } : { scaleY: 1 },
    viewport: { once: true, margin: '-120px' },
    transition: { duration, ease: 'easeInOut' as const, delay: 0.2 },
  });

  return (
    <section id="education" className="relative isolate overflow-hidden bg-navy-deep py-20 text-white lg:py-32">
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
        <motion.p {...fade(0.16)} className="mt-5 max-w-[56ch] text-[19px] leading-relaxed text-white/80">{data.intro}</motion.p>

        {/* Pathway: vertical on phones, horizontal from desktop */}
        <ol id="edu-path" className="relative mt-16 grid gap-10 lg:mt-24 lg:gap-6">
          <style>{`@media (min-width:1024px){#edu-path{grid-template-columns:repeat(${total},minmax(0,1fr))}}`}</style>
          {/* the line: vertical (mobile) */}
          <span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-[2px] bg-white/10 lg:hidden" />
          <motion.span aria-hidden="true" {...draw('y', 1.6)} style={{ originY: 0 }} className="absolute bottom-6 left-[27px] top-6 w-[2px] bg-palm-light lg:hidden" />
          {/* the line: horizontal (desktop) */}
          <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-[27px] hidden h-[2px] bg-white/10 lg:block" />
          <motion.span aria-hidden="true" {...draw('x', 2)} style={{ originX: 0 }} className="absolute left-[10%] right-[10%] top-[27px] hidden h-[2px] bg-palm-light lg:block" />

          {data.steps.map((s, i) => (
            <motion.li
              key={s.stage}
              {...fade(0.15 * i)}
              className="relative grid grid-cols-[56px_1fr] gap-5 lg:block lg:text-center"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-palm text-white ring-8 ring-navy-deep lg:mx-auto">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[s.icon]}</svg>
              </span>
              <div className="lg:mt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-palm-soft">Step {i + 1} · {s.stage}</p>
                <h3 className="mt-2 font-display text-[24px] leading-snug">{s.place}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.where}</p>
                <ul className="mt-4 space-y-2 lg:flex lg:flex-col lg:items-center">
                  {s.notes.map((n) => (
                    <li key={n} className="inline-block rounded-full bg-white/8 px-3 py-1.5 text-[13px] text-white/85 ring-1 ring-white/15">{n}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}

          {/* Destination */}
          <motion.li {...fade(0.15 * data.steps.length)} className="relative grid grid-cols-[56px_1fr] gap-5 lg:block lg:text-center">
            <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-palm ring-8 ring-navy-deep lg:mx-auto">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            </span>
            <div className="rounded-xl bg-palm p-5 lg:mt-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/85">{data.destination.stage}</p>
              <h3 className="mt-2 font-display text-[24px] leading-snug">{data.destination.place}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/90">{data.destination.where}</p>
            </div>
          </motion.li>
        </ol>
      </div>
    </section>
  );
}
