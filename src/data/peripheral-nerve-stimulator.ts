// Content for /services/peripheral-nerve-stimulator (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 1229155300 (hero.jpg) and 1533128051 (side.jpg).
import type { ServiceData } from './service-types';

export const peripheralNerveStimulator: ServiceData = {
  slug: 'peripheral-nerve-stimulator',
  category: 'nerve-stimulation',
  card: {
    short: 'A small device that sends gentle signals to one painful nerve, so the pain signal is quieter.',
    bestFor: 'Nerve pain in one area, such as a shoulder, knee, foot or hand',
    time: 'About 30–60 minutes',
    guidePain: 'Nerve pain in one spot that will not settle',
    guideWhy: 'Often a single irritated nerve',
  },
  topic: 'a peripheral nerve stimulator',
  seoTitle: 'Peripheral Nerve Stimulator',
  seoDescription:
    'A peripheral nerve stimulator treats nerve pain in one area of the body. Offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/peripheral-nerve-stimulator/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Electrode pads placed on a person's knees for nerve stimulation",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/peripheral-nerve-stimulator/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Nerve stimulation device with an electrode belt on a patient's lower back",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve stimulation',
    name: 'Peripheral Nerve Stimulator',
    accent: 'Nerve',
    lede: 'A tiny lead placed near one painful nerve sends mild pulses that can quiet pain in that area. Some people try it for a set time first.',
    chips: ['Targets one nerve', 'Try it first', 'Adjustable', 'Minimally invasive'],
  },

  facts: [
    { label: 'Time', value: 'About 30–60 minutes' },
    { label: 'Placement', value: 'Thin lead near the nerve' },
    { label: 'Guidance', value: 'Ultrasound and sometimes X-ray' },
    { label: 'Back to routine', value: 'A few days to a few weeks' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Quiet one nerve at a time.',
    accent: 'Quiet',
    paragraphs: [
      'Peripheral nerves are the nerves outside your brain and spine. They carry feeling and movement to your arms, legs, hands and feet. When one of them is injured or irritated, pain can last long after the area has healed.',
      'A peripheral nerve stimulator uses a thin wire, called a lead, placed close to the painful nerve. It connects to a small power source. The device sends mild pulses that can change the pain signal from that nerve.',
      'It is aimed at pain in one area, not pain all over. It is usually considered when other care, such as medicine, therapy or nerve blocks, has not helped enough. Results vary, and it may not remove all your pain.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Placed with care, adjusted to you.',
    accent: 'adjusted to you.',
    text: 'Imaging helps your doctor put the lead right next to the nerve that is causing your pain.',
    items: [
      { title: 'A test period', text: 'Often a lead is placed first and used for a set time, so you can see how much it helps. If it does not help, it is removed.' },
      { title: 'Lead placement', text: 'After the skin is numbed, your doctor guides a thin needle and lead to the nerve using ultrasound, X-ray or both. The lead is taped or secured in place.' },
      { title: 'Settings that fit you', text: 'You get a small controller. Your doctor sets the strength and pattern, and we change them as needed.' },
    ],
    areas: ['Shoulder and arm', 'Knee, leg and foot', 'Face, head and trunk'],
    areasLabel: 'Areas we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain tied to one nerve.',
    accent: 'one nerve.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Nerve pain after an injury or surgery',
      'Long-lasting shoulder, knee or foot pain',
      'Pain after nerve damage or a nerve entrapment',
      'Some nerve-related headache or facial pain',
      'Pain that nerve blocks only eased for a short time',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Burning, shooting or electric pain in one area',
      'Pain that has lasted for months',
      'A nerve block gave short relief',
      'Medicine or therapy has not been enough',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have a pacemaker or other implant. Your doctor will decide if this is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We find the nerve', text: 'Your doctor reviews your pain, exam and past treatments. A nerve block may help show which nerve is the source.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you if you should pause any medicine. Wear loose clothes and arrange a ride home if you have sedation.' },
      { label: 'Treat', title: 'Lead placement', text: 'The skin is cleaned and numbed. Your doctor places the thin lead near the nerve with image guidance and tests the pulses with you. This takes about 30 to 60 minutes.' },
      { label: 'Recover', title: 'Track your relief', text: 'You go home the same day. You keep a simple pain diary and return so we can check the lead, the site and your settings. Avoid pulling or stretching the area at first.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Common effects are soreness at the site and mild tingling. Possible problems include infection, the lead moving, skin irritation, or the device not helping enough. The lead can be removed. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'How is this different from a spinal cord stimulator?', a: 'A spinal cord stimulator sends pulses to the spine and often helps pain in a larger area. A peripheral nerve stimulator targets one nerve and one area.' },
    { q: 'Will I feel it?', a: 'You may feel a light tingling over the painful area. Your doctor adjusts it so it feels comfortable.' },
    { q: 'Does it hurt to place?', a: 'We numb the skin first. Most people feel pressure and a short pinch. Tell us right away if something feels wrong.' },
    { q: 'What if it does not help?', a: 'Then the lead is removed and we talk about other options. Results vary from person to person.' },
    { q: 'Can I go back to work?', a: 'Many people return to light activity soon. Your doctor will tell you what to avoid, based on where the lead is placed.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan and on the type of device. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats nerve pain with targeted procedures.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Spinal cord stimulator', href: '/services/spinal-cord-stimulation' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
    { label: 'Nerve hydrodissection', href: '/services/nerve-hydrodissection' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if a peripheral nerve stimulator is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
