// Content for /services/epidural-steroid-injections.
// Written in plain English for patients. Medical wording and "who offers it where" need the practice's review.
// Two Shutterstock photos (practice's Unlimited plan, standard license), saved in public/images/services/esi/:
//   spine-model.jpg = asset 2576083921 (hero), doctor-back.jpg = asset 2570037715 (who it helps).
// Until a file exists the page shows its fallback photo.

export const esi = {
  slug: 'epidural-steroid-injections',
  seoTitle: 'Epidural Steroid Injections',
  seoDescription:
    'Epidural steroid injections calm an irritated spinal nerve to ease back, neck, arm and leg pain. Done in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/esi/spine-model.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor holding a syringe next to a model of the lower spine to show where an epidural injection goes',
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/esi/doctor-back.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor placing a hand on a patient\'s back next to a spine model to find the sore spot',
    position: '50% 40%',
  },

  hero: {
    eyebrow: 'Spine injections',
    name: 'Epidural Steroid Injections',
    accent: 'Steroid',
    lede: 'A small, targeted injection that calms an irritated spinal nerve, so you can move, work and sleep with less pain.',
    chips: ['No surgery', 'Image-guided', 'About 15–30 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '15–30 minutes' },
    { label: 'Comfort', value: 'Local numbing medicine' },
    { label: 'Guidance', value: 'Live X-ray images' },
    { label: 'Back to routine', value: 'Often in 1–2 days' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Calm the nerve, ease the pain.',
    accent: 'Calm',
    paragraphs: [
      'An epidural steroid injection (ESI) places a small amount of anti-inflammatory medicine, a steroid, next to the nerves in your spine. This space is called the epidural space.',
      'When a disc bulges, the spine narrows or a nerve is squeezed, the nerve gets swollen and sore. That can cause pain in your back or neck that travels into an arm or a leg. The medicine lowers the swelling around the nerve.',
      'An ESI does not fix the cause on its own. It gives you a window of relief, so you can stretch, strengthen and get back to your life. Many people use it as one part of a bigger care plan.',
    ],
  },

  approaches: {
    eyebrow: 'How we reach the nerve',
    title: 'Three routes. One goal.',
    accent: 'One goal.',
    text: 'Your doctor chooses the route from your exam and your MRI. Live X-ray guidance helps place the medicine in the right spot.',
    items: [
      { title: 'Interlaminar', text: 'The needle goes in from the back, between two bones. The medicine can spread over a wider area, which helps when more than one nerve is sore.' },
      { title: 'Transforaminal', text: 'The needle goes to the exact spot where one nerve leaves the spine. This is a very targeted option for a single irritated nerve.' },
      { title: 'Caudal', text: 'The medicine enters through the base of the spine. It is a gentle option for the lower spine, and it can help after earlier back surgery.' },
    ],
    areas: ['Lower back (lumbar)', 'Neck (cervical)', 'Mid back (thoracic)'],
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain that travels along a nerve.',
    accent: 'travels',
    conditionsTitle: 'Common reasons for an ESI',
    conditions: [
      'Herniated or bulging disc',
      'Sciatica',
      'Spinal stenosis',
      'Pinched nerve (radiculopathy)',
      'Degenerative disc disease',
      'Pain after spine surgery',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain that shoots down an arm or a leg',
      'Numbness or tingling',
      'Pain that gets worse when you stand, walk or bend',
      'Pain that has not eased with rest, medicine or therapy',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant or have an allergy to medicines or contrast dye. Your doctor will decide if an ESI is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor listens, examines you and reviews your MRI. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause. Wear comfortable clothes.' },
      { label: 'Treat', title: 'The injection', text: 'You lie face down. We clean and numb the skin, then use live X-ray to guide the needle. The medicine goes in, and it takes about 15 to 30 minutes.' },
      { label: 'Recover', title: 'Rest and follow up', text: 'You rest for a short time, then go home the same day. A sore spot for a day or two is common. We check your progress at a follow-up visit.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness where the needle went in, a warm flush, trouble sleeping for a night, or a short rise in blood sugar if you have diabetes. Serious problems, such as infection, bleeding, a headache or nerve injury, are rare. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'We numb the skin first, so most people feel pressure and a short pinch. Tell us right away if you feel anything sharp.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for a few weeks, and others for several months. The medicine can take a few days to start working.' },
    { q: 'How many injections will I need?', a: 'Often one to three, spaced out over time. We look at how well it worked before we plan another.' },
    { q: 'Can I go to work after?', a: 'Many people return to normal activity in a day or two. Take it easy on the first day.' },
    { q: 'Will it fix the cause of my pain?', a: 'Not by itself. It lowers swelling around the nerve, so you can do physical therapy and build strength. That is what helps the relief last.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover an ESI when it is medically needed. Call our office and we will help you check your plan.' },
  ],

  // Who treats this, and where. Slugs match src/data/team.ts and src/data/locations.ts.
  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Spine injections are a core part of her care.',
    'natasha-mehta': 'Treats spine and nerve pain with a whole-person plan.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
    { label: 'SI joint injections', href: '/services/si-joint-injections' },
    { label: 'Spinal stenosis', href: '/services/spinal-stenosis' },
    { label: 'Back pain', href: '/services/back-pain' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if an epidural steroid injection is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
