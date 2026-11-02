import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PalmWatermark from './PalmWatermark';

const EASE = [0.22, 1, 0.36, 1] as const;

// Shows `fallback` when `src` is missing. Checks after hydration too, because the error can fire before React attaches onError.
function FallbackImg({ src, fallback, ...rest }: { src: string; fallback: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [cur, setCur] = useState(src);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0 && cur !== fallback) setCur(fallback);
  }, [cur, fallback]);
  return <img ref={ref} src={cur} onError={() => cur !== fallback && setCur(fallback)} {...rest} />;
}

function useFade() {
  const reduce = useReducedMotion();
  return (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' } as const,
    transition: { duration: 0.7, ease: EASE, delay },
  });
}

// Highlights `accent` inside `title` in italic green (or soft green on dark).
function Title({ text, accent, dark }: { text: string; accent: string; dark?: boolean }) {
  const i = text.indexOf(accent);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className={`italic ${dark ? 'text-palm-soft' : 'text-palm'}`}>{accent}</span>
      {text.slice(i + accent.length)}
    </>
  );
}

function Head({ eyebrow, title, accent, text, dark }: { eyebrow: string; title: string; accent: string; text?: string; dark?: boolean }) {
  const fade = useFade();
  return (
    <div className="max-w-3xl">
      <motion.p {...fade(0)} className={`flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] ${dark ? 'text-palm-soft' : 'text-palm'}`}>
        <span className={`h-px w-12 ${dark ? 'bg-palm-soft/70' : 'bg-palm'}`} />{eyebrow}
      </motion.p>
      <motion.h2 {...fade(0.08)} className={`mt-5 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.06] ${dark ? 'text-white' : 'text-navy-deep'}`}>
        <Title text={title} accent={accent} dark={dark} />
      </motion.h2>
      {text && <motion.p {...fade(0.16)} className={`mt-5 max-w-[60ch] text-[19px] leading-relaxed ${dark ? 'text-white/80' : 'text-slate'}`}>{text}</motion.p>}
    </div>
  );
}

const btnPrimary = 'group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white';
const btnGhostDark = 'inline-flex items-center rounded-full border border-white/40 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-navy';
const btnGhostLight = 'inline-flex items-center rounded-full border border-navy/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors duration-300 hover:bg-navy hover:text-white';
const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, '')}`;

/* ---------- Hero ---------- */
export function ServiceHero({ data, photo, bookingUrl, phone }: {
  data: { eyebrow: string; name: string; accent: string; lede: string; chips: string[]; pill?: boolean; nearbyNote?: string };
  photo: { src: string; fallback: string; alt: string; position: string };
  bookingUrl: string; phone: string;
}) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_40%,rgba(45,97,51,0.35),transparent_70%)]" />
      <PalmWatermark className="-left-24 bottom-0 h-[520px] w-[520px]" color="bg-white/[0.04]" side={-1} />
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-52">
        <div>
          <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
            <span className="h-px w-12 bg-palm-soft/70" />{data.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.08)} className={`mt-6 font-display text-[clamp(2.8rem,6vw,5.4rem)] leading-[1.04]`}>
            {data.pill ? (
              <>
                {data.name.replace(data.accent, '')}
                <span className="italic text-palm-bright">{data.accent}</span>
              </>
            ) : (
              <Title text={data.name} accent={data.accent} dark />
            )}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-[48ch] text-[20px] leading-relaxed text-white/85">{data.lede}</motion.p>
          <motion.ul {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            {data.chips.map((c) => (
              <li key={c} className="cursor-default rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90 transition-all duration-300 hover:-translate-y-1 hover:border-palm hover:bg-palm hover:text-white hover:shadow-lg hover:shadow-palm/40">{c}</li>
            ))}
          </motion.ul>
          <motion.div {...fade(0.32)} className="mt-10 flex flex-wrap gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener" className={btnPrimary}>
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative transition-colors duration-500 group-hover:text-navy">Book appointment</span>
            </a>
            <a href={tel(phone)} className={btnGhostDark}>Call {phone}</a>
          </motion.div>
          {data.nearbyNote && (
            <motion.div {...fade(0.4)} className="mt-10 border-t border-white/20 pt-6">
              <p className="flex items-start gap-4 text-[18px] font-light leading-relaxed text-white/80">
                <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-palm-soft" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                <span>{data.nearbyNote}</span>
              </p>
            </motion.div>
          )}
        </div>
        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-palm" />
          <FallbackImg
            src={photo.src}
            fallback={photo.fallback}
            alt={photo.alt}
            className="relative aspect-square w-full rounded-xl object-cover"
            style={{ objectPosition: photo.position }}
          />
        </motion.figure>
      </div>
    </section>
  );
}

/* ---------- Quick facts + what it is ---------- */
export function ServiceIntro({ facts, what, local }: {
  facts: { label: string; value: string }[];
  what: { eyebrow: string; title: string; accent: string; paragraphs: string[] };
  local?: { city: string; title: string; text: string; areas: string[] };
}) {
  const fade = useFade();
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <motion.li key={f.label} {...fade(i * 0.06)} className="group rounded-xl bg-navy-deep p-6 text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-palm hover:shadow-xl">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] text-palm-soft transition-colors group-hover:text-white/90">{f.label}</span>
              <span className="mt-3 block font-display text-[26px] leading-tight">{f.value}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Head eyebrow={what.eyebrow} title={what.title} accent={what.accent} />
          <div className="space-y-5">
            {what.paragraphs.map((p, i) => (
              <motion.p key={i} {...fade(0.1 + i * 0.08)} className="text-[19px] leading-relaxed text-slate">{p}</motion.p>
            ))}
            {local && (
              <motion.div {...fade(0.3)} className="rounded-xl bg-palm p-7 text-white">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-palm-soft">{local.city}</p>
                <h3 className="mt-2 font-display text-[28px] leading-tight">{local.title}</h3>
                <p className="mt-3 text-[18px] leading-relaxed text-white/90">{local.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {local.areas.map((a) => (
                    <li key={a} className="rounded-full border border-white/40 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em]">{a}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Routes (approaches) ---------- */
export function ServiceApproaches({ data }: {
  data: { eyebrow: string; title: string; accent: string; text: string; items: { title: string; text: string }[]; areas: string[]; areasLabel?: string };
}) {
  const fade = useFade();
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
      <PalmWatermark className="-right-20 top-0 h-[460px] w-[460px]" color="bg-white/[0.04]" side={1} />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow={data.eyebrow} title={data.title} accent={data.accent} text={data.text} dark />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {data.items.map((a, i) => (
            <motion.li key={a.title} {...fade(i * 0.08)} className="group rounded-xl border border-white/15 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-palm hover:bg-palm hover:shadow-xl hover:shadow-palm/30">
              <span className="block h-1 w-10 rounded-full bg-palm transition-colors group-hover:bg-white" />
              <h3 className="mt-6 font-display text-[30px] leading-tight">{a.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-white/80 group-hover:text-white">{a.text}</p>
            </motion.li>
          ))}
        </ul>
        <motion.ul {...fade(0.2)} className="mt-10 flex flex-wrap items-center gap-3">
          <li className="mr-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-palm-soft">{data.areasLabel ?? 'Spine areas we treat'}</li>
          {data.areas.map((a) => (
            <li key={a} className="cursor-default rounded-full border border-white/25 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors duration-300 hover:border-palm hover:bg-palm">{a}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---------- Who it helps ---------- */
export function ServiceCandidates({ data, photo }: {
  data: { eyebrow: string; title: string; accent: string; conditionsTitle: string; conditions: string[]; symptomsTitle: string; symptoms: string[]; note: string };
  photo: { src: string; fallback: string; alt: string; position: string };
}) {
  const fade = useFade();
  const List = ({ title, items }: { title: string; items: string[] }) => (
    <motion.div {...fade(0.1)} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="font-display text-[26px] text-navy-deep">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((c) => (
          <li key={c} className="flex gap-3 text-[17px] leading-snug text-slate">
            <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-palm" />{c}
          </li>
        ))}
      </ul>
    </motion.div>
  );
  return (
    <section className="bg-palm-soft py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        <div>
          <Head eyebrow={data.eyebrow} title={data.title} accent={data.accent} />
          <motion.figure {...fade(0.2)} className="relative mt-10 max-w-[460px]">
            <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-palm" />
            <FallbackImg src={photo.src} fallback={photo.fallback} alt={photo.alt} loading="lazy" className="relative aspect-square w-full rounded-xl object-cover" style={{ objectPosition: photo.position }} />
          </motion.figure>
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <List title={data.conditionsTitle} items={data.conditions} />
            <List title={data.symptomsTitle} items={data.symptoms} />
          </div>
          <motion.p {...fade(0.2)} className="rounded-xl bg-navy-deep p-6 text-[17px] leading-relaxed text-white/90">{data.note}</motion.p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Visit steps ---------- */
export function ServiceSteps({ data }: {
  data: { eyebrow: string; title: string; accent: string; items: { label: string; title: string; text: string }[] };
}) {
  const fade = useFade();
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow={data.eyebrow} title={data.title} accent={data.accent} dark />
        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-white/20 lg:block" />
          {data.items.map((s, i) => (
            <motion.li key={s.title} {...fade(i * 0.1)} className="group relative">
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-navy text-[13px] font-semibold text-white transition-colors duration-300 group-hover:border-palm group-hover:bg-palm">{i + 1}</span>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-palm-soft">{s.label}</p>
              <h3 className="mt-2 font-display text-[26px] leading-tight">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-white/80">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Safety + FAQ ---------- */
export function ServiceFaq({ safety, faqs }: { safety: { title: string; text: string }; faqs: { q: string; a: string }[] }) {
  const fade = useFade();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        <motion.div {...fade(0)} className="self-start rounded-xl bg-palm p-8 text-white lg:sticky lg:top-32">
          <h2 className="font-display text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.06]">{safety.title}</h2>
          <p className="mt-5 text-[18px] leading-relaxed text-white/90">{safety.text}</p>
        </motion.div>
        <div>
          <Head eyebrow="Questions" title="Good questions, plain answers." accent="plain answers." />
          <ul className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.li key={f.q} {...fade(i * 0.04)} className="overflow-hidden rounded-xl bg-white ring-1 ring-navy/10">
                  <button
                    type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 hover:bg-palm-soft"
                  >
                    <span className="font-display text-[22px] leading-snug text-navy-deep">{f.q}</span>
                    <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-palm text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-[18px] leading-relaxed text-slate">{f.a}</p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Providers ---------- */
export interface ProviderCard { slug: string; name: string; role: string; image: string; position: string; alt: string; href: string; line: string }

export function ServiceProviders({ title, accent, text, cards }: { title: string; accent: string; text?: string; cards: ProviderCard[] }) {
  const fade = useFade();
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-20 text-white lg:py-28" aria-label="Providers">
      <PalmWatermark className="-left-24 bottom-0 h-[460px] w-[460px]" color="bg-white/[0.04]" side={-1} />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow="Your providers" title={title} accent={accent} dark text={text ?? 'These providers perform this procedure. Tap a card to read about their training.'} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.li key={c.slug} {...fade(i * 0.08)}>
              <a href={c.href} className="group block rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1.5 hover:bg-palm hover:shadow-xl hover:shadow-palm/30">
                <span className="relative block overflow-hidden rounded-xl">
                  <img src={c.image} alt={c.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: c.position }} />
                </span>
                <span className="block px-3 pb-3 pt-5">
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-palm-soft group-hover:text-white/90">{c.role}</span>
                  <span className="mt-2 block font-display text-[26px] leading-tight">{c.name}</span>
                  <span className="mt-3 block text-[16px] leading-relaxed text-white/75 group-hover:text-white">{c.line}</span>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-palm">View profile <span aria-hidden="true">→</span></span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Locations ---------- */
export interface LocationCard { slug: string; city: string; street: string; cityLine: string; image: string; position: string; providers: string[] }

export function ServiceLocations({ title, accent, text, cards, bookingUrl, phone, basePath, currentSlug, topic }: {
  title: string; accent: string; text: string; cards: LocationCard[]; bookingUrl: string; phone: string;
  basePath: string; currentSlug?: string; topic: string;
}) {
  const fade = useFade();
  const map = (c: LocationCard) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.street}, ${c.cityLine}`)}`;
  return (
    <section id="locations" className="scroll-mt-28 bg-palm-soft py-20 lg:py-28" aria-label="Locations">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow="Where we treat" title={title} accent={accent} text={text} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const here = c.slug === currentSlug;
            const href = `${basePath}/${c.slug}`;
            return (
              <motion.li key={c.slug} {...fade(i * 0.08)} className={`group flex flex-col rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${here ? 'ring-2 ring-palm' : 'ring-1 ring-navy/10'}`}>
                <a href={href} aria-label={`${topic} in ${c.city}`} aria-current={here ? 'page' : undefined} className="relative block overflow-hidden rounded-xl">
                  <img src={c.image} alt={`${c.city} office`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: c.position }} />
                  <span aria-hidden="true" className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-navy-deep/90 px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {here ? 'You are viewing this office' : `See ${c.city} page →`}
                  </span>
                  {here && <span className="absolute left-3 top-3 rounded-full bg-palm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">You are here</span>}
                </a>
                <span className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <a href={href} className="font-display text-[28px] leading-tight text-navy-deep transition-colors hover:text-palm">{c.city}</a>
                  <address className="mt-2 text-[16px] not-italic leading-relaxed text-slate">{c.street}<br />{c.cityLine}</address>
                  <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-palm">Providers here</span>
                  <span className="mt-1 text-[16px] leading-snug text-navy-deep">{c.providers.join(' · ')}</span>
                  <span className="mt-6 flex flex-wrap gap-3">
                    <a href={bookingUrl} target="_blank" rel="noopener" className="rounded-full bg-palm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-navy-deep">Book here</a>
                    <a href={map(c)} target="_blank" rel="noopener" className={btnGhostLight}>Directions</a>
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          {currentSlug && <a href={basePath} className={btnGhostLight}>All {topic} info</a>}
          <a href={tel(phone)} className={btnGhostLight}>Call {phone}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Related buttons ---------- */
export function ServiceRelated({ items }: { items: { label: string; href: string }[] }) {
  const fade = useFade();
  return (
    <section className="bg-mist py-14">
      <motion.div {...fade(0)} className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 lg:px-12">
        <span className="mr-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-palm">Related care</span>
        {items.map((r) => (
          <a key={r.href} href={r.href} className={btnGhostLight}>{r.label}</a>
        ))}
      </motion.div>
    </section>
  );
}

