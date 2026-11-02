import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
interface Card { slug: string; name: string; role: string; image: string; position: string; alt: string }

export default function TeamLinks({ cards, current }: { cards: Card[]; current: string }) {
  const reduce = useReducedMotion();
  const others = cards.filter((c) => c.slug !== current);
  return (
    <section className="bg-mist py-20 lg:py-28" aria-label="Meet the rest of the team">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm"
        >
          <span className="h-px w-12 bg-palm" />Our team
        </motion.p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="mt-5 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.06] text-navy-deep"
        >
          Meet the rest of <span className="italic text-palm">the team.</span>
        </motion.h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
            >
              <a href={`/${c.slug}`} className="group block rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="relative block overflow-hidden rounded-xl">
                  <img src={c.image} alt={c.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: c.position }} />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-palm transition-transform duration-500 group-hover:scale-x-100" />
                </span>
                <span className="block px-3 pb-3 pt-5">
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-palm">{c.role}</span>
                  <span className="mt-2 block font-display text-[24px] leading-tight text-navy-deep">{c.name}</span>
                  <span className="relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full border border-navy/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 group-hover:text-white">
                    <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
                    <span className="relative">View profile</span>
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
