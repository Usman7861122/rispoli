// The six treatment groups. Each has its own page at /services/<slug> and a toggle on /services.
// A treatment belongs to a group through its `category` field.
import { allServices } from './service-pages';

export interface Category {
  slug: string;
  title: string;        // short title used on buttons and cards
  short: string;        // one line on the /services page
  seoDescription: string;
  hero: { name: string; accent: string; lede: string; chips: string[] };
  treatments: { title: string; accent: string; text: string };
  heroFrom: string;     // slug of the service whose hero photo is used on the category page
}

export const categories: Category[] = [
  {
    slug: 'spine-injections',
    title: 'Spine injections',
    short: 'Targeted, image-guided treatments for back, neck and nerve pain.',
    seoDescription: 'Spine injections and procedures for back, neck and nerve pain: epidural, facet joint, SI joint and Intracept. Santa Monica, Marina Del Rey and Newport Beach.',
    hero: { name: 'Spine Injections', accent: 'Spine', lede: 'Targeted, image-guided treatments that calm the nerve or joint causing your pain, without surgery.', chips: ['No surgery', 'Image-guided', 'Same-day visit', '3 offices'] },
    treatments: { title: 'Four ways to treat spine pain.', accent: 'spine pain.', text: 'Each treatment goes to a different source of pain. Pick one to read more, or book a visit and your doctor will help you choose.' },
    heroFrom: 'epidural-steroid-injections',
  },
  {
    slug: 'nerve-stimulation',
    title: 'Nerve stimulation',
    short: 'Small implanted devices that send gentle signals to calm long-lasting pain.',
    seoDescription: 'Spinal cord and peripheral nerve stimulators for chronic pain that has not eased with other care. Santa Monica, Marina Del Rey and Newport Beach.',
    hero: { name: 'Nerve Stimulation', accent: 'Nerve', lede: 'Small devices that send gentle signals to your nerves, to turn down pain that has lasted a long time.', chips: ['Drug-free option', 'Try it first', 'Adjustable', 'Minimally invasive'] },
    treatments: { title: 'Two ways to stimulate a nerve.', accent: 'stimulate a nerve.', text: 'Both use a tiny device and a short trial first. The right one depends on where your pain is.' },
    heroFrom: 'spinal-cord-stimulation',
  },
  {
    slug: 'pelvic-care',
    title: 'Pelvic care & more',
    short: 'Gentle care for pelvic pain, and medical acupuncture for whole-body relief.',
    seoDescription: 'Pelvic floor injections and medical acupuncture for pain relief. Marina Del Rey and Newport Beach.',
    hero: { name: 'Pelvic Care & More', accent: 'Pelvic Care', lede: 'Private, gentle care for pelvic pain in men and women, plus medical acupuncture as part of your plan.', chips: ['Private and caring', 'Non-surgical', 'Men and women', 'Whole-person plan'] },
    treatments: { title: 'Care that goes beyond the spine.', accent: 'beyond the spine.', text: 'These treatments help pain that does not fit in one place. Your doctor explains each step before you start.' },
    heroFrom: 'pelvic-floor-injections',
  },
  {
    slug: 'nerve-blocks-and-ablation',
    title: 'Nerve blocks & ablation',
    short: 'Treatments that quiet the nerves sending pain signals, from quick blocks to longer relief.',
    seoDescription: 'Nerve blocks, radiofrequency ablation and hydrodissection for pain relief. Santa Monica, Marina Del Rey and Newport Beach.',
    hero: { name: 'Nerve Blocks & Ablation', accent: 'Nerve Blocks', lede: 'Treatments that quiet the nerves that send pain signals. A block can give quick relief, and ablation can last longer.', chips: ['No surgery', 'Image-guided', 'Quick visits', 'Short recovery'] },
    treatments: { title: 'Six ways to quiet a nerve.', accent: 'quiet a nerve.', text: 'Some are used to find the source of pain, and some give longer relief. Your doctor picks the one that fits you.' },
    heroFrom: 'radiofrequency-ablation',
  },
  {
    slug: 'botox',
    title: 'Botox',
    short: 'Medical Botox for muscle pain, migraine and spasms.',
    seoDescription: 'Medical Botox for pain, chronic migraine and muscle spasms. Marina Del Rey, Newport Beach and Santa Monica.',
    hero: { name: 'Botox for Pain', accent: 'Botox', lede: 'Medical Botox calms overactive muscles and nerves, to ease pain, migraine and spasms.', chips: ['Medical use', 'Short visit', 'Lasts about 3 months', 'Small needles'] },
    treatments: { title: 'Two medical uses of Botox.', accent: 'medical uses', text: 'This is not cosmetic Botox. It is used to treat pain and muscle problems.' },
    heroFrom: 'botox-for-pain',
  },
  {
    slug: 'regenerative-medicine',
    title: 'Regenerative medicine',
    short: 'Treatments that use your own body to support joints and soft tissue.',
    seoDescription: 'PRP, BMAC, A2M and hyaluronic acid for joint and soft tissue pain. Santa Monica, Marina Del Rey and Newport Beach.',
    hero: { name: 'Regenerative Medicine', accent: 'Regenerative', lede: 'Treatments that use your own body’s healing tools to support sore joints, tendons and soft tissue.', chips: ['Uses your own cells', 'Non-surgical', 'Image-guided', 'Short recovery'] },
    treatments: { title: 'Four regenerative options.', accent: 'regenerative options.', text: 'Insurance often does not cover these. We explain the cost before you decide.' },
    heroFrom: 'prp',
  },
  {
    slug: 'joint-and-soft-tissue',
    title: 'Joint & soft tissue',
    short: 'Targeted injections for sore joints, bursae, tendons and muscle knots.',
    seoDescription: 'Joint, bursa, tendon and trigger point injections. Santa Monica, Marina Del Rey and Newport Beach.',
    hero: { name: 'Joint & Soft Tissue Injections', accent: 'Joint', lede: 'Targeted injections for sore joints, bursae, tendons and muscle knots, so you can move with less pain.', chips: ['Quick visits', 'Ultrasound-guided', 'No surgery', 'Back to routine soon'] },
    treatments: { title: 'Four ways to treat joints and soft tissue.', accent: 'joints and soft tissue.', text: 'Pick the area that hurts. Your doctor will confirm the best fit.' },
    heroFrom: 'joint-injections',
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const servicesIn = (slug: string) => allServices.filter((s) => s.category === slug);
