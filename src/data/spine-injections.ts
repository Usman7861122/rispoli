// Hub page: /services/spine-injections. Lists every spine injection page.
// Add a new treatment by importing its data file and adding it to `treatments`.
import { esi } from './esi';
import { facet } from './facet-joint-injections';
import { siJoint } from './si-joint-injections';
import { intracept } from './intracept-procedure';

const pages = [esi, facet, siJoint, intracept];

const extra: Record<string, { short: string; bestFor: string; time: string }> = {
  'epidural-steroid-injections': {
    short: 'Calms a swollen spinal nerve with a steroid, so pain that travels down an arm or leg eases.',
    bestFor: 'Pinched nerve, sciatica, disc problems, spinal stenosis',
    time: '15–30 minutes',
  },
  'facet-joint-injections': {
    short: 'Calms the small joints at the back of the spine, and helps us find if they cause your pain.',
    bestFor: 'Back or neck pain that flares when you bend, twist or lean back',
    time: '15–30 minutes',
  },
  'si-joint-injections': {
    short: 'Treats the joint where the spine meets the pelvis, to ease low back, buttock and hip pain.',
    bestFor: 'Pain low on one side of the back, near the hip',
    time: '15–30 minutes',
  },
  'intracept-procedure': {
    short: 'Treats a nerve inside the spine bone that can cause long-lasting low back pain.',
    bestFor: 'Chronic low back pain that has not eased with other care',
    time: 'About an hour',
  },
};

export const hub = {
  slug: 'spine-injections',
  seoTitle: 'Spine Injections',
  seoDescription:
    'Spine injections and procedures for back, neck and nerve pain: epidural, facet joint, SI joint and Intracept. Santa Monica, Marina Del Rey and Newport Beach.',

  photo: {
    src: '/images/services/esi/spine-model.jpg',
    fallback: '/images/services/back-pain.jpg',
    alt: 'Doctor holding a syringe next to a model of the lower spine',
    position: '50% 50%',
  },

  hero: {
    eyebrow: 'Services',
    name: 'Spine Injections',
    accent: 'Spine',
    lede: 'Targeted, image-guided treatments that calm the nerve or joint causing your pain, without surgery.',
    chips: ['No surgery', 'Image-guided', 'Same-day visit', '3 offices'],
  },

  treatments: {
    eyebrow: 'Our treatments',
    title: 'Four ways to treat spine pain.',
    accent: 'spine pain.',
    text: 'Each treatment goes to a different source of pain. Pick one to read more, or book a visit and your doctor will help you choose.',
    items: pages.map((p) => ({
      slug: p.slug,
      name: p.hero.name.replace(/^The /, ''),
      ...extra[p.slug],
      image: p.photo.src,
      fallback: p.photo.fallback,
      position: p.photo.position,
      alt: p.photo.alt,
      href: `/services/${p.slug}`,
    })),
  },

  guide: {
    eyebrow: 'Which one fits?',
    title: 'Start with where it hurts.',
    accent: 'where it hurts.',
    text: 'A simple guide. Your doctor confirms the best choice after an exam and your imaging.',
    rows: [
      { pain: 'Pain that shoots down an arm or leg', where: 'Often a squeezed or swollen nerve', label: 'Epidural injections', href: '/services/epidural-steroid-injections' },
      { pain: 'Back or neck pain when you twist or lean back', where: 'Often the small joints of the spine', label: 'Facet joint injections', href: '/services/facet-joint-injections' },
      { pain: 'Low back pain on one side, with hip or buttock pain', where: 'Often the SI joint', label: 'SI joint injections', href: '/services/si-joint-injections' },
      { pain: 'A deep, constant low back ache for 6 months or more', where: 'Sometimes the nerve inside the spine bone', label: 'Intracept procedure', href: '/services/intracept-procedure' },
    ],
    note: 'This guide is general information, not a diagnosis. Pain can have more than one cause, and a visit with your doctor is the way to find yours.',
  },

  officesTitle: 'Treated close to you.',
  officesAccent: 'close to you.',
  officesText: 'Choose your office, then the treatment you want to read about.',

  related: [
    { label: 'Radiofrequency ablation', href: '/services/radiofrequency-ablation' },
    { label: 'Spinal cord stimulator', href: '/services/spinal-cord-stimulation' },
    { label: 'Back pain', href: '/services/back-pain' },
    { label: 'Neck pain', href: '/services/neck-pain' },
  ],
  pages,
};
