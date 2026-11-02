// Builds the city version of a service page from the general content + one office.
// Reused by every service. Pass the service data (like `esi`) and an office from locations.ts.
import type { Office } from './locations';

interface ServiceLike {
  topic: string;
  seoTitle: string;
  hero: { eyebrow: string; name: string; accent: string; lede: string; chips: string[] };
  faqs: { q: string; a: string }[];
}

export function localize<T extends ServiceLike>(s: T, o: Office, treatingNames: string[]) {
  const here = o.providers.map((p) => p.name).filter((n) => treatingNames.includes(n));
  // "Jacob Hattenbach, DO" -> "Dr. Jacob Hattenbach" so names can be joined in a sentence.
  const doc = (n: string) => `Dr. ${n.split(',')[0]}`;
  const list = (a: string[]) => (a.length > 1 ? `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}` : a[0] ?? '');
  const who = here.length ? list(here.map(doc)) : 'Our team';
  const verb = here.length > 1 ? 'see' : 'sees';
  const nearby = list(o.nearby.slice(0, 4));
  return {
    seoTitle: `${s.seoTitle} in ${o.city}`,
    seoDescription: `${s.seoTitle} at our ${o.city} office, ${o.street}. Non-surgical, image-guided spine pain care for patients in ${o.city} and nearby ${o.nearby.slice(0, 3).join(', ')}.`,
    hero: {
      ...s.hero,
      eyebrow: `${s.hero.eyebrow} · ${o.city}`,
      name: `${s.hero.name} in ${o.city}`,
      accent: `in ${o.city}`,
      lede: `${s.hero.lede} Offered at our ${o.city} office.`,
      chips: [`${o.city} office`, ...s.hero.chips.slice(0, 3)],
    },
    localNote: {
      city: o.city,
      title: `${s.hero.name} in ${o.city}`,
      text: `Our ${o.city} office is at ${o.street}, ${o.cityLine}. ${who} ${verb} patients here for ${s.topic}. Many people also come to us from ${nearby}.`,
      areas: o.nearby,
    },
    faqs: [
      ...s.faqs,
      { q: `Where can I get ${s.topic} in ${o.city}?`, a: `Visit our ${o.city} office at ${o.street}, ${o.cityLine}. Book online or call us and we will find a time that suits you.` },
    ],
    treatingHere: here,
  };
}
