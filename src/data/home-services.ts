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
    { slug: 'spinal-stenosis', title: 'Spinal Stenosis', text: 'Specialized care to relieve nerve compression, improve spinal function, and enhance mobility.', image: '/images/services/spinal-stenosis.jpg', imageAlt: 'Person with lower back pain, spine area highlighted', position: '30% 50%' }, // TODO: replace with a spinal stenosis photo
    { slug: 'regenerative-medicine', title: 'Regenerative Medicine', text: 'Cutting-edge treatments like PRP and stem cell therapy to promote natural healing and tissue repair.', image: '/images/services/regenerative-medicine.jpg', imageAlt: 'Gloved hand giving a small injection', position: '60% 40%' }, // TODO: replace with a regenerative medicine photo
    { slug: 'joint-pain', title: 'Joint Pain', text: 'Expert solutions to reduce inflammation, restore flexibility, and enhance joint movement without surgery.', image: '/images/services/joint-pain.jpg', imageAlt: 'Woman holding her painful knee', position: '50% 55%' },
    { slug: 'pelvic-pain', title: 'Pelvic Pain', text: 'Dr. Leia Rispoli offers advanced, non-surgical treatments for complex pelvic pain in men and women.', image: '/images/services/pelvic-pain.jpg', imageAlt: 'Person holding their lower belly with the painful area highlighted', position: '50% 40%' },
    { slug: 'spinal-cord-stimulation', title: 'Spinal Cord Stimulation', text: 'An advanced option for chronic pain that has not eased, using gentle electrical pulses to calm nerve pain.', image: '/images/services/spinal-cord-stimulation.jpg', imageAlt: 'Person with back pain, spine area highlighted', position: '50% 40%' }, // TODO: replace with a spinal cord stimulation photo
  ] as HomeService[],
};
