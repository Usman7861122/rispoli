// Content for /services/facet-joint-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2552247921 and 2370974399.
import type { esi } from './esi';

export const facet: typeof esi = {
  slug: 'facet-joint-injections',
  category: 'spine-injections',
  card: {
    short: 'Calms the small joints at the back of the spine, and helps us find if they cause your pain.',
    bestFor: 'Back or neck pain that flares when you bend, twist or lean back',
    time: '15–30 minutes',
    guidePain: 'Back or neck pain when you twist or lean back',
    guideWhy: 'Often the small joints of the spine',
  },
  topic: 'facet joint injections',
  seoTitle: 'Facet Joint Injections',
  seoDescription:
    'Facet joint injections calm sore joints in the spine to ease back and neck pain. Done in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/facet-joint-injections/xray.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor pointing a pen at three glowing spots on a spine X-ray, marking painful facet joints',
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/facet-joint-injections/spine-model.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Close-up of a lumbar spine model showing the small joints and discs between the bones',
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Spine injections',
    name: 'Facet Joint Injections',
    accent: 'Facet',
    lede: 'A precise injection that calms sore joints along your spine, so bending, twisting and standing hurt less.',
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
    title: 'Ease the joint, ease the ache.',
    accent: 'Ease',
    paragraphs: [
      'Facet joints are small joints at the back of your spine. There is one pair between each bone, and they guide how you bend and twist. Over time, wear, arthritis or an injury can make them swollen and sore.',
      'A facet joint injection places numbing medicine and a steroid in or right next to the sore joint. The steroid lowers swelling, and the numbing medicine gives quick relief.',
      'The injection also helps us find the cause. If your pain eases after the numbing medicine, we know the facet joint is a likely source. That helps us plan the next step.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Two jobs in one visit.',
    accent: 'one visit.',
    text: 'Live X-ray guidance helps your doctor place the medicine in exactly the right spot.',
    items: [
      { title: 'Joint injection', text: 'A thin needle places medicine into the joint. This calms swelling inside the joint and can ease pain for weeks or months.' },
      { title: 'Medial branch block', text: 'The medicine goes next to the tiny nerves that carry pain signals from the joint. It numbs those nerves for a short time and shows us if they are the source.' },
      { title: 'Find the source', text: 'Pain relief after the injection tells us the facet joints are involved. If relief is short, we can talk about longer lasting options, such as radiofrequency ablation.' },
    ],
    areas: ['Lower back (lumbar)', 'Neck (cervical)', 'Mid back (thoracic)'],
    areasLabel: 'Spine areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain that flares with movement.',
    accent: 'flares',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Facet joint arthritis',
      'Back or neck pain from wear and tear',
      'Pain after an injury, such as whiplash',
      'Pain that stays after therapy',
      'Pain after a long time in one position',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A dull ache on one or both sides of your spine',
      'Stiffness, worse in the morning or after sitting',
      'Pain when you lean back or twist',
      'Pain that spreads to the buttock, hip or shoulder',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant or have an allergy to medicines or contrast dye. Your doctor will decide if this injection is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and looks at your imaging. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear comfortable clothes.' },
      { label: 'Treat', title: 'The injection', text: 'You lie face down. We clean and numb the skin, then use live X-ray to guide a thin needle to the joint. It takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest and track your relief', text: 'You rest briefly and go home the same day. We ask you to note your pain over the next days. That tells us how well the injection worked.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness where the needle went in, a warm flush, or a short rise in blood sugar if you have diabetes. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for weeks, and others for several months. The steroid can take a few days to start working.' },
    { q: 'How is this different from an epidural injection?', a: 'An epidural treats a squeezed or swollen nerve, which often causes pain down an arm or leg. A facet injection treats the small joints in the spine, which more often cause back or neck pain.' },
    { q: 'What if the relief does not last?', a: 'If the injection helps but fades, we can talk about radiofrequency ablation. It treats the same pain nerves, and the relief can last longer.' },
    { q: 'Can I go to work after?', a: 'Many people return to normal activity in a day or two. Take it easy on the first day.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover this injection when it is medically needed. Call our office and we will help you check your plan.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Spine injections are a core part of her care.',
    'natasha-mehta': 'Treats spine and joint pain with a whole-person plan.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Epidural steroid injections', href: '/services/epidural-steroid-injections' },
    { label: 'SI joint injections', href: '/services/si-joint-injections' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Back pain', href: '/services/back-pain' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if a facet joint injection is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
