// Order follows the practice's own team card. Photos: Pixieset gallery (temporary links).

export interface Provider {
  slug: string;
  name: string;
  role: string;        // short line under the name
  image: string;
  imageAlt: string;
  position: string;    // CSS object-position
  tags: string[];      // small chips on the photo
  bio?: string[];      // only the two lead providers have full bios on the old site
  focus?: string;      // one short line for the other providers
}

export const team = {
  eyebrow: 'Our team',
  title: 'The people behind your care.',
  accent: 'people',
  intro: 'Five specialists, one plan. Each provider brings their own training, and every patient gets the full team behind them.',
  cta: { label: 'Meet the whole team', href: '/meet-the-team' },
  lead: [
    {
      slug: 'leia-rispoli',
      name: 'Leia Rispoli, MD',
      role: 'PM&R · Interventional Pain',
      image: '/images/team/rispoli.jpg',
      imageAlt: 'Dr. Leia Rispoli smiling in royal-blue scrubs',
      position: '50% 20%',
      tags: ['Double board-certified'],
      bio: [
        'Dr. Rispoli is double board-certified in Physical Medicine & Rehabilitation and Interventional Pain Medicine. She specializes in non-surgical pain care with a patient-centered approach.',
        'She treats low back pain, neck pain, joint pain, pelvic pain and headaches, using minimally invasive, evidence-based treatments to help you move well again.',
      ],
    },
    {
      slug: 'natasha-mehta',
      name: 'Natasha Mehta, MD',
      role: 'PM&R · Brain Injury Medicine',
      image: '/images/team/mehta.jpg',
      imageAlt: 'Dr. Natasha Mehta smiling in royal-blue scrubs',
      position: '50% 12%',
      tags: ['Double board-certified', 'Lifestyle Medicine'],
      bio: [
        'Dr. Mehta is double board-certified in Physical Medicine & Rehabilitation and Brain Injury Medicine, with added certification in Lifestyle Medicine.',
        'She gives personalized, non-surgical care for spine pain, joint pain, muscle and bone pain, and neurologic injuries, working with you on your own goals.',
      ],
    },
  ] as Provider[],
  peers: [
    {
      slug: 'jacob-hattenbach',
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
      name: 'Jamie Phan, PA-C',
      role: 'Physician Assistant',
      image: '/images/team/phan.jpg',
      imageAlt: 'Jamie Phan, physician assistant, smiling in a white coat',
      position: '50% 25%',
      tags: ['Physician assistant'],
      focus: 'Part of the care team, helping plan and follow your treatment.',
    },
    {
      slug: 'katrina-vlachos',
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
