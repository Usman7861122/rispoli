import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Head, useFade, btnGhostLight, tel } from './ServiceBlocks';

type Hour = { day: string; open: string; close: string; from: number; to: number };

// The offices are in California, so "today" and "open now" use Pacific time, whatever the visitor's own clock says.
function pacificNow() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return { day: get('weekday'), minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

/* ---------- Address, contact, hours (with Today tag) and map ---------- */
export function LocVisit({ city, street, cityLine, phone, fax, email, hours, directions, mapEmbed, bookingUrl }: {
  city: string; street: string; cityLine: string; phone: string; fax: string; email: string;
  hours: Hour[]; directions: string; mapEmbed: string; bookingUrl: string;
}) {
  const fade = useFade();
  const [now, setNow] = useState<{ day: string; minutes: number } | null>(null);
  useEffect(() => {
    setNow(pacificNow());
    const t = setInterval(() => setNow(pacificNow()), 60_000);
    return () => clearInterval(t);
  }, []);
  const today = now ? hours.find((h) => h.day === now.day) : undefined;
  const isOpen = !!(now && today && today.to > 0 && now.minutes >= today.from && now.minutes < today.to);

  return (
    <section className="bg-mist py-20 lg:py-28" aria-label="Visit us">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow="Visit us" title={`Plan your visit to ${city}.`} accent={city} text="Address, phone, opening hours and a map, all in one place." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-6">
            <motion.div {...fade(0)} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy/10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">Address</p>
              <address className="mt-3 font-display text-[28px] not-italic leading-snug text-navy-deep">{street}<br />{cityLine}</address>
              <dl className="mt-6 grid gap-4 text-[17px] sm:grid-cols-2">
                <div><dt className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">Phone</dt><dd className="mt-1"><a className="text-navy-deep hover:text-palm" href={tel(phone)}>{phone}</a></dd></div>
                <div><dt className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">Fax</dt><dd className="mt-1 text-navy-deep">{fax}</dd></div>
                <div className="sm:col-span-2"><dt className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">Email</dt><dd className="mt-1"><a className="break-all text-navy-deep hover:text-palm" href={`mailto:${email}`}>{email}</a></dd></div>
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={bookingUrl} target="_blank" rel="noopener" className="rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-navy-deep">Book appointment</a>
                <a href={directions} target="_blank" rel="noopener" className={btnGhostLight}>Get directions</a>
                <a href={tel(phone)} className={btnGhostLight}>Call now</a>
              </div>
            </motion.div>

            <motion.div {...fade(0.08)} className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-navy/10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">Opening hours</p>
                {now && (
                  <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] ${isOpen ? 'bg-palm text-white' : 'bg-navy/10 text-navy'}`}>
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${isOpen ? 'bg-white' : 'bg-navy/50'}`} />
                    {isOpen ? `Open now · until ${today!.close}` : 'Closed right now'}
                  </span>
                )}
              </div>
              <ul className="mt-4 divide-y divide-navy/10">
                {hours.map((h) => {
                  const isToday = now?.day === h.day;
                  return (
                    <li key={h.day} aria-current={isToday ? 'date' : undefined} className={`flex items-center justify-between gap-4 px-3 py-3 text-[17px] ${isToday ? 'rounded-lg bg-palm-soft' : ''}`}>
                      <span className="flex items-center gap-3 text-navy-deep">
                        {h.day}
                        {isToday && <span className="rounded-full bg-palm px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">Today</span>}
                      </span>
                      <span className={h.open ? 'text-navy-deep' : 'text-slate'}>{h.open ? `${h.open} – ${h.close}` : 'Closed'}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-[14px] text-slate">Times are Pacific Time. Call us for holiday hours.</p>
            </motion.div>
          </div>

          <motion.div {...fade(0.12)} className="min-h-[420px] overflow-hidden rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10">
            <iframe title={`Map of our ${city} office`} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[420px] w-full rounded-xl border-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services offered here (every item is a button) ---------- */
export function LocServices({ city, count, groups }: { city: string; count: number; groups: { title: string; href: string; items: { label: string; href: string }[] }[] }) {
  const fade = useFade();
  return (
    <section id="services" className="scroll-mt-28 bg-white py-20 lg:py-28" aria-label="Services offered here">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow="Services offered here" title={`${count} treatments in ${city}.`} accent={city} text="Tap any treatment to read how it works, who it helps and what to expect." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div key={g.title} {...fade((i % 3) * 0.08)} className="flex flex-col rounded-xl bg-mist p-6 ring-1 ring-navy/10">
              <a href={g.href} className="group flex items-center justify-between gap-3 font-display text-[26px] leading-tight text-navy-deep transition-colors hover:text-palm">
                {g.title}<span aria-hidden="true" className="text-[18px] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} className="inline-flex rounded-full border border-navy/25 bg-white px-4 py-2 text-[14px] font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-palm hover:bg-palm hover:text-white hover:shadow-md">{it.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Other offices ---------- */
export function LocOthers({ offices }: { offices: { slug: string; city: string; street: string; cityLine: string; image: string; position: string }[] }) {
  const fade = useFade();
  return (
    <section className="bg-palm-soft py-20 lg:py-28" aria-label="Other offices">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Head eyebrow="Other offices" title="Also close to you." accent="close to you." text="Every office offers the same caring, non-surgical approach." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {offices.map((c, i) => (
            <motion.li key={c.slug} {...fade(i * 0.08)}>
              <a href={`/locations/${c.slug}`} className="group flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:flex-row">
                <img src={c.image} alt={`${c.city} office`} loading="lazy" className="aspect-square w-full rounded-xl object-cover sm:w-[38%]" style={{ objectPosition: c.position }} />
                <span className="flex flex-1 flex-col justify-center px-3 pb-3 sm:pb-0">
                  <span className="font-display text-[28px] leading-tight text-navy-deep transition-colors group-hover:text-palm">{c.city}</span>
                  <span className="mt-2 text-[16px] leading-relaxed text-slate">{c.street}<br />{c.cityLine}</span>
                  <span className="mt-5 inline-flex w-fit rounded-full bg-palm px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-navy-deep">See {c.city} office →</span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
