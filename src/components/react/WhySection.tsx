import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import palm from '../../assets/palm.png';

// Astro turns an imported image into an object with a .src link
const palmUrl = typeof palm === 'string' ? palm : (palm as { src: string }).src;

interface Location { name: string; image: string; alt: string; position?: string }
interface Props {
  data: {
    eyebrow: string; title: string; accent: string; intro: string;
    steps: { title: string; text: string }[];
    locationsTitle: string;
    locations: Location[];
  };
}

const EASE = [0.22, 1, 0.36, 1] as const;

function Pin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
      <circle cx="10" cy="8" r="2.2" />
    </svg>
  );
}

/* One square photo with slightly rounded corners. Shows a soft placeholder until the photo file exists. */
function LocationTile({ loc, index, className }: { loc: Location; index: number; className?: string }) {
  const reduce = useReducedMotion();
  const [missing, setMissing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  // The image may already have failed before React took over, so check once on load
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setMissing(true);
  }, []);
  return (
    <motion.figure
      className={`group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-palm-soft to-mist ${className ?? ''}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
    >
      {!missing ? (
        <img
          ref={imgRef}
          src={loc.image}
          alt={loc.alt}
          loading="lazy"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectPosition: loc.position ?? '50% 50%' }}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-palm/70">
          <Pin className="h-7 w-7" />
          <span className="px-4 text-center text-[11px] uppercase tracking-[0.18em]">Add photo: {loc.image.split('/').pop()}</span>
        </div>
      )}
      <figcaption className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[13px] font-semibold text-navy shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <Pin className="h-3.5 w-3.5 text-palm" />
        {loc.name}
      </figcaption>
    </motion.figure>
  );
}

export default function WhySection({ data }: Props) {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 70%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <section id="why" className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white py-20 lg:py-32">
      {/* soft green glow, blends the section into the white page */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-palm-soft/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
        {/* Left: three location photos. They stay in view while the steps scroll. */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mx-auto w-full max-w-[500px] lg:mx-0">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate">{data.locationsTitle}</p>
            <div className="grid grid-cols-2 gap-4">
              <LocationTile loc={data.locations[0]} index={0} className="col-span-2" />
              <LocationTile loc={data.locations[1]} index={1} />
              <LocationTile loc={data.locations[2]} index={2} />
            </div>
          </div>
        </div>

        {/* Right: header and timeline */}
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm"
          >
            <span className="h-px w-12 bg-palm" />
            {data.eyebrow}
          </motion.p>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
            className="mt-5 max-w-[36rem] font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.06] text-navy"
          >
            {data.title.split(' ').map((w, i) => (
              <span key={i} className={w.replace(/[.,]/g, '') === data.accent ? 'italic text-palm' : ''}>{w} </span>
            ))}
          </motion.h2>
          <p className="mt-5 max-w-[32rem] text-[18px] leading-relaxed text-slate">{data.intro}</p>

          <ol ref={listRef} className="relative mt-12">
            {/* track and scroll-fill line */}
            <span aria-hidden="true" className="absolute bottom-3 left-[21px] top-3 w-px bg-navy/10" />
            <motion.span
              aria-hidden="true"
              className="absolute bottom-3 left-[21px] top-3 w-px origin-top bg-palm"
              style={{ scaleY: reduce ? 1 : fill }}
            />

            {data.steps.map((s, i) => (
              <motion.li
                key={s.title}
                className="group relative flex gap-6 pb-10 last:pb-0"
                initial={reduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {/* Marker: the palm from the logo, in the exact logo green. It turns white on hover. */}
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-palm/40 bg-white text-palm transition-colors duration-300 group-hover:border-palm group-hover:bg-palm group-hover:text-white">
                  <span
                    aria-hidden="true"
                    className="block h-7 w-7 bg-current"
                    style={{
                      WebkitMaskImage: `url(${palmUrl})`,
                      maskImage: `url(${palmUrl})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                  <span className="sr-only">Step {i + 1}</span>
                </span>
                <div className="pt-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  <h3 className="font-display text-[1.65rem] leading-tight text-navy">{s.title}</h3>
                  <p className="mt-2 max-w-[30rem] text-[17px] leading-relaxed text-slate">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
