// Content for /services/bmac (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2706740005 (hero.jpg) and 1896211324 (side.jpg).
import type { ServiceData } from './service-types';

export const bmac: ServiceData = {
  slug: 'bmac',
  category: 'regenerative-medicine',
  card: {
    short: 'Uses cells from your own bone marrow to support a sore joint or injured area.',
    bestFor: 'Joint or tissue pain after other care has not helped enough',
    time: '2–3 hours',
    guidePain: 'Joint pain that other care did not fix',
    guideWhy: 'Often joint wear or a lasting injury',
  },
  topic: 'BMAC treatment',
  seoTitle: 'BMAC Treatment',
  seoDescription:
    'BMAC uses concentrated cells from your own bone marrow to support a sore joint or injured area. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/bmac/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor pointing at the hip joint on an anatomical model",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/bmac/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Technician preparing a blood sample at a centrifuge",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Regenerative medicine',
    name: 'BMAC (Bone Marrow Concentrate)',
    accent: 'Bone Marrow',
    lede: 'A treatment that uses concentrated cells from your own bone marrow to support a sore joint or injured area.',
    chips: ['Your own cells', 'No surgery', 'Image-guided', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '2–3 hours' },
    { label: 'Made from', value: 'Your own bone marrow' },
    { label: 'Guidance', value: 'Live imaging' },
    { label: 'Back to routine', value: 'Often within a few days' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Cells from your own body.',
    accent: 'your own body.',
    paragraphs: [
      'Bone marrow is the soft tissue inside your bones. It holds cells that help the body repair itself. BMAC stands for bone marrow aspirate concentrate. It is a sample of your own marrow that is spun to concentrate those cells.',
      'We take the marrow from the back of your hip bone, using numbing medicine. We spin it in the office to make the concentrate. Your doctor then places it in the joint or injured area with imaging guidance.',
      'We want to be honest. Research on BMAC is still growing. It is not approved by the FDA for specific conditions in this use, and results vary. Your doctor will talk with you about what is known, what is not, and whether it makes sense for you.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Draw, concentrate, place.',
    accent: 'place.',
    text: 'Everything is done in one visit, using your own marrow.',
    items: [
      { title: 'Marrow draw', text: 'After the skin and bone surface are numbed, your doctor draws a small amount of marrow from the back of the hip bone.' },
      { title: 'Concentrate', text: 'The sample is spun in a centrifuge. This concentrates the cells and the helpful proteins that come with them.' },
      { title: 'Guided placement', text: 'Your doctor uses ultrasound or X-ray to place the concentrate in the joint or injured area. Some visits also include a blood draw.' },
    ],
    areas: ['Knee', 'Hip and shoulder', 'Other joints or injured areas'],
    areasLabel: 'Areas we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'When other care has not been enough.',
    accent: 'not been enough.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Knee arthritis',
      'Hip or shoulder joint wear',
      'Cartilage problems',
      'Lasting tendon or soft-tissue injury',
      'Joint pain when you want to avoid or delay surgery',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Joint pain that has lasted for months',
      'Little lasting help from therapy or other injections',
      'Pain that limits walking, sports or sleep',
      'You are looking for a non-surgical option',
    ],
    note: 'Tell us if you take blood thinners, have a blood disorder, have an infection or have cancer. Your doctor will decide if BMAC is safe and sensible for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and reviews your imaging. We talk about what is known about BMAC, the cost and your other choices.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Plan to have someone drive you home.' },
      { label: 'Treat', title: 'Marrow draw and injection', text: 'We numb the skin and draw marrow from the hip bone. We prepare the concentrate, then your doctor places it with imaging. The visit often takes 2 to 3 hours.' },
      { label: 'Recover', title: 'Rest, then ease back in', text: 'You go home the same day. The hip may be sore for several days, and the treated area may ache. We give you a plan for rest, movement and follow-up.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Because the cells come from your own body, allergic reactions are not expected. Common effects are soreness at the hip and at the treated area, and bruising. Infection, bleeding and nerve irritation are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Is BMAC approved by the FDA?', a: 'BMAC is not FDA-approved for specific conditions in this use. Research is still growing. Your doctor will explain what is known and what is not.' },
    { q: 'Does it hurt?', a: 'We numb the skin and the surface of the bone. You may feel pressure, and a brief deep ache during the marrow draw. The hip can be sore for several days.' },
    { q: 'How long until I feel a change?', a: 'Changes, if they come, are often slow and build over weeks to months. Results vary, and some people do not feel a change.' },
    { q: 'Will I need more than one treatment?', a: 'Often one treatment is planned. Your doctor will talk with you about follow-up after your visit.' },
    { q: 'How is it different from PRP?', a: 'PRP concentrates platelets from your blood. BMAC concentrates cells from your bone marrow. The marrow draw makes BMAC a longer visit.' },
    { q: 'Does insurance cover it?', a: 'Insurance often does not cover BMAC. Our office explains the cost to you before treatment, so there are no surprises.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who offers regenerative options for joints.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care and image-guided procedures.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'PRP', href: '/services/prp' },
    { label: 'A2M', href: '/services/a2m' },
    { label: 'Hyaluronic acid', href: '/services/hyaluronic-acid' },
    { label: 'Joint injections', href: '/services/joint-injections' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if BMAC is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
