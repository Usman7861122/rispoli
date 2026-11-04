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
    eyebrow: 'Leia Rispoli, MD',
    title: 'Compassionate pain relief, without surgery.',
    accent: 'Compassionate',
    text: 'A double board-certified specialist in interventional pain medicine, offering advanced, non-surgical treatments for acute and chronic pain.',
    image: '/images/hero/leia.jpg',
    imageAlt: 'Dr. Leia Rispoli smiling in a light blue coat',
    position: '50% 18%',
    cta: { label: 'Meet Dr. Rispoli', href: '/dr-rispoli' },
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
    cta: { label: 'Find a location', href: '/#locations' },
  },
];
