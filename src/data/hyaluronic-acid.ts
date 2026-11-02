// Content for /services/hyaluronic-acid (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2717258211 (hero.jpg) and 2697501705 (side.jpg).
import type { ServiceData } from './service-types';

export const hyaluronicAcid: ServiceData = {
  slug: 'hyaluronic-acid',
  category: 'regenerative-medicine',
  card: {
    short: 'A gel-like cushion placed in an arthritic joint to help it move with less pain.',
    bestFor: 'Knee, hip or shoulder arthritis that limits daily activity',
    time: '15–30 minutes',
    guidePain: 'Aching, stiff knee, hip or shoulder joint',
    guideWhy: 'Often osteoarthritis of the joint',
  },
  topic: 'hyaluronic acid injections',
  seoTitle: 'Hyaluronic Acid Injections',
  seoDescription:
    'Hyaluronic acid injections add a gel-like cushion to arthritic joints. Offered at our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/hyaluronic-acid/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor giving a knee injection next to a knee joint model",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/hyaluronic-acid/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor showing an injection into a hip joint model",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Regenerative medicine',
    name: 'Hyaluronic Acid Injections',
    accent: 'Hyaluronic',
    lede: 'A gel-like cushion placed in your joint, to help an arthritic knee, hip or shoulder move more comfortably.',
    chips: ['No surgery', 'Gel cushion for the joint', '1 to 5 visits', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'A gel-like fluid, hyaluronic acid' },
    { label: 'Series', value: '1 to 5 shots, depending on the product' },
    { label: 'Back to routine', value: 'Often within a day or two' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'A cushion for a worn joint.',
    accent: 'cushion',
    paragraphs: [
      'Healthy joints are filled with a slippery fluid. It helps the bones glide and absorbs shock. In osteoarthritis, this fluid can get thinner, and the joint may feel stiff and sore.',
      'Hyaluronic acid is a gel-like substance that is similar to a natural part of joint fluid. We inject it right into the joint. The goal is to add cushion and help the joint move with less pain.',
      'It does not rebuild worn cartilage. Some people feel better for several months, and others get little change. Results vary, and we talk with you about what is realistic.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Placed right where it is needed.',
    accent: 'right where',
    text: 'Your doctor can use ultrasound or X-ray to help place the gel inside the joint.',
    items: [
      { title: 'Single or series', text: 'Some products are one shot. Others are a series of up to five weekly shots. Your doctor will explain which fits your joint and plan.' },
      { title: 'Image guidance', text: 'Ultrasound or X-ray helps the needle reach the joint space, which is important in smaller or deeper joints such as the hip.' },
      { title: 'Part of a bigger plan', text: 'The gel works best with other care, such as strengthening, weight management and activity changes. We can also review other options.' },
    ],
    areas: ['Knee', 'Hip', 'Shoulder'],
    areasLabel: 'Joints we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Arthritis that slows you down.',
    accent: 'slows you down.',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Knee osteoarthritis',
      'Hip osteoarthritis',
      'Shoulder osteoarthritis',
      'Joint pain that did not improve with therapy or pain medicine',
      'Joint pain when steroid shots are not a good choice',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Aching in the joint, especially with walking or stairs',
      'Stiffness after rest or in the morning',
      'A grinding or creaky feeling when you move',
      'Pain that limits activities you enjoy',
    ],
    note: 'Tell us if you have a skin infection near the joint, a joint infection, or an allergy to injected products. Some products are made from bird sources, so mention any egg or feather allergy. Your doctor will decide if this treatment is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor asks about your joint, examines you and reviews any imaging. We talk about the options, costs and what to expect.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Wear comfortable clothes that let us reach the joint.' },
      { label: 'Treat', title: 'The injection', text: 'We clean and numb the skin. Then your doctor places the gel in the joint, often with ultrasound or X-ray. The shot itself takes only a few minutes.' },
      { label: 'Recover', title: 'Go easy for a day or two', text: 'You go home the same day. Avoid hard exercise for a day or two. If you have a series, you return for the next shots.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness, swelling or warmth in the joint for a day or two. Rarely, a joint can become more swollen and painful, or an infection can occur. Tell us right away if the joint becomes very hot, red or painful. We explain every risk before your treatment.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first. Most people feel pressure and a short pinch. The joint may feel sore for a day or two.' },
    { q: 'How long does it take to work?', a: 'It can take a few weeks to notice a change. It is not as fast as a steroid shot. Results vary from person to person.' },
    { q: 'How long does the relief last?', a: 'Some people feel better for several months. Others feel little or no change. We cannot promise a result, and we will talk about next steps if it does not help.' },
    { q: 'How is this different from a steroid injection?', a: 'A steroid lowers swelling in the joint. Hyaluronic acid adds a gel-like cushion instead. Your doctor can help you choose, and the two are sometimes used at different times.' },
    { q: 'Does it grow back my cartilage?', a: 'No. It does not rebuild worn cartilage. It aims to help the joint move more comfortably.' },
    { q: 'Does insurance cover it?', a: 'Coverage varies by plan and by joint. Insurance often does not cover it, so please call us. Our office explains the costs before treatment.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats arthritic joints with image-guided injections.',
    'natasha-mehta': 'Builds whole-person plans for joint pain, including movement and lifestyle care.',
    'jacob-hattenbach': 'Interventional spine and joint care, with a focus on precise needle placement.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Joint injections', href: '/services/joint-injections' },
    { label: 'PRP', href: '/services/prp' },
    { label: 'BMAC', href: '/services/bmac' },
    { label: 'A2M', href: '/services/a2m' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if hyaluronic acid injections are right for your joint.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
