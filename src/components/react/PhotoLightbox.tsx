import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
interface Props {
  photos: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onStep: (d: number) => void;
}

/** Full-screen photo viewer. Esc closes, arrow keys move. Rendered on <body> so it sits above the header. */
export default function PhotoLightbox({ photos, index, onClose, onStep }: Props) {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [index, onClose, onStep]);

  if (typeof document === 'undefined') return null;
  return createPortal(
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog" aria-modal="true" aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 sm:p-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.img
            key={index}
            src={photos[index].src}
            alt={photos[index].alt}
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-deep transition-colors hover:bg-palm hover:text-white sm:right-8 sm:top-8">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          {(['prev', 'next'] as const).map((d) => (
            <button
              key={d} type="button" aria-label={d === 'prev' ? 'Previous photo' : 'Next photo'}
              onClick={(e) => { e.stopPropagation(); onStep(d === 'prev' ? -1 : 1); }}
              className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-deep transition-colors hover:bg-palm hover:text-white sm:h-14 sm:w-14 ${d === 'prev' ? 'left-3 sm:left-8' : 'right-3 sm:right-8'}`}
            >
              <svg viewBox="0 0 24 24" className={`h-5 w-5 ${d === 'prev' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
