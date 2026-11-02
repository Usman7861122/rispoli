// /meet-the-team. Names and titles come from leiarispolimd.com/meet-the-team.
export const meetTeam = {
  seoTitle: 'Meet the Team',
  seoDescription: 'Meet the physicians, physician assistant and office team at Westside Interventional Pain & Physiatry, serving Santa Monica, Marina Del Rey and Newport Beach.',

  hero: {
    eyebrow: 'Our staff members',
    title: 'Meet the people who care for you.',
    accent: 'care',
    lede: 'Board-certified physicians, a physician assistant and a friendly office team. Everyone here works together on one goal: helping you feel better.',
    photo: { src: '/images/meet/team-group.jpg', alt: 'The five providers of Westside Interventional Pain & Physiatry standing together in white coats', position: '50% 40%' },
    chips: ['5 providers', '3 offices', 'One care team'],
  },

  providers: {
    eyebrow: 'Our providers',
    title: 'Physicians and physician assistant.',
    accent: 'Physicians',
    intro: 'Each provider brings their own training. You get the full team behind your plan.',
    items: [
      { slug: 'dr-rispoli', name: 'Leia Rispoli, MD', role: 'Interventional Pain & Physical Medicine', line: 'Double board-certified interventional pain medicine physician.', image: '/images/rispoli/hero.jpg', position: '50% 24%', alt: 'Dr. Leia Rispoli in blue scrubs' },
      { slug: 'dr-mehta', name: 'Natasha Mehta, MD', role: 'Associate Physician', line: 'Double board-certified in physical medicine and rehabilitation and traumatic brain injury.', image: '/images/team/mehta-hero.jpg', position: '50% 22%', alt: 'Dr. Natasha Mehta in blue scrubs' },
      { slug: 'dr-hattenbach', name: 'Jacob Hattenbach, DO', role: 'Doctor of Osteopathic Medicine', line: 'Board-certified in PM&R. Fellowship-trained in interventional spine and musculoskeletal medicine.', image: '/images/team/hattenbach-hero.jpg', position: '50% 22%', alt: 'Dr. Jacob Hattenbach in navy scrubs' },
      { slug: 'dr-vlachos', name: 'Katrina Vlachos, MD', role: 'Physical Medicine & Rehabilitation', line: 'Board-certified in physical medicine and rehabilitation.', image: '/images/team/vlachos-hero.jpg', position: '50% 24%', alt: 'Dr. Katrina Vlachos in her white coat' },
      { slug: 'jamie-phan', name: 'Jamie Phan, PA-C', role: 'Physician Assistant', line: 'Certified physician assistant on the care team.', image: '/images/team/phan-hero.jpg', position: '50% 22%', alt: 'Jamie Phan, PA-C, in navy scrubs' },
    ],
  },

  office: {
    eyebrow: 'Our office team',
    title: 'The friendly faces behind the scenes.',
    accent: 'friendly',
    intro: 'From your first call to your last follow-up, these are the people who keep your visit running smoothly.',
    featured: [
      { name: 'Britney Castillo', role: 'Head Medical Assistant / Lead Back Office', image: '/images/meet/britney.jpg', position: '50% 22%', alt: 'Britney Castillo in pink scrubs, smiling' },
      { name: 'Kim Mendieta', role: 'Medical Assistant', image: '/images/meet/kim.jpg', position: '50% 22%', alt: 'Kim Mendieta in pink scrubs, smiling' },
    ],
    others: [
      { name: 'Joana Queen Borres', role: 'Office Manager' },
      { name: 'Kylie Meng-Lin', role: 'Medical Assistant / Office Support' },
      { name: 'Gleona (Gem) Marie Sopelario', role: 'Back Office Support' },
      { name: 'Shayne Datanagan', role: 'Back Office Support' },
      { name: 'Arlene Duenos', role: 'Front Office Support' },
      { name: 'Blesshe Alpino', role: 'Front Office Support' },
    ],
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'A look at our team.',
    accent: 'team.',
    intro: 'Tap a photo to see it larger.',
    // size: 'big' = 2x2, 'wide' = 2x1, default square
    photos: [
      { src: '/images/meet/team-all.jpg', alt: 'Providers and office team sitting together on garden steps', position: '50% 30%', size: 'big' },
      { src: '/images/meet/duo-1.jpg', alt: 'Two members of the care team in blue scrubs, smiling with arms around each other', position: '50% 22%' },
      { src: '/images/meet/britney-2.jpg', alt: 'Britney Castillo smiling in pink scrubs', position: '50% 22%' },
      { src: '/images/meet/kim-2.jpg', alt: 'Kim Mendieta smiling in pink scrubs', position: '50% 22%' },
      { src: '/images/meet/duo-2.jpg', alt: 'Two members of the care team standing together in blue scrubs', position: '50% 22%' },
      { src: '/images/meet/team-group-2.jpg', alt: 'The five providers standing together in front of a green hedge', position: '50% 40%', size: 'wide' },
      { src: '/images/meet/duo-3.jpg', alt: 'Two members of the care team laughing and posing in blue scrubs', position: '50% 22%' },
      { src: '/images/team/mehta-about.jpg', alt: 'Dr. Natasha Mehta in her white coat, smiling', position: '50% 24%' },
    ] as { src: string; alt: string; position: string; size?: 'big' | 'wide' }[],
  },

  // Photos for the 3D scrolling gallery (4 columns, filled in order).
  parallaxPhotos: [
    { src: '/images/meet/team-all.jpg', alt: 'Providers and office team sitting together on garden steps', position: '50% 30%' },
    { src: '/images/meet/duo-1.jpg', alt: 'Two members of the care team in blue scrubs, smiling with arms around each other', position: '50% 22%' },
    { src: '/images/meet/britney-2.jpg', alt: 'Britney Castillo smiling in pink scrubs', position: '50% 22%' },
    { src: '/images/team/mehta-about.jpg', alt: 'Dr. Natasha Mehta in her white coat, smiling', position: '50% 24%' },
    { src: '/images/team/hattenbach-about.jpg', alt: 'Dr. Jacob Hattenbach in his white coat', position: '50% 22%' },
    { src: '/images/meet/kim-2.jpg', alt: 'Kim Mendieta smiling in pink scrubs', position: '50% 22%' },
    { src: '/images/meet/team-group-2.jpg', alt: 'The five providers standing together in front of a green hedge', position: '50% 40%' },
    { src: '/images/team/phan-about.jpg', alt: 'Jamie Phan, PA-C, in her white coat', position: '50% 24%' },
    { src: '/images/meet/duo-2.jpg', alt: 'Two members of the care team standing together in blue scrubs', position: '50% 22%' },
    { src: '/images/team/vlachos-about.jpg', alt: 'Dr. Katrina Vlachos in her white coat', position: '50% 24%' },
    { src: '/images/rispoli/coat.jpg', alt: 'Dr. Leia Rispoli in her white coat, smiling', position: '50% 26%' },
    { src: '/images/meet/duo-3.jpg', alt: 'Two members of the care team laughing and posing in blue scrubs', position: '50% 22%' },
    { src: '/images/meet/britney.jpg', alt: 'Britney Castillo in pink scrubs', position: '50% 22%' },
    { src: '/images/team/mehta-hero.jpg', alt: 'Dr. Natasha Mehta in blue scrubs', position: '50% 22%' },
    { src: '/images/meet/kim.jpg', alt: 'Kim Mendieta in pink scrubs', position: '50% 22%' },
    { src: '/images/team/hattenbach-hero.jpg', alt: 'Dr. Jacob Hattenbach in navy scrubs', position: '50% 22%' },
    { src: '/images/rispoli/scrubs-2.jpg', alt: 'Dr. Leia Rispoli laughing in blue scrubs', position: '50% 26%' },
    { src: '/images/team/vlachos-hero.jpg', alt: 'Dr. Katrina Vlachos smiling in her white coat', position: '50% 24%' },
    { src: '/images/rispoli/coat-2.jpg', alt: 'Dr. Leia Rispoli standing in her white coat', position: '50% 24%' },
    { src: '/images/team/phan-hero.jpg', alt: 'Jamie Phan, PA-C, in navy scrubs', position: '50% 22%' },
  ] as { src: string; alt: string; position: string }[],

  cta: {
    title: 'Come and meet us.',
    accent: 'meet us.',
    text: 'Book a visit at Santa Monica, Marina Del Rey or Newport Beach. We would love to help.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '/#locations',
  },
};
