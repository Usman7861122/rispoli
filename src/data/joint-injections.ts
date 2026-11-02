// Content for /services/joint-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2835181271 (hero.jpg) and 2662231579 (side.jpg).
import type { ServiceData } from './service-types';

export const jointInjections: ServiceData = {
  slug: 'joint-injections',
  category: 'joint-and-soft-tissue',
  card: {
    short: 'A guided injection into a sore joint to calm swelling and ease pain.',
    bestFor: 'Knee, hip, shoulder or other joint pain and swelling',
    time: '15–30 minutes',
    guidePain: 'Sore, swollen or stiff joint',
    guideWhy: 'Often arthritis or joint inflammation',
  },
  topic: 'joint injections',
  seoTitle: 'Joint Injections',
  seoDescription:
    'Joint injections use numbing medicine and a steroid to calm a painful joint. Offered at our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/joint-injections/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor using ultrasound to guide a knee injection",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/joint-injections/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor examining a patient's knee",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Joint & soft tissue',
    name: 'Joint Injections',
    accent: 'Joint',
    lede: 'A guided injection that calms a painful, swollen joint, so you can move and rest more comfortably.',
    chips: ['No surgery', 'Image-guided', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Numbing medicine and a steroid' },
    { label: 'Guidance', value: 'Ultrasound or X-ray' },
    { label: 'Back to routine', value: 'Often within a day or two' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the joint from the inside.',
    accent: 'Calm',
    paragraphs: [
      'A joint is where two bones meet. Arthritis, overuse or an injury can irritate the lining of the joint. Then it swells, aches and feels stiff.',
      'A joint injection places numbing medicine and a steroid right inside the joint. The steroid lowers swelling. The numbing medicine can give relief within minutes.',
      'The numbing medicine also helps us learn if the joint is the true source of your pain. If you feel better right away, that is a helpful clue for your care plan.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Guided to the right spot.',
    accent: 'right spot.',
    text: 'Your doctor uses ultrasound or X-ray to see the joint and place the medicine with care.',
    items: [
      { title: 'Ultrasound guidance', text: 'Sound waves show the joint, the needle and nearby tissue on a screen. There is no radiation. It works well for shoulders, knees and other joints near the skin.' },
      { title: 'X-ray guidance', text: 'Live X-ray images help reach deeper joints, such as the hip. Your doctor may use a small amount of contrast dye to confirm the spot.' },
      { title: 'Other choices', text: 'A steroid is not the only option. Hyaluronic acid and regenerative treatments, such as PRP, are other choices. We help you pick what fits your joint and goals.' },
    ],
    areas: ['Knee', 'Hip', 'Shoulder', 'Other joints, such as the ankle or wrist'],
    areasLabel: 'Joints we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Joint pain that holds you back.',
    accent: 'holds you back.',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Osteoarthritis',
      'Inflammatory arthritis flare-ups',
      'Pain and swelling after an injury',
      'Joint pain that has not improved with rest or therapy',
      'Stiff, achy joints that limit daily tasks',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Aching or swelling in one joint',
      'Stiffness after rest or in the morning',
      'Pain that makes stairs, reaching or walking hard',
      'Pain that wakes you at night',
    ],
    note: 'Tell us if you take blood thinners, have diabetes, have an infection, or have an allergy to medicines or contrast dye. Your doctor will decide if this injection is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor asks about your pain, examines the joint and reviews any imaging. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Wear comfortable clothes that let us reach the joint.' },
      { label: 'Treat', title: 'The injection', text: 'We clean and numb the skin. Then your doctor guides a thin needle into the joint and places the medicine. It takes about 15 to 30 minutes in all.' },
      { label: 'Recover', title: 'Rest, then ease back in', text: 'You rest briefly and go home the same day. Take it easy for a day or two. The steroid may take a few days to reach its full effect.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, a warm flush, or a short rise in blood sugar if you have diabetes. Some people have a brief flare of pain after the shot. Serious problems, such as infection or bleeding, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. The joint may feel sore for a day or two afterward.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for weeks or months. Others get shorter relief. The steroid can take a few days to start working.' },
    { q: 'How many injections can I have?', a: 'Steroid shots are limited, because too many in one joint over time may not be good for it. Your doctor will talk with you about how often is safe.' },
    { q: 'Why use ultrasound or X-ray?', a: 'Seeing the joint helps your doctor place the medicine in the right spot. That is more accurate than guessing by feel.' },
    { q: 'Are there other options?', a: 'Yes. Hyaluronic acid and regenerative treatments, such as PRP, are other choices. We can talk about which may suit you.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover steroid joint injections when they are medically needed. Coverage depends on your plan, so please call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who uses image guidance for joint injections.',
    'natasha-mehta': 'Treats joint pain with a whole-person plan, including therapy and lifestyle care.',
    'jacob-hattenbach': 'Interventional spine care physician who treats pain in the spine and larger joints.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Hyaluronic acid injections', href: '/services/hyaluronic-acid' },
    { label: 'Bursa injections', href: '/services/bursa-injections' },
    { label: 'Tendon injections', href: '/services/tendon-injections' },
    { label: 'PRP', href: '/services/prp' },
  ],

  cta: {
    title: 'Ready to move easier?',
    accent: 'move easier?',
    text: 'Book a visit and your doctor will tell you if joint injections are right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
