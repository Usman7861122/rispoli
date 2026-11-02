import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FallbackImg, btnGhostLight } from './ServiceBlocks';

type Item = { slug: string; name: string; short: string; image: string; fallback: string; position: string; alt: string; href: string };
type Cat = { slug: string; title: string; short: string; href: string; items: Item[] };

// Toggle bar on top + every treatment grouped by category. "All" shows every group, another toggle shows just that group.
export default function ServicesBrowser({ cats }: { cats: Cat[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState('all');
  const total = cats.reduce((n, c) => n + c.items.length, 0);

  // Open a group from the address (e.g. /services#nerve-stimulation) and keep the address in sync.
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace('#', '');
      setActive(cats.some((c) => c.slug === h) ? h : 'all');
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [cats]);

  const pick = (slug: string) => {
    setActive(slug);
    try { history.replaceState(null, '', slug === 'all' ? window.location.pathname : `#${slug}`); } catch {}
  };
  const shown = active === 'all' ? cats : cats.filter((c) => c.slug === active);
  const pill = (on: boolean) =>
    `shrink-0 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${on ? 'border-palm bg-palm text-white shadow-md shadow-palm/30' : 'border-navy/25 bg-white text-navy hover:-translate-y-0.5 hover:border-palm hover:text-palm'}`;
  const count = (on: boolean) => `rounded-full px-2 py-0.5 text-[11px] ${on ? 'bg-white/25 text-white' : 'bg-navy/10 text-navy'}`;

  return (
    <div>
      <div className="sticky top-[68px] z-30 border-y border-navy/10 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div role="group" aria-label="Filter services by category" className="flex gap-3 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button type="button" aria-pressed={active === 'all'} onClick={() => pick('all')} className={pill(active === 'all')}>
              All services <span className={count(active === 'all')}>{total}</span>
            </button>
            {cats.map((c) => (
              <button key={c.slug} type="button" aria-pressed={active === c.slug} onClick={() => pick(c.slug)} className={pill(active === c.slug)}>
                {c.title} <span className={count(active === c.slug)}>{c.items.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-mist py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-16"
            >
              {shown.map((c) => (
                <section key={c.slug} id={c.slug} aria-label={c.title} className="scroll-mt-40">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] leading-tight text-navy-deep">{c.title}</h2>
                      <p className="mt-2 text-[18px] leading-relaxed text-slate">{c.short}</p>
                    </div>
                    <a href={c.href} className={btnGhostLight}>See all {c.title.toLowerCase()} →</a>
                  </div>
                  <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {c.items.map((it) => (
                      <li key={it.slug} className="group flex flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                        <a href={it.href} aria-label={it.name} className="block overflow-hidden rounded-xl">
                          <FallbackImg src={it.image} fallback={it.fallback} alt={it.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: it.position }} />
                        </a>
                        <span className="flex flex-1 flex-col px-3 pb-3 pt-5">
                          <a href={it.href} className="font-display text-[24px] leading-tight text-navy-deep transition-colors hover:text-palm">{it.name}</a>
                          <span className="mt-2 text-[16px] leading-relaxed text-slate">{it.short}</span>
                          <span className="mt-auto pt-5">
                            <a href={it.href} className="inline-flex rounded-full bg-palm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-navy-deep">Learn more</a>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
