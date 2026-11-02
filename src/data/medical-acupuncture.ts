// Content for /services/medical-acupuncture (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2623646109 (hero.jpg) and 2731974929 (side.jpg).
import type { ServiceData } from './service-types';

export const medicalAcupuncture: ServiceData = {
  slug: 'medical-acupuncture',
  category: 'pelvic-care',
  card: {
    short: 'Very thin needles placed by a licensed physician to help ease pain, as part of your care plan.',
    bestFor: 'Pain and tension that you want to ease without more medicine',
    time: '30–45 minutes',
    guidePain: 'Ongoing pain or tension, and you want a gentle option',
    guideWhy: 'Often muscle, nerve or pelvic pain',
  },
  topic: 'medical acupuncture',
  seoTitle: 'Medical Acupuncture',
  seoDescription:
    'Medical acupuncture from a licensed physician can help ease pain as part of a care plan. Offered in our Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/medical-acupuncture/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Fine acupuncture needles placed in the neck and shoulder",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/medical-acupuncture/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Practitioner placing acupuncture needles along a patient's back",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Pelvic care & more',
    name: 'Medical Acupuncture',
    accent: 'Medical',
    lede: 'Fine, sterile needles placed by a licensed physician to help ease pain and tension, as one part of a plan made for you.',
    chips: ['Licensed physician', 'Drug-free option', 'Fits a care plan', 'Calm and relaxing'],
  },

  facts: [
    { label: 'Time', value: '30–45 minutes' },
    { label: 'Tools', value: 'Single-use, sterile, hair-thin needles' },
    { label: 'Provided by', value: 'A licensed physician' },
    { label: 'Back to routine', value: 'Right away' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Gentle needles, guided by medicine.',
    accent: 'Gentle needles,',
    paragraphs: [
      'Acupuncture uses very thin needles placed at chosen points on the body. Medical acupuncture is done by a licensed physician. Your doctor combines it with a full medical exam, your history and your tests.',
      'Researchers are still studying exactly how acupuncture works. It may affect muscles, nerves and the way the body senses pain. Many people find it helpful for pain and for feeling more relaxed, but results vary from person to person.',
      'We use it as one part of your plan, not as a stand-alone cure. It can be paired with therapy, exercise, medicine or injections. It is a good fit for people who want a gentle, low-risk option to add.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'A plan that fits you.',
    accent: 'fits you.',
    text: 'Your doctor chooses the points and the number of needles based on your pain and your exam.',
    items: [
      { title: 'Needle points', text: 'Fine needles are placed in the skin and muscle at selected points. You may feel a light pressure, warmth or heaviness. Most people find it relaxing.' },
      { title: 'Added techniques', text: 'Some visits add gentle electrical pulses on the needles, or warm heat. Your doctor explains if these are used and checks that you are comfortable.' },
      { title: 'A series of visits', text: 'Acupuncture often works best over several visits. Your doctor tracks your pain and changes the plan as you go.' },
    ],
    areas: ['Back, neck and joints', 'Muscle tension and headaches', 'Pelvic and abdominal pain'],
    areasLabel: 'Pain we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'A gentle option to add.',
    accent: 'gentle option',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Low back and neck pain',
      'Knee and other joint pain',
      'Tension headaches and migraine',
      'Muscle pain and tightness',
      'Pelvic pain, as part of a care plan',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain that lingers despite other care',
      'You want to use less pain medicine',
      'You prefer a gentle, hands-on approach',
      'You want a low-risk option to add to your plan',
    ],
    note: 'Tell us if you take blood thinners, have a bleeding problem, have a pacemaker, are pregnant, or have an infection or skin problem where needles would go. Your doctor will decide if acupuncture is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We start with your story', text: 'Your doctor listens, examines you and talks through your goals. You decide together if acupuncture fits your plan.' },
      { label: 'Prepare', title: 'You get ready', text: 'Eat a light meal first and wear loose clothes. Tell us about any medicine you take.' },
      { label: 'Treat', title: 'The needles', text: 'You rest comfortably while the doctor places the needles. They stay in for about 20 to 30 minutes. You can ask to adjust anything.' },
      { label: 'Recover', title: 'Easy aftercare', text: 'You can go back to your day right away. Drink water and rest if you feel tired. We check in on how you feel at the next visit.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Acupuncture is generally low risk when done by a trained physician with sterile, single-use needles. Common effects are mild soreness, a small bruise or feeling sleepy. Rare problems include infection, bleeding or fainting. We explain every risk before treatment.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'The needles are much thinner than those used for shots. Most people feel little or a light pinch. Some feel a dull ache or warmth at the point.' },
    { q: 'How is medical acupuncture different?', a: 'It is given by a licensed physician who also understands your health history and tests. It is part of your medical plan.' },
    { q: 'How many visits will I need?', a: 'It varies. Many people try a series of visits and then we review how it is working. Results vary.' },
    { q: 'Does it work for everyone?', a: 'No. Some people feel a lot of relief, some a little, and some none. If it does not help, we move to other options.' },
    { q: 'Can I combine it with other treatments?', a: 'Yes. It often goes well with therapy, exercise, medicine and injections. Your doctor will plan it with you.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan, and many plans cover only certain conditions. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who uses acupuncture alongside other pain care.',
    'natasha-mehta': 'Uses a whole-person approach, including lifestyle medicine, to ease pain.',
  } as Record<string, string>,
  locationSlugs: ['marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Pelvic floor injections', href: '/services/pelvic-floor-injections' },
    { label: 'Trigger point injections', href: '/services/trigger-point-injections' },
    { label: 'Botox for migraine & spasms', href: '/services/botox-migraine-spasms' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if medical acupuncture is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
