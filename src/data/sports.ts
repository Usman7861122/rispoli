// Content adapted from the old site's Sports Injury page (lrnmmedical.com/services/sports-injury/), in simpler words.
export const sports = {
  eyebrow: 'Sports injury recovery',
  title: 'Get back to the game you love.',
  accent: 'game',
  intro:
    'A sports injury is damage to a muscle, tendon, ligament, cartilage, bone or nerve from sport, training or exercise. It can come from one hard hit or from the same movement repeated for months. Most injuries heal well with non-surgical care.',
  // Add your video at /public/videos/sports-injury.mp4 and a poster image at /public/videos/sports-injury-poster.jpg
  video: {
    src: '/videos/sports-injury.mp4',
    poster: '/videos/sports-injury-poster.jpg',
    length: 15, // seconds
    // Each step shows while the video is between its start time and the next one
    steps: [
      { start: 0, label: 'The injury', text: 'Pain stops you in the middle of your run.' },
      { start: 3.64, label: 'The check', text: 'A careful exam to find the real cause.' },
      { start: 7.28, label: 'The care', text: 'Guided, non-surgical therapy to heal.' },
      { start: 10.92, label: 'The return', text: 'Back to the sport you love.' },
    ],
  },
  signs: { title: 'Common signs', items: ['Sudden pain', 'Tenderness', 'Swelling', 'Bruising', 'Redness', 'Weakness'] },
  injuries: {
    title: 'Injuries we treat',
    items: [
      'Rotator cuff tears', 'Meniscus tears', 'ACL and MCL sprains', 'Labral tears', 'Tennis elbow', "Golfer's elbow",
      'Achilles tendon injuries', "Runner's knee", 'Plantar fasciitis', 'Bursitis', 'Tendinitis', 'Stress fractures',
    ],
  },
  care: {
    title: 'How we help you heal',
    text: 'Most sports injuries do not need surgery. Dr. Rispoli starts with simple, proven care to ease pain and help you recover.',
    items: ['Activity changes', 'Rest', 'Heat and ice', 'Physical therapy', 'Therapeutic massage', 'Anti-inflammatory medicine'],
  },
  cta: { label: 'Learn more', href: '/services/sports-injury' },
};
