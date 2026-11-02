// Services shown on the homepage. Words copied from leiarispolimd.com.
export interface HomeService {
  slug: string; title: string; text: string; image: string; imageAlt: string; position: string;
}

export const homeServices = {
  eyebrow: 'Our services',
  title: 'Comprehensive pain management.',
  accent: 'Comprehensive',
  intro: 'Advanced, non-surgical treatments for pain in the spine, joints, nerves and muscles, built around personalized care.',
  cta: { label: 'View More Services', href: '/services' },
  band: { title: 'Not sure which care is right for you?', text: 'Tell us where it hurts. Our doctors will help you choose the right next step.' },
  items: [
    { slug: 'back-pain', title: 'Back Pain', text: 'Comprehensive, non-surgical treatments to relieve and manage chronic or acute back pain effectively.', image: '/images/services/back-pain.jpg', imageAlt: 'Athlete seen from behind holding her lower back, with the painful area glowing red', position: '76% 50%' },
    { slug: 'neck-pain', title: 'Neck Pain', text: 'Advanced therapies designed to restore mobility, reduce stiffness, and alleviate persistent neck pain.', image: '/images/services/neck-pain.jpg', imageAlt: 'Woman holding her head and neck in pain', position: '60% 30%' }, // TODO: replace with a neck pain photo
    { slug: 'spinal-stenosis', title: 'Spinal Stenosis', text: 'Specialized care to relieve nerve compression, improve spinal function, and enhance mobility.', image: '/images/services/spinal-stenosis.jpg', imageAlt: 'Man seen from behind holding his lower back in pain', position: '55% 60%' }, // TODO: replace with a spinal stenosis photo
    { slug: 'joint-pain', title: 'Joint Pain', text: 'Expert solutions to reduce inflammation, restore flexibility, and enhance joint movement without surgery.', image: '/images/services/joint-pain.jpg', imageAlt: 'Woman holding her painful knee', position: '50% 55%' },
    { slug: 'pelvic-pain', title: 'Pelvic Pain', text: 'Dr. Leia Rispoli offers advanced, non-surgical treatments for complex pelvic pain in men and women.', image: '/images/services/pelvic-pain.jpg', imageAlt: 'Woman sitting on a bed holding her lower belly in pain', position: '68% 50%' },
  ] as HomeService[],
};
