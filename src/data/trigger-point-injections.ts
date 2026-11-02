// Content for /services/trigger-point-injections (plus a version per office).
// Plain-English patient copy. Medical wording and "who offers it where" need the practice's review.
// Photos: Shutterstock (practice's Unlimited plan, standard license): assets 4205270005 (hero.jpg) and 1969317004 (side.jpg).
import type { ServiceData } from './service-types';

export const triggerPointInjections: ServiceData = {
  slug: 'trigger-point-injections',
  category: 'joint-and-soft-tissue',
  card: {
    short: 'A quick injection that releases tight muscle knots in the neck, shoulders and back.',
    bestFor: 'Muscle knots and tight, tender spots in the neck, shoulders or back',
    time: '10–20 minutes',
    guidePain: 'Tight, knotted muscles that ache',
    guideWhy: 'Often muscle knots (trigger points)',
  },
  topic: 'trigger point injections',
  seoTitle: 'Trigger Point Injections',
  seoDescription:
    'Trigger point injections ease muscle knots in the neck, shoulders and back. Offered at our Santa Monica, Marina Del Rey and Newport Beach offices.',

  photo: {
    src: '/images/services/trigger-point-injections/hero.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Therapist's hands working on a tight muscle knot",
    position: '50% 50%',
  },
  sidePhoto: {
    src: '/images/services/trigger-point-injections/side.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: "Therapist treating a patient's shoulder and neck muscles",
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Joint & soft tissue',
    name: 'Trigger Point Injections',
    accent: 'Trigger Point',
    lede: 'A quick office visit to release tight muscle knots, so your neck, shoulders and back feel looser.',
    chips: ['No surgery', 'Quick visit', 'About 10–20 minutes', 'Done in the office'],
  },

  facts: [
    { label: 'Time', value: '10–20 minutes' },
    { label: 'Medicine', value: 'Numbing medicine, sometimes a steroid' },
    { label: 'Guidance', value: 'Hands-on, sometimes ultrasound' },
    { label: 'Back to routine', value: 'Often right away' },
  ],

  what: {
    eyebrow: 'What it is',
    title: 'Loosen the knot.',
    accent: 'Loosen',
    paragraphs: [
      'A trigger point is a tight, tender knot in a muscle. Pressing on it can hurt, and sometimes the pain spreads to another area, such as from the shoulder up into the head.',
      'Stress, poor posture, long hours at a desk, overuse or an injury can all lead to muscle knots. They can make a muscle feel tight and weak.',
      'In a trigger point injection, your doctor places a small amount of numbing medicine into the knot. Sometimes a steroid is added. The goal is to let the muscle relax so you can stretch and move more easily.',
    ],
  },

  approaches: {
    eyebrow: 'How it is done',
    title: 'Find the knot, then release it.',
    accent: 'then release it.',
    text: 'Your doctor finds the tight spots by touch, and may use ultrasound for deeper or harder to reach areas.',
    items: [
      { title: 'Find the spot', text: 'Your doctor feels for the tight, tender knot. You can tell us when we press the spot that matches your pain.' },
      { title: 'Release it', text: 'A thin needle goes into the knot with numbing medicine. Many people feel the muscle let go. It can twitch for a moment.' },
      { title: 'Keep it loose', text: 'Stretching, heat, posture changes and therapy help the relief last. We can suggest a simple plan to follow at home.' },
    ],
    areas: ['Neck', 'Shoulders and upper back', 'Mid and low back', 'Hips and buttocks'],
    areasLabel: 'Areas we treat',
  },

  candidates: {
    eyebrow: 'Who it may help',
    title: 'Tight muscles that will not let go.',
    accent: 'will not let go.',
    conditionsTitle: 'Common reasons for this injection',
    conditions: [
      'Muscle knots in the neck and shoulders',
      'Myofascial pain, which is pain from tight muscle and its covering',
      'Tension-type headaches linked to neck tightness',
      'Back pain from tight muscles',
      'Muscle pain that has not eased with stretching or massage',
    ],
    symptomsTitle: 'Signs you may be a fit',
    symptoms: [
      'A hard, tender lump you can feel in a muscle',
      'Pain that spreads out from one spot when you press it',
      'Tightness that limits turning your head or reaching',
      'Aching that gets worse with stress or long sitting',
    ],
    note: 'Tell us if you take blood thinners, have a bleeding problem, have an infection, or have an allergy to medicines. Your doctor will decide if this injection is safe for you.',
  },

  steps: {
    eyebrow: 'Your visit',
    title: 'What to expect, step by step.',
    accent: 'step by step.',
    items: [
      { label: 'Plan', title: 'We plan it together', text: 'Your doctor asks where it hurts and feels your muscles for tight spots. You talk through the choices and ask any question.' },
      { label: 'Prepare', title: 'You get ready', text: 'There is little to do ahead of time. Tell us about any blood thinners. Wear a top that lets us reach your neck, shoulders or back.' },
      { label: 'Treat', title: 'The injections', text: 'We clean the skin. Your doctor places the medicine into each knot with a thin needle. Most people have a few spots treated. The visit takes about 10 to 20 minutes.' },
      { label: 'Recover', title: 'Move and stretch gently', text: 'You go home the same day. The area may feel sore for a day or two. Gentle stretching and heat can help. We tell you when to call us.' },
    ],
  },

  safety: {
    title: 'Safety first.',
    text: 'Most people have only mild effects, such as soreness or a small bruise where the needle went in. Serious problems, such as infection, bleeding or a lung injury when treating near the upper back, are rare. Your doctor takes care with needle depth. We explain every risk before your procedure.',
  },

  faqs: [
    { q: 'Does it hurt?', a: 'You may feel a pinch and a brief ache or twitch when the needle reaches the knot. It passes quickly. Tell us if you feel anything sharp or unusual.' },
    { q: 'How long does the visit take?', a: 'About 10 to 20 minutes. It is a quick visit, and most people go back to their day afterward.' },
    { q: 'How long does the relief last?', a: 'It differs from person to person. Some people feel better for days to weeks. Stretching, posture changes and therapy can help the relief last longer.' },
    { q: 'Can I have more than one spot treated?', a: 'Yes. Many people have several knots treated in one visit. Your doctor decides how many are safe for you.' },
    { q: 'Will I be sore afterward?', a: 'Some soreness for a day or two is common. Heat and gentle stretching often help.' },
    { q: 'Does insurance cover it?', a: 'Many plans cover trigger point injections when they are medically needed. Coverage depends on your plan, so please call us and we will help you check.' },
  ],

  providerSlugs: ['leia-rispoli', 'natasha-mehta', 'jacob-hattenbach'],
  providerLines: {
    'leia-rispoli': 'Interventional pain specialist who treats muscle pain along with other sources of pain.',
    'natasha-mehta': 'Treats muscle and neck pain with a whole-person plan, including movement and lifestyle care.',
    'jacob-hattenbach': 'Interventional spine care physician who treats neck and back muscle pain.',
  } as Record<string, string>,
  locationSlugs: ['santa-monica', 'marina-del-rey', 'newport-beach'],

  related: [
    { label: 'Medical acupuncture', href: '/services/medical-acupuncture' },
    { label: 'Botox for pain', href: '/services/botox-for-pain' },
    { label: 'Bursa injections', href: '/services/bursa-injections' },
    { label: 'Tendon injections', href: '/services/tendon-injections' },
  ],

  cta: {
    title: 'Ready to loosen up?',
    accent: 'loosen up?',
    text: 'Book a visit and your doctor will tell you if trigger point injections are right for you.',
    primary: 'Book appointment',
    secondary: 'Find a location',
    secondaryHref: '#locations',
  },
};
