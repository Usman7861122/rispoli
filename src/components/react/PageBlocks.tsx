import { useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import PalmWatermark from './PalmWatermark';
import { Head, useFade, btnPrimary, btnGhostDark, btnGhostLight, tel, FallbackImg } from './ServiceBlocks';
import type { BlogPost, Block, LegalPage } from '../../data/content-types';

const EASE = [0.22, 1, 0.36, 1] as const;
const field = 'w-full rounded-xl border border-navy/20 bg-white px-4 py-3.5 text-[17px] text-navy-deep placeholder:text-slate/70 focus:border-palm focus:outline-none focus:ring-2 focus:ring-palm/30';

function Accent({ text, accent, dark }: { text: string; accent?: string; dark?: boolean }) {
  const i = accent ? text.indexOf(accent) : -1;
  if (!accent || i < 0) return <>{text}</>;
  return <>{text.slice(0, i)}<span className={`italic ${dark ? 'text-palm-bright' : 'text-palm'}`}>{accent}</span>{text.slice(i + accent.length)}</>;
}

export function fmtDate(d: string) {
  return new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/* ---------- Hero without a photo, used by the plain pages ---------- */
export function SimpleHero({ eyebrow, title, accent, lede, meta, actions }: {
  eyebrow: string; title: string; accent?: string; lede?: string; meta?: string[];
  actions?: { label: string; href: string; external?: boolean; primary?: boolean }[];
}) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({ initial: reduce ? false : { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: EASE, delay } });
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_40%,rgba(45,97,51,0.35),transparent_70%)]" />
      <PalmWatermark className="-right-24 bottom-0 h-[460px] w-[460px]" color="bg-white/[0.04]" side={1} />
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-36 lg:px-12 lg:pb-24 lg:pt-48">
        <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
          <span className="h-px w-12 bg-palm-soft/70" />{eyebrow}
        </motion.p>
        <motion.h1 {...fade(0.08)} className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,5.6vw,5rem)] leading-[1.05]"><Accent text={title} accent={accent} dark /></motion.h1>
        {lede && <motion.p {...fade(0.16)} className="mt-6 max-w-[56ch] text-[20px] leading-relaxed text-white/85">{lede}</motion.p>}
        {meta && meta.length > 0 && (
          <motion.ul {...fade(0.22)} className="mt-6 flex flex-wrap gap-3">
            {meta.map((m) => <li key={m} className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90">{m}</li>)}
          </motion.ul>
        )}
        {actions && actions.length > 0 && (
          <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap gap-4">
            {actions.map((a) => a.primary ? (
              <a key={a.label} href={a.href} {...(a.external ? { target: '_blank', rel: 'noopener' } : {})} className={btnPrimary}>
                <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative transition-colors duration-500 group-hover:text-navy">{a.label}</span>
              </a>
            ) : <a key={a.label} href={a.href} {...(a.external ? { target: '_blank', rel: 'noopener' } : {})} className={btnGhostDark}>{a.label}</a>)}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ---------- Legal pages ---------- */
export function LegalDoc({ page, others, phone, email }: { page: LegalPage; others: { title: string; href: string }[]; phone: string; email: string }) {
  const fade = useFade();
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[300px_1fr] lg:gap-16 lg:px-12">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="On this page" className="rounded-xl bg-palm-soft p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-palm">On this page</p>
            <ol className="mt-4 space-y-2.5">
              {page.sections.map((s, i) => (
                <li key={s.id}><a href={`#${s.id}`} className="block rounded-md text-[16px] leading-snug text-navy hover:text-palm"><span className="mr-2 text-palm/70">{i + 1}.</span>{s.title}</a></li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="max-w-3xl">
          <motion.p {...fade(0)} className="text-[20px] leading-relaxed text-navy-deep">{page.intro}</motion.p>
          <p className="mt-3 text-[15px] text-slate">Last updated: {page.updated}</p>
          <div className="mt-10 space-y-12">
            {page.sections.map((s, i) => (
              <motion.section key={s.id} id={s.id} {...fade(0)} className="scroll-mt-28">
                <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-navy-deep"><span className="mr-3 text-palm/70">{i + 1}.</span>{s.title}</h2>
                {s.paragraphs?.map((p, k) => <p key={k} className="mt-4 text-[18px] leading-relaxed text-slate">{p}</p>)}
                {s.items && (
                  <ul className="mt-4 space-y-2.5">
                    {s.items.map((it, k) => (
                      <li key={k} className="flex gap-3 text-[18px] leading-relaxed text-slate"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-palm" />{it}</li>
                    ))}
                  </ul>
                )}
                {s.note && <p className="mt-5 rounded-xl border-l-4 border-palm bg-palm-soft px-5 py-4 text-[17px] text-navy-deep">{s.note}</p>}
              </motion.section>
            ))}
          </div>
          <div className="mt-14 rounded-xl bg-navy-deep p-8 text-white">
            <p className="font-display text-3xl">Questions about this page?</p>
            <p className="mt-2 text-[18px] text-white/80">Call or email our office and we will help.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={tel(phone)} className={btnGhostDark}>Call {phone}</a>
              <a href={`mailto:${email}`} className={btnGhostDark}>Email the office</a>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-palm">More policies</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {others.map((o) => <li key={o.href}><a href={o.href} className={btnGhostLight}>{o.title}</a></li>)}
              <li><button type="button" onClick={() => window.dispatchEvent(new CustomEvent('wipp:open-cookie-settings'))} className={btnGhostLight}>Cookie settings</button></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
type T = { name: string; date: string; quote: string; rating: number; image: string; imageAlt: string; position: string; tag: string; fallback: string };

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-1" role="img" aria-label={`${n} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((k) => (
        <svg key={k} viewBox="0 0 24 24" className={`h-5 w-5 ${k < n ? 'text-[#f5b82e]' : 'text-navy/15'}`} fill="currentColor" aria-hidden="true"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z" /></svg>
      ))}
    </span>
  );
}

export function TestimonialWall({ items, bookingUrl, phone }: { items: T[]; bookingUrl: string; phone: string }) {
  const fade = useFade();
  const avg = items.reduce((a, b) => a + b.rating, 0) / Math.max(items.length, 1);
  return (
    <>
      <section className="bg-palm-soft py-14 lg:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-12 gap-y-6 px-6 lg:px-12">
          <div className="flex items-center gap-4">
            <span className="font-display text-6xl text-navy-deep">{avg.toFixed(1)}</span>
            <span><Stars n={Math.round(avg)} /><span className="mt-1 block text-[15px] text-slate">Average of {items.length} patient reviews</span></span>
          </div>
          <p className="max-w-xl text-[18px] leading-relaxed text-navy-deep">These reviews were written by real patients. We show first names and last initials to protect privacy. Results differ for each person.</p>
        </div>
      </section>
      <section className="bg-white py-20 lg:py-28" aria-label="Patient reviews">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Head eyebrow="Patient stories" title="Patients in their own words." accent="own" text="Kind words from people we have cared for." />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <motion.li key={t.name} {...fade((i % 3) * 0.08)} className="flex flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10">
                <div className="relative">
                  <FallbackImg src={t.image} fallback={t.fallback} alt={t.imageAlt} loading="lazy" className="aspect-square w-full rounded-xl object-cover" style={{ objectPosition: t.position }} />
                  <span className="absolute bottom-3 left-3 rounded-full bg-navy-deep/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">{t.tag}</span>
                </div>
                <figure className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <Stars n={t.rating} />
                  <blockquote className="mt-4 flex-1 text-[18px] leading-relaxed text-navy-deep">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-navy/10 pt-4 text-[16px]"><span className="font-semibold text-navy-deep">{t.name}</span><span className="text-slate"> · {t.date}</span></figcaption>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Ready to feel better?" accent="feel better?" text="Book a visit and meet a team that listens." bookingUrl={bookingUrl} phone={phone} />
    </>
  );
}

export function CtaBand({ title, accent, text, bookingUrl, phone }: { title: string; accent: string; text: string; bookingUrl: string; phone: string }) {
  const fade = useFade();
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-20 text-white lg:py-24">
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50%_90%_at_10%_50%,rgba(45,97,51,0.35),transparent_70%)]" />
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center lg:px-12">
        <motion.div {...fade(0)}>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-tight"><Accent text={title} accent={accent} dark /></h2>
          <p className="mt-3 max-w-xl text-[19px] text-white/80">{text}</p>
        </motion.div>
        <motion.div {...fade(0.1)} className="flex flex-wrap gap-4">
          <a href={bookingUrl} target="_blank" rel="noopener" className={btnPrimary}>
            <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative transition-colors duration-500 group-hover:text-navy">Book appointment</span>
          </a>
          <a href={tel(phone)} className={btnGhostDark}>Call {phone}</a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */
function PostCard({ p, big }: { p: BlogPost; big?: boolean }) {
  return (
    <a href={`/blog/${p.slug}`} className={`group flex h-full flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-xl ${big ? 'md:flex-row md:gap-8 md:p-4' : ''}`}>
      <span className={`block overflow-hidden rounded-xl ${big ? 'md:w-[44%] md:shrink-0' : ''}`}>
        <FallbackImg src={p.image} fallback="/images/services/back-pain.jpg" alt={p.imageAlt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: p.position }} />
      </span>
      <span className={`flex flex-1 flex-col px-3 pb-3 pt-5 ${big ? 'md:justify-center md:py-6' : ''}`}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">{p.category} · {p.readTime} read</span>
        <span className={`mt-3 font-display leading-tight text-navy-deep ${big ? 'text-[clamp(1.8rem,3vw,2.6rem)]' : 'text-[26px]'}`}>{p.title}</span>
        <span className="mt-3 text-[17px] leading-relaxed text-slate">{p.excerpt}</span>
        <span className="mt-5 flex items-center justify-between gap-3 text-[14px] text-slate">
          <span>{fmtDate(p.date)}</span>
          <span className="rounded-full bg-palm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-navy-deep">Read article</span>
        </span>
      </span>
    </a>
  );
}

export function BlogBrowser({ posts }: { posts: BlogPost[] }) {
  const cats = useMemo(() => ['All', ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [cat, setCat] = useState('All');
  const shown = posts.filter((p) => cat === 'All' || p.category === cat);
  const [lead, ...rest] = shown;
  return (
    <section className="bg-palm-soft py-16 lg:py-24" aria-label="Articles">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-3">
          {cats.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${cat === c ? 'border-palm bg-palm text-white' : 'border-navy/25 bg-white text-navy hover:bg-navy hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">{shown.length} articles shown</p>
        <AnimatePresence mode="popLayout">
          {lead && (
            <motion.div key={'lead-' + lead.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="mt-10">
              <PostCard p={lead} big />
            </motion.div>
          )}
        </AnimatePresence>
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((p) => (
              <motion.li key={p.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                <PostCard p={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

function RenderBlock({ b }: { b: Block }) {
  switch (b.type) {
    case 'h2': return <h2 className="mt-12 font-display text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight text-navy-deep">{b.text}</h2>;
    case 'p': return <p className="mt-5 text-[19px] leading-[1.75] text-slate">{b.text}</p>;
    case 'ul': return <ul className="mt-5 space-y-3">{b.items.map((it, k) => <li key={k} className="flex gap-3 text-[19px] leading-[1.7] text-slate"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-palm" />{it}</li>)}</ul>;
    case 'ol': return <ol className="mt-5 space-y-3">{b.items.map((it, k) => <li key={k} className="flex gap-4 text-[19px] leading-[1.7] text-slate"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-palm text-[13px] font-semibold text-white">{k + 1}</span>{it}</li>)}</ol>;
    case 'callout': return <aside className="mt-8 rounded-xl border-l-4 border-palm bg-palm-soft p-6"><p className="font-display text-2xl text-navy-deep">{b.title}</p><p className="mt-2 text-[18px] leading-relaxed text-navy-deep/85">{b.text}</p></aside>;
  }
}

export function BlogArticle({ post, services, more, bookingUrl, phone }: {
  post: BlogPost; services: { label: string; href: string }[]; more: BlogPost[]; bookingUrl: string; phone: string;
}) {
  const fade = useFade();
  return (
    <>
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-12">
          <article className="max-w-3xl">
            <FallbackImg src={post.image} fallback="/images/services/back-pain.jpg" alt={post.imageAlt} className="aspect-square w-full max-w-[560px] rounded-xl object-cover" style={{ objectPosition: post.position }} />
            <p className="mt-10 text-[22px] leading-[1.6] text-navy-deep">{post.intro}</p>
            {post.body.map((b, i) => <RenderBlock key={i} b={b} />)}
            <p className="mt-12 rounded-xl bg-mist p-5 text-[15px] leading-relaxed text-slate">This article is for learning. It is not medical advice and does not replace a visit with your doctor. Results are different for each person. If you think you have an emergency, call 911.</p>
          </article>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl bg-palm-soft p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-palm">Key takeaways</p>
              <ul className="mt-4 space-y-3">
                {post.takeaways.map((t) => <li key={t} className="flex gap-3 text-[17px] leading-snug text-navy-deep"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-palm" />{t}</li>)}
              </ul>
            </div>
            {services.length > 0 && (
              <div className="rounded-xl bg-white p-7 ring-1 ring-navy/10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-palm">Related care</p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {services.map((s) => <li key={s.href}><a href={s.href} className={btnGhostLight}>{s.label}</a></li>)}
                </ul>
              </div>
            )}
            <div className="rounded-xl bg-navy-deep p-7 text-white">
              <p className="font-display text-3xl leading-tight">Have pain that won’t go away?</p>
              <p className="mt-2 text-[17px] text-white/80">Talk with one of our doctors.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={bookingUrl} target="_blank" rel="noopener" className="rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-navy">Book appointment</a>
                <a href={tel(phone)} className={btnGhostDark}>Call</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {post.faqs.length > 0 && (
        <section className="bg-mist py-16 lg:py-20" aria-label="Questions">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Head eyebrow="Common questions" title="Quick answers." accent="answers." />
            <div className="mt-8 max-w-3xl space-y-3">
              {post.faqs.map((f) => (
                <motion.details key={f.q} {...fade(0)} className="group rounded-xl bg-white p-5 ring-1 ring-navy/10 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px] font-semibold text-navy-deep">
                    {f.q}
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-palm text-xl text-white transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[18px] leading-relaxed text-slate">{f.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="bg-palm-soft py-16 lg:py-24" aria-label="More articles">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Head eyebrow="Keep reading" title="More from our doctors." accent="doctors." />
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{more.map((p) => <li key={p.slug}><PostCard p={p} /></li>)}</ul>
            <div className="mt-10"><a href="/blog" className={btnGhostLight}>All articles</a></div>
          </div>
        </section>
      )}
    </>
  );
}

/* ---------- Contact ---------- */
type Office = { slug: string; city: string; street: string; cityLine: string; image: string; position: string; mapsHref: string };

function Row({ label, children }: { label: string; children: ReactNode }) {
  return <div className="flex flex-col gap-1 sm:flex-row sm:gap-4"><dt className="w-24 shrink-0 text-[12px] font-semibold uppercase tracking-[0.18em] text-palm sm:pt-1">{label}</dt><dd className="text-[18px] text-navy-deep">{children}</dd></div>;
}

export function ContactBlocks({ offices, services, phone, fax, email, hours, api }: {
  offices: Office[]; services: string[]; phone: string; fax: string; email: string; hours: { days: string; time: string }[]; api: string;
}) {
  const fade = useFade();
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'mail' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company')) return; // spam trap: real people leave it empty
    if (api) {
      setStatus('sending');
      try {
        const res = await fetch(api, { method: 'POST', body: data });
        setStatus(res.ok ? 'done' : 'error');
      } catch { setStatus('error'); }
      return;
    }
    // No form service is set up yet: open the visitor's email app with the message ready to send.
    const lines = [
      `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`, `Email: ${data.get('email') || '-'}`,
      `Office: ${data.get('office')}`, `Interested in: ${data.get('interest') || '-'}`,
      `Best time to call: ${data.get('time') || '-'}`, '', String(data.get('message') || ''),
    ];
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Appointment request')}&body=${encodeURIComponent(lines.join('\n'))}`;
    setStatus('mail');
  }

  return (
    <>
      <section className="bg-white py-16 lg:py-24" aria-label="Contact form">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
          <motion.div {...fade(0)}>
            <Head eyebrow="Send a message" title="Tell us how we can help." accent="help." text="Fill in the form and our team will call you back on the next business day." />
            {status === 'done' || status === 'mail' ? (
              <div role="status" className="mt-10 rounded-xl bg-palm-soft p-8">
                <p className="font-display text-3xl text-navy-deep">{status === 'mail' ? 'Almost done.' : 'Thank you.'}</p>
                <p className="mt-3 text-[18px] leading-relaxed text-navy-deep/85">
                  {status === 'mail' ? `Your email app should open with your message ready. Press send to finish. If nothing opens, please call us at ${phone}.` : 'We got your message and will call you soon.'}
                </p>
                <button type="button" onClick={() => setStatus('idle')} className={`${btnGhostLight} mt-6`}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2" noValidate={false}>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Full name *</span><input name="name" required autoComplete="name" className={field} /></label>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Phone *</span><input name="phone" required type="tel" autoComplete="tel" className={field} /></label>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Email</span><input name="email" type="email" autoComplete="email" className={field} /></label>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Best time to call</span>
                  <select name="time" defaultValue="Any time" className={field}><option>Any time</option><option>Morning</option><option>Afternoon</option></select></label>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Which office? *</span>
                  <select name="office" required defaultValue="" className={field}><option value="" disabled>Choose an office</option>{offices.map((o) => <option key={o.slug}>{o.city}</option>)}<option>Not sure yet</option></select></label>
                <label className="block"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">I am interested in</span>
                  <select name="interest" defaultValue="" className={field}><option value="">Not sure yet</option>{services.map((s) => <option key={s}>{s}</option>)}</select></label>
                <label className="block sm:col-span-2"><span className="mb-2 block text-[15px] font-semibold text-navy-deep">Message</span><textarea name="message" rows={5} className={field} placeholder="Tell us a little about your pain or your question." /></label>
                <div aria-hidden="true" className="absolute -left-[9999px]"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
                <label className="flex items-start gap-3 sm:col-span-2">
                  <input type="checkbox" required className="mt-1.5 h-5 w-5 accent-[#2d6133]" />
                  <span className="text-[16px] leading-relaxed text-slate">I agree that the office may contact me about my request. I read the <a href="/privacy" className="text-navy underline underline-offset-4">Privacy Policy</a>.</span>
                </label>
                <p className="rounded-xl bg-mist p-4 text-[15px] leading-relaxed text-slate sm:col-span-2">Please do not put detailed medical information in this form. For an emergency, call 911.</p>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === 'sending'} className={btnPrimary}>
                    <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-navy-deep transition-transform duration-500 group-hover:translate-x-0" />
                    <span className="relative">{status === 'sending' ? 'Sending...' : 'Request an appointment'}</span>
                  </button>
                  {status === 'error' && <p role="alert" className="mt-4 text-[17px] text-[#9b1c1c]">The message did not send. Please call us at {phone}.</p>}
                </div>
              </form>
            )}
          </motion.div>

          <motion.aside {...fade(0.1)} className="space-y-6 lg:pt-4">
            <div className="rounded-xl bg-navy-deep p-8 text-white">
              <p className="font-display text-3xl">Prefer to talk?</p>
              <p className="mt-2 text-[18px] text-white/80">Our team is happy to help by phone.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={tel(phone)} className="rounded-full bg-palm px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-navy">Call {phone}</a>
                <a href={`mailto:${email}`} className={btnGhostDark}>Email us</a>
              </div>
              <dl className="mt-8 space-y-4 border-t border-white/15 pt-6 [&_dt]:text-palm-soft [&_dd]:text-white">
                <Row label="Phone"><a href={tel(phone)} className="hover:underline">{phone}</a></Row>
                <Row label="Fax">{fax}</Row>
                <Row label="Email"><a href={`mailto:${email}`} className="break-all hover:underline">{email}</a></Row>
                <Row label="Hours">{hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</Row>
              </dl>
            </div>
            <div className="rounded-xl bg-palm-soft p-8">
              <p className="font-display text-2xl text-navy-deep">Insurance and billing</p>
              <p className="mt-2 text-[17px] leading-relaxed text-navy-deep/85">Call us before your visit and we will help you check your plan.</p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-palm-soft py-16 lg:py-24" aria-label="Our offices">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Head eyebrow="Visit us" title="Three offices, close to you." accent="close" text="Choose the office that is easiest for you to reach." />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((o, i) => (
              <motion.li key={o.slug} {...fade(i * 0.08)} className="flex flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10">
                <img src={o.image} alt={`The ${o.city} office`} loading="lazy" className="aspect-square w-full rounded-xl object-cover" style={{ objectPosition: o.position }} />
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <p className="font-display text-[28px] leading-tight text-navy-deep">{o.city}</p>
                  <address className="mt-2 text-[17px] not-italic leading-relaxed text-slate">{o.street}<br />{o.cityLine}</address>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={`/locations/${o.slug}`} className="rounded-full bg-palm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-navy-deep">Office page</a>
                    <a href={o.mapsHref} target="_blank" rel="noopener noreferrer" className={btnGhostLight}>Get directions</a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
