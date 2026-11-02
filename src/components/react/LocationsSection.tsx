import { motion, useReducedMotion } from 'framer-motion';
import palm from '../../assets/palm.png';
import type { locations as L } from '../../data/locations';

const EASE = [0.22, 1, 0.36, 1] as const;
const url = (i: any) => (typeof i === 'string' ? i : i.src);
const palmUrl = url(palm);
const maskStyle = {
  WebkitMaskImage: `url(${palmUrl})`, maskImage: `url(${palmUrl})`,
  WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center', maskPosition: 'center',
  WebkitMaskSize: 'contain', maskSize: 'contain',
} as const;

interface Props { data: typeof L; bookingUrl: string }

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Icon({ d }: { d: string }) {
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-palm-soft text-palm">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
    </span>
  );
}

const PIN = 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

export default function LocationsSection({ data, bookingUrl }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => reduce
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.8, ease: EASE, delay } };

  return (
    <section id="locations" className="relative isolate overflow-hidden bg-gradient-to-b from-white via-mist to-white py-20 lg:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 -z-10 h-[460px] w-[460px] rounded-full bg-palm/10 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 -z-10 hidden h-[420px] w-[420px] bg-palm/[0.06] lg:block" style={maskStyle} />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm">
              <span className="h-px w-12 bg-palm" />{data.eyebrow}
            </motion.p>
            <motion.h2 {...fade(0.08)} className="mt-5 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.06] text-navy">
              {data.title.split(' ').map((w, k) => (
                <span key={k} className={w.replace(/[.,]/g, '') === data.accent ? 'italic text-palm' : ''}>{w} </span>
              ))}
            </motion.h2>
          </div>
          <motion.p {...fade(0.16)} className="max-w-[46ch] text-[18px] leading-relaxed text-slate">{data.intro}</motion.p>
        </div>

        <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {data.offices.map((o, i) => {
            const full = `${o.street}, ${o.cityLine}`;
            const q = encodeURIComponent(full);
            return (
              <motion.li
                key={o.slug}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, ease: EASE, delay: i * 0.12 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-38px_rgba(10,27,61,0.5)] ring-1 ring-navy/5 transition-shadow duration-500 hover:shadow-[0_40px_70px_-34px_rgba(10,27,61,0.55)]"
              >
                {/* Map */}
                <div className="relative aspect-[16/10] w-full bg-mist">
                  <iframe
                    title={`Map of our ${o.city} office, ${full}`}
                    src={`https://maps.google.com/maps?q=${q}&t=m&z=15&output=embed&iwloc=near`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0 saturate-[0.85] transition-[filter] duration-500 group-hover:saturate-100"
                  />
                  <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-palm shadow-md backdrop-blur">{o.city}</span>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className="font-display text-[1.8rem] leading-tight text-navy lg:text-[2rem]">{o.city}</h3>
                  <div className="mt-4 flex items-start gap-3">
                    <Icon d={PIN} />
                    <address className="text-[16px] not-italic leading-relaxed text-slate">{o.street}<br />{o.cityLine}</address>
                  </div>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-slate">{o.blurb}</p>
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-palm">Providers</p>
                    <ul className="mt-2 space-y-1.5">
                      {o.providers.map((p) => (
                        <li key={p.name} className="text-[15px] leading-snug text-navy"><span className="font-semibold">{p.name}</span><span className="text-slate"> · {p.role}</span></li>
                      ))}
                    </ul>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Areas near ${o.city}`}>
                    {o.nearby.map((n) => <li key={n} className="rounded-full bg-palm-soft px-3 py-1 text-[12.5px] font-medium text-palm">{n}</li>)}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener" className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                      <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover/btn:translate-x-0" />
                      <span className="relative flex items-center gap-3">Get directions <Arrow /></span>
                    </a>
                    <a href={`/locations/${o.slug}`} className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
                      <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover/btn:translate-x-0" />
                      <span className="relative flex items-center gap-3">View office <Arrow /></span>
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div {...fade(0.1)} className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:mt-16">
          <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Book a visit <Arrow /></span>
          </a>
          <a href={`tel:${data.phone.replace(/[^0-9]/g, '')}`} className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-navy/25 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors duration-500 hover:text-white">
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">Call {data.phone} <Arrow /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
