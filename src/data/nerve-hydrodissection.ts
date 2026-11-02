// Content for /services/nerve-hydrodissection (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 626250410 (hero.jpg) and 2547931025 (side.jpg).
import type { ServiceData } from './service-types';

export const nerveHydrodissection: ServiceData = {
  slug: 'nerve-hydrodissection',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Uses ultrasound-guided fluid to help free a nerve that feels trapped or pinched.',
    bestFor: 'Nerve entrapment, such as carpal tunnel symptoms',
    time: '15–30 minutes',
    guidePain: 'Tingling, numbness or pain from a pinched nerve',
    guideWhy: 'Often a nerve held in tight tissue',
  },
  topic: 'nerve hydrodissection',
  seoTitle: 'Nerve Hydrodissection',
  seoDescription:
    'Nerve hydrodissection uses ultrasound-guided fluid to ease trapped nerves, such as in carpal tunnel. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/nerve-hydrodissection/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor using ultrasound to guide an injection in the arm",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/nerve-hydrodissection/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Clinician treating a patient's wrist and forearm with a hand-held device",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Nerve Hydrodissection',
    accent: 'Hydrodissection',
    lede: 'A gentle, ultrasound-guided treatment that uses fluid to create space around a trapped nerve.',
    chips: ['No surgery', 'Ultrasound-guided', 'Live view of the nerve', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Sterile fluid, often with numbing medicine' },
    { label: 'Guidance', value: 'Live ultrasound images' },
    { label: 'Back to routine', value: 'Often within a day or two' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Make room for the nerve.',
    accent: 'Make room',
    paragraphs: [
      'A nerve can get stuck or squeezed as it passes through tight spots, such as the wrist, elbow or hip. Scar tissue or swelling can hold it in place. This is called nerve entrapment.',
      'In hydrodissection, your doctor uses ultrasound to see the nerve live. A thin needle places a small amount of sterile fluid around it. The fluid helps separate the nerve from the tissue around it.',
      'Many patients find this eases tingling, numbness or pain. The research is still growing, and results vary from person to person. We will talk with you about what is reasonable to expect.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'See it, then ease it.',
    accent: 'ease it.',
    text: 'Live ultrasound lets your doctor watch the needle and the nerve at the same time.',
    items: [
      { title: 'Ultrasound view', text: 'We scan the area to find the nerve and the tight tissue around it. This helps confirm where the nerve is trapped.' },
      { title: 'Fluid release', text: 'A thin needle places sterile fluid around the nerve. The fluid may include numbing medicine, and sometimes a steroid. You can see the space open on the screen.' },
      { title: 'Plan your recovery', text: 'We may suggest gentle stretches, a brace or therapy. If you do not get enough relief, we can talk about other options.' },
    ],
    areas: ['Wrist (carpal tunnel)', 'Elbow and forearm', 'Hip, leg and other sites'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'A nerve that feels pinched.',
    accent: 'pinched.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Carpal tunnel syndrome',
      'Ulnar nerve irritation at the elbow',
      'Nerve pain after surgery or injury',
      'Other nerve entrapments in the arm or leg',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Tingling or numbness in the hand, arm or leg',
      'Night symptoms that wake you',
      'Weak grip or a feeling of clumsiness',
      'Pain along the path of a nerve',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have an allergy to medicines. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and may order nerve tests or imaging. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear clothes that give easy access to the area.' },
      { label: 'Treat', title: 'The treatment', text: 'We clean and numb the skin. With live ultrasound, we guide a thin needle next to the nerve and place the fluid. It takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest and watch for change', text: 'You go home the same day. The area may feel numb or sore for a few hours. Note your symptoms over the next weeks so we can see how it worked.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, bruising or temporary numbness. Serious problems, such as infection, bleeding or nerve injury, are rare. We use ultrasound to place the needle with care, and we explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. You may feel some fullness near the nerve. Tell us right away if you feel anything sharp or electric.' },
    { q: 'Does it work for carpal tunnel?', a: 'Many patients find it helps with carpal tunnel symptoms, but results vary. Your doctor will explain what to expect and whether other care may be better for you.' },
    { q: 'How long does relief last?', a: 'It differs from person to person. Some people feel better for weeks or months, and some feel little change. Sometimes a repeat treatment is considered.' },
    { q: 'Is this the same as surgery?', a: 'No. Hydrodissection uses a needle and does not cut tissue. If a nerve is badly squeezed, your doctor may still talk with you about other options, including surgery.' },
    { q: 'Can I use my hand or leg after?', a: 'Most people can do light activity the same day. Your area may feel numb for a few hours, so take care. We will give you clear instructions.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan, and some plans treat it differently than a standard injection. Call us and we will explain costs before treatment.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who uses ultrasound for precise nerve procedures.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Peripheral nerve stimulator', href: '/services/peripheral-nerve-stimulator' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'Joint injections', href: '/services/joint-injections' },
  ],

  cta: {
    title: 'Ready to free a trapped nerve?',
    accent: 'free a trapped nerve?',
    text: 'Book a visit and your doctor will tell you if nerve hydrodissection is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
