export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
}

// Non-surgical care first
export const services: Service[] = [
  { slug: 'physiatry-rehabilitation', title: 'Physiatry & Rehabilitation', short: 'Movement-based care to restore function without surgery.', image: '/images/placeholder.jpg' },
  { slug: 'epidural-steroid-injections', title: 'Epidural Steroid Injections', short: 'Targeted relief for spine and nerve pain.', image: '/images/placeholder.jpg' },
  { slug: 'radiofrequency-ablation', title: 'Radiofrequency Ablation', short: 'Longer lasting relief from joint and facet pain.', image: '/images/placeholder.jpg' },
  { slug: 'joint-injections', title: 'Joint Injections', short: 'Calm pain in the knee, hip, shoulder and more.', image: '/images/placeholder.jpg' },
  { slug: 'regenerative-medicine', title: 'Regenerative Medicine', short: 'PRP and related options to support healing.', image: '/images/placeholder.jpg' },
  { slug: 'spinal-cord-stimulation', title: 'Spinal Cord Stimulation', short: 'Advanced option for chronic pain that has not eased.', image: '/images/placeholder.jpg' },
];
