// Content for /services/genicular-nerve-block (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2701362563 (hero.jpg) and 2835181249 (side.jpg).
import type { ServiceData } from './service-types';

export const genicularNerveBlock: ServiceData = {
  slug: 'genicular-nerve-block',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Numbs the small nerves around the knee to ease pain, with radiofrequency ablation if the block helps.',
    bestFor: 'Ongoing knee pain, such as from arthritis',
    time: '20–45 minutes',
    guidePain: 'Knee pain that does not settle with other care',
    guideWhy: 'Often the small nerves around the knee',
  },
  topic: 'genicular nerve blocks',
  seoTitle: 'Genicular Nerve Block / RFA',
  seoDescription:
    'Genicular nerve blocks and radiofrequency ablation can ease long-term knee pain. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/genicular-nerve-block/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor preparing an injection at a patient's knee",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/genicular-nerve-block/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor holding a syringe next to a knee joint model",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Genicular Nerve Block / RFA',
    accent: 'Genicular',
    lede: 'A targeted way to quiet the small nerves around your knee, so walking, stairs and sleep can feel easier.',
    chips: ['No surgery', 'Image-guided', 'Block first, then RFA', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '20–45 minutes' },
    { label: 'Medicine', value: 'Numbing medicine for the block' },
    { label: 'Guidance', value: 'Ultrasound or X-ray images' },
    { label: 'Back to routine', value: 'Often within a day or two' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Turn down the knee pain signal.',
    accent: 'Turn down',
    paragraphs: [
      'Genicular nerves are small nerves that wrap around the knee. They carry pain signals from the joint to your brain. When the knee is worn or sore for a long time, these nerves can keep sending pain signals.',
      'A genicular nerve block places numbing medicine near these nerves. If your knee pain drops after the block, we know these nerves are likely part of your pain.',
      'If the block helps, you may be a fit for radiofrequency ablation, or RFA. RFA uses gentle heat to quiet the same nerves, and relief may last longer. Results vary from person to person.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Block first, then ablation.',
    accent: 'Block first',
    text: 'Imaging guides each needle so the medicine or heat goes to the right spot.',
    items: [
      { title: 'Genicular nerve block', text: 'A thin needle places numbing medicine near the genicular nerves. You track your knee pain over the next hours and days.' },
      { title: 'Check the result', text: 'If your knee feels clearly better after the block, it tells us these nerves play a part in your pain. If not, we talk about other options.' },
      { title: 'Radiofrequency ablation', text: 'In a second visit, a small needle gives gentle heat to the same nerves to quiet them. Relief can last longer than a block.' },
    ],
    areas: ['Inside of the knee', 'Outside of the knee', 'Front of the knee'],
    areasLabel: 'Knee areas we target',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Knee pain that will not settle.',
    accent: 'will not settle.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Knee arthritis',
      'Long-term knee pain',
      'Pain that stays after a knee replacement',
      'Knee pain when surgery is not an option',
      'Pain that did not improve with injections or therapy',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A deep ache in the knee most days',
      'Pain with walking, stairs or standing',
      'Pain that disturbs your sleep',
      'Little lasting help from other treatments',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have an allergy to medicines. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines your knee and looks at your imaging. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear shorts or loose pants that are easy to roll up.' },
      { label: 'Treat', title: 'The block, then RFA', text: 'We numb the skin and use imaging to guide a thin needle near each nerve. At the first visit we place numbing medicine. If it helps, a later visit uses gentle heat.' },
      { label: 'Recover', title: 'Rest and track your relief', text: 'You go home the same day. Keep a simple note of your pain and activity. This helps us decide the next step.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness near the needle site or a short period of numbness. Your knee may feel a little different for a few hours after the block, so walk carefully. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp.' },
    { q: 'Why do I need a block before RFA?', a: 'The block shows us if these nerves are really part of your knee pain. It helps us avoid treating nerves that would not help you.' },
    { q: 'How long does relief last?', a: 'It differs from person to person. A block may help for hours to weeks. RFA relief can last longer, but results vary.' },
    { q: 'Is this the same as a knee injection?', a: 'No. A knee injection puts medicine inside the joint. A genicular block targets the nerves around the joint that carry pain signals.' },
    { q: 'Can I walk after the block?', a: 'Most people can. The knee may feel numb or different for a few hours, so take care on stairs and go slowly at first.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan. Many plans have rules about the block and RFA. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. She uses image guidance for nerve procedures.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care and nerve procedures.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Hyaluronic acid', href: '/services/hyaluronic-acid' },
    { label: 'Joint injections', href: '/services/joint-injections' },
  ],

  cta: {
    title: 'Ready for easier steps?',
    accent: 'easier steps?',
    text: 'Book a visit and your doctor will tell you if a genicular nerve block is right for your knee.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
