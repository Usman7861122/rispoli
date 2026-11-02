// Content for /services/prp (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1901210437 (hero.jpg) and 626250311 (side.jpg).
import type { ServiceData } from './service-types';

export const prp: ServiceData = {
  slug: 'prp',
  category: 'regenerative-medicine',
  card: {
    short: 'Uses platelets from your own blood to support healing in sore tendons, joints and soft tissue.',
    bestFor: 'Tendon, joint and soft-tissue pain that lingers',
    time: '45–90 minutes',
    guidePain: 'A tendon or joint that will not heal',
    guideWhy: 'Often a tendon, ligament or joint problem',
  },
  topic: 'PRP injections',
  seoTitle: 'PRP Injections',
  seoDescription:
    'PRP uses concentrated platelets from your own blood to support healing in sore tendons and joints. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/prp/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Blood samples spinning in a laboratory centrifuge",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/prp/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Gloved hand holding blood tubes separated into layers",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Regenerative medicine',
    name: 'PRP (Platelet-Rich Plasma)',
    accent: 'Platelet-Rich Plasma',
    lede: 'A treatment that uses your own blood to support the healing of sore tendons, joints and soft tissue.',
    chips: ['Your own blood', 'No surgery', 'Often ultrasound-guided', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '45–90 minutes' },
    { label: 'Made from', value: 'A small sample of your own blood' },
    { label: 'Guidance', value: 'Often live ultrasound' },
    { label: 'Back to routine', value: 'Often within a few days' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Your own blood, put to work.',
    accent: 'put to work.',
    paragraphs: [
      'Platelets are tiny cells in your blood. They help your body start to heal after an injury. PRP stands for platelet-rich plasma. It is a small amount of your own blood that has a higher number of platelets than usual.',
      'We draw a small sample of blood, much like a regular lab test. We spin it in a machine called a centrifuge. This separates the platelets from the rest of the blood. Your doctor then injects the platelet-rich part into or near the sore area.',
      'PRP is used for some tendon, joint and soft-tissue problems. Research is still growing, and results vary from person to person. It may not work for everyone. Your doctor will talk with you about what to expect.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'From your arm to the sore spot.',
    accent: 'sore spot.',
    text: 'Your doctor often uses ultrasound to see the area and place the PRP with care.',
    items: [
      { title: 'Blood draw', text: 'We take a small amount of blood from your arm. Because it is your own blood, there is no risk of a reaction to donor material.' },
      { title: 'Spin and concentrate', text: 'The blood is spun in a centrifuge to concentrate the platelets. This takes only a few minutes in the office.' },
      { title: 'Guided injection', text: 'After numbing the skin, your doctor injects the PRP into the tendon, joint or soft tissue. Ultrasound helps place it where it is needed.' },
    ],
    areas: ['Knee, hip and shoulder', 'Elbow, wrist and hand', 'Ankle, foot and heel'],
    areasLabel: 'Areas we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain that has not healed with time.',
    accent: 'not healed',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Tennis or golfer’s elbow',
      'Tendon pain in the shoulder, knee or heel',
      'Mild to moderate knee arthritis',
      'Ligament and soft-tissue strains',
      'Plantar fasciitis',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain that has lasted for months',
      'Little help from rest, therapy or medicine',
      'Pain that limits sports or daily activity',
      'You want to try a non-surgical option',
    ],
    note: 'Tell us if you take blood thinners, have a blood disorder, have an infection or have cancer. Your doctor will decide if PRP is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and looks at your imaging. You talk through the choices, the cost and any question you have.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare. You may be asked to pause anti-inflammatory pills for a time. Drink water and eat before your visit.' },
      { label: 'Treat', title: 'Blood draw and injection', text: 'We draw your blood, prepare the PRP and numb the skin. Your doctor then places the PRP with a thin needle. The whole visit often takes 45 to 90 minutes.' },
      { label: 'Recover', title: 'Rest, then ease back in', text: 'You go home the same day. The area may be sore for a few days. We give you a plan for rest, light movement and when to return to activity.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Because PRP comes from your own blood, allergic reactions are not expected. The most common effects are soreness, swelling or stiffness for a few days. Infection, bleeding and nerve irritation are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first. Most people feel pressure and some soreness. The area can ache for a few days after, which is common.' },
    { q: 'How long until I feel a change?', a: 'PRP works slowly. Many people notice changes over weeks, not days. Results vary, and some people do not feel a change.' },
    { q: 'Will I need more than one treatment?', a: 'Some people have one treatment and some have a series. Your doctor will talk with you about the plan after your first visit.' },
    { q: 'Can I take pain medicine after?', a: 'Often we suggest acetaminophen. Anti-inflammatory pills may be paused around the visit. Follow the advice your doctor gives you.' },
    { q: 'Is PRP safe?', a: 'It uses your own blood, so it is generally well tolerated. Like any injection, it has small risks. We review them with you first.' },
    { q: 'Does insurance cover it?', a: 'Insurance often does not cover PRP. Our office explains the cost to you before treatment, so there are no surprises.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who offers regenerative options for joints and tendons.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care and ultrasound-guided injections.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'BMAC', href: '/services/bmac' },
    { label: 'A2M', href: '/services/a2m' },
    { label: 'Tendon injections', href: '/services/tendon-injections' },
    { label: 'Joint injections', href: '/services/joint-injections' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if PRP is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
