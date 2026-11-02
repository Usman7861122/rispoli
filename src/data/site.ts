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
  contactApi: '', // TODO: paste a form service URL (Formspree, Basin, etc.). Empty = the form opens the visitor's email app.
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
        { label: 'Dr. Mehta', href: '/dr-mehta', text: 'PM&R & traumatic brain injury', image: '/images/team/mehta-hero.jpg', position: '50% 20%' },
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
        // "Browse by condition" buttons under the treatment groups
        chips: {
          title: 'Browse by condition',
          items: [
            { label: 'Back Pain', href: '/services/back-pain' },
            { label: 'Neck Pain', href: '/services/neck-pain' },
            { label: 'Spinal Stenosis', href: '/services/spinal-stenosis' },
            { label: 'Joint Pain', href: '/services/joint-pain' },
            { label: 'Pelvic Pain', href: '/services/pelvic-pain' },
            { label: 'Sports Injury', href: '/services/sports-injury' },
            { label: 'EMG', href: '/services/emg' },
          ],
        },
      },
      // Treatments from the three location pages, merged and grouped. Each treatment appears once.
      groups: [
        {
          title: 'Spine injections', href: '/services/spine-injections',
          items: [
            { label: 'Epidural steroid injections', href: '/services/epidural-steroid-injections' },
            { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
            { label: 'SI joint injections', href: '/services/si-joint-injections' },
            { label: 'Intracept procedure', href: '/services/intracept-procedure' },
          ],
        },
        {
          title: 'Nerve stimulation', href: '/services/nerve-stimulation',
          items: [
            { label: 'Spinal cord stimulator', href: '/services/spinal-cord-stimulation' },
            { label: 'Peripheral nerve stimulator', href: '/services/peripheral-nerve-stimulator' },
          ],
        },
        {
          title: 'Pelvic care & more', href: '/services/pelvic-care',
          items: [
            { label: 'Pelvic floor injections', href: '/services/pelvic-floor-injections' },
            { label: 'Medical acupuncture', href: '/services/medical-acupuncture' },
          ],
        },
        {
          title: 'Nerve blocks & ablation', href: '/services/nerve-blocks-and-ablation',
          items: [
            { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
            { label: 'Genicular nerve block / RFA', href: '/services/genicular-nerve-block' },
            { label: 'Occipital nerve block', href: '/services/occipital-nerve-block' },
            { label: 'Sympathetic blocks', href: '/services/sympathetic-blocks' },
            { label: 'Nerve blocks', href: '/services/nerve-blocks' },
            { label: 'Nerve hydrodissection', href: '/services/nerve-hydrodissection' },
          ],
        },
        {
          title: 'Botox', href: '/services/botox',
          items: [
            { label: 'Botox for pain', href: '/services/botox-for-pain' },
            { label: 'Botox for migraine & spasms', href: '/services/botox-migraine-spasms' },
          ],
        },
        {
          title: 'Regenerative medicine', href: '/services/regenerative-medicine',
          items: [
            { label: 'PRP (platelet-rich plasma)', href: '/services/prp' },
            { label: 'BMAC (bone marrow)', href: '/services/bmac' },
            { label: 'A2M (alpha-2-macroglobulin)', href: '/services/a2m' },
            { label: 'Hyaluronic acid', href: '/services/hyaluronic-acid' },
          ],
        },
        {
          title: 'Joint & soft tissue', href: '/services/joint-and-soft-tissue',
          items: [
            { label: 'Joint injections', href: '/services/joint-injections' },
            { label: 'Bursa injections', href: '/services/bursa-injections' },
            { label: 'Tendon injections', href: '/services/tendon-injections' },
            { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
          ],
        },
      ],
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
