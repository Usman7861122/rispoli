// Order follows the practice's own team card. Photos: Pixieset gallery (temporary links).

export interface Provider {
  slug: string;
  name: string;
  role: string;        // short line under the name
  image: string;
  imageAlt: string;
  position: string;    // CSS object-position
  tags: string[];      // small chips on the photo
  href: string;        // inner page
  badge?: string;      // small label on the featured card (founder)
  bio?: string[];      // only the featured provider has a full bio
  focus?: string;      // one short line for the other providers
}

export const team = {
  eyebrow: 'Our team',
  title: 'The people behind your care.',
  accent: 'people',
  intro: 'Five providers, one plan. Each brings their own training, and every patient gets the full team behind them.',
  cta: { label: 'Meet the whole team', href: '/meet-the-team' },
  lead: [
    {
      slug: 'leia-rispoli',
      href: '/dr-rispoli',
      name: 'Leia Rispoli, MD',
      role: 'PM&R · Interventional Pain',
      image: '/images/team/rispoli.jpg',
      imageAlt: 'Dr. Leia Rispoli smiling in royal-blue scrubs',
      position: '50% 20%',
      tags: ['Double board-certified'],
      badge: 'Founder & Owner',
      bio: [
        'Dr. Rispoli is double board-certified in Physical Medicine & Rehabilitation and Interventional Pain Medicine. She specializes in non-surgical pain care with a patient-centered approach.',
        'She treats low back pain, neck pain, joint pain, pelvic pain and headaches, using minimally invasive, evidence-based treatments to help you move well again.',
      ],
    },
  ] as Provider[],
  peers: [
    {
      slug: 'natasha-mehta',
      href: '/dr-mehta',
      name: 'Natasha Mehta, MD',
      role: 'PM&R · Brain Injury Medicine',
      image: '/images/team/mehta.jpg',
      imageAlt: 'Dr. Natasha Mehta smiling in royal-blue scrubs',
      position: '50% 12%',
      tags: ['Double board-certified', 'Lifestyle Medicine'],
      focus: 'Rehabilitation and brain injury care that helps you function and feel like yourself again.',
    },
    {
      slug: 'jacob-hattenbach',
      href: '/dr-hattenbach',
      name: 'Jacob Hattenbach, DO',
      role: 'PM&R · Interventional Spine',
      image: '/images/team/hattenbach.jpg',
      imageAlt: 'Dr. Jacob Hattenbach in a white coat in front of a green hedge',
      position: '50% 22%',
      tags: ['Interventional spine'],
      focus: 'Physical medicine and rehabilitation with a focus on spine procedures.',
    },
    {
      slug: 'jamie-phan',
      href: '/jamie-phan',
      name: 'Jamie Phan, PA-C',
      role: 'Physician Assistant',
      image: '/images/team/phan.jpg',
      imageAlt: 'Jamie Phan, physician assistant, smiling in a white coat',
      position: '50% 25%',
      tags: ['Physician assistant'],
      focus: 'Plans and follows your care alongside your physicians, from first visit to follow-up.',
    },
    {
      slug: 'katrina-vlachos',
      href: '/dr-vlachos',
      name: 'Katrina Vlachos, MD',
      role: 'PM&R · EMG/NCS',
      image: '/images/team/vlachos.jpg',
      imageAlt: 'Dr. Katrina Vlachos smiling in a white coat',
      position: '50% 22%',
      tags: ['EMG / NCS'],
      focus: 'Nerve and muscle testing (EMG/NCS) to find the cause of your symptoms.',
    },
  ] as Provider[],
};
