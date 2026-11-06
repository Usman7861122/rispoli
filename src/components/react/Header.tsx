import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import lettersColor from '../../assets/logo-letters.png';
import lettersWhite from '../../assets/logo-letters-white.png';
import palmLayer from '../../assets/logo-palm.png';

// Astro turns an imported image into an object with a .src link
const url = (img: unknown) => (typeof img === 'string' ? img : (img as { src: string }).src);

interface Child { label: string; href: string; text?: string; image?: string; position?: string }
interface Mega {
  eyebrow: string; title: string; text: string; cta: { label: string; href: string };
  feature?: { title: string; text: string; image: string; position?: string; cta: { label: string; href: string } };
  chips?: { title: string; items: readonly { label: string; href: string }[] };
}
interface Group { title: string; href: string; items: readonly { label: string; href: string }[] }
interface NavItem { label: string; href: string; children?: readonly Child[]; mega?: Mega; groups?: readonly Group[] }
interface Props {
  nav: readonly NavItem[];
  bookingUrl: string;
  phone: string;
  topBar?: { message: string; cta: { label: string; href: string } };
}


/** Split treatment groups into columns with a similar number of lines, keeping each group whole. */
function splitGroups(groups: readonly Group[], cols: number) {
  const weight = (g: Group) => g.items.length + 2;
  const target = groups.reduce((a, g) => a + weight(g), 0) / cols;
  const out: Group[][] = Array.from({ length: cols }, () => []);
  let c = 0, sum = 0;
  for (const g of groups) {
    if (sum >= target * (c + 1) - weight(g) / 2 && c < cols - 1) c++;
    out[c].push(g); sum += weight(g);
  }
  return out;
}

/* Logo intro: the letters appear first, then the palm tree drops in from above and settles on the "I" */
function AnimatedLogo({ solid, small }: { solid: boolean; small: boolean }) {
  const reduce = useReducedMotion();
  return (
    <span className={`relative inline-block shrink-0 transition-[height] duration-300 ${small ? 'h-8' : 'h-10'}`} style={{ aspectRatio: '546 / 231' }}>
      <motion.img
        src={url(solid ? lettersColor : lettersWhite)}
        alt=""
        width={546}
        height={231}
        className="absolute inset-0 h-full w-full"
        initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.img
        src={url(palmLayer)}
        alt=""
        width={546}
        height={231}
        className="absolute inset-0 h-full w-full"
        style={{ transformOrigin: '50% 100%' }}
        initial={reduce ? false : { opacity: 0, y: -90, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 230, damping: 11, mass: 0.9, opacity: { duration: 0.15, delay: 0.8 } }}
      />
    </span>
  );
}

/* Clear over the hero photo, turns white after you scroll */
export default function Header({ nav, bookingUrl, phone, topBar }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [mega, setMega] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const openMega = (l: string) => { clearTimeout(timer.current); setMega(l); };
  const closeMega = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setMega(null), 160); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMega(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || open || mega !== null;
  const tel = `tel:${phone.replace(/[^0-9]/g, '')}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid ? 'bg-white/95 shadow-[0_10px_30px_-20px_rgba(10,27,61,0.45)] backdrop-blur' : 'bg-gradient-to-b from-navy-deep/80 to-transparent'
      }`}
    >
      {topBar && (
        <div className={`hidden overflow-hidden bg-palm text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.18)] transition-[max-height,opacity] duration-300 md:block ${scrolled || open ? 'max-h-0 opacity-0' : 'max-h-11 opacity-100'}`} aria-hidden={scrolled || open}>
          <div className="mx-auto flex h-11 max-w-[1400px] items-center justify-between gap-6 px-6 text-[13px] font-semibold lg:px-12">
            <p className="flex min-w-0 items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span className="truncate">{topBar.message}</span>
              <a href={topBar.cta.href} tabIndex={scrolled || open ? -1 : 0} className="hidden shrink-0 rounded-full border border-white/50 px-3.5 py-1 text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-white hover:text-palm lg:inline-block">{topBar.cta.label}</a>
            </p>
            <div className="flex shrink-0 items-center text-[12px] uppercase tracking-[0.14em]">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" tabIndex={scrolled || open ? -1 : 0} className="whitespace-nowrap pr-5 transition-colors hover:text-palm-soft">Appointment</a>
              <a href={tel} tabIndex={scrolled || open ? -1 : 0} className="flex items-center gap-2 whitespace-nowrap border-l border-white/45 pl-5 transition-colors hover:text-palm-soft">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" /></svg>
                {phone}
              </a>
            </div>
          </div>
        </div>
      )}
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[height] duration-300 lg:px-12 ${scrolled ? 'h-[68px]' : 'h-[88px]'}`}>
        <a href="/" aria-label="Westside Interventional Pain & Physiatry, home" className="flex items-center gap-4">
          <AnimatedLogo solid={solid} small={scrolled} />
          <span aria-hidden="true" className={`h-9 w-px ${solid ? 'bg-navy/20' : 'bg-white/30'}`} />
          <span className="leading-none">
            <span className={`block text-[10px] font-semibold uppercase tracking-[0.34em] ${solid ? 'text-navy' : 'text-white/85'}`}>Westside</span>
            <span className={`mt-1 block font-display text-[15px] sm:text-[18px] ${solid ? 'text-navy' : 'text-white'}`}>Interventional Pain &amp; Physiatry</span>
          </span>
        </a>

        {/* Full menu only from xl (1280px): the logo lockup is long */}
        <nav className="hidden shrink-0 items-center gap-5 xl:flex 2xl:gap-8" aria-label="Main">
          {nav.map((n) => (
            <div key={n.label} className="relative" onMouseEnter={() => (n.mega ? openMega(n.label) : n.children ? openMega(n.label) : setMega(null))} onMouseLeave={closeMega}>
              <a
                href={n.href}
                aria-haspopup={n.children ? 'true' : undefined}
                aria-expanded={n.children ? mega === n.label : undefined}
                onFocus={() => (n.children ? openMega(n.label) : setMega(null))}
                className={`group relative flex items-center gap-1 whitespace-nowrap py-2 text-[15px] font-medium ${solid ? 'text-navy' : 'text-white'}`}
              >
                {n.label}
                {n.children && (
                  <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform duration-300 ${mega === n.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                )}
                <span className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-palm transition-transform duration-300 ease-out ${mega === n.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </a>
              {n.children && !n.mega && mega === n.label && (
                <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                  <ul className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_60px_-25px_rgba(10,27,61,0.55)] ring-1 ring-navy/5">
                    {n.children.map((c) => (
                      <li key={c.href}><a href={c.href} onClick={() => setMega(null)} className="block whitespace-nowrap rounded-xl px-4 py-3 text-[15px] font-medium text-navy transition-colors hover:bg-palm-soft hover:text-palm">{c.label}</a></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <a href={tel} className={`hidden whitespace-nowrap text-[15px] font-semibold 2xl:block ${solid ? 'text-navy' : 'text-white'}`}>{phone}</a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-flex items-center overflow-hidden whitespace-nowrap rounded-full px-6 py-2.5 text-[14px] font-semibold ${solid ? 'bg-navy text-white' : 'bg-white text-navy'}`}
          >
            <span className="absolute inset-0 -translate-x-full bg-palm transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative transition-colors duration-300 group-hover:text-white">Book a visit</span>
          </a>
        </nav>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 transition-transform duration-300 ${solid ? 'bg-navy' : 'bg-white'} ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 transition-transform duration-300 ${solid ? 'bg-navy' : 'bg-white'} ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mega menu panel (desktop) */}
      <AnimatePresence>
        {nav.filter((n) => n.mega && n.label === mega).map((n) => {
          const m = n.mega!;
          const kids = (n.children ?? []).filter((c) => c.href !== n.href || !!c.image);
          const photos = kids.some((c) => c.image);
          return (
            <motion.div
              key={n.label}
              onMouseEnter={() => openMega(n.label)}
              onMouseLeave={closeMega}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-navy/10 bg-white shadow-[0_40px_60px_-30px_rgba(10,27,61,0.45)] xl:block"
            >
              <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-12 py-9">
                {/* Intro */}
                <div className={`${n.groups ? 'col-span-3' : 'col-span-4'} flex flex-col justify-between rounded-2xl bg-navy-deep p-8 text-white`}>
                  <div>
                    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-palm-light"><span className="h-px w-8 bg-palm-light" />{m.eyebrow}</p>
                    <p className="mt-4 font-display text-[1.9rem] leading-[1.1]">{m.title}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/75">{m.text}</p>
                  </div>
                  <a href={m.cta.href} className="group/b relative mt-7 inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-white/40 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
                    <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-palm transition-transform duration-500 group-hover/b:translate-x-0" />
                    <span className="relative">{m.cta.label}</span>
                  </a>
                </div>

                {/* Links */}
                {n.groups ? (
                  <div className="col-span-9">
                    <div className="grid grid-cols-3 gap-x-8">
                      {splitGroups(n.groups, 3).map((col, ci) => (
                        <div key={ci} className="space-y-6">
                          {col.map((g) => (
                            <div key={g.title}>
                              <a href={g.href} onClick={() => setMega(null)} className="group/t flex items-center gap-3 border-b border-navy/10 pb-2.5">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-palm transition-transform duration-300 group-hover/t:scale-150" />
                                <span className="font-display text-[1.25rem] leading-tight text-navy transition-colors group-hover/t:text-palm">{g.title}</span>
                              </a>
                              <ul className="mt-2">
                                {g.items.map((it) => (
                                  <li key={it.href + it.label}>
                                    <a href={it.href} onClick={() => setMega(null)} className="group/i flex items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-[15px] text-slate transition-colors hover:bg-palm-soft hover:text-palm">
                                      <span>{it.label}</span>
                                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/i:translate-x-0 group-hover/i:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    {m.chips && (
                      <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-navy/10 pt-5">
                        <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-palm">{m.chips.title}</span>
                        {m.chips.items.map((c) => (
                          <a key={c.href} href={c.href} onClick={() => setMega(null)} className="rounded-full border border-navy/20 px-4 py-1.5 text-[13px] font-semibold text-navy transition-colors duration-300 hover:border-palm hover:bg-palm hover:text-white">{c.label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : photos ? (
                  <ul className={`col-span-8 grid gap-5 ${kids.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {kids.map((c) => (
                      <li key={c.href}>
                        <a href={c.href} onClick={() => setMega(null)} className="group/c relative block h-full min-h-[260px] overflow-hidden rounded-2xl">
                          <img src={c.image} alt="" loading="lazy" style={{ objectPosition: c.position }} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/c:scale-105" />
                          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                          <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                            <span className="block font-display text-2xl">{c.label}</span>
                            <span className="mt-1 block text-[14px] text-white/80">{c.text}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <ul className={`grid content-start gap-x-6 gap-y-1 ${m.feature ? 'col-span-5' : 'col-span-8'} grid-cols-1 xl:grid-cols-2`}>
                      {kids.map((c) => (
                        <li key={c.href}>
                          <a href={c.href} onClick={() => setMega(null)} className="group/c flex items-start justify-between gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-palm-soft">
                            <span>
                              <span className="block font-display text-[1.2rem] leading-tight text-navy transition-colors group-hover/c:text-palm">{c.label}</span>
                              {c.text && <span className="mt-0.5 block text-[14px] text-slate">{c.text}</span>}
                            </span>
                            <svg viewBox="0 0 24 24" className="mt-1.5 h-4 w-4 shrink-0 -translate-x-1 text-palm opacity-0 transition-all duration-300 group-hover/c:translate-x-0 group-hover/c:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                    {m.feature && (
                      <a href={m.feature.cta.href === 'BOOKING' ? bookingUrl : m.feature.cta.href} target={m.feature.cta.href === 'BOOKING' ? '_blank' : undefined} rel="noopener noreferrer" className="group/f relative col-span-3 block min-h-[300px] overflow-hidden rounded-2xl">
                        <img src={m.feature.image} alt="" loading="lazy" style={{ objectPosition: m.feature.position }} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/f:scale-105" />
                        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-navy-deep/10" />
                        <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                          <span className="block font-display text-2xl leading-tight">{m.feature.title}</span>
                          <span className="mt-2 block text-[14px] text-white/80">{m.feature.text}</span>
                          <span className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors group-hover/f:bg-palm group-hover/f:text-white">{m.feature.cta.label}</span>
                        </span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[88px] h-[calc(100dvh-88px)] overflow-y-auto bg-white xl:hidden"
          >
            <ul className="mx-auto flex max-w-xl flex-col px-6 py-8">
              {nav.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                  className="border-b border-navy/10"
                >
                  {n.children ? (
                    <>
                      <div className="flex items-center justify-between">
                        <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl text-navy">{n.label}</a>
                        <button type="button" aria-expanded={sub === n.label} aria-label={`Show ${n.label} pages`} onClick={() => setSub(sub === n.label ? null : n.label)} className="grid h-10 w-10 place-items-center rounded-full bg-palm-soft text-palm">
                          <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-transform duration-300 ${sub === n.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                      </div>
                      {sub === n.label && (
                        <div className="mb-4 border-l-2 border-palm/30 pl-4">
                          {n.groups?.map((g) => (
                            <div key={g.title} className="mb-3">
                              <a href={g.href} onClick={() => setOpen(false)} className="block pt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">{g.title}</a>
                              <ul>
                                {g.items.map((it) => (
                                  <li key={it.href + it.label}><a href={it.href} onClick={() => setOpen(false)} className="block py-1.5 text-lg text-slate">{it.label}</a></li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {n.groups && n.mega?.chips && <p className="pt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-palm">{n.mega.chips.title}</p>}
                          <ul className="space-y-1">
                            {(n.groups && n.mega?.chips ? n.mega.chips.items : n.children).map((c) => (
                              <li key={c.href + c.label}><a href={c.href} onClick={() => setOpen(false)} className="block py-2 text-lg text-slate">{c.label}</a></li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl text-navy">{n.label}</a>
                  )}
                </motion.li>
              ))}
              <li className="mt-8">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-navy py-4 text-center font-semibold text-white">Book a visit</a>
                <a href={tel} className="mt-3 block text-center text-navy/70">Or call {phone}</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
