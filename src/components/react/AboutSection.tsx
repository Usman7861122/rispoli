import { motion, useReducedMotion } from 'framer-motion';

interface Props {
  data: {
    eyebrow: string; title: string; accent: string; paragraphs: string[]; points: string[];
    image: string; imageAlt: string; caption: string; position: string;
    ctas: { label: string; href: string }[];
  };
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutSection({ data }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-12">
        {/* Photo: square with slightly rounded corners */}
        <motion.figure
          className="flex w-full flex-col"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="relative flex-1">
            {/* offset outline in logo green */}
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-palm/60" />
            <img
              src={data.image}
              alt={data.imageAlt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-xl object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full shadow-[0_30px_60px_-30px_rgba(10,27,61,0.45)]"
              style={{ objectPosition: data.position }}
            />
          </div>
          <figcaption className="mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate">{data.caption}</figcaption>
        </motion.figure>

        {/* Text */}
        <div className="lg:py-4">
          <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
            <span className="h-px w-12 bg-palm" />
            {data.eyebrow}
          </motion.p>

          <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2rem,3.3vw,3rem)] leading-[1.08] text-navy">
            {data.title.split(' ').map((w, i) => (
              <span key={i} className={w.replace(/[.,]/g, '') === data.accent ? 'italic text-palm' : ''}>{w} </span>
            ))}
          </motion.h2>

          {data.paragraphs.map((p, i) => (
            <motion.p key={i} {...fade(0.16 + i * 0.06)} className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-slate">
              {p}
            </motion.p>
          ))}

          <motion.ul {...fade(0.3)} className="mt-8 max-w-[34rem] divide-y divide-navy/10 border-y border-navy/10">
            {data.points.map((pt) => (
              <li key={pt} className="group relative cursor-default overflow-hidden">
                {/* loading-style sweep on hover */}
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-palm-soft transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-palm transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <div className="relative flex items-center gap-4 px-3 py-3.5 text-[16px] font-medium text-navy">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-palm/40 text-palm transition-colors duration-300 group-hover:border-palm group-hover:bg-palm group-hover:text-white">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" />
                    </svg>
                  </span>
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">{pt}</span>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.4)} className="mt-9 flex flex-wrap gap-3">
            {data.ctas.map((c, i) => (
              <a
                key={c.href + c.label}
                href={c.href}
                className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-[15px] font-semibold ${i === 0 ? 'bg-navy text-white' : 'border border-navy/30 text-navy'}`}
              >
                {/* loading-style sweep on hover */}
                <span className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${i === 0 ? 'bg-palm' : 'bg-navy'}`} />
                <span className="relative transition-colors duration-300 group-hover:text-white">{c.label}</span>
                <svg viewBox="0 0 20 20" className="relative h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
