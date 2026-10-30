export interface Condition {
  slug: string;
  title: string;
  short: string;
  image: string;
  relatedServices: string[]; // max 3, start with the non-surgical service
}

export const conditions: Condition[] = [
  { slug: 'low-back-pain', title: 'Low Back Pain', short: 'Placeholder.', image: '/images/placeholder.jpg', relatedServices: ['physiatry-rehabilitation', 'epidural-steroid-injections'] },
  { slug: 'neck-pain', title: 'Neck Pain', short: 'Placeholder.', image: '/images/placeholder.jpg', relatedServices: ['physiatry-rehabilitation', 'radiofrequency-ablation'] },
  { slug: 'sciatica', title: 'Sciatica', short: 'Placeholder.', image: '/images/placeholder.jpg', relatedServices: ['physiatry-rehabilitation', 'epidural-steroid-injections'] },
  { slug: 'knee-osteoarthritis', title: 'Knee Osteoarthritis', short: 'Placeholder.', image: '/images/placeholder.jpg', relatedServices: ['physiatry-rehabilitation', 'joint-injections', 'regenerative-medicine'] },
];
