import { useCallback, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import TeamGallery from './TeamGallery';
import PhotoLightbox from './PhotoLightbox';

interface Photo { src: string; alt: string; position: string; size?: 'big' | 'wide' }
interface Props { data: { eyebrow: string; title: string; accent: string; intro: string; photos: Photo[]; parallax: Photo[] } }

/**
 * 3D "unfurling" gallery. A framed photo wall opens to full screen while the tilted
 * columns of photos straighten and drift as you scroll. Click any photo to enlarge.
 * With "reduce motion" turned on, it falls back to a plain photo grid.
 */
export default function ParallaxGallery({ data }: Props) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const photos = data.parallax;
  const n = photos.length;
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  const cols = useMemo(() => {
    const c: { p: Photo; i: number }[][] = [[], [], [], [], [], []];
    photos.forEach((p, i) => c[i % 6].push({ p, i }));
    return c.map((col) => [...col, ...col]); // repeat so the columns never run out
  }, [photos]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.5 });

  const bannerWidth = useTransform(progress, [0, 0.15], ['90vw', '100vw']);
  const bannerHeight = useTransform(progress, [0, 0.15], ['80vh', '100vh']);
  const bannerRadius = useTransform(progress, [0, 0.15], ['40px', '0px']);
  const bannerBorder = useTransform(progress, [0, 0.15], ['4px', '0px']);

  const rotateY = useTransform(progress, [0.15, 1], [-45, -8]);
  const rotateX = useTransform(progress, [0.15, 1], [25, 4]);
  const rotateZ = useTransform(progress, [0.15, 1], [15, 2]);
  const z = useTransform(progress, [0.15, 1], [-800, 0]);
  const x = useTransform(progress, [0.15, 1], ['0vw', '-4vw']); // keeps the tilted wall centered

  const y1 = useTransform(progress, [0.15, 1], ['0%', '-40%']);
  const y2 = useTransform(progress, [0.15, 1], ['-40%', '10%']);
  const y3 = useTransform(progress, [0.15, 1], ['0%', '-40%']);
  const y4 = useTransform(progress, [0.15, 1], ['-30%', '20%']);
  const ys = [y1, y2, y3, y4, y1, y2];

  const titleOpacity = useTransform(progress, [0, 0.1], [1, 0]);
  const titleY = useTransform(progress, [0, 0.1], [0, -40]);

  if (reduce) return <TeamGallery data={data} />;

  return (
    <section id="gallery" ref={sectionRef} aria-label={data.title} className="relative h-[420vh] bg-navy-deep text-white">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ width: bannerWidth, height: bannerHeight, borderRadius: bannerRadius, borderWidth: bannerBorder }}
          className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden border-palm bg-navy-deep will-change-transform"
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
            {/* soft edges so the photos fade into the navy frame */}
            <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_100px_150px_-50px_rgba(10,27,61,1),inset_0_-100px_150px_-50px_rgba(10,27,61,1)]" />
            <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_150px_0_150px_-50px_rgba(10,27,61,1),inset_-150px_0_150px_-50px_rgba(10,27,61,1)]" />

            <motion.div
              style={{ x, rotateX, rotateY, rotateZ, z, transformStyle: 'preserve-3d' }}
              className="flex h-[150vh] w-[150vw] origin-center items-center justify-center gap-4 will-change-transform md:gap-6"
            >
              {cols.map((col, ci) => (
                <motion.div key={ci} style={{ y: ys[ci] }} className="flex w-[17vw] min-w-[170px] flex-col gap-4 md:gap-6">
                  {col.map(({ p, i }, k) => (
                    <button
                      key={`${ci}-${k}`}
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-label={`Open photo: ${p.alt}`}
                      className="group relative block aspect-[4/5] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl bg-navy"
                    >
                      <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-100" style={{ objectPosition: p.position }} />
                      <span aria-hidden="true" className="absolute inset-0 bg-palm/0 transition-colors duration-500 group-hover:bg-palm/20" />
                    </button>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Title sits on the frame, then fades as the gallery opens */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
            <span aria-hidden="true" className="absolute h-[70%] w-[80%] bg-[radial-gradient(closest-side,rgba(10,27,61,0.92),rgba(10,27,61,0.6)_60%,transparent)]" />
            <p className="relative flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
              <span className="h-px w-10 bg-palm-soft/70" />{data.eyebrow}<span className="h-px w-10 bg-palm-soft/70" />
            </p>
            <h2 className="relative mt-5 font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[1.04] drop-shadow-[0_4px_30px_rgba(10,27,61,0.9)]">
              {data.title.split(' ').map((w, i) => (
                <span key={i} className={w === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
              ))}
            </h2>
            <p className="relative mt-4 flex items-center gap-2 text-[15px] font-semibold uppercase tracking-[0.2em] text-white/85">
              Scroll to open
              <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <PhotoLightbox photos={photos} index={open} onClose={close} onStep={step} />
    </section>
  );
}
