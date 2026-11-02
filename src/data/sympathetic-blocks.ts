// Content for /services/sympathetic-blocks (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1710678673 (hero.jpg) and 1752980027 (side.jpg).
import type { ServiceData } from './service-types';

export const sympatheticBlocks: ServiceData = {
  slug: 'sympathetic-blocks',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Numbing medicine near a group of nerves that can affect pain, blood flow and sensitivity.',
    bestFor: 'Nerve-related pain, CRPS and pain from poor circulation',
    time: '20–40 minutes',
    guidePain: 'Burning, sensitive or color-changing limb pain',
    guideWhy: 'Often the sympathetic nerves',
  },
  topic: 'sympathetic nerve blocks',
  seoTitle: 'Sympathetic Blocks',
  seoDescription:
    'Sympathetic blocks, such as stellate ganglion and lumbar sympathetic blocks, can help some nerve-related pain. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/sympathetic-blocks/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor examining a patient's spine with the painful area highlighted",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/sympathetic-blocks/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor reviewing a spine X-ray",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Sympathetic Blocks',
    accent: 'Sympathetic',
    lede: 'A careful, image-guided injection near the sympathetic nerves, which may help some types of nerve-related pain.',
    chips: ['No surgery', 'Image-guided', 'Can help find the cause', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '20–40 minutes' },
    { label: 'Medicine', value: 'Numbing medicine' },
    { label: 'Guidance', value: 'Live X-ray or ultrasound' },
    { label: 'Relief', value: 'Varies; may be short or longer' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the nerves that stay on alert.',
    accent: 'Calm',
    paragraphs: [
      'The sympathetic nerves are part of your body\'s automatic system. They help control blood flow, sweating and how sensitive the skin feels. They run in chains along your spine.',
      'After an injury or in some nerve conditions, these nerves can stay overactive. This can add to burning pain, swelling, color changes or skin that is very sensitive to touch.',
      'A sympathetic block places numbing medicine near these nerves. For some people it eases pain and helps them take part in therapy. It can also help us understand the cause. Results vary from person to person.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Two common blocks.',
    accent: 'common blocks.',
    text: 'Imaging guides the needle, and the exact block depends on where your pain is.',
    items: [
      { title: 'Stellate ganglion block', text: 'The medicine goes in the front of the neck, near nerves that serve the head, neck, arm and upper chest. It is used for some arm and face pain conditions.' },
      { title: 'Lumbar sympathetic block', text: 'The medicine goes in the low back, near nerves that serve the leg and foot. It is used for some leg and foot pain conditions.' },
      { title: 'Learn how you respond', text: 'We watch for changes in pain and warmth in the limb. Your response helps us plan the next step, which may include therapy or other treatments.' },
    ],
    areas: ['Neck and arm (stellate)', 'Low back and leg (lumbar)'],
    areasLabel: 'Common block sites',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain that burns or feels too sensitive.',
    accent: 'burns',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Complex regional pain syndrome (CRPS)',
      'Nerve-related pain after an injury',
      'Pain linked to poor blood flow in a limb',
      'Burning pain that other care did not ease',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Burning or electric pain in an arm or leg',
      'Skin that is very sensitive to touch or temperature',
      'Swelling or color changes in the limb',
      'Pain that makes therapy or movement hard',
    ],
    note: 'Tell us if you take blood thinners, have an infection, have heart or lung problems, are pregnant, or have an allergy to medicines. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and reviews your history. You talk about whether this block fits your type of pain.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause and whether to avoid eating before the visit.' },
      { label: 'Treat', title: 'The block', text: 'We clean and numb the skin, then use imaging to guide a thin needle to the right spot. The medicine is placed slowly. It takes about 20 to 40 minutes.' },
      { label: 'Recover', title: 'Rest and be watched', text: 'You rest while our team checks how you feel. Most people go home the same day. We ask you to note your pain over the next days.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Temporary effects can include soreness, a warm or flushed limb, or a droopy eyelid and stuffy nose after a neck block. These usually pass. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk, and we watch you closely afterward.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp or unusual.' },
    { q: 'What is CRPS?', a: 'CRPS is a condition that can follow an injury. It may cause long-lasting burning pain, swelling and skin changes in a limb. Your doctor can explain how it applies to you.' },
    { q: 'How long does relief last?', a: 'It differs from person to person. Some people feel relief for hours or days, and some for longer. A block is often one part of a larger plan.' },
    { q: 'Why does my eyelid droop after a neck block?', a: 'This is a known, temporary effect of a stellate block. It happens because the nearby nerves are numbed. It usually wears off within hours.' },
    { q: 'Will I need more than one block?', a: 'Some people do. Your doctor will look at your response and decide if more blocks or other care makes sense.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan. Call us and we will help you check your benefits.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats complex nerve-related pain.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Spinal cord stimulation', href: '/services/spinal-cord-stimulation' },
    { label: 'Peripheral nerve stimulator', href: '/services/peripheral-nerve-stimulator' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
  ],

  cta: {
    title: 'Ready to calm nerve pain?',
    accent: 'calm nerve pain?',
    text: 'Book a visit and your doctor will tell you if a sympathetic block is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
