export interface HeroSlide {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  accent: string; // one word shown in italic green
  text: string;
  image: string;
  imageAlt: string;
  position: string; // CSS object-position
  kind: 'portrait' | 'team';
  cta: { label: string; href: string };
}


export const heroSlides: HeroSlide[] = [
  {
    id: 'rispoli',
    tab: 'Dr. Rispoli',
    kind: 'portrait',
    eyebrow: 'Interventional Pain Medicine',
    title: 'Relief that starts without surgery.',
    accent: 'without',
    text: 'Leia Rispoli, MD is double board-certified in Physical Medicine & Rehabilitation and Interventional Pain Medicine.',
    image: '/images/hero/leia.jpg',
    imageAlt: 'Dr. Leia Rispoli smiling in a light blue coat',
    position: '50% 18%',
    cta: { label: 'Meet Dr. Rispoli', href: '/about' },
  },
  {
    id: 'mehta',
    tab: 'Dr. Mehta',
    kind: 'portrait',
    eyebrow: 'Physiatry & Brain Injury Medicine',
    title: 'Rebuild strength. Move well again.',
    accent: 'Move',
    text: 'Natasha Mehta, MD is double board-certified in Physical Medicine & Rehabilitation and Brain Injury Medicine, with Lifestyle Medicine certification.',
    image: '/images/hero/natasha.jpg',
    imageAlt: 'Dr. Natasha Mehta smiling in a white coat',
    position: '50% 15%',
    cta: { label: 'Meet Dr. Mehta', href: '/about' },
  },
  {
    id: 'team',
    tab: 'Our team',
    kind: 'team',
    eyebrow: 'Westside Interventional Pain & Physiatry',
    title: 'One caring team, close to home.',
    accent: 'caring',
    text: 'Visit us in Marina Del Rey, Newport Beach or Santa Monica.',
    image: '/images/hero/team.jpg',
    imageAlt: 'The Westside Interventional Pain & Physiatry team seated together outdoors',
    position: '60% 40%',
    cta: { label: 'Find a location', href: '/contact' },
  },
];
