import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cookieCategories, CONSENT_KEY, CONSENT_EVENT, OPEN_EVENT, CONSENT_DAYS, type ConsentKey } from '../../data/cookies';

type Choices = Record<ConsentKey, boolean>;
const off: Choices = { necessary: true, preferences: false, analytics: false, marketing: false };
const on: Choices = { necessary: true, preferences: true, analytics: true, marketing: true };

function read(): Choices | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    if (Date.now() > v.expires) return null;
    return { ...off, ...v.choices, necessary: true };
  } catch { return null; }
}

function save(choices: Choices) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choices, expires: Date.now() + CONSENT_DAYS * 864e5, savedAt: new Date().toISOString() }));
  } catch { /* storage blocked: the choice lasts for this page only */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choices }));
}

const btnSolid = 'inline-flex items-center justify-center rounded-full bg-palm px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-palm-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
const btnLine = 'inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

function Switch({ checked, disabled, onChange, label }: { checked: boolean; disabled?: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palm-soft ${checked ? 'bg-palm' : 'bg-white/25'} ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
    >
      <span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${checked ? 'left-7' : 'left-1'}`} />
    </button>
  );
}

export default function CookieConsent({ policyHref = '/cookie-policy' }: { policyHref?: string }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [choices, setChoices] = useState<Choices>(off);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const saved = read();
    if (saved) setChoices(saved); else setBanner(true);
    setReady(true);
    const open = () => {
      lastFocus.current = document.activeElement as HTMLElement;
      setChoices(read() ?? off); setBanner(false); setPanel(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const close = useCallback(() => { setPanel(false); lastFocus.current?.focus?.(); }, []);
  const commit = (c: Choices) => { save(c); setChoices(c); setBanner(false); setPanel(false); };

  // Keep keyboard focus inside the panel and let Escape close it.
  useEffect(() => {
    if (!panel) return;
    const el = panelRef.current;
    el?.querySelector<HTMLElement>('button')?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); if (!read()) setBanner(true); }
      if (e.key !== 'Tab' || !el) return;
      const f = [...el.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]')];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [panel, close]);

  if (!ready) return null;
  const t = reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <AnimatePresence>
        {banner && !panel && (
          <motion.div
            key="banner" role="region" aria-label="Cookie notice"
            initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={t}
            className="fixed inset-x-3 bottom-[68px] z-[70] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-navy-deep p-6 text-white shadow-2xl md:bottom-5 md:inset-x-auto md:left-5 md:mx-0 md:max-w-[460px]"
          >
            <p className="font-display text-2xl">Your cookie choices</p>
            <p className="mt-2 text-[16px] leading-relaxed text-white/80">
              We use a few cookies to run this site. With your yes, we also use some to learn how the site is used. You choose.{' '}
              <a href={policyHref} className="underline underline-offset-4 hover:text-palm-soft">Read our Cookie Policy</a>.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" className={btnSolid} onClick={() => commit(on)}>Accept all</button>
              <button type="button" className={btnLine} onClick={() => commit(off)}>Only necessary</button>
              <button type="button" className={btnLine} onClick={() => { lastFocus.current = document.activeElement as HTMLElement; setBanner(false); setPanel(true); }}>Customize</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panel && (
          <motion.div key="overlay" className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-5"
            initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={t}
            onMouseDown={(e) => { if (e.target === e.currentTarget) { close(); if (!read()) setBanner(true); } }}>
            <motion.div
              ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="cc-title"
              initial={reduce ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={t}
              className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-navy-deep text-white shadow-2xl sm:rounded-3xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/15 px-6 py-5 sm:px-8">
                <div>
                  <h2 id="cc-title" className="font-display text-3xl">Cookie settings</h2>
                  <p className="mt-1 text-[16px] text-white/75">Pick what you are happy with. You can change this any time from the footer.</p>
                </div>
                <button type="button" onClick={() => { close(); if (!read()) setBanner(true); }} aria-label="Close cookie settings"
                  className="rounded-full border border-white/30 p-2 hover:bg-white hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-palm-soft">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
              </div>

              <ul className="space-y-3 overflow-y-auto px-6 py-5 sm:px-8">
                {cookieCategories.map((c) => (
                  <li key={c.key} className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[18px] font-semibold">{c.title}</p>
                        {c.always && <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-palm-soft">Always on</p>}
                      </div>
                      <Switch label={`${c.title} cookies`} checked={choices[c.key]} disabled={c.always} onChange={(v) => setChoices((p) => ({ ...p, [c.key]: v }))} />
                    </div>
                    <p className="mt-2 text-[16px] leading-relaxed text-white/75">{c.text}</p>
                    <p className="mt-2 text-[14px] text-white/55">Examples: {c.examples}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 border-t border-white/15 px-6 py-5 sm:px-8">
                <button type="button" className={btnSolid} onClick={() => commit(choices)}>Save my choices</button>
                <button type="button" className={btnLine} onClick={() => commit(on)}>Accept all</button>
                <button type="button" className={btnLine} onClick={() => commit(off)}>Only necessary</button>
                <a href={policyHref} className="ml-auto self-center text-[14px] text-white/70 underline underline-offset-4 hover:text-white">Cookie Policy</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
