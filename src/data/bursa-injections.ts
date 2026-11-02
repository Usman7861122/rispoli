// Content for /services/bursa-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1901209261 (hero.jpg) and 1906119736 (side.jpg).
import type { ServiceData } from './service-types';

export const bursaInjections: ServiceData = {
  slug: 'bursa-injections',
  category: 'joint-and-soft-tissue',
  card: {
    short: 'A guided injection that calms an inflamed bursa, the small cushion near a joint.',
    bestFor: 'Shoulder, hip, elbow or knee pain from bursitis',
    time: '15–20 minutes',
    guidePain: 'Tender, achy spot near a joint',
    guideWhy: 'Often an irritated bursa',
  },
  topic: 'bursa injections',
  seoTitle: 'Bursa Injections',
  seoDescription:
    'Bursa injections calm bursitis pain in the shoulder, hip, elbow and knee. Offered at our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/bursa-injections/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Ultrasound-guided injection into a patient's shoulder",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/bursa-injections/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor guiding a shoulder injection with an ultrasound probe",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Joint & soft tissue',
    name: 'Bursa Injections',
    accent: 'Bursa',
    lede: 'A targeted injection that calms an irritated bursa, so your shoulder, hip, elbow or knee hurts less.',
    chips: ['No surgery', 'Ultrasound-guided', 'About 15–20 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–20 minutes' },
    { label: 'Medicine', value: 'Numbing medicine and a steroid' },
    { label: 'Guidance', value: 'Ultrasound' },
    { label: 'Back to routine', value: 'Often the next day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Settle the sore cushion.',
    accent: 'Settle',
    paragraphs: [
      'A bursa is a small, flat sac filled with a little fluid. Bursae sit between bones and soft tissue, such as muscle and tendon. They act like tiny cushions and help things glide.',
      'When a bursa is irritated, it can swell and hurt. This is called bursitis. It can come from overuse, pressure, an injury or arthritis nearby.',
      'A bursa injection places numbing medicine and a steroid in or around the sore bursa. The steroid lowers swelling. Many people feel better in a few days.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Small target, careful aim.',
    accent: 'careful aim.',
    text: 'A bursa is thin and lies close to tendons, so we use ultrasound to place the medicine with care.',
    items: [
      { title: 'See the bursa', text: 'Ultrasound shows the swollen bursa and the tissue around it. This helps confirm that the bursa is the source of your pain.' },
      { title: 'Place the medicine', text: 'Your doctor guides a thin needle to the bursa and places the medicine there. The needle is watched on the screen the whole time.' },
      { title: 'Protect and rebuild', text: 'Rest, gentle stretching and strengthening help keep the bursa from flaring again. We can suggest a therapy plan.' },
    ],
    areas: ['Shoulder', 'Hip', 'Elbow', 'Knee'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain you can point to.',
    accent: 'point to.',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Shoulder bursitis',
      'Hip bursitis, including pain on the outer hip',
      'Elbow bursitis',
      'Knee bursitis',
      'Bursitis that has not eased with rest or therapy',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A tender spot near a joint',
      'Pain when you press on the area or lie on that side',
      'Pain with reaching overhead, climbing stairs or standing up',
      'Mild swelling or warmth over the sore spot',
    ],
    note: 'Tell us if you take blood thinners, have diabetes, have an infection, or have an allergy to medicines. Redness, heat and fever need a check first, because an infected bursa needs a different treatment. Your doctor will decide if this injection is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor asks about your pain, presses on the area and checks how the joint moves. We may use ultrasound to confirm bursitis.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Wear loose clothes that let us reach the area.' },
      { label: 'Treat', title: 'The injection', text: 'We clean and numb the skin. Then your doctor uses ultrasound to guide a thin needle to the bursa and place the medicine. It takes about 15 to 20 minutes.' },
      { label: 'Recover', title: 'Rest, then ease back in', text: 'You go home the same day. Rest the area for a day or two, then return to activity slowly. The steroid can take a few days to work fully.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness where the needle went in, a warm flush, or a short rise in blood sugar if you have diabetes. A steroid can thin or lighten the skin at the spot. Serious problems, such as infection or bleeding, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. The area may be sore for a day or two.' },
    { q: 'How soon will I feel better?', a: 'The numbing medicine can help within minutes, but it wears off in a few hours. The steroid often takes several days to build up. Results vary.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for weeks or longer. Bursitis can return if the cause, such as overuse, is not addressed.' },
    { q: 'Can I keep exercising?', a: 'Rest the area for a day or two. After that, gentle movement and stretching usually help. Your doctor or therapist will guide you.' },
    { q: 'What if it does not help?', a: 'Pain near a joint can come from tendons, the joint itself or other sources. If the bursa is not the cause, we look at other treatments.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover bursa injections when they are medically needed. Coverage depends on your plan, so please call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who uses ultrasound for precise soft tissue injections.',
    'natasha-mehta': 'Treats joint and muscle pain with a whole-person plan, including therapy and lifestyle care.',
    'jacob-hattenbach': 'Interventional spine care physician who treats pain around the hip and shoulder.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Joint injections', href: '/services/joint-injections' },
    { label: 'Tendon injections', href: '/services/tendon-injections' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'PRP', href: '/services/prp' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if a bursa injection is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
