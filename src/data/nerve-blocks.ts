// Content for /services/nerve-blocks (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1096409630 (hero.jpg) and 2626261565 (side.jpg).
import type { ServiceData } from './service-types';

export const nerveBlocks: ServiceData = {
  slug: 'nerve-blocks',
  category: 'nerve-blocks-and-ablation',
  card: {
    short: 'Places numbing medicine near a specific nerve to ease pain and show us where it comes from.',
    bestFor: 'Pain tied to one nerve or area',
    time: '15–30 minutes',
    guidePain: 'Pain in one spot that we need to pinpoint',
    guideWhy: 'Often a single irritated nerve',
  },
  topic: 'nerve blocks',
  seoTitle: 'Nerve Blocks',
  seoDescription:
    'Targeted nerve blocks ease pain and help find its source. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/nerve-blocks/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor examining a patient's upper back",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/nerve-blocks/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor reviewing spine X-rays",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve blocks & ablation',
    name: 'Nerve Blocks',
    accent: 'Nerve',
    lede: 'A precise injection near a nerve that can ease pain now and help us learn where your pain comes from.',
    chips: ['No surgery', 'Image-guided', 'Pain relief and answers', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Numbing medicine, sometimes a steroid' },
    { label: 'Guidance', value: 'Ultrasound or X-ray images' },
    { label: 'Back to routine', value: 'Often the same or next day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Aim at the nerve, find the source.',
    accent: 'Aim',
    paragraphs: [
      'A nerve block is an injection of medicine near a nerve or group of nerves. The medicine interrupts pain signals from that area for a time.',
      'Blocks can ease pain so you can move, rest and take part in therapy. Some blocks also include a steroid to calm swelling around the nerve.',
      'A block is also a useful test. If your pain drops after a block, it tells us which nerve is likely involved. That helps us choose the next step, which may include a longer lasting treatment. Results vary.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Treat the right nerve.',
    accent: 'right nerve.',
    text: 'Ultrasound or X-ray lets your doctor see the needle and place the medicine with care.',
    items: [
      { title: 'Pain relief block', text: 'Numbing medicine, sometimes with a steroid, is placed near the sore nerve. It can ease pain for hours to weeks, and sometimes longer.' },
      { title: 'Diagnostic block', text: 'A small amount of numbing medicine is used to test a nerve. If your pain drops for a short time, it points to the source.' },
      { title: 'Plan the next step', text: 'Your response guides us. We may repeat the block, add therapy, or discuss options such as radiofrequency ablation.' },
    ],
    areas: ['Head, neck and shoulder', 'Arm, hand and wrist', 'Back, hip and leg'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain you can point to.',
    accent: 'point to.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Pinched or irritated nerves',
      'Pain after surgery or injury',
      'Shoulder, hip or knee nerve pain',
      'Headache and facial pain conditions',
      'Pain where the source is not yet clear',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Sharp, burning or shooting pain in one area',
      'Pain along the path of a nerve',
      'Pain that stays after rest and therapy',
      'Pain that makes sleep or activity hard',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have an allergy to medicines. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and reviews your imaging. You choose the plan together and can ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear clothes that give easy access to the area.' },
      { label: 'Treat', title: 'The block', text: 'We clean and numb the skin. Using ultrasound or X-ray, we guide a thin needle near the nerve and place the medicine. It takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest and track your relief', text: 'You rest briefly and go home the same day. The area may feel numb or heavy for a few hours. Note your pain over the next days so we can see how it worked.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, temporary numbness or weakness, or a short rise in blood sugar if you have diabetes and had a steroid. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp or electric.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Numbing medicine wears off in hours, but pain relief can last longer. With a steroid, relief may last weeks or more. Results vary.' },
    { q: 'Why is my area numb or weak after?', a: 'The numbing medicine also affects the nerve\'s normal signals for a while. This is expected and wears off. Take care when walking or using the area.' },
    { q: 'Can a block show the cause of my pain?', a: 'Often it can help. If pain drops after a block, that nerve is likely involved. It is one clue, and your doctor will look at it with your history and exam.' },
    { q: 'Can I have more than one?', a: 'Yes, in many cases. Your doctor will decide how many make sense for you and how far apart they should be.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan. Call us and we will help you check your benefits.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Image-guided nerve procedures are a core part of her care.',
    'natasha-mehta': 'Treats pain with a whole-person plan and helps guide next steps after a block.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Occipital nerve block', href: '/services/occipital-nerve-block' },
    { label: 'Sympathetic blocks', href: '/services/sympathetic-blocks' },
    { label: 'Nerve hydrodissection', href: '/services/nerve-hydrodissection' },
  ],

  cta: {
    title: 'Ready to find relief?',
    accent: 'find relief?',
    text: 'Book a visit and your doctor will tell you if a nerve block is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
