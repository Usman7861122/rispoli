// Content for /services/a2m (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2244360261 (hero.jpg) and 1916555432 (side.jpg).
import type { ServiceData } from './service-types';

export const a2m: ServiceData = {
  slug: 'a2m',
  category: 'regenerative-medicine',
  card: {
    short: 'A protein from your own blood, concentrated and injected into a joint to help protect cartilage.',
    bestFor: 'Knee or joint arthritis pain',
    time: '30–60 minutes',
    guidePain: 'Achy, worn-out knees or joints',
    guideWhy: 'Often joint arthritis',
  },
  topic: 'A2M treatment',
  seoTitle: 'A2M Treatment',
  seoDescription:
    'A2M uses a protein from your own blood, concentrated and injected into a joint. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/a2m/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Gloved hands placing sample tubes into a laboratory centrifuge",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/a2m/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Technician preparing a blood sample to be processed",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Regenerative medicine',
    name: 'A2M (Alpha-2-Macroglobulin)',
    accent: 'Alpha-2-Macroglobulin',
    lede: 'A treatment that uses a protein from your own blood to help protect the cartilage in a sore joint.',
    chips: ['Your own blood', 'No surgery', 'Image-guided', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '30–60 minutes' },
    { label: 'Made from', value: 'A small sample of your own blood' },
    { label: 'Guidance', value: 'Often ultrasound' },
    { label: 'Back to routine', value: 'Often within a day or two' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'A protein that guards the joint.',
    accent: 'guards the joint.',
    paragraphs: [
      'Alpha-2-macroglobulin, or A2M, is a protein found in your blood plasma. It can bind to some of the enzymes that break down cartilage. In an arthritic joint, those enzymes are more active.',
      'We draw a small sample of your blood. A special process separates the plasma and concentrates A2M. Your doctor then injects it into the joint, most often the knee.',
      'The goal is to help protect cartilage and ease arthritis symptoms. We keep our claims modest. A2M does not rebuild a worn joint, and research is still growing. Results vary, and it may not help everyone.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'From a blood draw to the joint.',
    accent: 'the joint.',
    text: 'The steps are simple, and they are done in one visit.',
    items: [
      { title: 'Blood draw', text: 'We take a small amount of blood from your arm. Because the protein is from your own blood, there is no donor material.' },
      { title: 'Concentrate the protein', text: 'The blood is processed in the office. The plasma is separated and the A2M is concentrated.' },
      { title: 'Joint injection', text: 'After numbing the skin, your doctor injects the concentrate into the joint. Ultrasound can help place the needle with care.' },
    ],
    areas: ['Knee', 'Hip and shoulder', 'Other joints'],
    areasLabel: 'Joints we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Joint pain from wear and tear.',
    accent: 'wear and tear.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Knee arthritis',
      'Early to moderate joint wear',
      'Joint pain after an old injury',
      'Pain that remains after steroid or other injections',
      'Joint pain when you want to delay surgery',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Joint pain and stiffness, worse after rest',
      'Swelling or a grinding feeling in the joint',
      'Pain with stairs, walking or standing',
      'Little lasting help from other care',
    ],
    note: 'Tell us if you take blood thinners, have a blood disorder, have an infection in the joint or have an allergy to medicines. Your doctor will decide if A2M is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines your joint and reviews your imaging. We talk about the choices, the cost and what to expect.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Drink water and eat before your visit.' },
      { label: 'Treat', title: 'Blood draw and injection', text: 'We draw your blood and prepare the A2M. We numb the skin, then your doctor injects the joint with a thin needle. Most visits take 30 to 60 minutes.' },
      { label: 'Recover', title: 'Rest, then ease back in', text: 'You go home the same day. The joint may feel sore or full for a day or two. We give you advice on rest, light movement and follow-up.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Because A2M comes from your own blood, allergic reactions are not expected. The most common effects are soreness, swelling or stiffness for a day or two. Infection, bleeding and nerve irritation are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first. Most people feel pressure and a short pinch. The joint may feel sore for a day or two.' },
    { q: 'Will it cure my arthritis?', a: 'No. A2M does not cure arthritis or rebuild a worn joint. It aims to ease symptoms and help protect cartilage. Results vary.' },
    { q: 'How long until I feel a change?', a: 'Changes, if they come, are often gradual and build over weeks. Some people do not feel a change.' },
    { q: 'How long does it last?', a: 'This differs from person to person, and research is still growing. Your doctor will talk with you about what to expect and about follow-up.' },
    { q: 'How is it different from PRP?', a: 'PRP concentrates platelets. A2M concentrates one protein from the plasma. Your doctor can explain which fits your joint better.' },
    { q: 'Does insurance cover it?', a: 'Insurance often does not cover A2M. Our office explains the cost to you before treatment, so there are no surprises.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who offers regenerative options for joints.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care and ultrasound-guided injections.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'PRP', href: '/services/prp' },
    { label: 'BMAC', href: '/services/bmac' },
    { label: 'Hyaluronic acid', href: '/services/hyaluronic-acid' },
    { label: 'Genicular nerve block', href: '/services/genicular-nerve-block' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if A2M is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
