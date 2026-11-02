// Content for /services/occipital-nerve-block (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2752486715 (hero.jpg) and 2645429765 (side.jpg).
import type { ServiceData } from './service-types';

export const occipitalNerveBlock: ServiceData = {
  slug: 'occipital-nerve-block',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Numbing medicine near the nerves at the back of the head, to ease headaches that start in the neck.',
    bestFor: 'Headache or pain at the back of the head, often with neck tension',
    time: '10–20 minutes',
    guidePain: 'Headache at the back of the head or neck',
    guideWhy: 'Often irritated nerves at the base of the skull',
  },
  topic: 'occipital nerve blocks',
  seoTitle: 'Occipital Nerve Block',
  seoDescription:
    'An occipital nerve block can ease headaches and neck-origin head pain. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/occipital-nerve-block/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Woman resting her head in her hands because of a headache",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/occipital-nerve-block/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Woman pressing her temples with a painful headache",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Occipital Nerve Block',
    accent: 'Occipital',
    lede: 'A quick injection near the nerves at the back of your head that can ease headaches and head pain that starts in the neck.',
    chips: ['No surgery', 'Quick visit', 'Done in the office', 'For headaches'],
  },

  facts: [
    { label: 'Time', value: '10–20 minutes' },
    { label: 'Medicine', value: 'Numbing medicine, sometimes a steroid' },
    { label: 'Guidance', value: 'Landmarks or ultrasound' },
    { label: 'Back to routine', value: 'Often the same day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the nerves behind the head.',
    accent: 'Calm',
    paragraphs: [
      'The occipital nerves start in the upper neck and run up the back of the head. They carry feeling to the scalp. If they get irritated or squeezed by tight muscles or neck problems, they can cause pain at the back of the head, behind the eyes or on one side.',
      'An occipital nerve block places numbing medicine, and sometimes a steroid, near one or both of these nerves. The numbing medicine can bring relief within minutes. The steroid may help calm swelling over the next days.',
      'The block also helps us learn. If your headache eases, the occipital nerves are likely part of the problem. It can be used for several kinds of headache. It does not cure headaches, and results vary.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Simple, quick and precise.',
    accent: 'quick and precise.',
    text: 'The medicine goes to a spot just under the skin at the back of the head. Your doctor may use ultrasound to guide it.',
    items: [
      { title: 'Greater occipital block', text: 'This is the most common block. Medicine goes near the main nerve on each side of the back of the head.' },
      { title: 'Lesser occipital block', text: 'Medicine goes near a smaller nerve a bit farther to the side, when pain reaches behind the ear.' },
      { title: 'A path forward', text: 'If relief is good but short, we can talk about repeat blocks, Botox, or other care for longer relief.' },
    ],
    areas: ['Back of the head', 'Base of the skull', 'Upper neck'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Headaches that start in the neck.',
    accent: 'start in the neck.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Occipital neuralgia',
      'Cervicogenic headache (head pain from the neck)',
      'Migraine, as part of a care plan',
      'Cluster headache, as part of a care plan',
      'Headache after a neck injury or whiplash',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Sharp, shooting or throbbing pain at the back of the head',
      'A tender spot at the base of the skull',
      'Headache that starts with neck stiffness',
      'Pain that spreads behind the eye or over one side',
    ],
    note: 'Tell us if you take blood thinners, have an infection or an open area on your scalp, are pregnant, or have an allergy to medicines. Sudden, severe headache or new weakness needs urgent care. Your doctor will decide if this block is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We find the cause', text: 'Your doctor asks about your headaches, examines your head and neck, and reviews any tests. Other causes are ruled out first.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you if any medicine should be paused. You can eat as usual. You sit comfortably, often leaning forward.' },
      { label: 'Treat', title: 'The injection', text: 'The skin at the back of the head is cleaned. A thin needle places medicine near the nerve. It takes only a few minutes, and the whole visit is about 10 to 20 minutes.' },
      { label: 'Recover', title: 'Rest and notice', text: 'You rest briefly and usually go home the same day. Your scalp may feel numb for a few hours. Keep a headache diary so we can see how long the relief lasts.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only brief soreness, scalp numbness or a small bruise. Some feel dizzy for a short time, so have someone drive you if you do. If a steroid is used, you may notice flushing or a short rise in blood sugar. Infection, bleeding or a medicine reaction are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We clean the skin and use a very thin needle. Most people feel a pinch and some pressure. It is over in a few minutes.' },
    { q: 'How fast does it work?', a: 'The numbing medicine can ease pain within minutes. If a steroid is used, it can take a few days to reach its full effect.' },
    { q: 'How long does the relief last?', a: 'It varies. Some people feel better for days, and others for weeks or longer. Results vary.' },
    { q: 'Can I have it more than once?', a: 'Yes, if it helps. Your doctor will talk with you about how often is safe and whether another option may last longer.' },
    { q: 'Will I need a driver?', a: 'Most people can drive home. If you feel dizzy or lightheaded, wait until it passes or have someone drive you.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover occipital nerve blocks when they are medically needed. Coverage depends on your plan; call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who performs image-guided nerve blocks.',
    'natasha-mehta': 'Also trained in brain injury medicine, with a whole-person plan for headache.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care, including neck-origin pain.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Botox for migraine & spasms', href: '/services/botox-migraine-spasms' },
    { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if an occipital nerve block is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
