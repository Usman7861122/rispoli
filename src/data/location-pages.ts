// Data for /locations/<city>. Built from locations.ts (address, nearby, providers), site.ts (phone, fax, email, services menu) and team.ts.
// TO CONFIRM with the practice: hours per office, which services each office offers (now: all), and which providers work at each office.
import { locations } from './locations';
import { team } from './team';
import { site } from './site';
import { hub } from './spine-injections';

export const hours = [
  { day: 'Monday', open: '8:00 AM', close: '5:00 PM', from: 480, to: 1020 },
  { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM', from: 480, to: 1020 },
  { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM', from: 480, to: 1020 },
  { day: 'Thursday', open: '8:00 AM', close: '5:00 PM', from: 480, to: 1020 },
  { day: 'Friday', open: '8:00 AM', close: '5:00 PM', from: 480, to: 1020 },
  { day: 'Saturday', open: '', close: '', from: 0, to: 0 },
  { day: 'Sunday', open: '', close: '', from: 0, to: 0 },
];

// Services that already have their own page with a city version.
const withCityVersion = new Set(hub.pages.map((p: any) => p.slug));
const everyone = [...team.lead, ...team.peers];

const nav: any = (site.nav as unknown as any[]).find((n) => n.label === 'Services');
const groups: { title: string; href: string; items: { label: string; href: string }[] }[] = nav.groups;

export function locationPage(slug: string) {
  const o: any = locations.offices.find((x) => x.slug === slug);
  if (!o) throw new Error(`Unknown office: ${slug}`);

  const serviceGroups = groups.map((g) => ({
    title: g.title,
    href: g.href,
    items: g.items.map((it) => {
      const s = it.href.replace('/services/', '');
      return { label: it.label, href: withCityVersion.has(s) ? `${it.href}/${slug}` : it.href };
    }),
  }));
  const serviceCount = serviceGroups.reduce((n, g) => n + g.items.length, 0);

  const doctors = o.providers
    .map((p: any) => everyone.find((t) => t.name === p.name))
    .filter(Boolean)
    .map((t: any) => ({
      slug: t.slug, name: t.name, role: t.role, image: t.image, position: t.position, alt: t.imageAlt, href: t.href,
      line: t.focus ?? (t.bio ? t.bio[0].split('. ')[0] + '.' : ''),
    }));

  const area = o.nearby.length > 1 ? `${o.nearby.slice(0, -1).join(', ')} and ${o.nearby[o.nearby.length - 1]}` : o.nearby[0];

  return {
    office: o,
    seoTitle: `${o.city} Office`,
    seoDescription: `Westside Interventional Pain & Physiatry in ${o.city}, ${o.cityLine.split(', ')[1]}. Address, hours, phone, services and doctors.`,
    hero: {
      eyebrow: 'Our locations',
      name: `${o.city} Office`,
      accent: o.city,
      pill: true,
      lede: o.blurb,
      chips: ['Mon – Fri, 8–5', 'Non-surgical care', 'Advanced procedures'],
      nearbyNote: `Patients are welcome from across ${area} and the surrounding area.`,
    },
    photo: { src: o.image, fallback: '/images/services/back-pain.jpg', alt: `${o.city} office building`, position: o.position },
    contact: { phone: site.phone, fax: site.fax, email: site.email },
    directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.street}, ${o.cityLine}`)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(`${o.street}, ${o.cityLine}`)}&output=embed`,
    serviceGroups,
    serviceCount,
    doctors,
    others: locations.offices.filter((x) => x.slug !== slug).map((x: any) => ({
      slug: x.slug, city: x.city, street: x.street, cityLine: x.cityLine, image: x.image, position: x.position,
    })),
  };
}
