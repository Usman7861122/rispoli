// Content for /services/si-joint-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1965420643 and 2072814290.
import type { esi } from './esi';

export const siJoint: typeof esi = {
  slug: 'si-joint-injections',
  topic: 'SI joint injections',
  seoTitle: 'SI Joint Injections',
  seoDescription:
    'Sacroiliac (SI) joint injections ease low back, buttock and hip pain from the joint where the spine meets the pelvis. Santa Monica, Marina Del Rey and Newport Beach.',

  photo: {
    src: '/images/services/si-joint-injections/pelvis-model.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor pointing at the sacroiliac joint on a spine and pelvis model',
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/si-joint-injections/hands.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Hands pressing on the lower back, over the sacroiliac joint, during an exam',
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Spine injections',
    name: 'SI Joint Injections',
    accent: 'SI Joint',
    lede: 'A targeted injection into the joint where your spine meets your pelvis, to ease low back, buttock and hip pain.',
    chips: ['No surgery', 'Image-guided', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Numbing medicine and a steroid' },
    { label: 'Guidance', value: 'Live X-ray images' },
    { label: 'Back to routine', value: 'Often the next day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the joint at the base of your spine.',
    accent: 'Calm',
    paragraphs: [
      'You have two sacroiliac (SI) joints. They sit at the base of your spine, where it meets your pelvis. They work like shock absorbers when you walk, stand up and climb stairs.',
      'These joints can become sore from arthritis, an injury, pregnancy, or uneven walking. The pain is often low on one side of the back, and it can spread to the buttock, hip or groin.',
      'An SI joint injection places numbing medicine and a steroid into the joint. The steroid lowers swelling. If your pain drops right away, it also confirms that the SI joint is the source.',
    ],
  },

  approaches: {
    eyebrow: 'How we find and treat it',
    title: 'Confirm it. Calm it. Keep it calm.',
    accent: 'Keep it calm.',
    text: 'SI joint pain can feel like a disc or hip problem. The injection helps us be sure.',
    items: [
      { title: 'Joint injection', text: 'Using live X-ray, a thin needle places medicine inside the SI joint. This calms swelling and can ease pain for weeks or months.' },
      { title: 'Confirm the source', text: 'Quick relief after the numbing medicine tells us the SI joint is a main source of your pain. That makes your plan clearer.' },
      { title: 'Build your plan', text: 'Relief gives you a window to do therapy and strengthen the muscles that support the joint. If pain returns, we can talk about other options.' },
    ],
    areas: ['Left SI joint', 'Right SI joint', 'Both sides'],
    areasLabel: 'Sides we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain low on one side of the back.',
    accent: 'low on one side',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'SI joint arthritis',
      'SI joint dysfunction',
      'Pain after pregnancy or a fall',
      'Pain after a spine fusion',
      'Inflammation of the SI joint (sacroiliitis)',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain low on one side of the back, near the dimple of the hip',
      'Pain in the buttock, hip or groin',
      'Pain when you stand up from sitting or climb stairs',
      'Pain when you roll over in bed or stand on one leg',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant or have an allergy to medicines or contrast dye. Your doctor will decide if this injection is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines your back and hips, and reviews your imaging. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear comfortable clothes.' },
      { label: 'Treat', title: 'The injection', text: 'You lie face down. We clean and numb the skin, then use live X-ray to guide a thin needle into the joint. It takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest and track your relief', text: 'You rest briefly and go home the same day. We ask you to note your pain over the next days, so we know how well it worked.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness where the needle went in, a warm flush, or a short rise in blood sugar if you have diabetes. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp.' },
    { q: 'How do you know the pain comes from the SI joint?', a: 'We use your story, an exam with a few movement tests, and your response to the injection. Quick relief after the numbing medicine is a strong sign.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for weeks, and others for several months. The steroid can take a few days to start working.' },
    { q: 'Can I have it on both sides?', a: 'Yes. If both SI joints hurt, your doctor can treat both sides in the same visit.' },
    { q: 'Can I go to work after?', a: 'Many people return to normal activity in a day or two. Take it easy on the first day.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover this injection when it is medically needed. Call our office and we will help you check your plan.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Spine and joint injections are a core part of her care.',
    'natasha-mehta': 'Treats spine, hip and joint pain with a whole-person plan.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine and musculoskeletal care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Epidural steroid injections', href: '/services/epidural-steroid-injections' },
    { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Back pain', href: '/services/back-pain' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if an SI joint injection is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
