// Content for /services/botox-for-pain (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2504260859 (hero.jpg) and 2271554189 (side.jpg).
import type { ServiceData } from './service-types';

export const botoxForPain: ServiceData = {
  slug: 'botox-for-pain',
  category: 'botox',
  card: {
    short: 'Medical Botox relaxes tight, painful muscles in the neck, shoulders and back.',
    bestFor: 'Muscle pain, tension and spasm that keep coming back',
    time: '15–30 minutes',
    guidePain: 'Tight, knotted muscles in my neck or shoulders',
    guideWhy: 'Often muscle tension or spasm',
  },
  topic: 'Botox for pain',
  seoTitle: 'Botox for Pain',
  seoDescription:
    'Medical Botox can relax tight, painful muscles in the neck, shoulders and back. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/botox-for-pain/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor giving a small injection in a patient's upper back muscle",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/botox-for-pain/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor talking with a patient about their treatment plan",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Botox',
    name: 'Botox for Pain',
    accent: 'Botox',
    lede: 'A medical use of Botox that relaxes overactive muscles, so tight necks, shoulders and backs can hurt less.',
    chips: ['Not cosmetic', 'No surgery', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Botulinum toxin (Botox)' },
    { label: 'How it works', value: 'Relaxes the muscle for a time' },
    { label: 'Back to routine', value: 'Often the same day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Let tight muscles let go.',
    accent: 'let go.',
    paragraphs: [
      'Many people know Botox from the beauty world. In medicine, it is also used to treat pain. This page is about that medical use, not cosmetic Botox.',
      'Some muscles stay tight or go into spasm. They can pull on the neck, shoulders or back and cause a deep, steady ache. Botox blocks the signal that tells the muscle to keep tightening. The muscle relaxes, and the pain from the tension can ease.',
      'Botox does not work for every kind of pain. Your doctor will check your muscles and your history first. We use it when muscle tightness looks like a main part of your pain. Results vary, and the effect wears off over time.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Small doses, placed with care.',
    accent: 'with care.',
    text: 'Your doctor chooses the muscles and the dose based on your exam and your pain.',
    items: [
      { title: 'Muscle injections', text: 'A very thin needle places Botox into the tight muscles. You may get several small injections in one area.' },
      { title: 'Guided placement', text: 'Your doctor finds the right spot by touch and anatomy. Ultrasound can help in some cases to guide the needle.' },
      { title: 'A slow, steady effect', text: 'Botox does not work right away. Many people notice a change after several days to two weeks. The effect wears off, so some people repeat treatment.' },
    ],
    areas: ['Neck and upper back', 'Shoulders', 'Jaw and facial muscles'],
    areasLabel: 'Areas we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain from muscles that stay tight.',
    accent: 'stay tight.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Neck and shoulder tension',
      'Muscle spasm pain',
      'Pain in the upper back muscles',
      'Jaw muscle tightness',
      'Pain that stays after therapy and other care',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Tight, knotted muscles that do not relax',
      'Pain that comes with muscle spasm',
      'Aching in the neck or shoulders by the end of the day',
      'Little lasting relief from stretching or massage',
    ],
    note: 'Tell us if you are pregnant or nursing, have a nerve or muscle disease, have an allergy to Botox, or have a skin infection near the area. Your doctor will decide if Botox is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines your muscles and reviews your history. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should mention. Wear clothes that let us reach the area.' },
      { label: 'Treat', title: 'The injections', text: 'We clean the skin and place small injections into the chosen muscles. It takes about 15 to 30 minutes, and most people say it feels like quick pinches.' },
      { label: 'Recover', title: 'Go home and watch for change', text: 'You can usually go home right away. Avoid heavy rubbing of the area for the rest of the day. We ask you to track your pain over the next weeks.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, small bruises or a mild headache. Some people feel temporary weakness in nearby muscles. Rarely, the effect can spread and cause trouble swallowing, breathing or seeing. Call us or get urgent help if that happens. We explain every risk before treatment.',
  },

  faqs: [
    { q: 'Is this the same as cosmetic Botox?', a: 'It is the same medicine, but the goal is different. Here we use it to ease muscle-related pain, not to change how your face looks.' },
    { q: 'Does it hurt?', a: 'The needle is very thin. Most people feel a few quick pinches. Tell us if you feel anything more than that.' },
    { q: 'How long until it works?', a: 'Botox is not instant. Many people notice a change after several days to two weeks. Results vary.' },
    { q: 'How long does it last?', a: 'The effect wears off slowly, often over about three months. Some people repeat the treatment if it helps them. Your doctor will talk with you about the timing.' },
    { q: 'Will my muscles feel weak?', a: 'The treated muscle may feel a bit weaker for a time. We use careful doses to lower that chance. Tell us if weakness worries you.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan and on the reason for treatment. Call our office and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats muscle and nerve pain.',
    'natasha-mehta': 'Treats muscle pain and spasm with a whole-person plan.',
    'jacob-hattenbach': 'Physiatrist focused on spine and muscle-related pain.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Botox for migraine and spasms', href: '/services/botox-migraine-spasms' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'Occipital nerve block', href: '/services/occipital-nerve-block' },
    { label: 'Medical acupuncture', href: '/services/medical-acupuncture' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if Botox for pain is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
