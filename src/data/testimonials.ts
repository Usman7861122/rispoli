// Real patient reviews copied from the old site (lrnmmedical.com/testimonials), shown with first name and last initial.
export interface Testimonial {
  name: string; date: string; quote: string;
  rating: number;      // stars out of 5 -- must match the original review
  image: string; imageAlt: string; position: string;
  tag: string;         // short label on the photo
  fallback: string;    // shown until the Shutterstock photo is added to /public/images/testimonials/
}

export const testimonials = {
  eyebrow: 'Patient stories',
  title: 'Patients in their own words.',
  accent: 'own',
  intro: 'Kind words from people we have cared for.',
  items: [
    {
      name: 'Enola M.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/enola.jpg', imageAlt: 'A physiotherapist smiling and showing a tablet to an older woman patient in a bright clinic', position: '50% 50%', tag: 'Caring consultations',
      fallback: '/images/team/rispoli.jpg',
      quote: 'I always feel better and as if I can be helped after talking to Dr. Rispoli. She is the most supportive and patient doctor I have ever met, not to mention how gifted she is in combining comfort and understanding with her expertise as a physician. I feel so fortunate to have her for my doctor.',
    },
    {
      name: 'Gary S.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/gary.jpg', imageAlt: 'A doctor in a white coat gently examining a patient\'s knee', position: '50% 35%', tag: 'Careful consultations',
      fallback: '/images/services/back-pain.jpg',
      quote: 'This was my initial consultation, and it was a great experience. Everyone’s pain and issues are different, and having someone take the time to really ask questions was very comforting and reassuring.',
    },
    {
      name: 'Lynn P.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/lynn.jpg', imageAlt: 'A smiling woman stretching her arm with help from a nurse', position: '55% 40%', tag: 'Guided physical therapy',
      fallback: '/images/hero/leia.jpg',
      quote: 'Dr. Rispoli takes a “wait and see” approach, letting the level of neck discomfort guide her procedural efforts. In addition, her treatment plan includes physical therapy. She’s an athlete as well as a physician with a point of view that helps my neck heal from an old yoga injury.',
    },
    {
      name: 'Billie M.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/billie.jpg', imageAlt: 'A smiling woman doing an arm stretch with a therapist beside her', position: '32% 40%', tag: 'Friendly, welcoming care',
      fallback: '/images/about/team.jpg',
      quote: 'Friendliest, most helpful staff. The office is welcoming & efficient – & makes a visit to the doctor so less stressful!',
    },
    {
      name: 'John M.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/john.jpg', imageAlt: 'An older man exercising with small weights while a smiling nurse guides him', position: '50% 40%', tag: 'Smooth, safe procedures',
      fallback: '/images/hero/team.jpg',
      quote: 'Went in with trepidation but Dr eased my mind and the procedure was smooth and easy.',
    },
    {
      name: 'Roslyn G.', date: 'June 2025',
      rating: 5,
      image: '/images/testimonials/roslyn.jpg', imageAlt: 'A smiling older woman lifting small weights with a therapist\'s help', position: '68% 40%', tag: 'Expert guidance',
      fallback: '/images/cta/venice.jpg',
      quote: 'Expert advice and attention to presenting problems. Would highly recommend.',
    },
  ] as Testimonial[],
};
