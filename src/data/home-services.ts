// 5 services shown on the homepage. Words adapted from lrnmmedical.com/services.
export interface HomeService {
  slug: string; title: string; text: string; image: string; imageAlt: string; position: string;
}

export const homeServices = {
  eyebrow: 'Our services',
  title: 'Expert care for pain, injury and recovery.',
  accent: 'recovery.',
  intro: 'From the first visit to long-term recovery, every plan starts with non-surgical options and is built around you.',
  cta: { label: 'View all services', href: '/services' },
  band: { title: 'Not sure which care is right for you?', text: 'Tell us where it hurts. Our doctors will help you choose the right next step.' },
  items: [
    { slug: 'back-pain', title: 'Back Pain', text: 'Pain from injury or irritation in the spine, discs or nerves. We find the source and treat it.', image: '/images/services/back-pain.jpg', imageAlt: "Athlete seen from behind holding her lower back, with the painful area glowing red", position: '76% 50%' },
    { slug: 'pelvic-pain', title: 'Pelvic Pain', text: 'Pain in the lower belly, hip or buttocks that affects men and women. We look for the cause and treat it with care.', image: '/images/services/pelvic-pain.jpg', imageAlt: "Person holding their lower belly with the painful area highlighted", position: '50% 40%' },
    { slug: 'botox', title: 'Botox', text: 'A medicine that relaxes overactive muscles to ease spasms, tension and certain types of headache.', image: '/images/services/botox.jpg', imageAlt: "Gloved hand giving a small injection near a patient’s forehead", position: '60% 40%' },
    { slug: 'joint-pain', title: 'Joint Pain', text: 'Treatment for knee, hip and shoulder pain, from physical therapy and injections to advanced options like PRP.', image: '/images/services/joint-pain.jpg', imageAlt: "Woman holding her painful knee", position: '50% 55%' },
    { slug: 'concussion', title: 'Concussion', text: 'Expert evaluation and a clear recovery plan for head injuries from sport, falls or accidents.', image: '/images/services/concussion.jpg', imageAlt: "Woman holding her head in pain", position: '60% 30%' },
  ] as HomeService[],
};
