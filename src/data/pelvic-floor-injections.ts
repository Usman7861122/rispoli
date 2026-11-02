// Content for /services/pelvic-floor-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2737469975 (hero.jpg) and 2767388829 (side.jpg).
import type { ServiceData } from './service-types';

export const pelvicFloorInjections: ServiceData = {
  slug: 'pelvic-floor-injections',
  category: 'pelvic-care',
  card: {
    short: 'Injections that relax tight pelvic floor muscles or calm irritated nerves, for women and men.',
    bestFor: 'Pelvic, tailbone or deep groin pain linked to tight muscles or nerves',
    time: '15–30 minutes',
    guidePain: 'Pelvic or tailbone pain that will not settle',
    guideWhy: 'Often tight pelvic floor muscles or irritated nerves',
  },
  topic: 'pelvic floor injections',
  seoTitle: 'Pelvic Floor Injections',
  seoDescription:
    'Pelvic floor injections can ease pelvic pain from tight muscles or irritated nerves, for women and men. Offered in our Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/pelvic-floor-injections/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor holding a model of the pelvis and pelvic floor",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/pelvic-floor-injections/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor writing notes next to a model of the pelvic organs",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Pelvic care & more',
    name: 'Pelvic Floor Injections',
    accent: 'Pelvic Floor',
    lede: 'A private, gentle treatment that eases tight muscles or irritated nerves deep in the pelvis, so sitting, moving and daily life hurt less.',
    chips: ['For women and men', 'Private and respectful', 'Done in the office', 'Part of a care plan'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Numbing medicine, sometimes a steroid or Botox' },
    { label: 'Guidance', value: 'Ultrasound or X-ray' },
    { label: 'Back to routine', value: 'Often the next day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the muscles and nerves.',
    accent: 'Calm',
    paragraphs: [
      'The pelvic floor is a group of muscles at the base of your pelvis. They support the bladder, bowel and, in women, the uterus. Nerves run through and around these muscles. If the muscles stay tight, or a nerve is irritated, you may feel pain, pressure or spasm.',
      'Pelvic floor injections place medicine in or near the tight muscles or the irritated nerve. Numbing medicine can bring quick relief. A steroid or botulinum toxin (Botox) may be used to relax the muscle or calm swelling. Your doctor explains which medicine is planned.',
      'Pelvic pain is common in both women and men, and it is nothing to be embarrassed about. These injections work best as one part of a plan that may also include pelvic floor therapy. Results vary.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Targeted, with your comfort first.',
    accent: 'your comfort first.',
    text: 'Imaging helps your doctor place the medicine where it is needed. We explain each step before we begin.',
    items: [
      { title: 'Muscle injections', text: 'Medicine is placed into tight pelvic floor muscles to help them relax. This can ease spasm and pressure.' },
      { title: 'Nerve blocks', text: 'Medicine is placed near a nerve, such as the pudendal nerve, to calm irritation. Relief also helps show if that nerve is part of the problem.' },
      { title: 'Trigger point injections', text: 'Small knots in the muscle can be a source of pain. A small injection into the knot can help it let go.' },
    ],
    areas: ['Pelvic floor muscles', 'Pudendal and nearby nerves', 'Tailbone area'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pelvic pain that lingers.',
    accent: 'lingers.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Pelvic floor muscle tightness or spasm',
      'Pudendal nerve irritation',
      'Tailbone pain',
      'Chronic pelvic pain in women or men',
      'Pain with sitting or with sex',
      'Pain that stays after pelvic floor therapy',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A deep ache, burning or pressure in the pelvis',
      'Pain that is worse when you sit',
      'Urinary or bowel symptoms linked to tight muscles',
      'Pain with intimacy that limits your life',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant or have an allergy to medicines. Other causes of pelvic pain should be checked first. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'A private talk', text: 'Your doctor listens, asks about your symptoms and reviews your tests. You can ask anything. You may be offered a chaperone.' },
      { label: 'Prepare', title: 'You get ready', text: 'We explain how to prepare and which medicines to pause, if any. Wear comfortable clothes. You will be covered and given privacy.' },
      { label: 'Treat', title: 'The injection', text: 'The area is cleaned and numbed. Your doctor uses imaging to guide a thin needle to the muscle or nerve. It takes about 15 to 30 minutes, and we check in with you often.' },
      { label: 'Recover', title: 'Rest and follow up', text: 'You rest for a short time and go home the same day. Note your pain over the next days and weeks. We may suggest pelvic floor therapy to build on the relief.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have mild soreness or bruising for a day or two. Rare problems include infection, bleeding, temporary numbness or weakness, and a medicine reaction. Serious problems are uncommon. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Is this treatment for men too?', a: 'Yes. Pelvic floor pain affects both men and women. Your doctor tailors the plan to you.' },
    { q: 'Will it be embarrassing?', a: 'We do our best to make you feel at ease. We explain each step, protect your privacy and move at your pace. You can ask for a chaperone.' },
    { q: 'Does it hurt?', a: 'We numb the skin first. You may feel pressure or a brief pinch. Tell us if you feel anything sharp, and we will adjust.' },
    { q: 'How long does the relief last?', a: 'It varies. Some people feel better for weeks or months. Relief can take a few days to build. Results vary.' },
    { q: 'Will I need more than one injection?', a: 'Some people do. Your doctor will talk with you about how it worked and what comes next.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan and the medicine used. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who performs image-guided nerve and muscle injections.',
    'natasha-mehta': 'Treats pelvic and whole-body pain with a calm, whole-person plan.',
  } as Record<string, string>,
  locationSlugs: ['marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Medical acupuncture', href: '/services/medical-acupuncture' },
    { label: 'Botox for pain', href: '/services/botox-for-pain' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a private visit and your doctor will tell you if pelvic floor injections are right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
