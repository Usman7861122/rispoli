// Content for /services/botox-migraine-spasms (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2550433525 (hero.jpg) and 2758162177 (side.jpg).
import type { ServiceData } from './service-types';

export const botoxMigraineSpasms: ServiceData = {
  slug: 'botox-migraine-spasms',
  category: 'botox',
  card: {
    short: 'Medical Botox can help prevent chronic migraine and calm muscle spasms.',
    bestFor: 'Chronic migraine, stiff muscles and spasms',
    time: '15–30 minutes',
    guidePain: 'Headaches on most days of the month',
    guideWhy: 'Often chronic migraine or muscle spasm',
  },
  topic: 'Botox for migraine and muscle spasms',
  seoTitle: 'Botox for Migraine & Spasms',
  seoDescription:
    'Medical Botox can help prevent chronic migraine and ease muscle spasms. Offered in our Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/botox-migraine-spasms/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Woman with migraine pain pressing her forehead",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/botox-migraine-spasms/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Woman with a severe headache holding her head",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Botox',
    name: 'Botox for Migraine & Spasms',
    accent: 'Migraine',
    lede: 'A medical treatment that can help prevent chronic migraine and ease muscle spasms that do not settle on their own.',
    chips: ['Not cosmetic', 'Helps prevent migraine', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Botulinum toxin (Botox)' },
    { label: 'Repeat visits', value: 'Often about every 12 weeks' },
    { label: 'Back to routine', value: 'Often the same day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Fewer headaches, calmer muscles.',
    accent: 'calmer muscles.',
    paragraphs: [
      'Botox is a medicine made from a purified protein. It has approved medical uses beyond looks. One is to help prevent headaches in adults with chronic migraine. Another is to treat muscles that are too tight or in spasm.',
      'For migraine, Botox is given as a set of small injections around the head, neck and shoulders. It is used to prevent headaches, not to stop one that has already started. It is usually considered when you have headaches on many days each month, often 15 or more, and other options have not helped enough.',
      'For spasms, Botox blocks the signal that tells a muscle to keep tightening. This can help with stiffness, spasticity and dystonia-type spasms that come from some brain, nerve or muscle conditions. Results vary, and the effect wears off over time.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Two uses, one careful plan.',
    accent: 'one careful plan.',
    text: 'Your doctor builds the plan around your condition, your exam and your goals.',
    items: [
      { title: 'Migraine prevention', text: 'Small injections go into set spots around the forehead, temples, back of the head, neck and shoulders. Treatment is often repeated about every 12 weeks.' },
      { title: 'Spasticity and stiffness', text: 'Botox is placed into the tight muscles that pull a limb or joint out of position. This can make movement, positioning and care easier.' },
      { title: 'Dystonia-type spasms', text: 'For muscles that twist or pull on their own, such as in the neck, small doses go into the muscles involved. Your doctor may use ultrasound to guide the needle.' },
    ],
    areas: ['Head, neck and shoulders', 'Arms and hands', 'Legs and feet'],
    areasLabel: 'Areas we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'When headaches or spasms are frequent.',
    accent: 'frequent.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Chronic migraine',
      'Spasticity after a stroke or brain injury',
      'Dystonia-type muscle spasms',
      'Neck spasm that pulls the head to one side',
      'Muscle stiffness from a nerve condition',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Headaches on about 15 or more days a month',
      'Migraine that has not improved enough with other care',
      'Muscles that stay tight or pull on their own',
      'Spasms that limit movement or cause pain',
    ],
    note: 'Tell us if you are pregnant or nursing, have a nerve or muscle disease, have an allergy to Botox, or have a skin infection near the area. Your doctor will decide if Botox is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor reviews your headache or spasm history, your past treatments and your exam. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare. For migraine, a headache diary can help. Come with clean skin and no heavy makeup on the area.' },
      { label: 'Treat', title: 'The injections', text: 'We place a set of small injections with a very thin needle. It takes about 15 to 30 minutes. Most people say it feels like quick pinches.' },
      { label: 'Recover', title: 'Go home and track change', text: 'You can usually go home right away. Effects build slowly over days to weeks. We ask you to track your headaches or spasms, and we plan a follow-up.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Common effects are soreness where the needle went in, a mild headache or neck stiffness. Some people have a droopy eyelid or temporary weakness in nearby muscles. Rarely, the effect can spread and cause trouble swallowing, breathing or speaking. Get urgent help if that happens. We explain every risk before treatment.',
  },

  faqs: [
    { q: 'Does Botox stop a migraine that has started?', a: 'No. It is used to help prevent migraine over time. It is not a rescue treatment for a headache that has already begun.' },
    { q: 'How do I know if I have chronic migraine?', a: 'Doctors usually call it chronic migraine when you have headaches on 15 or more days a month, and many of them have migraine features. Your doctor will review your history to be sure.' },
    { q: 'How long until it works?', a: 'It can take a few weeks to notice a change. Some people need more than one round of treatment to see the full effect. Results vary.' },
    { q: 'How long does it last?', a: 'The effect slowly wears off. Treatment is often repeated about every 12 weeks. Your doctor will talk with you about the right timing.' },
    { q: 'Does it hurt?', a: 'The needle is very thin. Most people feel quick pinches. Tell us if you feel anything more than that.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan. Many plans ask for proof of past treatments first. Call our office and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats headache and muscle pain.',
    'natasha-mehta': 'Brain injury medicine specialist who treats spasticity and muscle tightness.',
  } as Record<string, string>,
  locationSlugs: ['marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Botox for pain', href: '/services/botox-for-pain' },
    { label: 'Occipital nerve block', href: '/services/occipital-nerve-block' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if Botox for migraine or spasms is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
