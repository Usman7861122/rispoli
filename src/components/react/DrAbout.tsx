import { motion, useReducedMotion } from 'framer-motion';
import type { ReactElement } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;
type Photo = { src: string; alt: string; position: string };

interface Props {
  about: {
    eyebrow: string; title: string; accent: string; paragraphs: string[];
    approachTitle: string; approach: { title: string; text: string }[];
  };
  focus: {
    eyebrow: string; title: string; accent: string;
    items: { title: string; text: string; href: string; icon: 'spine' | 'pelvis' | 'head' | 'leaf' }[];
  };
  photos: Photo[];
}

const icons: Record<string, ReactElement> = {
  spine: <path d="M12 2v4m0 3v1m0 3v1m0 3v1m0 3v3M9 5h6M8.5 9.5h7M9 14h6M8.5 18.5h7" />,
  pelvis: <path d="M3 8c3 0 5 2 9 2s6-2 9-2M5 8v5c0 3 3 6 7 8 4-2 7-5 7-8V8M12 10v4" />,
  head: <path d="M7 11a5 5 0 1110 0c0 2-1 3-1 5v2H9v-2c0-2-2-3-2-5zM9 21h6M12 1v1.5M4.5 4.5l1 1M19.5 4.5l-1 1" />,
  leaf: <path d="M5 19c0-9 5-14 15-14 0 9-5 14-13 14M5 19c2-4 5-7 9-9" />,
};

export default function DrAbout({ about, focus, photos }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  const second = photos[1];

  return (
    <>
      {/* About */}
      <section className="bg-white py-20 lg:py-32">
        <div className={`mx-auto grid max-w-[1400px] gap-14 px-6 lg:px-12 ${second ? 'items-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-20' : 'lg:grid-cols-[1fr_1fr] lg:gap-20'}`}>
          {second && (
            <motion.figure {...fade(0)} className="relative">
              <span aria-hidden="true" className="absolute -bottom-3 -left-3 h-full w-full rounded-xl border border-palm/60" />
              <img src={second.src} alt={second.alt} loading="lazy" className="relative aspect-square w-full rounded-xl object-cover" style={{ objectPosition: second.position }} />
            </motion.figure>
          )}
          <div>
            <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
              <span className="h-px w-12 bg-palm" />{about.eyebrow}
            </motion.p>
            <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.06] text-navy-deep">
              {about.title.split(' ').map((w, i) => (
                <span key={i} className={w === about.accent ? 'italic text-palm' : ''}>{w} </span>
              ))}
            </motion.h2>
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} {...fade(0.14 + i * 0.06)} className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-slate">{p}</motion.p>
            ))}
          </div>
          {!second && (
            <div className="rounded-xl bg-palm-soft p-8 lg:p-10">
              <motion.h3 {...fade(0)} className="font-display text-[26px] leading-tight text-navy-deep">{about.approachTitle}</motion.h3>
              <ul className="mt-6 space-y-6">
                {about.approach.map((a, i) => (
                  <motion.li key={a.title} {...fade(0.08 * i)} className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-palm text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
                    </span>
                    <span><strong className="block text-[18px] text-navy-deep">{a.title}</strong><span className="text-[16px] leading-relaxed text-slate">{a.text}</span></span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {second && (
          <div className="mx-auto mt-16 grid max-w-[1400px] gap-5 px-6 md:grid-cols-3 lg:px-12">
            {about.approach.map((a, i) => (
              <motion.div key={a.title} {...fade(0.08 * i)} className="rounded-xl bg-palm-soft p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-palm text-[15px] font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 font-display text-[24px] text-navy-deep">{a.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-slate">{a.text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Areas of care */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
            <span className="h-px w-12 bg-palm" />{focus.eyebrow}
          </motion.p>
          <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.06] text-navy-deep">
            {focus.title.split(' ').map((w, i) => (
              <span key={i} className={w === focus.accent ? 'italic text-palm' : ''}>{w} </span>
            ))}
          </motion.h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focus.items.map((f, i) => (
              <motion.a
                key={f.title} href={f.href} {...fade(0.07 * i)}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-palm transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-palm-soft text-palm transition-colors duration-300 group-hover:bg-palm group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[f.icon]}</svg>
                </span>
                <h3 className="mt-6 font-display text-[24px] leading-tight text-navy-deep">{f.title}</h3>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed text-slate">{f.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">
                  Learn more
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
