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
  locations: ['Marina Del Rey', 'Newport Beach', 'Santa Monica'], // all three confirmed on leiarispolimd.com
  hours: [{ days: 'Mon - Fri', time: '8:00 AM - 5:00 PM' }],
  bookingUrl: 'https://lrnmmedical.com/appointment/', // TODO: confirm new booking link // single source of truth for every Book button
  contactApi: '/api/contact',
  social: { linkedin: '', instagram: '', facebook: '', x: '' }, // old site icons have no real links yet
  // Thin bar above the header (old site shows this notice with an Appointment button and the phone number).
  topBar: {
    message: 'We can see you for your Nerve Conduction / EMG study within two weeks!',
    cta: { label: 'Learn about EMG', href: '/services/emg' },
  },
  // Menu structure copied from leiarispolimd.com (same labels, same URLs). `children` = second layer,
  // `mega` = copy for the large panel on desktop (no `mega` = small dropdown).
  nav: [
    { label: 'Home', href: '/' },
    {
      label: 'Staff Members',
      href: '/meet-the-team',
      mega: {
        eyebrow: 'Staff members',
        title: 'Meet the people who care for you.',
        text: 'Board-certified physicians, a physician assistant and a friendly office team.',
        cta: { label: 'Meet the team', href: '/meet-the-team' },
      },
      children: [
        { label: 'Dr. Rispoli', href: '/dr-rispoli', text: 'Interventional pain & physical medicine', image: '/images/team/rispoli.jpg', position: '50% 20%' },
        { label: 'Meet The Team', href: '/meet-the-team', text: 'Doctors, PA and office staff', image: '/images/about/team.jpg', position: '50% 40%' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      mega: {
        eyebrow: 'Our services',
        title: 'Comprehensive pain management.',
        text: 'Advanced, non-surgical treatments for pain in the spine, joints, nerves and muscles.',
        cta: { label: 'All services', href: '/services' },
        feature: { title: 'Not sure where to start?', text: 'Tell us where it hurts and we will guide you.', image: '/images/services/back-pain.jpg', position: '76% 50%', cta: { label: 'Book appointment', href: 'BOOKING' } },
      },
      children: [
        { label: 'Back Pain', href: '/services/back-pain', text: 'Spine, disc and nerve pain' },
        { label: 'Neck Pain', href: '/services/neck-pain', text: 'Stiffness, strain and nerve symptoms' },
        { label: 'Spinal Stenosis', href: '/services/spinal-stenosis', text: 'Relief from nerve pressure' },
        { label: 'Regenerative Medicine', href: '/services/regenerative-medicine', text: 'PRP and stem cell therapy' },
        { label: 'Joint Pain', href: '/services/joint-pain', text: 'Knee, shoulder and hip care' },
        { label: 'Pelvic Pain', href: '/services/pelvic-pain', text: 'For men and women' },
        { label: 'Spinal Cord Stimulation', href: '/services/spinal-cord-stimulation', text: 'Advanced relief for chronic pain' },
        { label: 'Sports Injury', href: '/services/sports-injury', text: 'Recovery and return to sport' },
        { label: 'Botox', href: '/services/botox', text: 'Spasms, tension and migraine' },
        { label: 'EMG', href: '/services/emg', text: 'Nerve conduction studies' },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
      children: [{ label: 'Testimonials', href: '/testimonials' }],
    },
    {
      label: 'Locations',
      href: '/#locations',
      mega: {
        eyebrow: 'Locations',
        title: 'Three offices on the Westside and in Orange County.',
        text: 'Choose the office that is closest to you.',
        cta: { label: 'See all locations', href: '/#locations' },
      },
      children: [
        { label: 'Santa Monica', href: '/locations/santa-monica', text: '2021 Santa Monica Blvd, Suite 200E', image: '/images/locations/santa-monica.jpg', position: '55% 50%' },
        { label: 'Marina Del Rey', href: '/locations/marina-del-rey', text: '4551 Glencoe Ave, Suite 145', image: '/images/locations/marina-del-rey.jpg', position: '40% 50%' },
        { label: 'Newport Beach', href: '/locations/newport-beach', text: '3501 Jamboree Rd, Suite 1200', image: '/images/locations/newport-beach.jpg', position: '45% 40%' },
      ],
    },
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
