// Content for /services/intracept-procedure (plus a version per office).
// Plain-English patient copy. Medical wording, eligibility and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2562457103 and 2680139025.
import type { esi } from './esi';

export const intracept: typeof esi = {
  slug: 'intracept-procedure',
  category: 'spine-injections',
  card: {
    short: 'Treats a nerve inside the spine bone that can cause long-lasting low back pain.',
    bestFor: 'Chronic low back pain that has not eased with other care',
    time: 'About an hour',
    guidePain: 'A deep, constant low back ache for 6 months or more',
    guideWhy: 'Sometimes the nerve inside the spine bone',
  },
  topic: 'the Intracept procedure',
  seoTitle: 'Intracept Procedure',
  seoDescription:
    'The Intracept procedure is a minimally invasive treatment for chronic low back pain that comes from inside the spine bone. Santa Monica, Marina Del Rey and Newport Beach.',

  photo: {
    src: '/images/services/intracept-procedure/mri-pen.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor pointing a pen at a glowing area on a lower spine MRI scan',
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/intracept-procedure/mri-scan.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'MRI scans of the lower spine with one painful area highlighted',
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Spine injections',
    name: 'The Intracept Procedure',
    accent: 'Intracept',
    lede: 'A minimally invasive treatment that targets the nerve inside the spine bone that can cause long-lasting low back pain.',
    chips: ['Minimally invasive', 'Image-guided', 'Same-day visit', 'Targets the pain source'],
  },

  facts: [
    { label: 'Time', value: 'Usually about an hour' },
    { label: 'Comfort', value: 'Local numbing, with sedation if needed' },
    { label: 'Guidance', value: 'Live X-ray images' },
    { label: 'Going home', value: 'The same day' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Treat the pain at its source.',
    accent: 'source.',
    paragraphs: [
      'Some low back pain starts inside the bones of the spine, called vertebrae. A small nerve inside each bone, the basivertebral nerve, can send constant pain signals. Doctors call this vertebrogenic pain.',
      'The Intracept procedure treats that nerve. Through a tiny opening in the skin, a thin tool is guided with live X-ray into the bone. Heat from radio waves then calms the nerve, so it sends fewer pain signals.',
      'It is not open surgery, and it does not remove or replace any part of your spine. It is for people whose pain has lasted a long time and has not eased with other care.',
    ],
  },

  approaches: {
    eyebrow: 'How it works',
    title: 'Find it. Treat it. Rebuild.',
    accent: 'Rebuild.',
    text: 'Treatment starts with a careful look at whether the bone itself is causing your pain.',
    items: [
      { title: 'Find the source', text: 'Your exam and an MRI help show if the bones of your spine may be causing the pain. Not every back pain comes from there, so this step matters.' },
      { title: 'Treat the nerve', text: 'Using live X-ray, a thin tool reaches the nerve inside the bone. Heat from radio waves treats the nerve for a short time.' },
      { title: 'Rebuild strength', text: 'As pain eases, you can move more. We help you build a plan with movement and therapy to protect your back.' },
    ],
    areas: ['Lower back (lumbar)', 'Base of the spine'],
    areasLabel: 'Area treated',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Back pain that has not gone away.',
    accent: 'has not gone away.',
    conditionsTitle: 'Who we may consider',
    conditions: [
      'Chronic low back pain for about 6 months or more',
      'Pain that has not improved with therapy, medicine or injections',
      'Pain that likely comes from the spine bones (vertebrogenic pain)',
      'MRI changes in the lower spine bones, called Modic changes',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A deep, constant ache in the lower back',
      'Pain that is worse when you sit for long or bend forward',
      'Pain mostly in the back, not down the leg',
      'Pain that limits work, sleep or exercise',
    ],
    note: 'Tell us if you have a pacemaker or another implanted device, an infection, a bleeding problem or are pregnant. Your doctor will decide if this treatment is safe and right for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We check if you are a fit', text: 'Your doctor listens, examines you and reviews your MRI. You talk through your options and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you how to prepare, including any medicine you should pause and whether to arrange a ride home.' },
      { label: 'Treat', title: 'The procedure', text: 'You lie face down. We clean and numb the skin, then use live X-ray to guide a thin tool to the nerve inside the bone. This usually takes about an hour.' },
      { label: 'Recover', title: 'Rest and rebuild', text: 'You rest for a short time and go home the same day. Some soreness is common. We check your progress and plan your next steps.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have soreness near the treated area for a few days. Serious problems, such as infection, bleeding or nerve injury, are rare. We explain every risk before your procedure and make sure the treatment is right for you.',
  },

  faqs: [
    { q: 'Is it surgery?', a: 'It is minimally invasive. It uses a tiny opening in the skin, with no large cut and nothing removed from your spine.' },
    { q: 'Does it hurt?', a: 'We numb the area first, and we can add sedation if needed. Most people feel pressure rather than sharp pain. Tell us right away if you feel anything sharp.' },
    { q: 'How soon will I feel better?', a: 'It differs from person to person. Some people notice a change in the first weeks, and others take longer. Results vary, and we talk about what to expect for you.' },
    { q: 'Who is a good fit?', a: 'People with long-lasting low back pain that has not eased with other care, and whose exam and MRI point to the spine bone as the source. Your doctor will tell you if you fit.' },
    { q: 'Can I have it if I have had spine surgery?', a: 'It depends on your surgery and your imaging. Bring your records to your visit and your doctor will review them.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan and on your records. Call our office and we will help you check your plan.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist. Spine procedures are a core part of her care.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Epidural steroid injections', href: '/services/epidural-steroid-injections' },
    { label: 'Facet joint injections', href: '/services/facet-joint-injections' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Back pain', href: '/services/back-pain' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if the Intracept procedure is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
