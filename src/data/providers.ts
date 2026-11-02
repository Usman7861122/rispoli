// Inner pages for the team. Titles and credentials come from leiarispolimd.com/meet-the-team.
// Everything else is plain-English copy written for the page; the practice should confirm it.
import { drRispoli } from './dr-rispoli';

type Photo = { src: string; alt: string; position: string };
type Icon = 'ball' | 'cap' | 'hospital' | 'award';

export interface ProviderPage {
  slug: string;            // url: /<slug>
  card: { name: string; role: string; image: string; position: string; alt: string };
  seoTitle: string;
  seoDescription: string;
  photos: Photo[];         // [0] hero, [1] about
  hero: { eyebrow: string; name: string; accent: string; lede: string; chips: string[] };
  about: {
    eyebrow: string; title: string; accent: string; paragraphs: string[];
    approachTitle: string; approach: { title: string; text: string }[];
  };
  focus: {
    eyebrow: string; title: string; accent: string;
    items: { title: string; text: string; href: string; icon: 'spine' | 'pelvis' | 'head' | 'leaf' }[];
  };
  education: {
    eyebrow: string; title: string; accent: string; intro: string;
    steps: { stage: string; place: string; where: string; notes: string[]; icon: Icon }[];
    destination: { stage: string; place: string; where: string };
  };
  cta: { title: string; accent: string; text: string; primary: string; secondary: string; secondaryHref: string };
}

const cta = (name: string, accent: string) => ({
  title: `See ${name}.`, accent,
  text: 'Book a visit, or call our office. We will help you find the right next step.',
  primary: 'Book appointment', secondary: 'Meet the whole team', secondaryHref: '/meet-the-team',
});

export const providers: ProviderPage[] = [
  {
    slug: 'dr-mehta',
    card: { name: 'Natasha Mehta, MD', role: 'PM&R · Brain Injury', image: '/images/team/mehta-hero.jpg', position: '50% 20%', alt: 'Dr. Natasha Mehta in blue scrubs' },
    seoTitle: 'Dr. Natasha Mehta',
    seoDescription: 'Dr. Natasha Mehta is a double board-certified physician in Physical Medicine & Rehabilitation and traumatic brain injury at Westside Interventional Pain & Physiatry.',
    photos: [
      { src: '/images/team/mehta-hero.jpg', alt: 'Dr. Natasha Mehta smiling in royal-blue scrubs in front of a green hedge', position: '50% 22%' },
      { src: '/images/team/mehta-about.jpg', alt: 'Dr. Natasha Mehta in her white coat, smiling', position: '50% 24%' },
    ],
    hero: {
      eyebrow: 'Associate Physician · PM&R',
      name: 'Dr. Natasha Mehta', accent: 'Mehta',
      lede: 'Double board-certified in physical medicine and rehabilitation, and in traumatic brain injury. Care that helps you function and feel like yourself again.',
      chips: ['Double board-certified', 'Rehabilitation', 'Brain injury care'],
    },
    about: {
      eyebrow: 'About Dr. Mehta', title: 'Care for the whole person.', accent: 'whole',
      paragraphs: [
        'Dr. Natasha Mehta is an associate physician at Westside Interventional Pain & Physiatry. She is double board-certified in Physical Medicine and Rehabilitation (PM&R) and in traumatic brain injury.',
        'PM&R doctors look at how your body works as a whole. The goal is not only to lower pain, but to help you move, work and live better.',
        'Dr. Mehta works with Dr. Rispoli and the full care team, so each patient gets a clear plan and many sets of expert eyes.',
      ],
      approachTitle: 'How she works with you',
      approach: [
        { title: 'She sets goals with you', text: 'Your goals come first, whether that is walking farther, sleeping better, or getting back to work.' },
        { title: 'She looks at the whole body', text: 'Pain, movement and the nervous system all work together. She looks at every part of the picture.' },
        { title: 'She supports recovery', text: 'Healing takes time. She guides you through each step, from the first visit to follow-up.' },
      ],
    },
    focus: {
      eyebrow: 'Areas of care', title: 'How Dr. Mehta can help.', accent: 'help.',
      items: [
        { title: 'Back & Neck Pain', text: 'Non-surgical care for spine pain that limits your day.', href: '/services/back-pain', icon: 'spine' },
        { title: 'Joint Pain', text: 'Support for shoulder, knee, hip and other painful joints.', href: '/services/joint-pain', icon: 'spine' },
        { title: 'Brain Injury & Concussion', text: 'Expert care after a traumatic brain injury.', href: '/contact', icon: 'head' },
        { title: 'Regenerative Medicine', text: 'PRP therapy and other options that support healing.', href: '/services/regenerative-medicine', icon: 'leaf' },
      ],
    },
    education: {
      eyebrow: 'Credentials', title: 'Trained to treat the whole person.', accent: 'whole',
      intro: 'Two board certifications that work side by side: one for rehabilitation, one for brain injury.',
      steps: [
        { stage: 'Medical degree', place: 'Doctor of Medicine (MD)', where: 'Physician training', notes: ['Medical school graduate'], icon: 'cap' },
        { stage: 'Board certification', place: 'Physical Medicine & Rehabilitation', where: 'Board-certified specialist', notes: ['Function, movement and pain'], icon: 'hospital' },
        { stage: 'Board certification', place: 'Traumatic Brain Injury', where: 'Board-certified specialist', notes: ['Care after head injuries'], icon: 'award' },
      ],
      destination: { stage: 'Today', place: 'Double board-certified', where: 'Associate Physician at Westside Interventional Pain & Physiatry' },
    },
    cta: cta('Dr. Mehta', 'Dr. Mehta.'),
  },
  {
    slug: 'dr-hattenbach',
    card: { name: 'Jacob Hattenbach, DO', role: 'PM&R · Interventional Spine', image: '/images/team/hattenbach-hero.jpg', position: '50% 20%', alt: 'Dr. Jacob Hattenbach in navy scrubs' },
    seoTitle: 'Dr. Jacob Hattenbach',
    seoDescription: 'Dr. Jacob Hattenbach, DO is board-certified in Physical Medicine & Rehabilitation and fellowship-trained in interventional spine and musculoskeletal medicine.',
    photos: [
      { src: '/images/team/hattenbach-hero.jpg', alt: 'Dr. Jacob Hattenbach in navy scrubs in front of a green hedge', position: '50% 22%' },
      { src: '/images/team/hattenbach-about.jpg', alt: 'Dr. Jacob Hattenbach in his white coat', position: '50% 22%' },
    ],
    hero: {
      eyebrow: 'Doctor of Osteopathic Medicine',
      name: 'Dr. Jacob Hattenbach', accent: 'Hattenbach',
      lede: 'Board-certified in PM&R and fellowship-trained in interventional spine and musculoskeletal medicine. Precise, non-surgical care for spine and joint pain.',
      chips: ['Board-certified PM&R', 'Fellowship-trained', 'Interventional spine'],
    },
    about: {
      eyebrow: 'About Dr. Hattenbach', title: 'Precise care for spine and joints.', accent: 'Precise',
      paragraphs: [
        'Dr. Jacob Hattenbach is a Doctor of Osteopathic Medicine (DO). He is board-certified in Physical Medicine and Rehabilitation and completed a fellowship in interventional spine and musculoskeletal medicine.',
        'Osteopathic training looks at the whole body and how its parts affect each other. His extra fellowship training focuses on finding the exact source of pain and treating it with precise, minimally invasive procedures.',
        'He sees patients across our Santa Monica and Marina Del Rey offices.',
      ],
      approachTitle: 'How he works with you',
      approach: [
        { title: 'He finds the exact source', text: 'Back and joint pain can start in different places. He works to pinpoint what is really causing yours.' },
        { title: 'He explains your options', text: 'You hear every choice in plain words, from exercise and therapy to injections.' },
        { title: 'He keeps you moving', text: 'The goal is better function, so you can get back to your work, sport and daily life.' },
      ],
    },
    focus: {
      eyebrow: 'Areas of care', title: 'How Dr. Hattenbach can help.', accent: 'help.',
      items: [
        { title: 'Back & Neck Pain', text: 'Targeted treatment for spine pain, without surgery.', href: '/services/back-pain', icon: 'spine' },
        { title: 'Spinal Stenosis', text: 'Relief for pain and tingling caused by narrowed spaces in the spine.', href: '/services/spinal-stenosis', icon: 'spine' },
        { title: 'Sports Injuries', text: 'Care for muscle, joint and tendon injuries from sport and activity.', href: '/services/sports-injury', icon: 'leaf' },
        { title: 'Joint Pain', text: 'Treatment for shoulder, knee and hip pain.', href: '/services/joint-pain', icon: 'spine' },
      ],
    },
    education: {
      eyebrow: 'Credentials', title: 'Training built for the spine.', accent: 'spine.',
      intro: 'A medical degree, a board certification and a specialty fellowship. Each step adds to his skill with spine and joint care.',
      steps: [
        { stage: 'Medical degree', place: 'Doctor of Osteopathic Medicine (DO)', where: 'Whole-body approach to care', notes: ['Osteopathic training'], icon: 'cap' },
        { stage: 'Board certification', place: 'Physical Medicine & Rehabilitation', where: 'Board-certified specialist', notes: ['Function, movement and pain'], icon: 'hospital' },
        { stage: 'Fellowship', place: 'Interventional Spine & Musculoskeletal Medicine', where: 'Advanced specialty training', notes: ['Spine and joint procedures'], icon: 'award' },
      ],
      destination: { stage: 'Today', place: 'Fellowship-trained physician', where: 'Interventional spine care in Santa Monica & Marina Del Rey' },
    },
    cta: cta('Dr. Hattenbach', 'Dr. Hattenbach.'),
  },
  {
    slug: 'dr-vlachos',
    card: { name: 'Katrina Vlachos, MD', role: 'Board-certified PM&R', image: '/images/team/vlachos-hero.jpg', position: '50% 22%', alt: 'Dr. Katrina Vlachos in her white coat' },
    seoTitle: 'Dr. Katrina Vlachos',
    seoDescription: 'Dr. Katrina Vlachos, MD is board-certified in Physical Medicine & Rehabilitation at Westside Interventional Pain & Physiatry.',
    photos: [
      { src: '/images/team/vlachos-hero.jpg', alt: 'Dr. Katrina Vlachos smiling in her white coat in front of a green hedge', position: '50% 24%' },
      { src: '/images/team/vlachos-about.jpg', alt: 'Dr. Katrina Vlachos in her white coat', position: '50% 24%' },
    ],
    hero: {
      eyebrow: 'Physical Medicine & Rehabilitation',
      name: 'Dr. Katrina Vlachos', accent: 'Vlachos',
      lede: 'Board-certified in physical medicine and rehabilitation. Thoughtful, patient care to help you move better and hurt less.',
      chips: ['Board-certified PM&R', 'Rehabilitation', 'Nerve & muscle testing'],
    },
    about: {
      eyebrow: 'About Dr. Vlachos', title: 'Thoughtful care, step by step.', accent: 'Thoughtful',
      paragraphs: [
        'Dr. Katrina Vlachos is board-certified in Physical Medicine and Rehabilitation (PM&R). She is part of the physician team at Westside Interventional Pain & Physiatry.',
        'PM&R is the medical specialty for restoring movement and function. Dr. Vlachos helps people with pain, weakness and nerve problems understand what is going on and what can help.',
        'She works closely with Dr. Rispoli and the rest of the team, so your care stays connected from one visit to the next.',
      ],
      approachTitle: 'How she works with you',
      approach: [
        { title: 'She takes the time', text: 'You get time to tell your story and ask every question you have.' },
        { title: 'She tests to find answers', text: 'When needed, nerve and muscle testing (EMG) can show what is behind your symptoms.' },
        { title: 'She builds a clear plan', text: 'You leave each visit knowing what comes next and why.' },
      ],
    },
    focus: {
      eyebrow: 'Areas of care', title: 'How Dr. Vlachos can help.', accent: 'help.',
      items: [
        { title: 'Nerve & Muscle Testing', text: 'EMG and nerve conduction studies to find the cause of numbness, tingling or weakness.', href: '/services/emg', icon: 'head' },
        { title: 'Back & Neck Pain', text: 'Non-surgical care for spine pain.', href: '/services/back-pain', icon: 'spine' },
        { title: 'Joint Pain', text: 'Help for painful shoulders, knees and hips.', href: '/services/joint-pain', icon: 'spine' },
        { title: 'Regenerative Medicine', text: 'PRP therapy and other options that support healing.', href: '/services/regenerative-medicine', icon: 'leaf' },
      ],
    },
    education: {
      eyebrow: 'Credentials', title: 'Trained in rehabilitation.', accent: 'rehabilitation.',
      intro: 'A medical degree and a board certification in the specialty that focuses on function, movement and recovery.',
      steps: [
        { stage: 'Medical degree', place: 'Doctor of Medicine (MD)', where: 'Physician training', notes: ['Medical school graduate'], icon: 'cap' },
        { stage: 'Board certification', place: 'Physical Medicine & Rehabilitation', where: 'Board-certified specialist', notes: ['Function, movement and pain'], icon: 'hospital' },
      ],
      destination: { stage: 'Today', place: 'Board-certified physician', where: 'Physical Medicine & Rehabilitation at Westside Interventional Pain & Physiatry' },
    },
    cta: cta('Dr. Vlachos', 'Dr. Vlachos.'),
  },
  {
    slug: 'jamie-phan',
    card: { name: 'Jamie Phan, PA-C', role: 'Physician Assistant', image: '/images/team/phan-hero.jpg', position: '50% 22%', alt: 'Jamie Phan, PA-C in navy scrubs' },
    seoTitle: 'Jamie Phan, PA-C',
    seoDescription: 'Jamie Phan is a certified physician assistant (PA-C) at Westside Interventional Pain & Physiatry.',
    photos: [
      { src: '/images/team/phan-hero.jpg', alt: 'Jamie Phan, PA-C, smiling in navy scrubs in front of a green hedge', position: '50% 22%' },
      { src: '/images/team/phan-about.jpg', alt: 'Jamie Phan, PA-C, in her white coat', position: '50% 24%' },
    ],
    hero: {
      eyebrow: 'Physician Assistant · PA-C',
      name: 'Jamie Phan', accent: 'Phan',
      lede: 'A certified physician assistant on your care team. Clear answers, careful follow-up and a plan that fits your life.',
      chips: ['Physician Assistant', 'PA-C certified', 'Part of your care team'],
    },
    about: {
      eyebrow: 'About Jamie', title: 'A steady partner in your care.', accent: 'steady',
      paragraphs: [
        'Jamie Phan is a certified physician assistant (PA-C) at Westside Interventional Pain & Physiatry.',
        'Physician assistants are trained medical providers who work together with physicians. Jamie helps plan your treatment, follows your progress, and makes sure your questions get answered.',
        'Working as part of the team means you can see the right provider at the right time, and always have someone who knows your story.',
      ],
      approachTitle: 'How Jamie works with you',
      approach: [
        { title: 'Jamie answers your questions', text: 'Plain words, no rush. You should always understand your plan.' },
        { title: 'Jamie follows your progress', text: 'Regular check-ins help your plan change as you get better.' },
        { title: 'Jamie works with your doctors', text: 'Your physicians and Jamie share one plan, so nothing gets lost.' },
      ],
    },
    focus: {
      eyebrow: 'Areas of care', title: 'How Jamie can help.', accent: 'help.',
      items: [
        { title: 'Back & Neck Pain', text: 'Follow-up and planning for spine pain care.', href: '/services/back-pain', icon: 'spine' },
        { title: 'Joint Pain', text: 'Support for painful shoulders, knees and hips.', href: '/services/joint-pain', icon: 'spine' },
        { title: 'Pelvic Pain', text: 'Careful, private care for pelvic conditions.', href: '/services/pelvic-pain', icon: 'pelvis' },
        { title: 'Regenerative Medicine', text: 'Help understanding PRP and other healing options.', href: '/services/regenerative-medicine', icon: 'leaf' },
      ],
    },
    education: {
      eyebrow: 'Credentials', title: 'Trained and certified.', accent: 'certified.',
      intro: 'Physician assistants complete advanced medical training and national certification. The letters PA-C mean certified.',
      steps: [
        { stage: 'Training', place: 'Physician Assistant program', where: 'Advanced medical training', notes: ['Works with physicians'], icon: 'cap' },
        { stage: 'Certification', place: 'PA-C', where: 'Nationally certified physician assistant', notes: ['Certified provider'], icon: 'award' },
      ],
      destination: { stage: 'Today', place: 'Physician Assistant', where: 'Part of the care team at Westside Interventional Pain & Physiatry' },
    },
    cta: cta('Jamie', 'Jamie.'),
  },
];

/** Cards for the "meet the rest of the team" band, Dr. Rispoli first. */
export const teamLinks = [
  { slug: 'dr-rispoli', name: 'Leia Rispoli, MD', role: 'Interventional Pain & PM&R', image: drRispoli.photos[0].src, position: '50% 20%', alt: 'Dr. Leia Rispoli in blue scrubs' },
  ...providers.map((p) => ({ slug: p.slug, name: p.card.name, role: p.card.role, image: p.card.image, position: p.card.position, alt: p.card.alt })),
];
