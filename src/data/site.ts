export const site = {
  name: 'Westside Interventional Pain & Physiatry',
  shortName: 'Westside Pain & Physiatry',
  tagline: 'Specialist care for pain, spine, musculoskeletal and sports medicine.',
  description:
    'Interventional pain management and physiatry (rehab medicine). We start with simple, non-surgical care and use advanced treatments only when needed.',
  phone: '310-405-0595',
  fax: '310-997-2766',
  email: 'officemanager@leiarispolimd.com',
  address: { street: '4551 Glencoe Ave, Suite 145', city: 'Marina Del Rey', state: 'CA', zip: '90292' },
  locations: ['Marina Del Rey', 'Newport Beach', 'Santa Monica'],
  hours: [{ days: 'Mon - Fri', time: '8:00 AM - 5:00 PM' }],
  bookingUrl: 'https://lrnmmedical.com/appointment/', // TODO: confirm new booking link // single source of truth for every Book button
  contactApi: '/api/contact',
  social: { linkedin: '', instagram: '', facebook: '' },
  // Thin bar above the header (from the old site): three areas on the left, quick actions on the right.
  topBar: {
    areas: [
      { label: 'Medical', href: '/medical' },
      { label: 'Perform', href: '/perform' },
      { label: 'Recover', href: '/recovery' },
    ],
    waitlist: { label: 'Join Forme Lab waitlist', href: '/forme-lab#waitlist' }, // old site opened a popup form
  },
  // Menu structure. `children` = second layer; `mega` = copy for the big panel on desktop.
  nav: [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      mega: {
        eyebrow: 'About us',
        title: 'Meet the doctors who treat you.',
        text: 'Board-certified specialists in pain medicine and rehab, focused on safe, non-surgical care.',
        cta: { label: 'About our practice', href: '/about' },
      },
      children: [
        { label: 'Dr. Leia Rispoli', href: '/about/dr-rispoli', text: 'Interventional pain & physiatry', image: '/images/team/rispoli.jpg', position: '50% 20%' },
        { label: 'Dr. Natasha Mehta', href: '/about/dr-mehta', text: 'Pain medicine & physiatry', image: '/images/team/mehta.jpg', position: '50% 12%' },
        // TODO: add Hattenbach, Phan, Vlachos when their bios are ready
      ],
    },
    {
      label: 'Services',
      href: '/services',
      mega: {
        eyebrow: 'Our services',
        title: 'Care for pain, injury and recovery.',
        text: 'Every plan starts with simple, non-surgical options and is built around you.',
        cta: { label: 'View More Services', href: '/services' },
        feature: { title: 'Not sure where to start?', text: 'Tell us where it hurts and we will guide you.', image: '/images/services/back-pain.jpg', position: '76% 50%', cta: { label: 'Book a visit', href: 'BOOKING' } },
      },
      children: [
        { label: 'Back Pain', href: '/services/back-pain', text: 'Spine, disc and nerve pain' },
        { label: 'Neck Pain', href: '/services/neck-pain', text: 'Stiffness, strain and headaches' },
        { label: 'Spinal Cord Stimulation', href: '/services/spinal-cord-stimulation', text: 'Advanced relief for long-term pain' },
        { label: 'Regenerative Medicine', href: '/services/regenerative-medicine', text: 'PRP and healing-based treatments' },
        { label: 'Joint Pain', href: '/services/joint-pain', text: 'Knee, hip and shoulder care' },
        { label: 'Concussion', href: '/services/concussion', text: 'Evaluation and recovery plans' },
        { label: 'View More Services', href: '/services' },
      ],
    },
    { label: 'The Forme Lab', href: '/forme-lab' }, // old: /movement-longevity-lab/ (keep a 301 redirect)
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
  homeSections: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'why', label: 'Why us' },
    { id: 'legacy', label: 'Legacy' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'press', label: 'In the news' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ],
  testimonials: [{ name: 'Patient name', text: 'Placeholder review text.', rating: 5 }],
  posts: [
    {
      slug: 'what-is-physiatry',
      title: 'What is physiatry? A simple guide',
      excerpt: 'Placeholder excerpt in easy words.',
      date: '2026-10-01',
      readTime: '4 min',
      category: 'Education',
      image: '/images/placeholder.jpg',
      href: '/blog/what-is-physiatry',
    },
  ],
} as const;
