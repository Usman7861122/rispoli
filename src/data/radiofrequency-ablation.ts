// Content for /services/radiofrequency-ablation (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2317625935 (hero.jpg) and 1582297096 (side.jpg).
import type { ServiceData } from './service-types';

export const radiofrequencyAblation: ServiceData = {
  slug: 'radiofrequency-ablation',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Uses gentle heat to quiet the small nerves that send pain signals from a sore joint.',
    bestFor: 'Back, neck or SI joint pain that eased after a diagnostic block',
    time: '30–60 minutes',
    guidePain: 'Joint pain that helps with a block but returns',
    guideWhy: 'Often a longer lasting option after a block',
  },
  topic: 'radiofrequency ablation',
  seoTitle: 'Radiofrequency Ablation',
  seoDescription:
    'Radiofrequency ablation uses gentle heat to quiet pain nerves in the back, neck and SI joint. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/radiofrequency-ablation/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Gloved hands placing a thin needle on a sterile draped back",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/radiofrequency-ablation/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor guiding a needle on a patient's back during a procedure",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Radiofrequency Ablation',
    accent: 'Radiofrequency',
    lede: 'A gentle, targeted treatment that quiets the small nerves sending pain signals, so relief can last longer than an injection.',
    chips: ['No surgery', 'X-ray guided', 'Longer lasting relief', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '30–60 minutes' },
    { label: 'First step', value: 'A successful diagnostic block' },
    { label: 'Guidance', value: 'Live X-ray images' },
    { label: 'Relief', value: 'Can last months; results vary' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Quiet the nerve, calm the pain.',
    accent: 'Quiet',
    paragraphs: [
      'Some pain comes from tiny nerves that carry pain signals from a joint to your brain. Radiofrequency ablation, also called RFA, uses heat from a small needle to quiet those nerves.',
      'It is most often used for pain from the facet joints in the back and neck, and for pain from the sacroiliac (SI) joint near the tailbone. These nerves carry pain signals only. They do not control your muscles.',
      'We usually do RFA after a diagnostic block. If a block eases your pain for a short time, we know we have found the right nerves. RFA then aims to give relief that lasts longer. Results vary from person to person.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Test first, then treat.',
    accent: 'Test first',
    text: 'We only treat nerves that we have good reason to think cause your pain.',
    items: [
      { title: 'Diagnostic block', text: 'First, numbing medicine is placed near the pain nerves. If your pain drops for a few hours, it tells us these nerves are likely the source.' },
      { title: 'Heat treatment', text: 'A thin needle is guided to the nerve with live X-ray. A small amount of radiofrequency energy warms the tip and quiets the nerve.' },
      { title: 'Relief that can last', text: 'Nerves can slowly grow back over time. When they do, pain may return. If it does, the treatment can often be repeated.' },
    ],
    areas: ['Lower back (lumbar facets)', 'Neck (cervical facets)', 'SI joint'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Joint pain that keeps coming back.',
    accent: 'keeps coming back.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Facet joint arthritis',
      'Back or neck pain from wear and tear',
      'SI joint pain',
      'Pain after whiplash or injury',
      'Pain that returns after injections',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A dull ache in the back, neck or buttock',
      'Pain that gets worse with bending or twisting',
      'Relief after a diagnostic block, but only for a short time',
      'Pain that limits daily activity despite therapy',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have a pacemaker or other implanted device. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'Confirm with a block', text: 'Your doctor reviews your history and imaging. You usually have one or two diagnostic blocks first, to make sure RFA is a good choice.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear comfortable clothes and plan to have a ride home if you had sedation.' },
      { label: 'Treat', title: 'The ablation', text: 'You lie comfortably while we numb the skin. With live X-ray, we guide the needles to the nerves and treat each one. It takes about 30 to 60 minutes.' },
      { label: 'Recover', title: 'Rest and wait for relief', text: 'You go home the same day. The area may feel sore or sunburned for a few days. Relief often builds over two to three weeks.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, mild numbness or a sunburn feeling for a few days. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin and the area first. Most people feel pressure, and some feel a warm or tingling sensation during treatment. We check in with you the whole time.' },
    { q: 'How long does relief last?', a: 'It differs from person to person. Some people feel better for many months, and others for less time. Results vary.' },
    { q: 'Why do I need a block first?', a: 'The block tells us if these nerves are really the source of your pain. It helps us avoid treating nerves that would not help you.' },
    { q: 'What if the pain comes back?', a: 'Nerves can slowly grow back. If your pain returns after good relief, we can talk about repeating the treatment.' },
    { q: 'Can I go to work after?', a: 'Many people return to normal activity in a day or two. We suggest taking it easy on the first day.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan. Many plans ask for a successful block first. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Nerve procedures are a core part of her care.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
    { label: 'SI joint injections', href: '/services/si-joint-injections' },
    { label: 'Genicular nerve block / RFA', href: '/services/genicular-nerve-block' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
  ],

  cta: {
    title: 'Ready for longer relief?',
    accent: 'longer relief?',
    text: 'Book a visit and your doctor will tell you if radiofrequency ablation is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
