// Content for /services/tendon-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1916554316 (hero.jpg) and 1911535822 (side.jpg).
import type { ServiceData } from './service-types';

export const tendonInjections: ServiceData = {
  slug: 'tendon-injections',
  category: 'joint-and-soft-tissue',
  card: {
    short: 'A careful, ultrasound-guided injection around an irritated tendon to ease pain.',
    bestFor: 'Tendon pain in the shoulder, elbow, wrist, hip, knee or heel',
    time: '15–30 minutes',
    guidePain: 'Pain along a tendon with movement',
    guideWhy: 'Often tendon irritation or tendinopathy',
  },
  topic: 'tendon injections',
  seoTitle: 'Tendon Injections',
  seoDescription:
    'Tendon injections place medicine around a sore tendon with ultrasound guidance. Offered at our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/tendon-injections/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Ultrasound-guided injection near the elbow tendon",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/tendon-injections/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor guiding an injection with ultrasound at the shoulder",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Joint & soft tissue',
    name: 'Tendon Injections',
    accent: 'Tendon',
    lede: 'A careful injection around a sore tendon, guided by ultrasound, to ease pain and help you move again.',
    chips: ['No surgery', 'Ultrasound-guided', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Medicine', value: 'Numbing medicine, sometimes a steroid' },
    { label: 'Guidance', value: 'Live ultrasound' },
    { label: 'Back to routine', value: 'Often after a few days of rest' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Soothe the tendon with care.',
    accent: 'Soothe',
    paragraphs: [
      'Tendons are strong cords that connect muscle to bone. They help you lift, grip, walk and climb. Overuse, age or an injury can make a tendon sore and swollen.',
      'Many tendons run inside a thin sleeve called a sheath. A tendon injection places medicine in the sheath or in the space around the tendon. It is meant to calm swelling in the tissue around it.',
      'Ultrasound lets your doctor see the tendon move and place the needle with care. The medicine is not placed into the tendon itself.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Placed around the tendon, not in it.',
    accent: 'around the tendon,',
    text: 'Steroid near a tendon needs extra care, so your doctor chooses the medicine and the spot carefully.',
    items: [
      { title: 'Watch it live', text: 'Ultrasound shows the tendon, the sheath and the needle in real time. This helps keep the needle out of the tendon.' },
      { title: 'Steroid with caution', text: 'A steroid can lower swelling, but it can weaken a tendon if it is placed in the tendon. Your doctor decides if it is right for you and uses the lowest amount that makes sense.' },
      { title: 'Other options', text: 'PRP is another option for some tendon problems. It uses a small sample of your own blood. We can talk about whether it fits your case.' },
    ],
    areas: ['Shoulder', 'Elbow', 'Wrist and hand', 'Hip and knee', 'Ankle and heel'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Tendon pain that will not settle.',
    accent: 'will not settle.',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Tendinitis or tendinopathy',
      'Tennis elbow or golfer\'s elbow',
      'Rotator cuff tendon irritation',
      'Trigger finger or wrist tendon sheath pain',
      'Tendon pain that has not eased with rest or therapy',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain along a tendon when you use it',
      'Tenderness when you press on the tendon',
      'Stiffness or catching when you move',
      'Pain that returns when you go back to activity',
    ],
    note: 'Tell us if you take blood thinners, have diabetes, have an infection, or have an allergy to medicines. If you have a tendon tear, your doctor will plan carefully and may suggest a different approach.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor examines the area and may use ultrasound to look at the tendon. You talk through the choices, including what medicine to use.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine to pause. Wear loose clothes that let us reach the area.' },
      { label: 'Treat', title: 'The injection', text: 'We clean and numb the skin. Then your doctor guides a thin needle to the space around the tendon with ultrasound and places the medicine. It takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest the tendon first', text: 'You go home the same day. Avoid heavy use of the tendon for a few days, as your doctor advises. Then we build up with gentle exercise or therapy.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness for a day or two. A steroid near a tendon carries a small risk of weakening it, which is why your doctor places it around the tendon and not in it. It can also thin or lighten the skin at the spot. Infection and bleeding are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. The area may be sore for a day or two.' },
    { q: 'Is a steroid shot near a tendon safe?', a: 'It can be, when it is placed with care. A steroid should not go into the tendon, because that may weaken it. We use ultrasound so your doctor can aim for the space around the tendon.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for weeks or months. A tendon often needs rest and exercise too, to keep the pain from coming back.' },
    { q: 'What is PRP, and could it help?', a: 'PRP uses a small sample of your own blood to make a concentrated treatment. It is another option for some tendon problems. Insurance often does not cover it, and the office explains costs before treatment.' },
    { q: 'Can I exercise after?', a: 'Rest the tendon for a few days, then return slowly. Strengthening exercises often help the tendon heal. Your doctor or therapist will guide you.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover tendon sheath injections when they are medically needed. Coverage depends on your plan, so please call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who uses ultrasound to guide soft tissue injections.',
    'natasha-mehta': 'Treats tendon and muscle pain with a whole-person plan, including rehab and lifestyle care.',
    'jacob-hattenbach': 'Interventional spine care physician who uses imaging to place injections with care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Bursa injections', href: '/services/bursa-injections' },
    { label: 'Joint injections', href: '/services/joint-injections' },
    { label: 'PRP', href: '/services/prp' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if tendon injections are right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
