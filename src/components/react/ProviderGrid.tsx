import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
interface Item { slug: string; name: string; role: string; line: string; image: string; position: string; alt: string }
interface Props { data: { eyebrow: string; title: string; accent: string; intro: string; items: Item[] } }

export default function ProviderGrid({ data }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
          <span className="h-px w-12 bg-palm" />{data.eyebrow}
        </motion.p>
        <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.06] text-navy-deep">
          {data.title.split(' ').map((w, i) => (
            <span key={i} className={w === data.accent ? 'italic text-palm' : ''}>{w} </span>
          ))}
        </motion.h2>
        <motion.p {...fade(0.14)} className="mt-4 max-w-[56ch] text-[18px] leading-relaxed text-slate">{data.intro}</motion.p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {data.items.map((p, i) => {
            const lead = i < 2;
            return (
              <motion.li key={p.slug} {...fade(0.08 * (i % 3))} className={lead ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <a href={`/${p.slug}`} className="group flex h-full flex-col rounded-xl bg-white p-3 shadow-[0_30px_60px_-38px_rgba(10,27,61,0.5)] ring-1 ring-navy/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-30px_rgba(10,27,61,0.55)]">
                  <span className="relative block overflow-hidden rounded-xl">
                    <img src={p.image} alt={p.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]" style={{ objectPosition: p.position }} />
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-palm transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                  <span className={`flex flex-1 flex-col ${lead ? 'px-3 pb-5 pt-6 lg:px-5' : 'px-3 pb-4 pt-5'}`}>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">{p.role}</span>
                    <span className={`mt-2 block font-display leading-tight text-navy-deep ${lead ? 'text-[2rem] lg:text-[2.4rem]' : 'text-[1.6rem]'}`}>{p.name}</span>
                    <span className="mt-3 block text-[16px] leading-relaxed text-slate">{p.line}</span>
                    <span className="mt-auto pt-6">
                      <span className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 group-hover:text-white">
                        <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
                        <span className="relative flex items-center gap-3">
                          View profile
                          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </span>
                      </span>
                    </span>
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
