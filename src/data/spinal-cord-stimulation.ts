// Content for /services/spinal-cord-stimulation (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 2654446011 (hero.jpg) and 2359915959 (side.jpg).
import type { ServiceData } from './service-types';

export const spinalCordStimulation: ServiceData = {
  slug: 'spinal-cord-stimulation',
  category: 'nerve-stimulation',
  card: {
    short: 'A small implant that sends gentle signals to the spine to change how pain feels. A trial comes first.',
    bestFor: 'Long-lasting back, leg or arm pain that other care has not eased',
    time: 'Trial: about 1 hour',
    guidePain: 'Chronic pain that other care has not eased',
    guideWhy: 'Often nerve pain that has lasted for months or years',
  },
  topic: 'spinal cord stimulation',
  seoTitle: 'Spinal Cord Stimulator',
  seoDescription:
    'A spinal cord stimulator can help with chronic pain that has not eased with other care. Trial and permanent device offered in our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/spinal-cord-stimulation/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Doctor's hands pointing out the nerves on a model of the neck spine",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/spinal-cord-stimulation/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Therapist using a nerve stimulation device on a patient's lower back",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Nerve stimulation',
    name: 'Spinal Cord Stimulator',
    accent: 'Spinal Cord',
    lede: 'A small device that sends gentle signals to your spine to change how pain reaches the brain. You try it first, before you decide on a permanent one.',
    chips: ['Try it first', 'Adjustable', 'Reversible', 'For long-lasting pain'],
  },

  facts: [
    { label: 'Trial', value: 'About 1 week with a temporary device' },
    { label: 'Permanent device', value: 'Small implant under the skin' },
    { label: 'Guidance', value: 'Live X-ray images' },
    { label: 'Back to routine', value: 'Several weeks, with limits at first' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Change the signal, change the pain.',
    accent: 'Change the signal,',
    paragraphs: [
      'A spinal cord stimulator has three parts: thin wires called leads, a small battery, and a remote you control. The leads sit near the spinal cord. The battery sits under the skin, often near the buttock or lower back.',
      'The device sends mild electrical pulses to the spinal cord. These pulses can change the pain signals on their way to your brain. Many people feel a light tingling or buzzing, and some feel nothing at all, depending on the settings.',
      'This is not a first treatment. It is for chronic pain that has not eased with other care, such as medicine, therapy or injections. It may not remove all your pain, and results vary. The goal is less pain and more daily activity.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Try it first, then decide.',
    accent: 'Try it first,',
    text: 'You never have to commit to the permanent device before you know how it feels for you.',
    items: [
      { title: 'The trial', text: 'Thin temporary leads are placed with a needle while you rest. They connect to a device you wear outside the body. You use it at home for several days and track your pain.' },
      { title: 'The permanent device', text: 'If the trial helps, you can choose a permanent one. In a short procedure, the leads are placed again and a small battery goes under the skin. Your doctor adjusts the settings with you.' },
      { title: 'Ongoing care', text: 'Settings can be changed over time as your needs change. Some batteries are recharged, and some are not. We go over this with you before you choose.' },
    ],
    areas: ['Low back and legs', 'Neck and arms', 'Nerve pain after surgery'],
    areasLabel: 'Pain we may treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Pain that has not gone away.',
    accent: 'not gone away.',
    conditionsTitle: 'Common reasons for this treatment',
    conditions: [
      'Back or leg pain that continues after spine surgery',
      'Nerve pain in an arm or leg, such as CRPS',
      'Long-lasting nerve pain from nerve damage',
      'Chronic pain that has not eased with other care',
      'Some types of pain from poor blood flow in the limbs',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'Pain for many months or longer',
      'Medicine, therapy or injections have not helped enough',
      'Pain limits your sleep, work or daily tasks',
      'You want to try a treatment that is reversible',
    ],
    note: 'Tell us if you take blood thinners, have an infection, are pregnant, or have a pacemaker or other implant. You may also need a talk with a pain psychologist before the trial. Your doctor will decide if this is safe and right for you.',
  },

  steps: {
    eyebrow: 'Your care',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We review your history', text: 'Your doctor looks at your pain, your imaging and the care you have already tried. You talk about goals and what the device can and cannot do.' },
      { label: 'Prepare', title: 'You get ready', text: 'We tell you which medicines to pause, if any. You may have a short health and mood check first. Arrange a ride home.' },
      { label: 'Treat', title: 'The trial, then the implant', text: 'For the trial, the skin is numbed and temporary leads are placed with X-ray guidance. If you move on to the permanent device, a short procedure places the leads and battery. Sedation may be used.' },
      { label: 'Recover', title: 'Take it slow', text: 'During the trial you track your pain and activity. After a permanent implant, you limit bending, twisting and lifting for several weeks while the leads settle. We check your wounds and your settings.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Common effects are soreness where the device sits and some changes in feeling. Possible problems include infection, a lead moving, bleeding, nerve irritation, or a device that needs repair. The device can be turned off or removed. Some MRI scans have limits with certain devices. We explain every risk before you decide.',
  },

  faqs: [
    { q: 'Will I feel the stimulation?', a: 'Many people feel a mild tingling or buzzing. Some newer settings do not cause a feeling. Your doctor can adjust it so it feels comfortable.' },
    { q: 'What if the trial does not help?', a: 'Then you do not need the permanent device. The temporary leads are removed in the office. We talk about other options.' },
    { q: 'Is it permanent?', a: 'The device is meant to stay, but it can be turned off or taken out in a short procedure if you choose.' },
    { q: 'Does it cure my pain?', a: 'No. It is meant to lower your pain and help you do more. Results vary, and some people need other care too.' },
    { q: 'What can I not do after the implant?', a: 'For the first weeks, avoid heavy lifting, hard twisting and deep bending. Your doctor gives you clear steps. You can build back activity over time.' },
    { q: 'Does insurance cover it?', a: 'Coverage depends on your plan, and many plans need proof that other care has not worked. Call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who helps patients decide if a stimulator is right for them.',
    'jacob-hattenbach': 'Fellowship-trained in interventional spine care.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Peripheral nerve stimulator', href: '/services/peripheral-nerve-stimulator' },
    { label: 'Epidural steroid injections', href: '/services/epidural-steroid-injections' },
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Nerve blocks', href: '/services/nerve-blocks' },
  ],

  cta: {
    title: 'Ready to feel better?',
    accent: 'feel better?',
    text: 'Book a visit and your doctor will tell you if a spinal cord stimulator trial is right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
