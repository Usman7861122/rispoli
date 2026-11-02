import { motion, useReducedMotion } from 'framer-motion';
import PalmWatermark from './PalmWatermark';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  data: { eyebrow: string; name: string; accent: string; lede: string; chips: string[] };
  photo: { src: string; alt: string; position: string };
  bookingUrl: string;
  phone: string;
}

export default function DrHero({ data, photo, bookingUrl, phone }: Props) {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });
  const words = data.name.split(' ');

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_40%,rgba(45,97,51,0.35),transparent_70%)]" />
      <PalmWatermark className="-left-24 bottom-0 h-[520px] w-[520px]" color="bg-white/[0.04]" side={-1} />

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-52">
        <div>
          <motion.p {...fade(0)} className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.26em] text-palm-soft">
            <span className="h-px w-12 bg-palm-soft/70" />{data.eyebrow}
          </motion.p>
          <motion.h1 {...fade(0.08)} className="mt-6 font-display text-[clamp(3rem,7vw,6.2rem)] leading-[1.02]">
            {words.map((w, i) => (
              <span key={i} className={w === data.accent ? 'italic text-palm-soft' : ''}>{w} </span>
            ))}
          </motion.h1>
          <motion.p {...fade(0.16)} className="mt-6 max-w-[46ch] text-[20px] leading-relaxed text-white/85">{data.lede}</motion.p>

          <motion.ul {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
            {data.chips.map((c) => (
              <li key={c} className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90">{c}</li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.32)} className="mt-10 flex flex-wrap gap-4">
            <a href={bookingUrl} target="_blank" rel="noopener" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-palm px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white">
              <span aria-hidden="true" className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative transition-colors duration-500 group-hover:text-navy">Book appointment</span>
            </a>
            <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-navy">
              Call {phone}
            </a>
          </motion.div>
        </div>

        <motion.figure
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-palm" />
          <img src={photo.src} alt={photo.alt} className="relative aspect-square w-full rounded-xl object-cover" style={{ objectPosition: photo.position }} />
        </motion.figure>
      </div>
    </section>
  );
}
