// Content for /dr-rispoli. Source: leiarispolimd.com/dr-rispoli (rebranded), plus a few plain-English additions.
// Photos: Pixieset gallery (Dennis Sosa). Add more files to `photos` and the page uses them automatically.

export const drRispoli = {
  seoTitle: 'Dr. Leia Rispoli',
  seoDescription: 'Dr. Leia Rispoli is a double board-certified interventional pain medicine physician at Westside Interventional Pain & Physiatry. Non-surgical care for back, neck, joint and pelvic pain.',

  photos: [
    { src: '/images/rispoli/hero.jpg', alt: 'Dr. Leia Rispoli smiling in royal-blue scrubs, sitting in front of a green hedge', position: '50% 24%' },
    { src: '/images/rispoli/coat.jpg', alt: 'Dr. Leia Rispoli in her white coat, smiling', position: '50% 26%' },
    { src: '/images/rispoli/coat-2.jpg', alt: 'Dr. Leia Rispoli standing in her white coat', position: '50% 24%' },
    { src: '/images/rispoli/scrubs-2.jpg', alt: 'Dr. Leia Rispoli laughing in blue scrubs', position: '50% 26%' },
    { src: '/images/rispoli/scrubs-3.jpg', alt: 'Dr. Leia Rispoli in blue scrubs with her hands together', position: '50% 24%' },
  ] as { src: string; alt: string; position: string }[],

  hero: {
    eyebrow: 'Interventional Pain & Physical Medicine',
    name: 'Dr. Leia Rispoli',
    accent: 'Rispoli',
    lede: 'Double board-certified. Focused on one goal: helping you move with less pain, without surgery.',
    chips: ['Double board-certified', 'Non-surgical care', 'Weill Cornell trained'],
  },

  about: {
    eyebrow: 'About Dr. Rispoli',
    title: 'A caring doctor with advanced tools.',
    accent: 'caring',
    paragraphs: [
      'Dr. Leia Rispoli is a double board-certified interventional pain medicine physician who specializes in non-surgical pain management. She helps people with long-lasting (chronic) and sudden (acute) pain using modern, evidence-based treatments.',
      'Her approach is patient-centered and kind. Her goal is simple: restore function, reduce discomfort, and improve your quality of life.',
      'She treats low back pain, neck pain, joint pain, pelvic pain, and headaches. Her treatments are minimally invasive, which means small procedures with no large cuts, so patients can get back to the things they love.',
    ],
    approachTitle: 'How she works with you',
    approach: [
      { title: 'She listens first', text: 'Your story matters. Every plan starts with understanding your pain, your daily life, and your goals.' },
      { title: 'She finds the source', text: 'Pain can come from many places. Together with the team, she works to find what is really causing yours.' },
      { title: 'She starts gently', text: 'Care begins with the least invasive options that can work. You always understand your choices before you decide.' },
    ],
  },

  focus: {
    eyebrow: 'Areas of care',
    title: 'What Dr. Rispoli treats.',
    accent: 'treats',
    items: [
      { title: 'Spinal & Joint Pain', text: 'Treatment for back, neck, shoulder, knee, and hip pain.', href: '/services/back-pain', icon: 'spine' },
      { title: 'Pelvic Pain', text: 'Specialized care for male and female pelvic conditions.', href: '/services/pelvic-pain', icon: 'pelvis' },
      { title: 'Headaches & Migraines', text: 'Effective non-surgical treatment options.', href: '/services', icon: 'head' },
      { title: 'Regenerative Medicine', text: 'PRP therapy and stem cell treatments to support healing.', href: '/services/regenerative-medicine', icon: 'leaf' },
    ] as { title: string; text: string; href: string; icon: 'spine' | 'pelvis' | 'head' | 'leaf' }[],
  },

  education: {
    eyebrow: 'Education & training',
    title: 'The road to expert pain care.',
    accent: 'expert',
    intro: 'Four stages of training at some of the top schools and hospitals in New York and New Jersey, ending in a specialty fellowship in pain medicine.',
    steps: [
      {
        stage: 'Undergraduate',
        place: 'Rutgers University',
        where: 'New Jersey',
        notes: ['Division-1 soccer co-captain', 'National Athletic Honor Society member'],
        icon: 'ball',
      },
      {
        stage: 'Medical school',
        place: 'Rutgers New Jersey Medical School',
        where: 'Newark',
        notes: ['Doctor of Medicine training'],
        icon: 'cap',
      },
      {
        stage: 'Residency',
        place: 'NewYork-Presbyterian Hospital',
        where: 'Columbia University & Weill Cornell Medical Center',
        notes: ['Hands-on hospital training'],
        icon: 'hospital',
      },
      {
        stage: 'Fellowship',
        place: 'Weill Cornell Tri-Institute Pain Fellowship',
        where: 'NewYork-Presbyterian · Memorial Sloan Kettering · Hospital for Special Surgery',
        notes: ['Advanced training in interventional pain medicine'],
        icon: 'award',
      },
    ] as { stage: string; place: string; where: string; notes: string[]; icon: 'ball' | 'cap' | 'hospital' | 'award' }[],
    destination: {
      stage: 'Today',
      place: 'Double board-certified',
      where: 'Physical Medicine & Rehabilitation and Interventional Pain Medicine',
    },
  },

  cta: {
    title: 'Let’s talk about your pain.',
    accent: 'your pain.',
    text: 'If you have questions or need help, please contact our office. We are here for you.',
    primary: 'Book appointment',
    secondary: 'Meet the whole team',
    secondaryHref: '/meet-the-team',
  },
};
