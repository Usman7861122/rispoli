import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
interface Props {
  data: {
    eyebrow: string; title: string; accent: string; intro: string;
    featured: { name: string; role: string; image: string; position: string; alt: string }[];
    others: { name: string; role: string }[];
  };
}

const initials = (n: string) => n.replace(/\(.*?\)/g, '').split(/\s+/).filter(Boolean).filter((_, i, a) => i === 0 || i === a.length - 1).map((w) => w[0]).join('');

export default function OfficeTeam({ data }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: EASE, delay },
  });
  return (
    <section className="bg-mist py-20 lg:py-28">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr_1.1fr]">
          {data.featured.map((f, i) => (
            <motion.figure key={f.name} {...fade(0.08 * i)} className="group rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="relative block overflow-hidden rounded-xl">
                <img src={f.image} alt={f.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]" style={{ objectPosition: f.position }} />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-palm transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <figcaption className="px-3 pb-3 pt-5">
                <span className="block font-display text-[1.6rem] leading-tight text-navy-deep">{f.name}</span>
                <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-palm">{f.role}</span>
              </figcaption>
            </motion.figure>
          ))}

          <motion.div {...fade(0.16)} className="rounded-xl bg-navy-deep p-7 text-white lg:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-palm-soft">Also on our team</p>
            <ul className="mt-5 divide-y divide-white/10">
              {data.others.map((o) => (
                <li key={o.name} className="group flex cursor-default items-center gap-4 py-4 transition-colors duration-300">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-palm text-[13px] font-semibold uppercase tracking-wide text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-palm">{initials(o.name)}</span>
                  <span>
                    <span className="block text-[17px] font-semibold leading-snug">{o.name}</span>
                    <span className="block text-[14px] text-white/70">{o.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
